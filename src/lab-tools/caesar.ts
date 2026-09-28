import type { LabTool } from "./types";

function rotateCharacter(character: string, amount: number): string {
  const code = character.charCodeAt(0);
  const start = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
  if (!start) return character;
  return String.fromCharCode(((code - start + amount + 26) % 26) + start);
}

export const caesar: LabTool = {
  id: "caesar",
  options: [
    { key: "shift", label: "Độ dịch", type: "number", default: 3 },
    { key: "mode", label: "Chế độ", type: "select", default: "encode", choices: ["encode", "decode"] },
  ],
  run(input, options) {
    const shift = Number(options?.shift ?? 3);
    if (!Number.isInteger(shift)) throw new Error("Độ dịch phải là số nguyên.");
    const amount = options?.mode === "decode" ? -shift : shift;
    return [...input].map((character) => rotateCharacter(character, amount)).join("");
  },
};

