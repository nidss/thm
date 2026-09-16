'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  IconApple,
  IconArrowUpRight,
  IconBike,
  IconBoltFilled,
  IconClock,
  IconClockHour4,
  IconFlame,
  IconRefresh,
  IconRun,
  IconStrava,
} from '../icons';
import { CountUp, GrowBar, listStagger, popCard, riseItem, springSoft } from '../motion';

const RANGES = ['สัปดาห์', 'เดือน', 'ปี'];

/** แท่งกราฟรายวัน ความสูงตรงกับ Figma (201:50 - 201:70) */
const BARS = [
  { day: 'จ', height: 40, tone: 'dim' },
  { day: 'อ', height: 58, tone: 'mid' },
  { day: 'พ', height: 27, tone: 'dim' },
  { day: 'พฤ', height: 81, tone: 'mid' },
  { day: 'ศ', height: 50, tone: 'mid' },
  { day: 'ส', height: 104, tone: 'peak' },
  { day: 'อา', height: 64, tone: 'mid' },
] as const;

const BAR_TONE = {
  dim: 'bg-white/[0.14]',
  mid: 'bg-primary/45',
  peak: 'bg-primary',
} as const;

const SUMMARY = [
  { icon: IconFlame, value: '3,180', label: 'kcal' },
  { icon: IconClock, value: '5:24', label: 'ชม.รวม' },
  { icon: IconBoltFilled, value: '1,486', label: 'pt สัปดาห์นี้' },
];

/** หน้ากิจกรรม — Figma node 201:2 (Activity - Detail) */
export function ActivityScreen() {
  const [range, setRange] = useState(RANGES[0]);

  return (
    <motion.div
      variants={listStagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 pb-32"
    >
      <motion.header variants={riseItem} className="flex items-center justify-between px-4">
        <div>
          <h1 className="text-[28px] font-bold tracking-[-0.8px] text-white">กิจกรรม</h1>
          <p className="text-[11.5px] text-white">ซิงก์ล่าสุด 5 นาทีที่ผ่านมา</p>
        </div>
        <motion.button
          type="button"
          aria-label="ซิงก์ข้อมูลอีกครั้ง"
          whileTap={{ scale: 0.9 }}
          whileHover={{ rotate: 180 }}
          transition={springSoft}
          className="grid size-[38px] place-items-center rounded-full border border-white/10 bg-white/[0.07] text-primary"
        >
          <IconRefresh className="size-[18px]" />
        </motion.button>
      </motion.header>

      {/* ช่วงเวลา */}
      <motion.nav variants={riseItem} className="flex items-center gap-4 px-4 py-2">
        {RANGES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setRange(item)}
            className="relative pb-[9px] text-[13px] font-semibold"
          >
            <span className={range === item ? 'text-primary' : 'text-white/50'}>{item}</span>
            {range === item && (
              <motion.span
                layoutId="activity-range-underline"
                transition={springSoft}
                className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </motion.nav>

      {/* ระยะรวม */}
      <motion.section variants={riseItem} className="px-4">
        <p className="pb-0.5 text-[10.5px] font-semibold tracking-[1.1px] text-white/40">
          ระยะรวมสัปดาห์นี้
        </p>
        <div className="flex items-baseline gap-2 pb-1">
          <CountUp
            value={46.8}
            decimals={1}
            className="text-[50px] font-bold leading-none tracking-[-2px] text-white"
          />
          <span className="text-[15px] font-semibold text-white/50">กม.</span>
        </div>
        <span className="flex w-fit items-center gap-[5px] rounded-full bg-lime/[0.14] px-[11px] py-1">
          <IconArrowUpRight className="size-[14px] text-lime" />
          <span className="text-[11.5px] font-semibold text-lime">+18% จากสัปดาห์ก่อน</span>
        </span>
      </motion.section>

      {/* กราฟแท่งรายวัน */}
      <motion.section variants={popCard} className="px-4">
        <div className="flex items-end gap-[7px] rounded-[28px] border border-hairline bg-white/5 px-2 pb-[10px] pt-[14px]">
          {BARS.map((bar, index) => (
            <div
              key={bar.day}
              className="flex h-[120px] flex-1 flex-col items-center justify-end gap-1.5"
            >
              <GrowBar height={bar.height} index={index} className={BAR_TONE[bar.tone]} />
              <span
                className={`text-[10px] ${bar.tone === 'peak' ? 'text-primary' : 'text-white/40'}`}
              >
                {bar.day}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* สรุปสามช่อง */}
      <motion.section variants={riseItem} className="flex gap-[10px] px-4">
        {SUMMARY.map(({ icon: Icon, value, label }) => (
          <motion.div
            key={label}
            whileHover={{ y: -3 }}
            className="flex flex-1 flex-col items-center justify-center gap-[3px] rounded-[22px] bg-surface p-[13px]"
          >
            <Icon className="size-[17px] text-primary" />
            <span className="text-lg font-bold text-white">{value}</span>
            <span className="text-[10px] text-white/45">{label}</span>
          </motion.div>
        ))}
      </motion.section>

      <motion.h2 variants={riseItem} className="px-4 pb-[10px] text-base font-bold text-white">
        ประวัติกิจกรรม
      </motion.h2>

      {/* ประวัติกิจกรรม */}
      <motion.section variants={riseItem} className="flex flex-col gap-[10px] px-4">
        <div className="rounded-[24px] bg-surface px-[14px] py-[13px]">
          <div className="flex items-center gap-3">
            <span className="grid size-[38px] shrink-0 place-items-center rounded-full bg-primary/[0.14]">
              <IconRun className="size-[19px] text-primary" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-white">วิ่งเช้า สวนลุมพินี</p>
              <span className="flex items-center gap-[5px]">
                <IconStrava className="size-3 text-[#fc4c02]" />
                <span className="text-[10.5px] text-white">Strava วันนี้ 06:12</span>
              </span>
            </div>
            <span className="shrink-0 rounded-full bg-primary px-[10px] py-1 text-xs font-bold text-ink">
              +52 pt
            </span>
          </div>
          <dl className="mt-[11px] flex items-center gap-[18px] border-t border-hairline pt-[11px]">
            {[
              ['ระยะ', '5.2 กม.'],
              ['เพซ', '5:48 /กม.'],
              ['แคลอรี', '412'],
              ['หัวใจ', '148 bpm'],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <dt className="text-[10px] text-primary">{label}</dt>
                <dd className="whitespace-nowrap text-[13px] font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-[24px] bg-surface px-[14px] py-[13px]">
          <div className="flex items-center gap-3">
            <span className="grid size-[38px] shrink-0 place-items-center rounded-full bg-violet-soft/[0.18]">
              <IconBike className="size-[19px] text-violet-text" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-white">ปั่นเลียบคลอง</p>
              <span className="flex items-center gap-[5px]">
                <IconApple className="size-3 text-white" />
                <span className="text-[10.5px] text-white">Apple Health วันนี้ 17:40</span>
              </span>
            </div>
            <span className="shrink-0 rounded-full bg-primary px-[10px] py-1 text-xs font-bold text-ink">
              +72 pt
            </span>
          </div>
          <dl className="mt-[11px] flex items-center gap-[18px] border-t border-hairline pt-[11px]">
            {[
              ['ระยะ', '18.0 กม.'],
              ['ความเร็ว', '24.1 กม./ชม.'],
              ['แคลอรี', '528'],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <dt className="text-[10px] text-primary">{label}</dt>
                <dd className="whitespace-nowrap text-[13px] font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* รายการที่ยังรอตรวจสอบ — ไอคอนหมุนช้า ๆ สื่อว่ากำลังรอ */}
        <div className="flex items-center gap-3 rounded-[24px] border border-amber/30 bg-amber/10 px-[14px] py-[13px]">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="grid size-[38px] shrink-0 place-items-center rounded-full bg-amber/[0.18]"
          >
            <IconClockHour4 className="size-[19px] text-amber" />
          </motion.span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-white">เดิน 3.1 กม.</p>
            <p className="text-[10.5px] text-amber">รอตรวจสอบ ไม่เกิน 2 ชม.</p>
          </div>
          <span className="shrink-0 rounded-full bg-white/10 px-[10px] py-1 text-xs font-bold text-white/50">
            +19 pt
          </span>
        </div>
      </motion.section>
    </motion.div>
  );
}
