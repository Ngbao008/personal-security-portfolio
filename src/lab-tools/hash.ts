import type { LabTool } from "./types";

export const hash: LabTool = {
  id: "hash",
  options: [
    { key: "algorithm", label: "Thuật toán", type: "select", default: "SHA-256", choices: ["SHA-1", "SHA-256", "SHA-512"] },
  ],
  async run(input, options) {
    const algorithm = options?.algorithm ?? "SHA-256";
    const digest = await crypto.subtle.digest(algorithm, new TextEncoder().encode(input));
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  },
};

