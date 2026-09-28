---
title: "Caesar Cipher"
summary: "Mã hóa hoặc giải mã Caesar cơ bản, chỉ thay đổi chữ cái Latin trong trình duyệt."
date: 2026-09-20
tags: ["crypto", "learning"]
mode: browser-js
language: typescript
toolId: caesar
draft: false
---

## Cách dùng

Nhập văn bản, chọn độ dịch và chế độ. Đây là ví dụ học thuật về mã thay thế đơn giản, không phải phương thức bảo vệ dữ liệu hiện đại.

## Mã nguồn

```ts
function rotateCharacter(character: string, amount: number): string {
  const code = character.charCodeAt(0);
  const start = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
  if (!start) return character;
  return String.fromCharCode(((code - start + amount + 26) % 26) + start);
}

function run(input: string, shift: number, mode: "encode" | "decode"): string {
  const amount = mode === "decode" ? -shift : shift;
  return [...input].map((character) => rotateCharacter(character, amount)).join("");
}
```

