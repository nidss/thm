'use client';

import { motion } from 'framer-motion';
import { springSoft } from './motion';
import { TABS, type TabKey } from './tabs';

/**
 * เมนูลอยด้านล่าง — อ้างอิง component "menu-light" (281:2105) ใน Figma
 * พื้นหลังโปร่ง rgba(255,255,255,0.1) มุมโค้ง 20 padding 16
 * และมีหยดสีฟ้า (Polygon) โผล่ที่ขอบล่างใต้แท็บที่กำลังเลือกอยู่
 */
export function FloatingMenu({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (key: TabKey) => void;
}) {
  return (
    <nav
      aria-label="เมนูหลัก"
      className="pointer-events-auto absolute bottom-5 left-1/2 w-[328px] -translate-x-1/2 overflow-hidden rounded-[20px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
    >
      {/* แสงเรือง ๆ ด้านหลังเมนู ให้ดูลอยเหนือเนื้อหา */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />

      <div className="relative flex items-center justify-between">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.key === active;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              aria-current={isActive ? 'page' : undefined}
              className="relative flex w-7 flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <motion.span
                className={`block ${isActive ? 'text-primary' : 'text-white'}`}
                animate={{
                  scale: isActive ? 1.12 : 1,
                  y: isActive ? -1 : 0,
                }}
                whileTap={{ scale: 0.88 }}
                transition={springSoft}
              >
                <Icon className="h-6 w-6" />
              </motion.span>

              <span
                className={`mt-px whitespace-nowrap text-[8px] leading-none transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-white'
                }`}
              >
                {tab.label}
              </span>

              {/* หยดสีที่เลื่อนตามแท็บ — layoutId ทำให้ framer-motion สไลด์ให้เอง */}
              {isActive && (
                <motion.span
                  layoutId="thm-menu-indicator"
                  transition={springSoft}
                  className="pointer-events-none absolute -bottom-[27px] left-1/2 h-[23px] w-[30px] -translate-x-1/2"
                >
                  {/* สามเหลี่ยมชี้ลง ตรงกับ Polygon ใน Figma (281:2147) */}
                  <span
                    className="absolute inset-0 bg-primary"
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}
                  />
                  <span className="absolute -inset-x-3 -top-3 h-10 rounded-full bg-primary/35 blur-lg" />
                </motion.span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
