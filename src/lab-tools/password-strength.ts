import type { LabTool } from "./types";

export const passwordStrength: LabTool = {
  id: "password-strength",
  run(input) {
    const checks = [
      { passed: input.length >= 12, label: "ít nhất 12 ký tự" },
      { passed: /[a-z]/.test(input) && /[A-Z]/.test(input), label: "có chữ hoa và chữ thường" },
      { passed: /\d/.test(input), label: "có chữ số" },
      { passed: /[^\w\s]/.test(input), label: "có ký tự đặc biệt" },
    ];
    const score = checks.filter((check) => check.passed).length;
    const label = ["Rất yếu", "Yếu", "Trung bình", "Mạnh", "Rất mạnh"][score];
    const missing = checks.filter((check) => !check.passed).map((check) => check.label);
    return `Điểm: ${score}/4 — ${label}\n${missing.length ? `Cần cải thiện: ${missing.join(", ")}.` : "Đã đạt các kiểm tra cơ bản."}`;
  },
};

