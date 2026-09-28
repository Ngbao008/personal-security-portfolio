import type { LabTool } from "./types";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function bytesToBase64(bytes: Uint8Array): string {
  return btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join(""));
}

function base64ToBytes(value: string): Uint8Array {
  const binary = atob(value);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function hexToBytes(value: string): Uint8Array {
  if (!/^(?:[0-9a-fA-F]{2})*$/.test(value)) throw new Error("Hex phải có số ký tự chẵn và chỉ dùng 0-9, a-f.");
  return Uint8Array.from(value.match(/.{1,2}/g) ?? [], (pair) => Number.parseInt(pair, 16));
}

export const base64: LabTool = {
  id: "base64",
  options: [
    { key: "format", label: "Định dạng", type: "select", default: "base64", choices: ["base64", "hex", "url"] },
    { key: "mode", label: "Chế độ", type: "select", default: "encode", choices: ["encode", "decode"] },
  ],
  run(input, options) {
    const format = options?.format ?? "base64";
    const mode = options?.mode ?? "encode";
    if (format === "url") return mode === "encode" ? encodeURIComponent(input) : decodeURIComponent(input);
    if (format === "hex") return mode === "encode" ? bytesToHex(encoder.encode(input)) : decoder.decode(hexToBytes(input));
    return mode === "encode" ? bytesToBase64(encoder.encode(input)) : decoder.decode(base64ToBytes(input));
  },
};

