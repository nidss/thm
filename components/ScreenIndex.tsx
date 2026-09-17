'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IconChevronRight } from './icons';
import { useNav } from './nav';
import { REGISTRY } from './registry';
import { SCREENS, SECTIONS, type ScreenSlug, type SectionKey } from './screenList';

/** จับหน้าจอเข้ากลุ่มไว้ล่วงหน้า จะได้ไม่ต้อง filter ใหม่ทุกครั้งที่ re-render */
const ITEMS_BY_SECTION = SECTIONS.map((section) => ({
  ...section,
  items: SCREENS.filter((s) => s.section === section.key),
}));

/** หา section ของหน้าจอที่กำลังเปิดอยู่ ใช้ตอนกางกลุ่มนั้นให้อัตโนมัติ */
function sectionOf(slug: string): SectionKey | undefined {
  return SCREENS.find((s) => s.slug === slug)?.section as SectionKey | undefined;
}

/**
 * สารบัญหน้าจอทั้งหมด จัดกลุ่มตาม section เดียวกับใน Figma
 * กดชื่อหน้าเพื่อกระโดดไปดูหน้านั้นในเครื่องจำลองได้เลย
 *
 * ตั้งแต่จอ lg ขึ้นไปสารบัญจะไปอยู่ข้างเครื่องทางขวา และเลื่อนในกล่องตัวเอง
 * เครื่องจำลองจึงอยู่กับที่ ไม่ต้องเลื่อนจอขึ้นลงสลับไปมา
 */
export function ScreenIndex() {
  const { current, go } = useNav();
  const activeRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  // เปิดค้างไว้เฉพาะกลุ่มของหน้าที่กำลังดูอยู่ ที่เหลือพับเก็บ
  const [open, setOpen] = useState<Partial<Record<SectionKey, boolean>>>(() => {
    const key = sectionOf(current);
    return key ? { [key]: true } : {};
  });

  // เปลี่ยนหน้าจากในเครื่องจำลอง ให้กางกลุ่มของหน้านั้นตามไปด้วย
  useEffect(() => {
    const key = sectionOf(current);
    if (key) setOpen((prev) => (prev[key] ? prev : { ...prev, [key]: true }));

    // ข้ามรอบแรก ไม่งั้นพอโหลดหน้าเสร็จจอจะกระโดดเอง
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    // block: 'nearest' เลื่อนเท่าที่จำเป็น ถ้าเห็นอยู่แล้วจะไม่ขยับเลย
    activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [current]);

  const openCount = SECTIONS.filter((s) => open[s.key]).length;
  const allOpen = openCount === SECTIONS.length;

  const toggleAll = () => {
    if (allOpen) {
      setOpen({});
      return;
    }
    setOpen(Object.fromEntries(SECTIONS.map((s) => [s.key, true])));
  };

  return (
    <section className="mx-auto w-full max-w-3xl lg:mx-0 lg:max-w-none">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-sm font-bold text-white/70">หน้าจอทั้งหมด {SCREENS.length} หน้า</h2>
          <p className="text-[11px] text-white/35">กดเพื่อเปิดดูหน้านั้นในเครื่องจำลอง</p>
        </div>
        <button
          type="button"
          onClick={toggleAll}
          className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55 transition-colors hover:border-primary/40 hover:text-white"
        >
          {allOpen ? 'ยุบทั้งหมด' : 'กางทั้งหมด'}
        </button>
      </div>

      {/*
       * กล่องนี้เลื่อนในตัวเองตั้งแต่จอ lg ขึ้นไป ความสูงเท่าเครื่องจำลองพอดี
       * จอเล็กกว่านั้นปล่อยให้ยาวไปตามเนื้อหาเหมือนเดิม
       */}
      <div className="flex flex-col gap-1.5 lg:max-h-[780px] lg:overflow-y-auto lg:pr-1">
        {ITEMS_BY_SECTION.map((section) => {
          const isOpen = Boolean(open[section.key]);
          const hasCurrent = section.items.some((s) => s.slug === current);

          return (
            <div
              key={section.key}
              ref={hasCurrent ? activeRef : undefined}
              className={`shrink-0 overflow-hidden rounded-[14px] border transition-colors ${
                hasCurrent ? 'border-primary/30 bg-primary/[0.04]' : 'border-white/[0.07] bg-white/[0.02]'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen((prev) => ({ ...prev, [section.key]: !prev[section.key] }))}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-2 px-3 py-2.5 text-left transition-colors hover:bg-white/[0.03]"
              >
                <motion.span
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-white/40"
                >
                  <IconChevronRight className="size-4" />
                </motion.span>
                <span
                  className={`min-w-0 flex-1 truncate text-[11.5px] font-semibold ${
                    hasCurrent ? 'text-primary' : 'text-white/70'
                  }`}
                >
                  {section.title}
                </span>
                <span className="shrink-0 text-[10.5px] tabular-nums text-white/30">
                  {section.items.length}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-1.5 px-3 pb-3 pt-0.5">
                      {section.items.map((s) => {
                        const done = Boolean(REGISTRY[s.slug as ScreenSlug]);
                        const active = s.slug === current;
                        return (
                          <motion.button
                            key={s.slug}
                            type="button"
                            whileTap={{ scale: 0.95 }}
                            onClick={() => go(s.slug as ScreenSlug)}
                            className={`rounded-full border px-3 py-1.5 text-[11px] transition-colors ${
                              active
                                ? 'border-primary bg-primary text-ink'
                                : done
                                  ? 'border-white/10 bg-white/5 text-white/70 hover:border-primary/40 hover:text-white'
                                  : 'border-dashed border-white/10 bg-transparent text-white/25'
                            }`}
                            title={`Figma ${s.node}`}
                          >
                            {s.title}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
