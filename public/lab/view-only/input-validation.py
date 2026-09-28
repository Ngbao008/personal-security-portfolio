import re


def validate_username(value: str) -> bool:
    """Ví dụ chỉ xem: chấp nhận tên gồm 3-32 ký tự chữ, số hoặc gạch dưới."""
    return bool(re.fullmatch(r"[A-Za-z0-9_]{3,32}", value))

