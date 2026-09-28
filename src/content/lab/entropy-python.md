---
title: "String Entropy (Python)"
summary: "Tính entropy Shannon của chuỗi bằng Python/Pyodide trong Web Worker."
date: 2026-09-15
tags: ["python", "entropy"]
mode: browser-py
language: python
pyFile: /lab/py/entropy.py
warning: "Pyodide chỉ được tải khi mở và chạy tool này. Mỗi lần chạy có giới hạn 10 giây."
draft: false
---

## Cách dùng

Nhập một chuỗi. Python chạy trong Web Worker của trình duyệt, không chạy tại server. Entropy chỉ là một chỉ số; không tự nó quyết định mức độ an toàn của mật khẩu.

## Mã nguồn

```python
from collections import Counter
from math import log2

def run(input: str) -> str:
    counts = Counter(input)
    length = len(input)
    entropy = -sum((count / length) * log2(count / length) for count in counts.values())
    return f"Entropy Shannon: {entropy:.3f} bit/ký tự"
```

