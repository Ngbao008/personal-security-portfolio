export type SkillGroup = {
  group: string;
  items: { name: string; level?: 1 | 2 | 3 | 4 | 5 }[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: "Ngôn ngữ lập trình",
    items: [
      { name: "TODO: Python", level: 2 },
      { name: "TODO: JavaScript", level: 1 },
      { name: "TODO: Bash", level: 1 },
    ],
  },
  {
    group: "Công cụ bảo mật",
    items: [
      { name: "TODO: Wireshark", level: 1 },
      { name: "TODO: Burp Suite", level: 1 },
    ],
  },
  {
    group: "Hệ điều hành & Mạng",
    items: [
      { name: "TODO: Linux", level: 2 },
      { name: "TODO: TCP/IP", level: 2 },
    ],
  },
];

