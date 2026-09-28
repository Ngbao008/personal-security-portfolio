---
title: "JWT Decoder"
summary: "Đọc header và payload của JWT tại chỗ, không gửi token đi đâu."
date: 2026-09-17
tags: ["jwt", "web"]
mode: browser-js
language: typescript
toolId: jwt
warning: "Tool chỉ decode. Nó KHÔNG xác minh chữ ký, thời hạn hoặc độ tin cậy của JWT."
draft: false
---

## Cách dùng

Dán JWT đầy đủ gồm ba phần được phân cách bằng dấu chấm. Nội dung hiển thị không chứng minh token hợp lệ hay an toàn.

## Mã nguồn

```ts
function decodePart(part: string): unknown {
  const value = part.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(value.padEnd(Math.ceil(value.length / 4) * 4, "="));
  return JSON.parse(new TextDecoder().decode(Uint8Array.from(binary, (item) => item.charCodeAt(0))));
}

function run(input: string): string {
  const [header, payload] = input.trim().split(".");
  if (!header || !payload) throw new Error("JWT is incomplete");
  return JSON.stringify({ header: decodePart(header), payload: decodePart(payload) }, null, 2);
}
```

