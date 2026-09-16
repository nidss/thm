'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { GradientBlock, GRADIENTS } from '../Surface';
import { CountUp, listStagger, popCard, riseItem, springSoft } from '../motion';

const SCOPES = ['รายบุคคล', 'คลับ', 'เพื่อน'];

/** โพเดียมสามอันดับแรก เรียงซ้าย-กลาง-ขวา ตามดีไซน์ */
const PODIUM = [
  {
    rank: 2,
    name: 'บีม ส.',
    distance: '27.5 กม.',
    gradient: 'maroon',
    avatarSize: 'size-11',
    rankClass: 'text-[30px] text-white/35',
  },
  {
    rank: 1,
    name: 'นิดา ร.',
    distance: '34.2 กม.',
    gradient: 'green',
    avatarSize: 'size-[58px] border-[3px] border-primary',
    rankClass: 'text-[42px] text-primary',
  },
  {
    rank: 3,
    name: 'ต้าร์ ว.',
    distance: '25.1 กม.',
    gradient: 'navy',
    avatarSize: 'size-11',
    rankClass: 'text-[30px] text-white/35',
  },
] as const;

/** อันดับรอบ ๆ ตัวเรา */
const NEARBY = [
  { rank: 40, name: 'โบว์ ก.', distance: '14.1 กม.', gradient: 'purple', mine: false },
  { rank: 41, name: 'เอ็ม พ.', distance: '13.0 กม.', gradient: 'green', mine: false },
  { rank: 42, name: 'คุณ', distance: '12.4 กม.', gradient: 'maroon', mine: true },
  { rank: 43, name: 'แน็ต ธ.', distance: '12.0 กม.', gradient: 'navy', mine: false },
] as const;

/** หน้าอันดับ — Figma node 204:2 (Ranking - Leaderboard) */
export function RankingScreen() {
  const [scope, setScope] = useState(SCOPES[0]);

  return (
    <motion.div
      variants={listStagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 pb-32"
    >
      <motion.header variants={riseItem} className="px-5 pb-[14px]">
        <h1 className="text-[28px] font-bold tracking-[-0.8px] text-white">อันดับ</h1>
        <p className="pt-px text-[11.5px] text-white">Monthly Challenge เดิน/วิ่ง 20 กม.</p>
      </motion.header>

      <motion.nav
        variants={riseItem}
        className="flex items-center gap-4 border-b border-white/[0.09] px-5 pb-4"
      >
        {SCOPES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setScope(item)}
            className="relative pb-[9px] text-[13px] font-semibold"
          >
            <span className={scope === item ? 'text-primary' : 'text-white'}>{item}</span>
            {scope === item && (
              <motion.span
                layoutId="ranking-scope-underline"
                transition={springSoft}
                className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </motion.nav>

      {/* การ์ดอันดับของเรา */}
      <motion.section variants={popCard} className="px-5 py-4">
        <div
          className="rounded-[28px] px-5 py-[18px] shadow-[0_6px_11.8px_0_rgba(92,87,255,0.34)]"
          style={{ backgroundImage: GRADIENTS.violetUp }}
        >
          <p className="text-[10.5px] font-semibold tracking-[0.5px] text-white/75">อันดับของคุณ</p>
          <div className="flex items-end gap-[10px] pt-0.5">
            <p className="text-[52px] font-bold leading-none tracking-[-2px] text-white">
              #<CountUp value={42} duration={0.9} />
            </p>
            <span className="mb-[5px] rounded-full bg-white/[0.18] px-[10px] py-1 text-[11.5px] font-semibold text-[#dfff9b]">
              ขึ้นมา 6 อันดับ
            </span>
          </div>
          <p className="pt-[5px] text-xs text-white/85">12.4 กม. อีก 1.8 กม. แซงได้อีก 3 คน</p>
        </div>
      </motion.section>

      {/* โพเดียม */}
      <motion.section variants={riseItem} className="flex items-end px-5 pb-4">
        {PODIUM.map((entry, index) => (
          <motion.div
            key={entry.rank}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25 + index * 0.1,
              type: 'spring',
              stiffness: 320,
              damping: 24,
            }}
            className="flex flex-1 flex-col items-center justify-end gap-0.5"
          >
            <div className="pb-1.5">
              <GradientBlock
                gradient={entry.gradient}
                className={`rounded-full ${entry.avatarSize}`}
              />
            </div>
            <p className={`font-bold leading-[1.05] ${entry.rankClass}`}>{entry.rank}</p>
            <p
              className={`text-center font-semibold text-white ${
                entry.rank === 1 ? 'text-[12.5px]' : 'text-[11.5px]'
              }`}
            >
              {entry.name}
            </p>
            <p
              className={`text-center font-bold text-primary ${
                entry.rank === 1 ? 'text-[13px]' : 'text-xs'
              }`}
            >
              {entry.distance}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* ตารางอันดับรอบตัวเรา */}
      <motion.ul variants={listStagger} className="flex flex-col gap-2 px-5 pb-5">
        {NEARBY.map((row) => (
          <motion.li
            key={row.rank}
            variants={riseItem}
            whileHover={{ x: 3 }}
            className={`flex items-center gap-3 rounded-[20px] px-[14px] py-[11px] ${
              row.mine ? 'bg-primary' : 'bg-surface'
            }`}
          >
            <span
              className={`w-[22px] shrink-0 text-sm font-bold ${
                row.mine ? 'text-ink' : 'text-white'
              }`}
            >
              {row.rank}
            </span>
            <GradientBlock gradient={row.gradient} className="size-[30px] rounded-full" />
            <span
              className={`min-w-0 flex-1 truncate text-[13px] ${
                row.mine ? 'font-bold text-ink' : 'font-semibold text-white'
              }`}
            >
              {row.name}
            </span>
            <span
              className={`shrink-0 text-[13px] font-bold ${row.mine ? 'text-ink' : 'text-white'}`}
            >
              {row.distance}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
