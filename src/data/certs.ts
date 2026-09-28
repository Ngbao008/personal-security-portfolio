export type Cert = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
  status: "earned" | "in-progress";
};

export const certs: Cert[] = [
  {
    name: "TODO: Tên chứng chỉ đã đạt",
    issuer: "TODO: Đơn vị cấp",
    date: "TODO: MM/YYYY",
    status: "earned",
  },
  {
    name: "TODO: Tên chứng chỉ đang học",
    issuer: "TODO: Đơn vị đào tạo",
    date: "TODO: dự kiến MM/YYYY",
    status: "in-progress",
  },
  {
    name: "TODO: Tên chứng chỉ khác",
    issuer: "TODO: Đơn vị cấp",
    date: "TODO: MM/YYYY",
    status: "earned",
  },
];

