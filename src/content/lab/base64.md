---
title: "Base64, Hex & URL"
summary: "Chuyển đổi chuỗi Unicode giữa Base64, Hex và URL encoding ngay trên thiết bị."
date: 2026-09-19
tags: ["encoding", "learning"]
mode: browser-js
language: typescript
toolId: base64
draft: false
---

## Cách dùng

Chọn định dạng và thao tác encode hoặc decode. Encoding không phải encryption: Base64 và Hex không bảo mật dữ liệu.

## Mã nguồn

```ts
const encoder = new TextEncoder();
const decoder = new TextDecoder();

function bytesToBase64(bytes: Uint8Array): string {
  return btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join(""));
}

function base64ToBytes(value: string): Uint8Array {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function hexToBytes(value: string): Uint8Array {
  if (!/^(?:[0-9a-fA-F]{2})*$/.test(value)) throw new Error("Invalid hex");
  return Uint8Array.from(value.match(/.{1,2}/g) ?? [], (pair) => Number.parseInt(pair, 16));
}
```

