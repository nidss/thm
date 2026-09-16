'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FixedImg, Img, type ImageKey } from '../Surface';
import { IconArrowUpRight, IconBoltFilled } from '../icons';
import { CountUp, listStagger, popCard, riseItem, springSoft } from '../motion';

const CATEGORIES = ['ทั้งหมด', 'คูปอง', 'merch', 'งานวิ่ง', 'บริจาค'];

/** รายการของรางวัล — ข้อความและราคาแต้มตรงกับ Figma 202:2 */
const REWARDS = [
  {
    brand: 'CAFE AMAZON',
    title: 'คูปองกาแฟ ฟรี 1 แก้ว',
    points: '120 แต้ม',
    logo: 'logoCafeAmazon' as ImageKey,
    note: null,
    highlight: false,
  },
  {
    brand: 'CENTRAL',
    title: 'บัตรกำนัล ฿300',
    points: '1,500 แต้ม',
    logo: 'logoCentral' as ImageKey,
    note: null,
    highlight: false,
  },
  {
    brand: 'THAIMOVE STORE',
    title: 'เสื้อวิ่ง Limited Edition',
    points: '2,400 แต้ม',
    logo: 'logoThaimoveStore' as ImageKey,
    note: { text: 'เหลือ 18 ชิ้น', className: 'text-coral' },
    highlight: false,
  },
  {
    brand: 'BANGKOK HALF',
    title: 'สิทธิ์สมัครงานวิ่ง 10K',
    points: '3,000 แต้ม',
    logo: 'logoBangkokHalf' as ImageKey,
    note: null,
    highlight: false,
  },
  {
    brand: 'มูลนิธิรามาธิบดี',
    title: 'บริจาคแทนแต้ม 50 บาท',
    points: '500 แต้ม',
    logo: 'logoRamaFoundation' as ImageKey,
    note: { text: 'ยอดปัจจุบัน: ฿184,200', className: 'text-white' },
    highlight: true,
  },
] as const;

/** หน้ารางวัล — Figma node 202:2 (Points & Rewards) */
export function RewardsScreen() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  return (
    <motion.div
      variants={listStagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 pb-32"
    >
      <motion.header
        variants={riseItem}
        className="flex h-[50px] items-center justify-between px-4"
      >
        <h1 className="text-[28px] font-bold tracking-[-0.8px] text-white">รางวัล</h1>
        <motion.span
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-[5px] rounded-full bg-primary px-[14px] py-2"
        >
          <IconBoltFilled className="size-[15px] text-ink" />
          <span className="text-sm font-bold text-ink">
            <CountUp value={1240} duration={1.2} />
          </span>
        </motion.span>
      </motion.header>

      {/* แบนเนอร์ Lucky Draw */}
      <motion.section variants={popCard} className="px-4">
        <div className="relative h-[172px] overflow-hidden rounded-[28px] p-4">
          <Img name="luckyDraw" alt="ลุ้นตั๋วงานวิ่ง + สมาร์ตวอตช์" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-violet/45 to-ink/[0.92]" />
          {/* วงแสงเคลื่อนช้า ๆ ให้แบนเนอร์ไม่นิ่งเกินไป */}
          <motion.div
            aria-hidden
            className="absolute -right-10 top-2 size-40 rounded-full bg-primary/20 blur-3xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative flex h-full flex-col justify-between">
            <span className="w-fit rounded-full bg-primary px-[11px] py-[5px] text-[10px] font-semibold tracking-[0.6px] text-ink">
              LUCKY DRAW ตุลาคม
            </span>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[21px] font-bold leading-[1.15] text-white">
                ลุ้นตั๋วงานวิ่ง
                <br />+ สมาร์ตวอตช์
              </p>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/[0.16] px-[11px] py-[5px] text-[11px] font-semibold text-white">
                  คุณมี 12 สิทธิ์
                </span>
                <span className="rounded-full bg-white/[0.16] px-[11px] py-[5px] text-[11px] font-semibold text-white">
                  ปิดรับ 31 ต.ค.
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* หมวดของรางวัล */}
      <motion.nav
        variants={riseItem}
        className="flex items-center gap-4 border-b border-white/[0.09] px-4"
      >
        {CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className="relative pb-[9px] text-[13px] font-semibold"
          >
            <span className={category === item ? 'text-primary' : 'text-white/50'}>{item}</span>
            {category === item && (
              <motion.span
                layoutId="rewards-category-underline"
                transition={springSoft}
                className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </motion.nav>

      <motion.ul variants={listStagger} className="flex flex-col gap-2 px-4">
        {REWARDS.map((reward) => (
          <motion.li
            key={reward.title}
            variants={riseItem}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`flex items-center gap-[13px] rounded-[24px] px-[13px] py-[11px] ${
              reward.highlight
                ? 'border border-violet-soft/[0.32] bg-violet/[0.12]'
                : 'bg-surface'
            }`}
          >
            <FixedImg
              name={reward.logo}
              alt={reward.brand}
              className="size-[60px] shrink-0 rounded-[18px] object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10.5px] font-semibold tracking-[0.8px] text-primary">
                {reward.brand}
              </p>
              <p className="truncate pt-0.5 text-[14.5px] font-bold leading-[1.35] text-white">
                {reward.title}
              </p>
              <div className="flex items-center gap-[7px] pt-[5px]">
                <span className="shrink-0 rounded-full bg-primary px-[10px] py-[3px] text-[11.5px] font-bold text-ink">
                  {reward.points}
                </span>
                {reward.note ? (
                  <span className={`truncate text-[10.5px] ${reward.note.className}`}>
                    {reward.note.text}
                  </span>
                ) : null}
              </div>
            </div>
            <IconArrowUpRight className="size-5 shrink-0 text-primary" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
