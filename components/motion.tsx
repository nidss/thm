'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import type { Transition, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* จังหวะการเคลื่อนไหวกลางที่ใช้ร่วมกันทุกหน้าจอ */
export const easeOutSoft: Transition['ease'] = [0.22, 1, 0.36, 1];

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 32,
  mass: 0.9,
};

/** container ที่ทยอยปล่อยลูก ๆ ให้โผล่ไล่กันทีละชิ้น */
export const listStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.06 },
  },
};

/** ลูกของ listStagger: เลื่อนขึ้นพร้อมจาง ๆ */
export const riseItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOutSoft },
  },
};

/** การ์ดที่ขยายเข้ามาเล็กน้อย ใช้กับ hero card ของแต่ละหน้า */
export const popCard: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutSoft },
  },
};

/**
 * แถบ progress ที่วิ่งจาก 0 ไปยังเปอร์เซ็นต์ที่กำหนด
 * ใช้ซ้ำทั้งหน้า Dashboard, Events และการ์ดชาเลนจ์
 */
export function ProgressBar({
  percent,
  className = '',
  trackClassName = 'bg-white/12',
  barClassName = 'bg-primary',
  height = 7,
  delay = 0.25,
}: {
  percent: number;
  className?: string;
  trackClassName?: string;
  barClassName?: string;
  height?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative w-full overflow-hidden rounded-full ${trackClassName} ${className}`}
      style={{ height }}
      role="progressbar"
      aria-valuenow={Math.round(percent)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className={`h-full rounded-full ${barClassName}`}
        initial={{ width: reduce ? `${percent}%` : 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: reduce ? 0 : 1.1, ease: easeOutSoft, delay: reduce ? 0 : delay }}
      />
    </div>
  );
}

/**
 * ตัวเลขที่นับขึ้นจาก 0 จนถึงค่าจริง
 * decimals ใช้กับค่าที่มีทศนิยม เช่น 46.8 กม.
 */
export function CountUp({
  value,
  decimals = 0,
  duration = 1.1,
  delay = 0.15,
  className = '',
}: {
  value: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    let frame = 0;
    let start: number | null = null;
    const totalMs = duration * 1000;
    const delayMs = delay * 1000;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start - delayMs;

      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }

      const t = Math.min(elapsed / totalMs, 1);
      // easeOutCubic ให้ความรู้สึกว่าตัวเลขค่อย ๆ หยุด
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);

      if (t < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, delay, reduce]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}

/** แท่งกราฟที่งอกขึ้นจากด้านล่าง ใช้ในหน้ากิจกรรม */
export function GrowBar({
  height,
  className,
  index = 0,
}: {
  height: number;
  className: string;
  index?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`w-[38px] origin-bottom rounded-full ${className}`}
      initial={{ height: reduce ? height : 0, opacity: reduce ? 1 : 0 }}
      animate={{ height, opacity: 1 }}
      transition={{
        duration: reduce ? 0 : 0.7,
        ease: easeOutSoft,
        delay: reduce ? 0 : 0.2 + index * 0.07,
      }}
    />
  );
}
