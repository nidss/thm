'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FloatingMenu } from './FloatingMenu';
import { StatusBar } from './StatusBar';
import { easeOutSoft } from './motion';
import { useNav } from './nav';
import { REGISTRY } from './registry';
import { screenMeta } from './screenList';
import { TABS, type TabKey } from './tabs';

/** map slug ของ 5 แท็บหลัก เข้ากับ key ของเมนูล่าง */
const TAB_BY_SLUG: Record<string, TabKey> = {
  dashboard: 'home',
  events: 'challenge',
  activity: 'activity',
  ranking: 'ranking',
  rewards: 'reward',
};

const SLUG_BY_TAB = Object.fromEntries(
  Object.entries(TAB_BY_SLUG).map(([slug, tab]) => [tab, slug]),
) as Record<TabKey, string>;

/** หน้าที่ยังไม่ได้ทำ จะขึ้นข้อความนี้แทนหน้าเปล่า */
function Placeholder({ title, node }: { title: string; node: string }) {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center gap-2 px-8 text-center">
      <p className="text-lg font-bold text-white">{title}</p>
      <p className="text-xs text-white/45">ยังไม่ได้ทำหน้านี้ (Figma node {node})</p>
    </div>
  );
}

export function PhoneFrame() {
  const { current, direction, go } = useNav();
  const scrollRef = useRef<HTMLDivElement>(null);

  const meta = screenMeta(current);
  const Screen = REGISTRY[current];
  const activeTab = TAB_BY_SLUG[current];

  // เปลี่ยนหน้าแล้วเลื่อนกลับขึ้นบนสุดเสมอ
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [current]);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -inset-16 -z-10 rounded-[60px] bg-[radial-gradient(60%_50%_at_50%_30%,rgba(111,255,232,0.22),transparent_70%),radial-gradient(45%_40%_at_70%_80%,rgba(92,88,255,0.28),transparent_70%)] blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOutSoft }}
        className="relative h-[780px] w-[360px] overflow-hidden rounded-[38px] border border-white/10 bg-ink shadow-[0_26px_60px_0_rgba(0,0,0,0.55)]"
      >
        <StatusBar />

        <div ref={scrollRef} className="no-scrollbar h-[736px] overflow-y-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -28 }}
              transition={{ duration: 0.32, ease: easeOutSoft }}
            >
              {Screen ? <Screen /> : <Placeholder title={meta.title} node={meta.node} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* เมนูลอยโผล่เฉพาะหน้าที่เป็น 1 ใน 5 แท็บหลัก */}
        <AnimatePresence>
          {activeTab ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.28, ease: easeOutSoft }}
            >
              <FloatingMenu
                active={activeTab}
                onChange={(tab) => go(SLUG_BY_TAB[tab] as Parameters<typeof go>[0])}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>

      <p className="pt-3 text-center text-[11px] text-white/30">
        {meta.title} · Figma {meta.node}
      </p>
    </div>
  );
}

export { TABS };
