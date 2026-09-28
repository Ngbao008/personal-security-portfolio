# Website cá nhân An toàn Thông tin

Website portfolio tĩnh xây dựng bằng Astro, Tailwind CSS và TypeScript. Nội dung được tách khỏi giao diện để bạn cập nhật thông tin mà không cần sửa nhiều mã nguồn.

## Chạy trên máy Windows

1. Cài Node.js LTS từ trang chính thức.
2. Mở PowerShell tại thư mục dự án.
3. Chạy `corepack enable` để bật pnpm đi kèm Node.js.
4. Chạy `pnpm install` để cài các thư viện đúng phiên bản trong lockfile.
5. Chạy `pnpm run dev` để mở website phát triển tại địa chỉ được PowerShell hiển thị.
6. Chạy `pnpm run build` để kiểm tra kiểu dữ liệu và tạo bản tĩnh trong thư mục `dist`.

Nếu Astro hỏi về telemetry trong môi trường bị giới hạn quyền ghi, chạy `$env:ASTRO_TELEMETRY_DISABLED = '1'` trước các lệnh Astro trong phiên PowerShell hiện tại.

## Cập nhật thông tin cá nhân

Thay các giá trị `TODO` trong các tệp sau:

- `src/data/site.ts`: tên, giới thiệu, trường, thành phố, định hướng và mạng xã hội. URL GitHub Pages được tạo tự động khi build trên GitHub.
- `src/data/timeline.ts`: các cột mốc.
- `src/data/skills.ts`: nhóm kỹ năng và mức từ 1 đến 5.
- `src/data/certs.ts`: chứng chỉ đã đạt hoặc đang học.
- `src/data/activities.ts`: cuộc thi, câu lạc bộ, sự kiện và hoạt động tình nguyện.
- `src/content/projects/*.md`: thông tin và nội dung project.
- `src/pages/contact.astro`: Web3Forms access key trước khi bật biểu mẫu.
- `public/og-default.svg`, `public/.well-known/security.txt`: thay thông tin công khai phù hợp sau khi deploy. `robots.txt` và sitemap được tạo tự động với đúng đường dẫn GitHub Pages.

Không đưa số điện thoại, địa chỉ nhà, ngày sinh đầy đủ, CCCD hay mã số sinh viên vào website. Khi thêm ảnh đại diện, hãy xóa EXIF/metadata trước và đặt ảnh ở `public/avatar.webp`. CV đặt tại `public/cv/cv.pdf`.

## Thêm project mới

1. Tạo tệp Markdown mới trong `src/content/projects/`, ví dụ `my-project.md`.
2. Sao chép frontmatter từ một tệp mẫu rồi thay `title`, `summary`, `date`, `tags`, `status` và nội dung.
3. Đặt `featured: true` nếu muốn xuất hiện ở trang chủ; đặt `draft: true` để ẩn trong bản build production.
4. Chạy `pnpm run build`, sau đó `git add .`, `git commit -m "feat: add my project"` và `git push`.

## Thêm mục Lab mới

- Tool JavaScript: tạo `src/lab-tools/<id>.ts` theo interface `LabTool`, đăng ký trong `src/lab-tools/index.ts`, rồi tạo `src/content/lab/<id>.md` với `mode: browser-js` và `toolId: <id>`.
- Tool Python: đặt tệp trong `public/lab/py/<id>.py`, bắt buộc có hàm `def run(input: str) -> str`, rồi tạo Markdown với `mode: browser-py` và `pyFile: /lab/py/<id>.py`.
- Nhúng ngoài: dùng `mode: embed` và `embedUrl` là URL HTTPS của nguồn tin cậy. Iframe luôn có sandbox và không gửi referrer.
- Chỉ xem: dùng `mode: view-only`, đưa mã vào code block Markdown và, nếu có tệp gốc, đặt `downloadUrl` là đường dẫn bắt đầu bằng `/lab/`.

Không thêm tool tấn công dùng được ngay trên hệ thống thật. Ưu tiên ví dụ giáo dục, chỉ xem mã hoặc sandbox bên thứ ba. Output của các tool hiện có luôn được đưa vào trang dưới dạng văn bản, không chèn HTML.

## Deploy lên GitHub Pages

Workflow `.github/workflows/deploy.yml` đã sẵn sàng. Sau khi đưa mã lên GitHub:

1. Mở **Settings** → **Pages** của repository và chọn **GitHub Actions** làm nguồn publish.
2. Mỗi lần push lên nhánh `main`, GitHub sẽ tự kiểm tra, build và deploy website.
3. Với repository thông thường, website có địa chỉ `https://<tài-khoản>.github.io/<tên-repository>/`.
4. Nếu muốn dùng địa chỉ gốc `https://<tài-khoản>.github.io/`, hãy đặt tên repository đúng là `<tài-khoản>.github.io`. Cấu hình hiện tại tự xử lý cả hai trường hợp.

Khi site đã công khai, cập nhật `public/.well-known/security.txt` với địa chỉ liên hệ thực tế. Không thêm `CNAME` trừ khi bạn muốn dùng tên miền riêng.

## Bảo mật và kiểm tra sau deploy

- `public/_headers` chỉ có hiệu lực khi deploy qua Cloudflare Pages; GitHub Pages không áp dụng tệp này. CSP cho phép script inline vì Astro tạo script tương tác dạng inline; phần `/lab/*` được nới quyền riêng cho Pyodide ở giai đoạn Lab.
- Không commit `.env`, token, mật khẩu hay dữ liệu nhạy cảm. Tệp `.env` đã nằm trong `.gitignore`.
- Chạy `pnpm audit` định kỳ.
- Sau deploy, mở DevTools Console để tìm lỗi CSP; kiểm tra bằng securityheaders.com và Mozilla Observatory.
- Mục tiêu là HTTPS và điểm A/A+; hãy sửa các URL `TODO` trước khi đánh giá công khai.

