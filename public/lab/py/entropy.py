from collections import Counter
from math import log2


def run(input: str) -> str:
    if not input:
        return "Hãy nhập một chuỗi để tính entropy."

    counts = Counter(input)
    length = len(input)
    entropy = -sum((count / length) * log2(count / length) for count in counts.values())
    return f"Entropy Shannon: {entropy:.3f} bit/ký tự\nĐộ dài: {length}\nKý tự khác nhau: {len(counts)}"

