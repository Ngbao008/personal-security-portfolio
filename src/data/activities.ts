export type Activity = {
  title: string;
  role?: string;
  org?: string;
  date: string;
  kind: "competition" | "club" | "event" | "volunteer";
  result?: string;
  description?: string;
  link?: string;
};

export const activities: Activity[] = [
  {
    title: "TODO: Cuộc thi hoặc CTF đầu tiên",
    role: "TODO: Thành viên",
    org: "TODO: Đơn vị tổ chức",
    date: "TODO: 2026",
    kind: "competition",
    result: "TODO: Kết quả (nếu có)",
    description: "TODO: Mô tả ngắn về nội dung hoặc bài học rút ra.",
  },
  {
    title: "TODO: Hoạt động câu lạc bộ",
    role: "TODO: Vai trò",
    org: "TODO: Tên câu lạc bộ",
    date: "TODO: 2025",
    kind: "club",
    description: "TODO: Mô tả ngắn về đóng góp của bạn.",
  },
  {
    title: "TODO: Sự kiện công nghệ",
    org: "TODO: Đơn vị tổ chức",
    date: "TODO: 2025",
    kind: "event",
    description: "TODO: Mô tả ngắn về sự kiện.",
  },
];

