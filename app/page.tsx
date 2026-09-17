import { PhoneFrame } from '@/components/PhoneFrame';
import { ScreenIndex } from '@/components/ScreenIndex';
import { NavProvider } from '@/components/nav';

/**
 * หน้า public หน้าเดียวของโปรเจกต์
 * ไม่มีการล็อกอินหรือตรวจสิทธิ์ใด ๆ ใครเปิดลิงก์ก็ดูได้ทันที
 */
export default function Page() {
  return (
    <NavProvider>
      <main className="relative flex min-h-dvh flex-col items-center overflow-hidden px-4 py-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(120%_80%_at_50%_0%,#101418_0%,#050505_60%)]"
        />

        <div className="phone-stage">
          <PhoneFrame />
        </div>

        <div className="mt-14 w-full">
          <ScreenIndex />
        </div>

        <footer className="mt-12 text-center text-[11px] leading-relaxed text-white/30">
          ข้อมูลทั้งหมดในหน้านี้เป็นข้อมูลตัวอย่างสำหรับงานออกแบบเท่านั้น
        </footer>
      </main>
    </NavProvider>
  );
}
