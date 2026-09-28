---
title: "Password Strength"
summary: "Kiểm tra cơ bản về độ dài và tổ hợp ký tự của mật khẩu, hoàn toàn cục bộ."
date: 2026-09-16
tags: ["password", "privacy"]
mode: browser-js
language: typescript
toolId: password-strength
warning: "Mật khẩu không được gửi đi đâu. Kết quả chỉ là hướng dẫn cơ bản, không thay thế password manager hoặc chính sách tổ chức."
draft: false
---

## Cách dùng

Tool tính điểm dựa trên độ dài, chữ hoa/thường, chữ số và ký tự đặc biệt. Không lưu hoặc hiển thị lại mật khẩu trong output.

## Mã nguồn

```ts
function run(input: string): number {
  const checks = [
    input.length >= 12,
    /[a-z]/.test(input) && /[A-Z]/.test(input),
    /\d/.test(input),
    /[^\w\s]/.test(input),
  ];
  return checks.filter(Boolean).length;
}
```

