import type { Metadata, Viewport } from 'next';
import { Anuphan } from 'next/font/google';
import './globals.css';

// ฟอนต์ Anuphan ตามที่ระบุไว้ใน Figma (Body/Small, Body/Medium, Body/Large)
const anuphan = Anuphan({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-anuphan-loaded',
});

export const metadata: Metadata = {
  title: 'ThaiMove — ขยับวันนี้ ได้แต้มพรุ่งนี้',
  description:
    'ตัวอย่างหน้าจอแอป ThaiMove สะสมแต้มจากการเดิน วิ่ง และปั่น แลกของรางวัลและลุ้นรางวัลใหญ่',
};

export const viewport: Viewport = {
  themeColor: '#090909',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={anuphan.variable}>
      <body className="font-anuphan antialiased">{children}</body>
    </html>
  );
}
