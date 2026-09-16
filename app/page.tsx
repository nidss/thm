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

        <header className="mb-10 flex max-w-xl flex-col items-center text-center">
          <span className="mb-4 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold tracking-[1.2px] text-primary">
            THAIMOVE · UI PREVIEW
          </span>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ขยับวันนี้ ได้แต้มพรุ่งนี้
          </h1>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-white/55">
            ตัวอย่างหน้าจอแอป ThaiMove ที่ทำจากดีไซน์ใน Figma ครบทุกหน้าของ flow
            กดปุ่มในเครื่องเพื่อเดินตาม flow หรือเลือกจากสารบัญด้านล่าง
          </p>
        </header>

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
