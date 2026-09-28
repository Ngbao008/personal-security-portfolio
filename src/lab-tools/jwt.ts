import type { LabTool } from "./types";

function decodePart(part: string): unknown {
  const normalized = part.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(part.length / 4) * 4, "=");
  return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(normalized), (character) => character.charCodeAt(0))));
}

export const jwt: LabTool = {
  id: "jwt",
  run(input) {
    const [header, payload] = input.trim().split(".");
    if (!header || !payload) throw new Error("JWT phải có ít nhất ba phần được ngăn cách bằng dấu chấm.");
    return JSON.stringify({ header: decodePart(header), payload: decodePart(payload) }, null, 2);
  },
};

