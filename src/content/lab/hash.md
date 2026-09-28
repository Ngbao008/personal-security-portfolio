---
title: "Hash Generator"
summary: "Tính SHA-1, SHA-256 hoặc SHA-512 bằng Web Crypto API trong trình duyệt."
date: 2026-09-18
tags: ["hash", "web-crypto"]
mode: browser-js
language: typescript
toolId: hash
warning: "SHA-1 chỉ có mục đích minh họa; không dùng SHA-1 cho thiết kế bảo mật mới."
draft: false
---

## Cách dùng

Hash được tính cục bộ bằng `crypto.subtle.digest`. Nội dung bạn nhập không được gửi đến máy chủ của website.

## Mã nguồn

```ts
async function run(input: string, algorithm: AlgorithmIdentifier): Promise<string> {
  const digest = await crypto.subtle.digest(algorithm, new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest), (byte) =>
  byte.toString(16).padStart(2, "0"),
  ).join("");
}
```

