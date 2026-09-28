---
title: "Input Validation (chỉ xem)"
summary: "Ví dụ Python an toàn về xác thực username; chỉ xem, copy hoặc tải mã về máy."
date: 2026-09-13
tags: ["python", "validation"]
mode: view-only
language: python
downloadUrl: /lab/view-only/input-validation.py
warning: "Ví dụ phục vụ học tập. Hãy điều chỉnh quy tắc validation theo yêu cầu thật của ứng dụng."
draft: false
---

## Cách dùng

Mã này không chạy trên website. Bạn có thể copy hoặc tải về để xem và chạy trong môi trường phát triển của mình.

## Mã nguồn

```python
import re

def validate_username(value: str) -> bool:
    return bool(re.fullmatch(r"[A-Za-z0-9_]{3,32}", value))
```

