/**
 * ตั้งค่า Next.js สำหรับ deploy เป็น static site ขึ้น GitHub Pages
 * - output: 'export' เพื่อ build ออกมาเป็นไฟล์ static ล้วน ๆ
 * - basePath / assetPrefix ถูกส่งมาจาก GitHub Actions (NEXT_PUBLIC_BASE_PATH)
 *   เวลารันในเครื่องจะเป็นค่าว่าง ทำให้เปิดที่ localhost:3000 ได้ตามปกติ
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
