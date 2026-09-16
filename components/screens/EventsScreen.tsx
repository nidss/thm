'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { GradientBlock, GRADIENTS, Img } from '../Surface';
import { IconUsers } from '../icons';
import { CountUp, listStagger, popCard, ProgressBar, riseItem, springSoft } from '../motion';

const FILTERS = ['กำลังแข่ง', 'เปิดรับสมัคร', 'ในคลับ'];

/** ตารางอันดับคลับใน Club Battle */
const CLUB_BATTLE = [
  { rank: 1, name: 'เชียงใหม่ ไตรกีฬา', value: '18.9 กม./คน', gradient: 'navy', mine: false },
  { rank: 2, name: 'ภูเก็ต ซันเซ็ตรัน', value: '17.2 กม./คน', gradient: 'brown', mine: false },
  { rank: 4, name: 'บางกอก รันเนอร์ส', value: '15.6 กม./คน', gradient: 'green', mine: true },
] as const;

/** หน้าชาเลนจ์ — Figma node 205:2 (Events) */
export function EventsScreen() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <motion.div
      variants={listStagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 pb-32"
    >
      <motion.header variants={riseItem} className="px-5 pb-[14px]">
        <h1 className="text-[28px] font-bold tracking-[-0.8px] text-white">อีเวนต์</h1>
        <p className="pt-px text-[11.5px] text-white">แข่งกันสนุก ๆ ทั้งเดี่ยวและทีมคลับ</p>
      </motion.header>

      {/* แถบตัวกรอง — ขีดใต้เลื่อนตามปุ่มที่เลือก */}
      <motion.nav
        variants={riseItem}
        className="flex items-center gap-4 border-b border-white/[0.09] px-5 pb-4"
      >
        {FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className="relative pb-[9px] text-[13px] font-semibold transition-colors"
          >
            <span className={filter === item ? 'text-primary' : 'text-white'}>{item}</span>
            {filter === item && (
              <motion.span
                layoutId="events-filter-underline"
                transition={springSoft}
                className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </motion.nav>

      {/* การ์ดอีเวนต์หลักที่กำลังแข่งอยู่ */}
      <motion.section variants={popCard} className="px-4">
        <div className="overflow-hidden rounded-[28px] bg-surface">
          <div className="relative h-[132px] overflow-hidden">
            <Img name="eventVirtualRun" alt="ThaiMove Virtual Run 100K" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/5 to-ink/90" />
            <span className="absolute left-3 top-3 rounded-full bg-primary px-[11px] py-[5px] text-[10px] font-semibold tracking-[0.5px] text-ink">
              กำลังแข่ง เหลือ 23 วัน
            </span>
            <span className="absolute right-3 top-3 flex items-center gap-[5px] rounded-full bg-ink/55 px-[10px] py-[5px]">
              <IconUsers className="size-3 text-white" />
              <span className="text-[10.5px] font-semibold text-white">12,480</span>
            </span>
            <p className="absolute bottom-3 left-4 text-lg font-bold leading-[1.2] text-white">
              ThaiMove Virtual Run 100K
            </p>
          </div>

          <div className="flex flex-col gap-2 px-[15px] pb-[15px] pt-[13px]">
            <div className="flex items-center justify-between">
              <span className="text-[11.5px] text-white">ระยะสะสมของคุณ</span>
              <span className="text-[12.5px] font-bold text-white">
                <CountUp value={62.4} decimals={1} delay={0.3} /> / 100 กม.
              </span>
            </div>
            <ProgressBar percent={62.4} delay={0.3} />
            <div className="flex items-center gap-2 pt-1">
              <span className="rounded-full bg-amber/[0.16] px-[10px] py-1 text-[10.5px] font-semibold text-amber">
                เหรียญ Finisher
              </span>
              <span className="rounded-full bg-primary/[0.14] px-[10px] py-1 text-[10.5px] font-semibold text-primary">
                +3,000 แต้ม
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Club Battle */}
      <motion.section variants={popCard} className="px-4">
        <div
          className="rounded-[28px] p-[15px]"
          style={{ backgroundImage: GRADIENTS.violet }}
        >
          <span className="w-fit rounded-full bg-white/20 px-[10px] py-1 text-[10px] font-semibold tracking-[0.6px] text-white">
            CLUB BATTLE
          </span>
          <p className="pt-[9px] text-lg font-bold leading-[1.25] text-white">
            ศึกคลับประจำเดือน
            <br />
            ระยะรวมต่อสมาชิก
          </p>

          <motion.ul
            variants={listStagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-[7px] pt-[13px]"
          >
            {CLUB_BATTLE.map((club) => (
              <motion.li
                key={club.rank}
                variants={riseItem}
                className={`flex items-center gap-[10px] rounded-full px-3 py-[9px] ${
                  club.mine ? 'bg-primary' : 'bg-white/[0.16]'
                }`}
              >
                <span
                  className={`w-4 shrink-0 text-xs font-bold ${
                    club.mine ? 'text-ink' : 'text-white'
                  }`}
                >
                  {club.rank}
                </span>
                <GradientBlock gradient={club.gradient} className="size-6 rounded-full" />
                <span
                  className={`min-w-0 flex-1 truncate text-xs ${
                    club.mine ? 'font-bold text-ink' : 'font-semibold text-white'
                  }`}
                >
                  {club.name}
                </span>
                <span
                  className={`shrink-0 text-[11.5px] font-bold ${
                    club.mine ? 'text-ink' : 'text-white'
                  }`}
                >
                  {club.value}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* อีเวนต์ที่เปิดรับสมัคร */}
      <motion.section variants={riseItem} className="flex flex-col gap-[10px] px-4">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="flex items-center gap-[13px] rounded-[24px] bg-surface px-[13px] py-[11px]"
        >
          <div className="relative size-[58px] shrink-0 overflow-hidden rounded-[18px]">
            <Img name="event7DaySteps" alt="7 วัน 7 หมื่นก้าว" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10.5px] font-semibold tracking-[0.8px] text-primary">เปิดรับสมัคร</p>
            <p className="truncate pt-0.5 text-sm font-bold leading-[1.35] text-white">
              7 วัน 7 หมื่นก้าว
            </p>
            <p className="pt-[3px] text-[10.5px] text-white">เริ่ม 15 ต.ค. ฟรี</p>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.94 }}
            className="shrink-0 rounded-full bg-primary px-[14px] py-[7px] text-xs font-semibold text-ink"
          >
            เข้าร่วม
          </motion.button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="flex items-center gap-[13px] rounded-[24px] bg-surface px-[13px] py-[11px]"
        >
          <GradientBlock gradient="brown" className="size-[58px] rounded-[18px]" />
          <div className="min-w-0 flex-1">
            <p className="text-[10.5px] font-semibold tracking-[0.8px] text-primary">
              ในคลับของคุณ
            </p>
            <p className="truncate pt-0.5 text-sm font-bold leading-[1.35] text-white">
              ปั่นเช้าวันอาทิตย์
            </p>
            <p className="pt-[3px] text-[10.5px] text-white">12 ต.ค. 06:00 สวนรถไฟ</p>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.94 }}
            className="shrink-0 rounded-full border border-white/[0.14] bg-white/10 px-[14px] py-[7px] text-xs font-semibold text-white"
          >
            สนใจ
          </motion.button>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
