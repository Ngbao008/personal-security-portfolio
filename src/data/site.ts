import { githubPagesUrl } from "../utils/github-pages";

export const site = {
  name: "TODO: Họ và tên",
  handle: "TODO: nickname",
  title: "TODO: Sinh viên An toàn Thông tin",
  tagline: "TODO: một câu giới thiệu ngắn",
  bio: "TODO: Viết 3-5 câu giới thiệu về bạn, lĩnh vực đang học và điều bạn muốn theo đuổi.",
  university: "TODO: tên trường",
  location: "TODO: Thành phố, Việt Nam",
  careerFocus: ["TODO: SOC", "TODO: Pentest"],
  avatar: "/avatar.webp",
  cvUrl: "/cv/cv.pdf",
  social: {
    github: "TODO",
    linkedin: "TODO",
    tryhackme: "TODO",
    hackthebox: "TODO",
    email: "TODO",
  },
  // GitHub Actions fills this automatically during a Pages deployment.
  // For other hosts, replace the fallback with the public site URL.
  url: githubPagesUrl ?? "https://TODO.github.io",
};

