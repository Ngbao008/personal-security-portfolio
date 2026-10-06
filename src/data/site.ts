import { githubPagesUrl } from "../utils/github-pages";

export const site = {
  name: "Nguyễn Gia Bảo",
  handle: "gbaoo",
  title: "Sinh viên An toàn Thông tin",
  tagline: "TODO: một câu giới thiệu ngắn",
  bio: "Hiện tại tôi là sinh viên chuyên ngành An toàn Thông tin, định hướng của tôi là làm ở lĩnh vực SOC Analyst.",
  university: "Trường Đại học Nam Cần Thơ - Nam Can Tho University",
  location: "Tp. Cần Thơ, Việt Nam",
  careerFocus: ["SOC Analyst", "Threat Hunting và Threat Intelligence"],
  avatar: "/avatar.webp",
  cvUrl: "/cv/cv.pdf",
  social: {
    github: "https://github.com/Ngbao008",
    linkedin: "TODO",
    tryhackme: "TODO",
    hackthebox: "TODO",
    email: "nguyengiabao31108@gmail.com",
  },
  // GitHub Actions fills this automatically during a Pages deployment.
  // For other hosts, replace the fallback with the public site URL.
  url: githubPagesUrl ?? "https://ngbao008.github.io/personal-security-portfolio/",
};

