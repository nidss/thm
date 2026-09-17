'use client';

import { motion } from 'framer-motion';
import {
  useRef,
  useState,
  type ChangeEvent,
  type ClipboardEvent,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { IconArrowLeft, IconChevronRight } from './icons';
import { IconEye, IconEyeOff } from './lucideIcons';
import { listStagger, riseItem } from './motion';
import { useNav } from './nav';
import type { ScreenSlug } from './screenList';

/* ---------- โลโก้ ---------- */

/**
 * โลโก้ ThaiMove จากไฟล์ต้นฉบับ (thaimove-logo.svg)
 * มอโนแกรม TM + เวิร์ดมาร์ก THAIMOVE อยู่ในไฟล์เดียวกัน
 *
 * สีขาวกับเขียวมิ้นต์ฝังมาในไฟล์ ทาสีผ่าน class ไม่ได้
 * และตัวโลโก้ออกแบบมาสำหรับพื้นเข้ม ถ้าเอาไปวางบนพื้นขาวจะมองไม่เห็น
 * ความสูงคิดจาก viewBox ให้เอง กำหนดแค่ความกว้างผ่าน className พอ
 */
export function Logo({ className = 'w-[100px]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 73 60"
      fill="none"
      role="img"
      aria-label="ThaiMove"
      className={`h-auto ${className}`}
    >
      <path d="M45.3375 32.3799C44.2619 33.0578 42.9823 33.1999 41.7916 33.0722C40.919 32.9791 40.1574 32.6871 39.4059 32.2817L33.7197 29.2199L31.3205 27.9911C30.9397 27.7964 30.6384 27.5502 30.327 27.2709C29.4536 26.4864 28.9509 25.4641 28.8519 24.2708L28.8494 10.3038L23.572 13.0305V41.1634C23.517 41.8337 23.3748 42.4295 23.0507 42.9982C22.0275 44.794 19.7747 45.2281 18.0017 44.3057L14.6319 42.5522C13.3523 41.7914 12.6279 40.4077 12.6279 38.9225V18.6075L9.49493 20.2679C7.79898 21.2344 5.76706 21.3275 4.04742 20.3881L1.90633 19.2211C-0.0299639 17.9356 -0.547888 15.3891 0.614056 13.4105C1.04397 12.6793 1.60167 12.1749 2.36416 11.7729L14.8654 5.17365L23.5931 0.586804C25.0513 -0.179927 26.8894 -0.196007 28.3518 0.542797L33.7908 3.28983L38.6095 5.73304C39.697 6.28397 40.7371 8.00869 40.7379 9.39998L40.7464 22.563L43.2192 20.9822L47.4549 18.269L62.1531 8.84143C62.9714 8.31674 63.8871 8.06878 64.8358 8.04677C65.8395 8.02308 66.7289 8.25496 67.6285 8.67556L70.3451 9.94414C71.8007 10.6237 72.4684 12.2046 72.4684 13.8091L72.4566 40.4221C72.4566 42.1206 71.4021 43.6016 69.894 44.2888C68.6965 44.8346 67.3746 44.9192 66.1712 44.3776L63.5951 43.2182C62.3486 42.5497 61.5167 41.2032 61.515 39.7451L61.4947 22.376L61.5074 22.277C61.5108 22.2474 61.4769 22.2313 61.4354 22.2567L59.8334 23.2553L52.9049 27.6145L45.3383 32.3807L45.3375 32.3799Z" fill="white" />
      <path d="M35.2574 26.103C33.8645 26.9966 31.9536 27.2556 30.9253 25.9472C30.5132 25.4234 30.1814 24.8039 30.1814 24.1007L30.173 9.57339L34.5195 7.31213C35.2134 6.95161 35.882 6.66726 36.6707 6.61648C37.2682 6.59194 37.803 6.82975 38.2803 7.19619C38.9904 7.74204 39.3763 8.59001 39.4237 9.47861L39.4135 10.0803L39.4101 23.438L35.2574 26.1021V26.103Z" fill="#00FFE1" />
      <path d="M60.0754 21.5602L49.8024 28.0325L45.703 30.6154L44.4116 31.3914C42.8722 32.093 41.2414 31.8052 39.7918 31.0216L34.1445 27.969C34.72 27.8531 35.2633 27.6475 35.7753 27.3191L41.1052 23.9001L44.7687 21.5559L47.1079 20.0487L57.0356 13.6711L60.7635 11.2812L63.1881 9.76807C64.4939 9.06989 66.0468 9.28569 67.3061 9.97203L69.6833 11.0773C70.8147 11.6037 71.1888 12.7783 71.155 14.0012L71.1186 15.3248L71.1262 40.2647C71.1262 41.3648 70.6523 42.2983 69.7197 42.889C68.8192 43.4594 67.692 43.6337 66.6976 43.1793L64.2459 42.0605C63.3649 41.5756 62.8191 40.665 62.8182 39.6443L62.8115 20.6504C62.8115 20.3237 62.3172 20.1883 62.0896 20.328L60.0746 21.5593L60.0754 21.5602Z" fill="white" />
      <path d="M64.1977 20.8375C64.1977 20.1766 63.8795 19.5875 63.3912 19.2482C62.6769 18.7514 61.8273 18.8648 61.1206 19.3083L51.2877 25.4777L44.1061 30.0002C43.0813 30.6459 41.7797 30.5164 40.754 29.9672L37.1675 28.0478L39.0141 26.8749L63.2177 11.3101C63.8575 10.8988 64.4787 10.655 65.2649 10.7261C65.8936 10.7828 66.4167 11.0655 66.993 11.3329L69.0833 12.3011C69.8314 12.6472 69.7747 13.4105 69.7738 14.1231L69.7637 40.4729C69.7637 40.8935 69.4768 41.3234 69.2009 41.5663C68.6576 42.0436 67.8917 42.1993 67.2409 41.9167L65.0364 40.9578C64.5294 40.737 64.2062 40.2241 64.2062 39.6444L64.1969 20.8383L64.1977 20.8375Z" fill="white" />
      <path d="M18.7964 43.22L15.237 41.3734C14.3704 40.924 13.9481 39.8949 13.9481 38.9192V17.4422C13.9481 17.2231 13.8228 17.0343 13.7111 16.9548C13.5698 16.8541 13.31 16.7788 13.1382 16.8702L8.65967 19.227C7.37671 19.9024 5.92364 19.9015 4.63983 19.227L3.00989 18.3715C1.5746 17.6183 0.928041 15.9545 1.54921 14.4354C1.84541 13.7118 2.42427 13.21 3.11483 12.8478L6.07597 11.294L24.414 1.61593C25.4617 1.24357 26.5814 1.24611 27.6206 1.63624L33.889 4.78864L35.3903 5.54945C34.7734 5.72717 34.3121 5.98359 33.7781 6.26202L26.7328 9.93149L24.9514 10.8531L22.6292 12.1022C22.421 12.2139 22.2493 12.3882 22.2484 12.6751L22.2264 41.2456C22.2264 42.1223 21.6569 42.9145 20.8952 43.264C20.2283 43.5695 19.476 43.5729 18.799 43.2217L18.7964 43.22Z" fill="white" />
      <path d="M15.3225 20.0065L15.3267 17.6699C15.3275 17.1299 15.2074 16.6366 14.857 16.1931C14.3509 15.5533 13.3938 15.2326 12.611 15.6346L7.80495 18.1057C6.96713 18.5365 5.99729 18.385 5.18148 17.9627L3.42629 17.0538C2.54362 16.4961 2.45222 15.1429 3.15802 14.4193C3.38736 14.184 3.64886 14.1214 3.93152 13.9725L13.2897 9.0395L19.8061 5.60698L24.7636 2.95389C25.5007 2.72539 26.2911 2.52313 27.0096 2.88026L32.2498 5.4885L26.8759 8.32185L21.7534 10.9953C21.1745 11.4819 20.8588 12.0683 20.8588 12.8215L20.8631 41.1432C20.8631 41.6577 20.555 42.0174 20.0396 42.0707C19.674 42.1079 19.2864 41.9911 18.9437 41.81L16.0333 40.2715C15.5408 40.0109 15.3242 39.4261 15.3242 38.865L15.3216 20.0065H15.3225Z" fill="white" />
      <path d="M65.1821 59.8144V48.9912H72.3409V51.5578H68.2435V53.1504H71.3668V55.4696H68.2435V57.1859H72.4491V59.8144H65.1821Z" fill="white" />
      <path d="M57.3986 59.8144L55.0793 48.9912H58.6046L59.6096 55.9799H59.7952L60.8002 48.9912H64.3254L62.0062 59.8144H57.3986Z" fill="white" />
      <path d="M50.207 59.9999C46.2488 59.9999 45.8777 58.4074 45.8777 55.114V53.6915C45.8777 50.3982 46.2488 48.8057 50.207 48.8057C54.1651 48.8057 54.5362 50.3982 54.5362 53.6915V55.114C54.5362 58.4074 54.1651 59.9999 50.207 59.9999ZM48.97 56.351C48.97 56.9849 49.2174 57.3714 50.207 57.3714C51.1965 57.3714 51.4439 56.9849 51.4439 56.351V52.4546C51.4439 51.8207 51.1965 51.4341 50.207 51.4341C49.2174 51.4341 48.97 51.8207 48.97 52.4546V56.351Z" fill="white" />
      <path d="M33.4883 59.8144V48.9912H37.7866L39.0236 54.4183H39.1009L40.3378 48.9912H44.6361V59.8144H41.9613V52.6711H41.7757L40.3223 59.8144H37.8021L36.3487 52.6711H36.1632V59.8144H33.4883Z" fill="white" />
      <path d="M28.7622 59.8144V48.9912H31.9473V59.8144H28.7622Z" fill="white" />
      <path d="M18.6594 59.8144L20.9787 48.9912H25.5862L27.9055 59.8144H24.3802L24.2256 58.7011H22.3393L22.1847 59.8144H18.6594ZM22.4011 56.3819H24.1638L23.3907 52.3619H23.1742L22.4011 56.3819Z" fill="white" />
      <path d="M14.7522 59.8144V55.6088H12.5566V59.8144H9.49524V48.9912H12.5566V53.2896H14.7522V48.9912H17.8136V59.8144H14.7522Z" fill="white" />
      <path d="M2.77993 59.8144V51.6815H0.0895996V48.9912H8.53167V51.6815H5.84134V59.8144H2.77993Z" fill="white" />
    </svg>
  );
}

/* ---------- โครงหน้าจอ ---------- */

/** ตัวครอบเนื้อหาของหน้าจอ พร้อม animation ให้ลูก ๆ ทยอยโผล่ */
export function Screen({
  children,
  className = '',
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <motion.div
      variants={listStagger}
      initial="hidden"
      animate="show"
      className={`flex flex-col ${padded ? 'gap-4 pb-32' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** ชิ้นส่วนหนึ่งบล็อกในหน้าจอ (เลื่อนขึ้นพร้อมจาง) */
export function Block({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={riseItem} className={className}>
      {children}
    </motion.div>
  );
}

/** แถบหัวข้อพร้อมปุ่มย้อนกลับ */
export function AppBar({
  title,
  subtitle,
  right,
  onBack,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  onBack?: () => void;
}) {
  const { back, canBack } = useNav();
  const handleBack = onBack ?? back;

  return (
    <Block className="flex items-center gap-3 px-4 pt-1">
      {canBack || onBack ? (
        <motion.button
          type="button"
          onClick={handleBack}
          whileTap={{ scale: 0.9 }}
          aria-label="ย้อนกลับ"
          className="grid size-[38px] shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-white"
        >
          <IconArrowLeft className="size-[18px]" />
        </motion.button>
      ) : null}
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-[20px] font-bold tracking-[-0.4px] text-white">{title}</h1>
        {subtitle ? <p className="truncate text-[11.5px] text-white/55">{subtitle}</p> : null}
      </div>
      {right}
    </Block>
  );
}

/** หัวข้อใหญ่แบบไม่มีปุ่มย้อนกลับ (ใช้กับหน้าแท็บหลัก) */
export function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Block className="px-5 pb-[14px]">
      <h1 className="text-[28px] font-bold tracking-[-0.8px] text-white">{title}</h1>
      {subtitle ? <p className="pt-px text-[11.5px] text-white">{subtitle}</p> : null}
    </Block>
  );
}

/* ---------- ปุ่ม ---------- */

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

const BUTTON_STYLE: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-ink',
  secondary: 'border border-white/15 bg-white/10 text-white',
  danger: 'bg-[#ff4d4f] text-white',
  ghost: 'text-white/70',
};

export function Button({
  children,
  variant = 'primary',
  onClick,
  to,
  arrow = false,
  full = true,
  className = '',
  disabled = false,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  /** ระบุ slug เพื่อให้ปุ่มพาไปหน้าจออื่น */
  to?: ScreenSlug;
  arrow?: boolean;
  full?: boolean;
  className?: string;
  disabled?: boolean;
}) {
  const { go } = useNav();

  return (
    <motion.button
      type="button"
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      whileHover={disabled ? undefined : { scale: 1.01 }}
      onClick={() => {
        if (disabled) return;
        onClick?.();
        if (to) go(to);
      }}
      className={`flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[16px] font-bold transition-opacity ${
        BUTTON_STYLE[variant]
      } ${full ? 'w-full' : ''} ${disabled ? 'opacity-40' : ''} ${className}`}
    >
      {children}
      {arrow ? <IconChevronRight className="size-5" /> : null}
    </motion.button>
  );
}

/* ---------- ฟอร์ม ---------- */

/**
 * ปุ่มลูกตาสำหรับเปิด/ปิดการมองเห็นรหัสผ่าน
 * ใช้ไอคอนจาก Lucide: ตอนซ่อนอยู่โชว์ eye (กดเพื่อดู) ตอนโชว์อยู่เป็น eye-off (กดเพื่อซ่อน)
 * onMouseDown กัน preventDefault ไว้ เพื่อไม่ให้ช่องกรอกเสียโฟกัสตอนกดปุ่ม
 */
function RevealButton({
  shown,
  onToggle,
  className = '',
}: {
  shown: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onToggle}
      aria-label={shown ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
      aria-pressed={shown}
      className={`grid shrink-0 place-items-center rounded-full p-1 transition-opacity hover:opacity-70 ${className}`}
    >
      {shown ? <IconEyeOff className="size-5" /> : <IconEye className="size-5" />}
    </button>
  );
}

/** ช่องกรอกข้อมูลตามดีไซน์: label สีฟ้า + กล่องพื้นขาว */
export function Field({
  label,
  placeholder,
  value,
  type = 'text',
  right,
  error,
  hint,
  onChange,
}: {
  label: string;
  placeholder?: string;
  /** ค่าตั้งต้น หลังจากนั้นช่องจะเก็บค่าที่ผู้ใช้พิมพ์เอง */
  value?: string;
  type?: string;
  right?: ReactNode;
  error?: string;
  hint?: string;
  onChange?: (value: string) => void;
}) {
  const [text, setText] = useState(value ?? '');
  const [shown, setShown] = useState(false);
  const [focused, setFocused] = useState(false);
  const isPassword = type === 'password';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <label className="flex w-full flex-col gap-1.5">
      <span className="text-[16px] font-medium text-primary">{label}</span>
      <span
        className={`flex h-12 items-center gap-2 rounded-[6px] bg-white px-4 transition-colors ${
          error
            ? 'border-b-2 border-[#ff4d4f]'
            : focused
              ? 'border-b-2 border-primary-active'
              : 'border-b border-[#d9d9d9]'
        }`}
      >
        <input
          type={isPassword && !shown ? 'password' : 'text'}
          value={text}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder ?? 'Placeholder'}
          className="min-w-0 flex-1 bg-transparent text-[16px] text-[#1f1f1f] outline-none placeholder:text-[#8c8c8c]"
        />
        {isPassword ? (
          <RevealButton shown={shown} onToggle={() => setShown((v) => !v)} className="text-[#8c8c8c]" />
        ) : (
          right
        )}
      </span>
      {error ? <span className="text-[11.5px] text-[#ff7875]">{error}</span> : null}
      {hint && !error ? <span className="text-[11.5px] text-white/45">{hint}</span> : null}
    </label>
  );
}

/**
 * สวิตช์เปิด/ปิด กดสลับได้จริง
 * on คือค่าตั้งต้น หลังจากนั้นสวิตช์จะจำสถานะของตัวเอง
 * stopPropagation ไว้เพราะบางจุดสวิตช์อยู่ใน ListRow ที่กดได้ จะได้ไม่เผลอสั่งสองงาน
 */
export function Toggle({
  on = false,
  onChange,
}: {
  on?: boolean;
  onChange?: (on: boolean) => void;
}) {
  const [active, setActive] = useState(on);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      aria-label={active ? 'ปิด' : 'เปิด'}
      onClick={(e) => {
        e.stopPropagation();
        const next = !active;
        setActive(next);
        onChange?.(next);
      }}
      className={`flex h-[26px] w-[44px] shrink-0 items-center rounded-full p-[3px] transition-colors ${
        active ? 'bg-primary' : 'bg-white/20'
      }`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 34 }}
        className={`block size-5 rounded-full bg-white ${active ? 'ml-auto' : ''}`}
      />
    </button>
  );
}

/* ---------- ชิ้นส่วนทั่วไป ---------- */

export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`rounded-[24px] bg-surface p-4 ${className}`}>{children}</div>;
}

/** แถวรายการที่กดได้ มีไอคอนซ้าย ข้อความกลาง และลูกศรขวา */
export function ListRow({
  icon,
  title,
  subtitle,
  right,
  to,
  onClick,
  danger = false,
}: {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  right?: ReactNode;
  to?: ScreenSlug;
  onClick?: () => void;
  danger?: boolean;
}) {
  const { go } = useNav();
  const interactive = Boolean(to || onClick);

  return (
    <motion.div
      whileHover={interactive ? { x: 3 } : undefined}
      onClick={() => {
        onClick?.();
        if (to) go(to);
      }}
      className={`flex items-center gap-3 rounded-[20px] bg-surface px-[14px] py-3 ${
        interactive ? 'cursor-pointer' : ''
      }`}
    >
      {icon ? (
        <span
          className={`grid size-[38px] shrink-0 place-items-center rounded-full ${
            danger ? 'bg-[#ff4d4f]/15 text-[#ff7875]' : 'bg-primary/[0.14] text-primary'
          }`}
        >
          {icon}
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className={`truncate text-sm font-bold ${danger ? 'text-[#ff7875]' : 'text-white'}`}>
          {title}
        </p>
        {subtitle ? <p className="truncate text-[11.5px] text-white/50">{subtitle}</p> : null}
      </div>
      {right ?? (interactive ? <IconChevronRight className="size-[18px] text-white/35" /> : null)}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Block className="px-4 pb-1 pt-2">
      <p className="text-[10.5px] font-semibold tracking-[1.1px] text-white/40">{children}</p>
    </Block>
  );
}

export function Pill({
  children,
  tone = 'primary',
}: {
  children: ReactNode;
  tone?: 'primary' | 'violet' | 'amber' | 'lime' | 'coral' | 'muted';
}) {
  const tones = {
    primary: 'bg-primary text-ink',
    violet: 'bg-violet-soft/[0.18] text-violet-text',
    amber: 'bg-amber/[0.16] text-amber',
    lime: 'bg-lime/[0.14] text-lime',
    coral: 'bg-coral/[0.16] text-coral',
    muted: 'bg-white/10 text-white/70',
  } as const;
  return (
    <span className={`rounded-full px-[10px] py-[3px] text-[11.5px] font-bold ${tones[tone]}`}>
      {children}
    </span>
  );
}

/**
 * หน้าจอแบบกล่องกลาง ใช้กับหน้ายืนยัน/สำเร็จ/ผิดพลาด
 * ซึ่งในดีไซน์เป็นหน้าสูง 780 ที่มีการ์ดอยู่ตรงกลาง
 */
export function CenterDialog({
  icon,
  tone = 'primary',
  title,
  description,
  children,
  actions,
}: {
  icon?: ReactNode;
  tone?: 'primary' | 'danger' | 'amber' | 'violet';
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  const tones = {
    primary: 'bg-primary/[0.14] text-primary',
    danger: 'bg-[#ff4d4f]/15 text-[#ff7875]',
    amber: 'bg-amber/[0.16] text-amber',
    violet: 'bg-violet-soft/[0.18] text-violet-text',
  } as const;

  return (
    <div className="flex min-h-[700px] flex-col items-center justify-center px-6 text-center">
      {icon ? (
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.1 }}
          className={`mb-5 grid size-[76px] place-items-center rounded-full ${tones[tone]}`}
        >
          {icon}
        </motion.span>
      ) : null}
      <Block className="w-full">
        <h2 className="text-[22px] font-bold leading-[1.3] text-white">{title}</h2>
        {description ? (
          <div className="mt-2 text-[13px] leading-relaxed text-white/60">{description}</div>
        ) : null}
      </Block>
      {children ? <Block className="mt-6 w-full">{children}</Block> : null}
      {actions ? <Block className="mt-8 flex w-full flex-col gap-2.5">{actions}</Block> : null}
    </div>
  );
}

/* ---------- ชิ้นส่วนเพิ่มเติมที่ใช้ซ้ำในหลายหน้า ---------- */

/** ช่องกรอกแบบพื้นเข้ม (ใช้ในหน้าส่วนใหญ่ ยกเว้นหน้า login/สมัคร) */
export function DarkField({
  label,
  value,
  placeholder,
  hint,
  type = 'text',
  right,
  error,
  danger = false,
  onChange,
}: {
  label?: string;
  /** ค่าตั้งต้น หลังจากนั้นช่องจะเก็บค่าที่ผู้ใช้พิมพ์เอง */
  value?: string;
  placeholder?: string;
  hint?: string;
  type?: string;
  right?: ReactNode;
  error?: string;
  /** ขอบสีส้มเตือน โดยไม่ต้องมีข้อความ error (ใช้กับช่องยืนยันลบบัญชี) */
  danger?: boolean;
  onChange?: (value: string) => void;
}) {
  const [text, setText] = useState(value ?? '');
  const [shown, setShown] = useState(false);
  const [focused, setFocused] = useState(false);
  const isPassword = type === 'password';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <label className="flex w-full flex-col gap-1.5">
      {label ? <span className="text-xs font-semibold text-white/60">{label}</span> : null}
      <span
        className={`flex items-center gap-2 rounded-[16px] border bg-white/[0.06] px-4 py-[14px] transition-colors ${
          error || danger ? 'border-coral/60' : focused ? 'border-primary/70' : 'border-white/[0.14]'
        }`}
      >
        <input
          type={isPassword && !shown ? 'password' : 'text'}
          value={text}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:font-normal placeholder:text-white/35"
        />
        {isPassword ? (
          <RevealButton shown={shown} onToggle={() => setShown((v) => !v)} className="text-white/45" />
        ) : (
          right
        )}
      </span>
      {error ? <span className="text-[11.5px] text-coral">{error}</span> : null}
      {hint && !error ? <span className="text-[11.5px] text-white/55">{hint}</span> : null}
    </label>
  );
}

/** พื้นที่ข้อความแบบหลายบรรทัด */
export function DarkTextarea({
  label,
  placeholder,
  rows = 4,
  maxLength,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  rows?: number;
  /** ใส่แล้วจะโชว์ตัวนับจำนวนตัวอักษรใต้กล่อง */
  maxLength?: number;
  onChange?: (value: string) => void;
}) {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <label className="flex w-full flex-col gap-1.5">
      {label ? <span className="text-xs font-semibold text-white/60">{label}</span> : null}
      <textarea
        rows={rows}
        value={text}
        maxLength={maxLength}
        onChange={(e) => {
          setText(e.target.value);
          onChange?.(e.target.value);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className={`w-full resize-none rounded-[16px] border bg-white/[0.06] px-4 py-[14px] text-sm text-white outline-none transition-colors placeholder:text-white/35 ${
          focused ? 'border-primary/70' : 'border-white/[0.14]'
        }`}
      />
      {maxLength ? (
        <span className="self-end text-[11px] text-white/40">
          {text.length}/{maxLength}
        </span>
      ) : null}
    </label>
  );
}

/**
 * ช่องติ๊ก กดสลับได้จริง
 * checked คือค่าตั้งต้น หลังจากนั้นเก็บสถานะเอง
 * ถ้าส่ง children เข้ามาจะกลายเป็นข้อความกำกับที่กดเพื่อสลับได้ด้วย (เหมือนฟอร์มจริง)
 * ข้างในเป็น input จริงที่ซ่อนไว้ จึงโฟกัสด้วยคีย์บอร์ดและกด Space ได้ตามปกติ
 */
export function Checkbox({
  checked = false,
  onChange,
  children,
  className = '',
}: {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
  className?: string;
}) {
  const [on, setOn] = useState(checked);

  return (
    <label className={`flex items-start gap-2.5 ${children ? 'cursor-pointer' : ''} ${className}`}>
      <input
        type="checkbox"
        checked={on}
        onChange={() => {
          const next = !on;
          setOn(next);
          onChange?.(next);
        }}
        className="peer sr-only"
      />
      <span
        className={`mt-px grid size-5 shrink-0 place-items-center rounded-[5px] transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-primary/60 ${
          on ? 'bg-primary' : 'border-2 border-primary'
        }`}
      >
        {on ? <IconCheckMark /> : null}
      </span>
      {children}
    </label>
  );
}

function IconCheckMark() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 text-ink" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5 6.5 11.5 12.5 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** กล่องแจ้งเตือนในหน้า (error / warning / info) */
export function InlineAlert({
  tone = 'error',
  children,
}: {
  tone?: 'error' | 'warn' | 'info';
  children: ReactNode;
}) {
  const tones = {
    error: 'border-coral/50 bg-coral/[0.12] text-[#ffb08a]',
    warn: 'border-amber/40 bg-amber/[0.12] text-amber',
    info: 'border-primary/30 bg-primary/[0.1] text-primary',
  } as const;

  return (
    <div className={`flex items-start gap-2 rounded-[14px] border px-3 py-2.5 ${tones[tone]}`}>
      <span className="text-[13px] font-bold leading-[1.45]">!</span>
      <p className="text-xs leading-[1.45]">{children}</p>
    </div>
  );
}

/**
 * ช่องกรอก OTP 6 หลัก พิมพ์ได้จริง
 * - พิมพ์เลขแล้วเลื่อนไปช่องถัดไปเอง
 * - กด Backspace ในช่องว่างจะถอยไปลบช่องก่อนหน้า
 * - วางรหัสทั้งชุดทีเดียวได้ จะกระจายลงช่องให้เอง
 * code คือค่าตั้งต้น หลังจากนั้นเก็บสถานะเอง
 */
export function OtpBoxes({
  code = '',
  length = 6,
  onChange,
  onComplete,
}: {
  code?: string;
  length?: number;
  onChange?: (code: string) => void;
  onComplete?: (code: string) => void;
}) {
  const [digits, setDigits] = useState<string[]>(() =>
    Array.from({ length }, (_, i) => code[i] ?? ''),
  );
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const commit = (next: string[]) => {
    setDigits(next);
    const joined = next.join('');
    onChange?.(joined);
    if (next.every((d) => d !== '')) onComplete?.(joined);
  };

  /** เติมตัวเลขหลายตัวลงช่องตั้งแต่ตำแหน่ง i แล้วเลื่อนโฟกัสไปช่องถัดไป */
  const fillFrom = (i: number, chars: string) => {
    const next = [...digits];
    for (let k = 0; k < chars.length && i + k < length; k += 1) next[i + k] = chars[k];
    commit(next);
    refs.current[Math.min(i + chars.length, length - 1)]?.focus();
  };

  const handleKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (/^[0-9]$/.test(e.key)) {
      // ดักที่ keydown เอง เพราะถ้าพิมพ์เลขเดิมทับเลขเดิม input จะไม่ยิง onChange
      // ทำให้โฟกัสไม่เลื่อนไปช่องถัดไป
      e.preventDefault();
      fillFrom(i, e.key);
      return;
    }
    if (e.key === 'Backspace') {
      e.preventDefault();
      const next = [...digits];
      if (digits[i]) {
        next[i] = '';
        commit(next);
        return;
      }
      if (i > 0) {
        next[i - 1] = '';
        commit(next);
        refs.current[i - 1]?.focus();
      }
      return;
    }
    if (e.key === 'ArrowLeft' && i > 0) refs.current[i - 1]?.focus();
    if (e.key === 'ArrowRight' && i < length - 1) refs.current[i + 1]?.focus();
  };

  const handlePaste = (i: number, e: ClipboardEvent<HTMLInputElement>) => {
    const only = e.clipboardData.getData('text').replace(/\D/g, '');
    if (!only) return;
    e.preventDefault();
    fillFrom(i, only);
  };

  /** สำรองไว้เผื่อคีย์บอร์ดบนมือถือที่ไม่ยิง keydown เป็นตัวเลขตรง ๆ */
  const handleChange = (i: number, raw: string) => {
    const only = raw.replace(/\D/g, '');
    if (!only) {
      const next = [...digits];
      next[i] = '';
      commit(next);
      return;
    }
    fillFrom(i, only.length > 1 && only[0] === digits[i] ? only.slice(1) : only);
  };

  return (
    <div className="flex w-full items-center gap-2">
      {digits.map((char, i) => (
        <motion.input
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={char}
          inputMode="numeric"
          autoComplete="one-time-code"
          aria-label={`หลักที่ ${i + 1}`}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={(e) => handlePaste(i, e)}
          onFocus={(e) => e.target.select()}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.05 }}
          className={`h-14 w-[46px] rounded-[16px] border-[1.5px] bg-white/[0.06] text-center text-xl font-bold text-white outline-none transition-colors focus:border-primary ${
            char ? 'border-primary' : 'border-white/15'
          }`}
        />
      ))}
    </div>
  );
}

/** การ์ดหัวข้อ + เนื้อหา ใช้เยอะมากในหน้าข้อมูล */
export function InfoCard({
  title,
  titleTone = 'white',
  children,
}: {
  title: string;
  titleTone?: 'white' | 'primary' | 'coral' | 'green' | 'amber';
  children?: ReactNode;
}) {
  const tones = {
    white: 'text-white',
    primary: 'text-primary',
    coral: 'text-coral',
    green: 'text-primary-active',
    amber: 'text-amber',
  } as const;

  return (
    <div className="w-full rounded-[22px] bg-surface p-[14px]">
      <p className={`text-[13.5px] font-bold ${tones[titleTone]}`}>{title}</p>
      {children ? (
        <div className="mt-1 text-[12.5px] leading-[1.45] text-white/70">{children}</div>
      ) : null}
    </div>
  );
}

/** รายการหัวข้อย่อยพร้อมจุดนำหน้า */
export function BulletList({
  items,
  tone = 'coral',
}: {
  items: string[];
  tone?: 'coral' | 'green';
}) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((text) => (
        <li key={text} className="flex items-center gap-2.5">
          <span
            className={`size-1.5 shrink-0 rounded-full ${
              tone === 'coral' ? 'bg-coral' : 'bg-primary-active'
            }`}
          />
          <span className="flex-1 text-[13.5px] leading-[1.45] text-white">{text}</span>
        </li>
      ))}
    </ul>
  );
}

/** เกณฑ์วัดรหัสผ่าน ใช้ร่วมกันระหว่างแถบวัดกับรายการเช็กลิสต์ */
export const PASSWORD_RULES = [
  { key: 'length', text: '8 ตัวอักษรขึ้นไป', test: (pw: string) => pw.length >= 8 },
  { key: 'case', text: 'ตัวพิมพ์ใหญ่และพิมพ์เล็ก', test: (pw: string) => /[a-z]/.test(pw) && /[A-Z]/.test(pw) },
  { key: 'digit', text: 'ตัวเลขอย่างน้อย 1 ตัว', test: (pw: string) => /\d/.test(pw) },
  // ข้อนี้เป็นแค่คำแนะนำ ไม่บังคับ จึงไม่นับรวมตอนเช็กว่าผ่านเกณฑ์ครบหรือยัง
  { key: 'symbol', text: 'อักขระพิเศษ 1 ตัว (แนะนำ)', optional: true, test: (pw: string) => /[^A-Za-z0-9]/.test(pw) },
] as const;

/** นับว่ารหัสผ่านผ่านเกณฑ์กี่ข้อ (0-4) */
export function passwordScore(pw: string) {
  return PASSWORD_RULES.filter((r) => r.test(pw)).length;
}

const STRENGTH_LABEL = [
  'ความปลอดภัย: อ่อนมาก',
  'ความปลอดภัย: อ่อน',
  'ความปลอดภัย: พอใช้',
  'ความปลอดภัย: ดี',
  'ความปลอดภัย: ดีมาก',
];

/**
 * แถบวัดความแข็งแรงของรหัสผ่าน
 * ส่ง password เข้ามาเพื่อให้คำนวณสดตามที่พิมพ์
 * หรือจะกำหนด level/label เองก็ได้ (ใช้ตอนโชว์ดีไซน์นิ่ง ๆ)
 */
export function StrengthMeter({
  password,
  level,
  label,
}: {
  password?: string;
  level?: number;
  label?: string;
}) {
  const score = password !== undefined ? passwordScore(password) : (level ?? 3);
  const text = label ?? (password === '' ? 'ยังไม่ได้กรอกรหัสผ่าน' : STRENGTH_LABEL[score]);
  const tone = score <= 1 ? 'bg-coral' : score === 2 ? 'bg-amber' : 'bg-primary';
  const textTone = score <= 1 ? 'text-coral' : score === 2 ? 'text-amber' : 'text-primary';

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
            className={`h-[5px] flex-1 origin-left rounded-full transition-colors ${
              i < score ? tone : 'bg-white/[0.14]'
            }`}
          />
        ))}
      </div>
      <p className={`text-[11.5px] font-semibold transition-colors ${textTone}`}>{text}</p>
    </div>
  );
}

/** แท็บแบบขีดใต้ ใช้ซ้ำหลายหน้า */
export function Tabs({
  items,
  value,
  onChange,
  layoutId,
  className = '',
}: {
  items: string[];
  value: string;
  onChange: (v: string) => void;
  layoutId: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 border-b border-white/[0.09] px-5 pb-4 ${className}`}>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className="relative pb-[9px] text-[13px] font-semibold"
        >
          <span className={value === item ? 'text-primary' : 'text-white/55'}>{item}</span>
          {value === item && (
            <motion.span
              layoutId={layoutId}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"
            />
          )}
        </button>
      ))}
    </div>
  );
}

/** แถวข้อมูล label ซ้าย ค่า ขวา */
export function DataRow({
  label,
  value,
  tone = 'white',
}: {
  label: string;
  value: ReactNode;
  tone?: 'white' | 'primary' | 'coral';
}) {
  const tones = { white: 'text-white', primary: 'text-primary', coral: 'text-coral' } as const;
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <span className="text-[12.5px] text-white/60">{label}</span>
      <span className={`text-[13px] font-bold ${tones[tone]}`}>{value}</span>
    </div>
  );
}
