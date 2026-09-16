'use client';

import { motion } from 'framer-motion';
import { useNav } from './nav';
import { REGISTRY } from './registry';
import { SCREENS, SECTIONS, type ScreenSlug } from './screenList';

/**
 * สารบัญหน้าจอทั้งหมด จัดกลุ่มตาม section เดียวกับใน Figma
 * กดชื่อหน้าเพื่อกระโดดไปดูหน้านั้นในเครื่องจำลองด้านบนได้เลย
 */
export function ScreenIndex() {
  const { current, go } = useNav();

  return (
    <section className="mx-auto w-full max-w-3xl">
      <h2 className="mb-1 text-center text-sm font-bold text-white/70">
        หน้าจอทั้งหมด {SCREENS.length} หน้า
      </h2>
      <p className="mb-6 text-center text-[11px] text-white/35">
        กดเพื่อเปิดดูหน้านั้นในเครื่องด้านบน
      </p>

      <div className="flex flex-col gap-5">
        {SECTIONS.map((section) => {
          const items = SCREENS.filter((s) => s.section === section.key);
          return (
            <div key={section.key}>
              <h3 className="mb-2 text-[11px] font-semibold tracking-wide text-primary/80">
                {section.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => {
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
