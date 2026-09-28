type PyodideApi = {
  globals: { set(name: string, value: unknown): void; delete(name: string): void };
  runPythonAsync(code: string): Promise<unknown>;
};

let pyodidePromise: Promise<PyodideApi> | undefined;
const pyodideModuleUrl = "https://cdn.jsdelivr.net/pyodide/v0.29.3/full/pyodide.mjs";

function getPyodide(): Promise<PyodideApi> {
  if (!pyodidePromise) {
    self.postMessage({ type: "loading" });
    pyodidePromise = import(/* @vite-ignore */ pyodideModuleUrl)
      .then((module: { loadPyodide: (options: { indexURL: string }) => Promise<PyodideApi> }) => module.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.29.3/full/",
      }));
  }
  return pyodidePromise;
}

self.addEventListener("message", async (event: MessageEvent<{ code: string; input: string }>) => {
  try {
    const pyodide = await getPyodide();
    pyodide.globals.set("user_input", event.data.input);
    await pyodide.runPythonAsync(event.data.code);
    const result = await pyodide.runPythonAsync("str(run(user_input))");
    pyodide.globals.delete("user_input");
    self.postMessage({ type: "result", output: String(result) });
  } catch (error) {
    self.postMessage({ type: "error", message: error instanceof Error ? error.message : "Không thể chạy mã Python." });
  }
});

