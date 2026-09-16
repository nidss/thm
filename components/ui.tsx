'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { IconArrowLeft, IconChevronRight } from './icons';
import { listStagger, riseItem } from './motion';
import { useNav } from './nav';
import type { ScreenSlug } from './screenList';

/* ---------- โลโก้ ---------- */

/**
 * โลโก้ ThaiMove
 * หมายเหตุ: ไม่มีไฟล์โลโก้ต้นฉบับส่งมา จึงประกอบขึ้นจากตัวอักษรให้ใกล้เคียงของเดิม
 * (มอโนแกรม TM ทับกัน + เวิร์ดมาร์ก THAIMOVE ด้านล่าง)
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="font-display text-[44px] leading-[0.82] tracking-[-2px] text-white">
        T<span className="text-primary">M</span>
      </span>
      <span className="mt-1 font-display text-[13px] leading-none tracking-[1.5px] text-white">
        THAIMOVE
      </span>
    </div>
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

/** ช่องกรอกข้อมูลตามดีไซน์: label สีฟ้า + กล่องพื้นขาว */
export function Field({
  label,
  placeholder,
  value,
  type = 'text',
  right,
  error,
  hint,
}: {
  label: string;
  placeholder?: string;
  value?: string;
  type?: string;
  right?: ReactNode;
  error?: string;
  hint?: string;
}) {
  return (
    <label className="flex w-full flex-col gap-1.5">
      <span className="text-[16px] font-medium text-primary">{label}</span>
      <span
        className={`flex h-12 items-center gap-2 rounded-[6px] bg-white px-4 ${
          error ? 'border-b-2 border-[#ff4d4f]' : 'border-b border-[#d9d9d9]'
        }`}
      >
        <input
          type={type}
          defaultValue={value}
          placeholder={placeholder ?? 'Placeholder'}
          className="min-w-0 flex-1 bg-transparent text-[16px] text-[#1f1f1f] outline-none placeholder:text-[#8c8c8c]"
        />
        {right}
      </span>
      {error ? <span className="text-[11.5px] text-[#ff7875]">{error}</span> : null}
      {hint && !error ? <span className="text-[11.5px] text-white/45">{hint}</span> : null}
    </label>
  );
}

/** สวิตช์เปิด/ปิด */
export function Toggle({ on = false }: { on?: boolean }) {
  return (
    <span
      className={`flex h-[26px] w-[44px] shrink-0 items-center rounded-full p-[3px] transition-colors ${
        on ? 'bg-primary' : 'bg-white/20'
      }`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 34 }}
        className={`block size-5 rounded-full bg-white ${on ? 'ml-auto' : ''}`}
      />
    </span>
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
}: {
  label?: string;
  value?: string;
  placeholder?: string;
  hint?: string;
  type?: string;
  right?: ReactNode;
  error?: string;
}) {
  return (
    <label className="flex w-full flex-col gap-1.5">
      {label ? <span className="text-xs font-semibold text-white/60">{label}</span> : null}
      <span
        className={`flex items-center gap-2 rounded-[16px] border bg-white/[0.06] px-4 py-[14px] ${
          error ? 'border-coral/60' : 'border-white/[0.14]'
        }`}
      >
        <input
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:font-normal placeholder:text-white/35"
        />
        {right}
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
}: {
  label?: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="flex w-full flex-col gap-1.5">
      {label ? <span className="text-xs font-semibold text-white/60">{label}</span> : null}
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-none rounded-[16px] border border-white/[0.14] bg-white/[0.06] px-4 py-[14px] text-sm text-white outline-none placeholder:text-white/35"
      />
    </label>
  );
}

export function Checkbox({ checked = false }: { checked?: boolean }) {
  return (
    <span
      className={`mt-px grid size-5 shrink-0 place-items-center rounded-[5px] ${
        checked ? 'bg-primary' : 'border-2 border-primary'
      }`}
    >
      {checked ? <IconCheckMark /> : null}
    </span>
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

/** ช่องกรอก OTP 6 หลัก */
export function OtpBoxes({ code = '', length = 6 }: { code?: string; length?: number }) {
  return (
    <div className="flex w-full items-center gap-2">
      {Array.from({ length }).map((_, i) => {
        const char = code[i];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05 }}
            className={`flex h-14 w-[46px] items-center justify-center rounded-[16px] border-[1.5px] bg-white/[0.06] ${
              char ? 'border-primary' : 'border-white/15'
            }`}
          >
            <span className="text-xl font-bold text-white">{char ?? ''}</span>
          </motion.div>
        );
      })}
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

/** แถบวัดความแข็งแรงของรหัสผ่าน */
export function StrengthMeter({ level = 3, label = 'ความปลอดภัย: ดี' }: { level?: number; label?: string }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
            className={`h-[5px] flex-1 origin-left rounded-full ${
              i < level ? 'bg-primary' : 'bg-white/[0.14]'
            }`}
          />
        ))}
      </div>
      <p className="text-[11.5px] font-semibold text-primary">{label}</p>
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
