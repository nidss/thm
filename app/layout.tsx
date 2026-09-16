import type { Metadata, Viewport } from 'next';
import { Anton, Anuphan } from 'next/font/google';
import './globals.css';

// ฟอนต์ Anuphan ตามที่ระบุไว้ใน Figma (Body/Small, Body/Medium, Body/Large)
const anuphan = Anuphan({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-anuphan-loaded',
});

// ฟอนต์หัวข้อแบบ condensed หนา ๆ ใช้แทน "Frick 0.3 Condensed" ในดีไซน์
// (ฟอนต์ต้นฉบับเป็นฟอนต์เชิงพาณิชย์ จึงใช้ Anton ที่หน้าตาใกล้เคียงแทน)
const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display-loaded',
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
    <html lang="th" className={`${anuphan.variable} ${anton.variable}`}>
      <body className="font-anuphan antialiased">{children}</body>
    </html>
  );
}
