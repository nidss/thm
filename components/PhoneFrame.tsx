'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FloatingMenu } from './FloatingMenu';
import { StatusBar } from './StatusBar';
import { easeOutSoft } from './motion';
import { TABS, type TabKey } from './tabs';
import { ActivityScreen } from './screens/ActivityScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { EventsScreen } from './screens/EventsScreen';
import { RankingScreen } from './screens/RankingScreen';
import { RewardsScreen } from './screens/RewardsScreen';

const SCREENS: Record<TabKey, () => React.JSX.Element> = {
  home: DashboardScreen,
  challenge: EventsScreen,
  activity: ActivityScreen,
  ranking: RankingScreen,
  reward: RewardsScreen,
};

/**
 * ตัวเครื่องจำลองขนาด 360x780 (อัตราส่วนเดียวกับ artboard ใน Figma)
 * เนื้อหาเลื่อนได้ภายในเครื่อง ส่วนเมนูลอยอยู่กับที่ด้านล่าง
 */
export function PhoneFrame() {
  const [tab, setTab] = useState<TabKey>('home');
  const scrollRef = useRef<HTMLDivElement>(null);
  // เก็บ index เดิมไว้เพื่อรู้ว่าจะสไลด์หน้าจอไปทางซ้ายหรือขวา
  const prevIndex = useRef(0);

  const index = TABS.findIndex((item) => item.key === tab);
  const direction = index >= prevIndex.current ? 1 : -1;

  const handleChange = (next: TabKey) => {
    if (next === tab) return;
    prevIndex.current = index;
    setTab(next);
    // เปลี่ยนแท็บแล้วเลื่อนกลับขึ้นบนสุดเสมอ
    scrollRef.current?.scrollTo({ top: 0 });
  };

  const Screen = SCREENS[tab];

  return (
    <div className="relative">
      {/* แสงออโรร่าด้านหลังเครื่อง */}
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -inset-16 -z-10 rounded-[60px] bg-[radial-gradient(60%_50%_at_50%_30%,rgba(111,255,232,0.22),transparent_70%),radial-gradient(45%_40%_at_70%_80%,rgba(92,88,255,0.28),transparent_70%)] blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: easeOutSoft }}
        className="relative h-[780px] w-[360px] overflow-hidden rounded-[38px] border border-white/10 bg-ink shadow-[0_26px_60px_0_rgba(0,0,0,0.55)]"
      >
        <StatusBar />

        <div ref={scrollRef} className="no-scrollbar h-[736px] overflow-y-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: direction * 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -28 }}
              transition={{ duration: 0.32, ease: easeOutSoft }}
            >
              <Screen />
            </motion.div>
          </AnimatePresence>
        </div>

        <FloatingMenu active={tab} onChange={handleChange} />
      </motion.div>
    </div>
  );
}
