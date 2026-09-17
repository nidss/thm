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
      {/*
        * ใช้ overflow-x-clip แทน overflow-hidden เพราะ clip ไม่สร้าง scroll container
        * ถ้าใช้ overflow-hidden ตัว sticky ของเครื่องจำลองจะไม่ทำงาน
        */}
      <main className="relative flex min-h-dvh flex-col items-center overflow-x-clip px-4 py-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(120%_80%_at_50%_0%,#101418_0%,#050505_60%)]"
        />

        {/* จอแคบวางซ้อนกันเหมือนเดิม ตั้งแต่ lg ขึ้นไปแยกเป็นสองคอลัมน์ เครื่องซ้าย สารบัญขวา */}
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-14 lg:flex-row lg:items-start lg:justify-center lg:gap-12">
          <div className="shrink-0 lg:sticky lg:top-8">
            <div className="phone-stage">
              <PhoneFrame />
            </div>
          </div>

          <div className="w-full lg:min-w-0 lg:flex-1 lg:pt-1">
            <ScreenIndex />
          </div>
        </div>

        <footer className="mt-12 text-center text-[11px] leading-relaxed text-white/30">
          ข้อมูลทั้งหมดในหน้านี้เป็นข้อมูลตัวอย่างสำหรับงานออกแบบเท่านั้น
        </footer>
      </main>
    </NavProvider>
  );
}
