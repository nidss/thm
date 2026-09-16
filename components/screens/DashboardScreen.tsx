'use client';

import { motion } from 'framer-motion';
import { GradientBlock, Img } from '../Surface';
import {
  IconBell,
  IconBike,
  IconChevronRight,
  IconFlame,
  IconRun,
  IconTicket,
  IconTrophy,
} from '../icons';
import { CountUp, listStagger, popCard, ProgressBar, riseItem } from '../motion';

/** สถิติสามช่องใต้การ์ดชาเลนจ์ */
const STATS = [
  { icon: IconFlame, value: 5, label: 'วันติดกัน' },
  { icon: IconTicket, value: 12, label: 'Lucky Entry' },
  { icon: IconTrophy, value: 42, label: 'อันดับ' },
];

/** รายการกิจกรรมล่าสุด */
const RECENT = [
  {
    icon: IconRun,
    title: 'วิ่งเช้า 5.2 กม.',
    meta: 'Strava 06:12 ยืนยันแล้ว',
    points: '+52',
  },
  {
    icon: IconBike,
    title: 'ปั่นเลียบคลอง 18 กม.',
    meta: 'Apple Health 17:40',
    points: '+72',
  },
];

/** หน้าหลัก — Figma node 198:2 (Dashboard) */
export function DashboardScreen() {
  return (
    <motion.div
      variants={listStagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 pb-32"
    >
      {/* หัวข้อ: รูปโปรไฟล์ + คำทักทาย + กระดิ่งแจ้งเตือน */}
      <motion.header variants={riseItem} className="flex items-center gap-2 px-4 pb-2 pt-2">
        <GradientBlock
          gradient="green"
          className="size-10 rounded-full border-2 border-primary"
          label="สม"
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs text-primary">สวัสดีตอนเช้า</p>
          <p className="truncate text-base font-bold text-white">สมฉวี ศรีภาระ</p>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          aria-label="การแจ้งเตือน"
          className="grid size-[38px] place-items-center rounded-full border border-white/10 bg-white/[0.07] text-primary"
        >
          <IconBell className="size-[18px]" />
        </motion.button>
      </motion.header>

      {/* เป้าหมายแต้มของวันนี้ */}
      <motion.section variants={riseItem} className="flex flex-col items-center gap-2 px-4">
        <p className="text-xs font-bold text-primary">เป้าหมายวันนี้</p>
        <div className="flex items-baseline gap-[9px]">
          <CountUp
            value={268}
            className="text-[62px] font-bold leading-[0.9] tracking-[-2.6px] text-white"
          />
          <span className="text-sm font-semibold text-primary">/ 300</span>
        </div>
      </motion.section>

      <motion.div variants={riseItem} className="px-5">
        <ProgressBar percent={89} />
      </motion.div>

      <motion.div variants={riseItem} className="flex justify-center px-4">
        <span className="rounded-full bg-primary px-3 py-[5px] text-[12.5px] font-semibold text-ink">
          อีก 32 pt ก็จะครบแล้ว สู้ๆ | แต้มรวม 1,240
        </span>
      </motion.div>

      {/* การ์ด Monthly Challenge */}
      <motion.section variants={popCard} className="px-4">
        <div className="relative h-[156px] overflow-hidden rounded-[28px] p-4">
          <Img name="monthlyChallenge" alt="" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/30 to-ink/90" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="w-fit rounded-full bg-violet px-[11px] py-[5px] text-xs text-white">
              MONTHLY CHALLENGE
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-base font-bold text-white">เดิน/วิ่ง 20 กม. ในเดือนนี้</p>
              <div className="flex items-center gap-2">
                <span className="text-[21px] font-bold text-primary">
                  <CountUp value={12.4} decimals={1} delay={0.35} />
                </span>
                <ProgressBar
                  percent={62}
                  height={6}
                  delay={0.4}
                  trackClassName="bg-white/22"
                  className="w-[160px]"
                />
                <span className="whitespace-nowrap text-xs text-primary">/ 20 กม.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* สถิติสามช่อง */}
      <motion.section variants={riseItem} className="flex gap-[10px] px-4 pb-[18px]">
        {STATS.map(({ icon: Icon, value, label }) => (
          <motion.div
            key={label}
            whileHover={{ y: -3 }}
            className="flex flex-1 flex-col items-start gap-[3px] rounded-[22px] border border-hairline bg-surface p-[13px]"
          >
            <Icon className="size-[17px] text-primary" />
            <span className="text-2xl font-bold text-white">
              <CountUp value={value} delay={0.4} duration={0.9} />
            </span>
            <span className="text-xs text-primary">{label}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* คลับของฉัน */}
      <motion.div variants={riseItem} className="flex items-center justify-between px-4">
        <h2 className="text-base font-bold text-white">คลับของฉัน</h2>
        <button type="button" className="text-[11.5px] text-primary">
          จัดการ
        </button>
      </motion.div>

      <motion.section variants={riseItem} className="px-4">
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-2 rounded-[24px] bg-surface p-2"
        >
          <GradientBlock gradient="green" className="size-12 rounded-[18px]" label="คลับ" />
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <p className="truncate text-base font-bold text-white">วิ่งเพื่ออาหารเปียก</p>
            <p className="truncate text-xs text-primary-active">อันดับคลับ #4 12,480 สมาชิก</p>
            <span className="mt-[5px] w-fit rounded-full bg-violet-soft/[0.18] px-[9px] py-[3px] text-xs font-bold text-violet-text">
              ซ้อมกลุ่ม พรุ่งนี้ 06:00
            </span>
          </div>
          <IconChevronRight className="size-[18px] shrink-0 text-white/60" />
        </motion.div>
      </motion.section>

      {/* กิจกรรมล่าสุด */}
      <motion.div variants={riseItem} className="flex items-baseline justify-between px-4 pb-[10px]">
        <h2 className="text-base font-bold text-white">ล่าสุด</h2>
        <button type="button" className="text-[11.5px] text-primary">
          ทั้งหมด
        </button>
      </motion.div>

      <motion.section variants={riseItem} className="flex flex-col gap-[9px] px-4">
        {RECENT.map(({ icon: Icon, title, meta, points }) => (
          <motion.div
            key={title}
            whileHover={{ x: 3 }}
            className="flex items-center gap-4 rounded-[22px] bg-surface py-4 pl-2 pr-4"
          >
            <Icon className="size-5 shrink-0 text-primary" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-white">{title}</p>
              <p className="truncate text-xs text-primary-active">{meta}</p>
            </div>
            <span className="text-[15px] font-bold text-primary">{points}</span>
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
}
