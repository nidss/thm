'use client';

import { motion } from 'framer-motion';
import {
  IconApple,
  IconBarbell,
  IconBike,
  IconCheck,
  IconDots,
  IconGoogle,
  IconHeartbeat,
  IconHelpCircle,
  IconRefresh,
  IconRun,
  IconShieldCheck,
  IconStrava,
  IconSwim,
  IconWalk,
} from '../icons';
import { CountUp, ProgressBar } from '../motion';
import { AppBar, Block, Button, InfoCard, Screen } from '../ui';

/* ---------- Connect apps (195:2) ---------- */

const APPS = [
  {
    name: 'Strava',
    desc: 'วิ่ง ปั่น ว่ายน้ำ',
    icon: <IconStrava className="size-[21px] text-[#fc4c02]" />,
    iconBg: 'bg-[#fc4c02]/[0.16]',
    connected: true,
  },
  {
    name: 'Apple Health',
    desc: 'ก้าว แคลอรี หัวใจ',
    icon: <IconApple className="size-[21px] text-white" />,
    iconBg: 'bg-white/10',
    connected: true,
  },
  {
    name: 'Google Fit',
    desc: 'ก้าว Move Minutes',
    icon: <IconGoogle className="size-[21px] text-[#4285f4]" />,
    iconBg: 'bg-[#4285f4]/[0.16]',
    connected: false,
  },
  {
    name: 'Samsung Health',
    desc: 'ก้าว การนอน ออกกำลังกาย',
    icon: <span className="text-base font-bold text-[#6fa8e8]">S</span>,
    iconBg: 'bg-[#1770d1]/[0.18]',
    connected: false,
  },
  {
    name: 'Huawei Health',
    desc: 'ก้าว ออกกำลังกาย',
    icon: <IconHeartbeat className="size-[21px] text-[#f5222d]" />,
    iconBg: 'bg-[#f5222d]/[0.16]',
    connected: false,
  },
];

export function ConnectAppsScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 pt-3">
        <Block className="flex items-center gap-[13px] px-4">
          <BackButton />
          <ProgressBar percent={33} height={5} delay={0.1} />
          <span className="shrink-0 text-[11.5px] font-semibold text-white/50">1/2</span>
        </Block>

        <Block className="px-4 pt-3">
          <h1 className="text-[30px] font-semibold leading-[1.15] text-white">
            เชื่อมต่อแอป
            <br />
            ออกกำลังกาย
          </h1>
        </Block>

        <Block className="px-4">
          <p className="text-sm text-white">เลือกได้มากกว่า 1 แอป ระบบจะซิงก์สถิติให้อัตโนมัติทุกวัน</p>
        </Block>

        <Block className="flex flex-col gap-2 px-4">
          {APPS.map((app) => (
            <motion.div
              key={app.name}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`flex items-center gap-3 rounded-[24px] border px-[14px] py-[13px] ${
                app.connected
                  ? 'border-primary/40 bg-primary/10'
                  : 'border-hairline bg-surface'
              }`}
            >
              <span className={`grid size-10 shrink-0 place-items-center rounded-full ${app.iconBg}`}>
                {app.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-white">{app.name}</p>
                <p className="truncate text-xs text-primary">{app.desc}</p>
              </div>
              {app.connected ? (
                <span className="grid size-[26px] shrink-0 place-items-center rounded-full bg-primary">
                  <IconCheck className="size-[15px] text-ink" />
                </span>
              ) : (
                <span className="size-[26px] shrink-0 rounded-full border-[1.5px] border-white/25" />
              )}
            </motion.div>
          ))}
        </Block>

        <Block className="px-4">
          <div className="flex items-center gap-2.5 rounded-[20px] bg-white/[0.04] px-[14px] py-3">
            <IconShieldCheck className="size-[18px] shrink-0 text-lime" />
            <p className="flex-1 text-[11.5px] leading-[1.55] text-lime">
              เราอ่านเฉพาะสถิติกิจกรรม ไม่เข้าถึงข้อมูลสุขภาพส่วนตัว และยกเลิกได้ทุกเมื่อ
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto px-4 pb-11 pt-6">
        <Block>
          <Button to="set-goals" arrow className="h-[54px] text-lg">
            เชื่อมแล้ว 2 แอป - ถัดไป
          </Button>
        </Block>
      </div>
    </div>
  );
}

function BackButton() {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.07]">
      <svg viewBox="0 0 24 24" className="size-[18px] text-white" fill="none" aria-hidden="true">
        <path
          d="M14.5 5.5 8.5 12l6 6.5"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ---------- Set goals (196:2) ---------- */

const SPORTS = [
  { label: 'วิ่ง', icon: IconRun, on: true },
  { label: 'เดิน', icon: IconWalk, on: true },
  { label: 'ปั่นจักรยาน', icon: IconBike, on: false },
  { label: 'ว่ายน้ำ', icon: IconSwim, on: false },
  { label: 'ฟิตเนส', icon: IconBarbell, on: false },
  { label: 'อื่น ๆ', icon: IconDots, on: false },
];

const FREQUENCIES = [
  { label: '2 วัน เริ่มเบา ๆ', points: '~600 pt/ด.', on: false },
  { label: '3 วัน กำลังดี', points: '~1,000 pt/ด.', on: true },
  { label: '5 วัน จัดเต็ม', points: '~1,800 pt/ด.', on: false },
];

export function SetGoalsScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-2 pt-3">
        <Block className="flex items-center gap-[13px] px-4">
          <BackButton />
          <ProgressBar percent={100} height={5} delay={0.1} />
          <span className="shrink-0 text-[11.5px] font-semibold text-white/50">2/2</span>
        </Block>

        <Block className="px-4 pt-3">
          <h1 className="text-[30px] font-semibold leading-[1.15] text-white">
            ตั้งเป้าหมาย
            <br />
            แบบไม่กดดัน
          </h1>
        </Block>

        <Block className="px-4 py-2">
          <p className="text-[13px] leading-[1.6] text-white">
            ปรับได้ทุกเมื่อ เป้าหมายมีไว้ให้สนุก ไม่ใช่ให้เครียด
          </p>
        </Block>

        <Block className="px-4 py-2">
          <p className="text-sm text-primary">กีฬาที่เล่นบ่อย</p>
        </Block>

        <Block className="flex flex-wrap gap-2 px-4 pb-[22px]">
          {SPORTS.map(({ label, icon: Icon, on }) => (
            <motion.button
              key={label}
              type="button"
              whileTap={{ scale: 0.94 }}
              className={`flex items-center gap-1.5 rounded-full px-[14px] py-[9px] ${
                on ? 'bg-primary' : 'border border-white/10 bg-surface'
              }`}
            >
              <Icon className={`size-4 ${on ? 'text-ink' : 'text-white/70'}`} />
              <span className={`text-xs font-bold ${on ? 'text-ink' : 'text-white/70'}`}>
                {label}
              </span>
            </motion.button>
          ))}
        </Block>

        <Block className="px-4 py-2">
          <p className="text-xs font-bold text-[#00ebc4]">ขยับกี่วันต่อสัปดาห์</p>
        </Block>

        <Block className="flex flex-col gap-[9px] px-4">
          {FREQUENCIES.map((f) => (
            <motion.div
              key={f.label}
              whileHover={{ scale: 1.01 }}
              className={`flex items-center gap-3 rounded-[22px] border px-4 py-[14px] ${
                f.on ? 'border-primary/40 bg-primary/10' : 'border-hairline bg-surface'
              }`}
            >
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-full border-2 ${
                  f.on ? 'border-primary' : 'border-white/25'
                }`}
              >
                {f.on ? <span className="size-2.5 rounded-full bg-primary" /> : null}
              </span>
              <p className="min-w-0 flex-1 text-sm font-bold text-white">{f.label}</p>
              <span
                className={`shrink-0 rounded-full px-2.5 py-[3px] text-xs ${
                  f.on ? 'bg-primary text-ink' : 'bg-white/[0.08] text-white/65'
                }`}
              >
                {f.points}
              </span>
            </motion.div>
          ))}
        </Block>

        <Block className="px-4 pt-2">
          <div
            className="rounded-[24px] px-4 py-[14px] text-white"
            style={{
              backgroundImage:
                'linear-gradient(24.27deg, rgb(107,99,255) 14.6%, rgb(71,66,219) 87.59%)',
            }}
          >
            <p className="text-xs font-bold underline">กติกาแต้ม</p>
            <p className="pt-1.5 text-sm leading-[1.5]">
              วิ่ง 1 กม. = 10 pt เดิน 1 กม. = 6 pt ปั่น 1 กม. = 4 pt สูงสุด 300 pt/วัน พักได้ไม่ต้องรีบ
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto px-4 pb-11 pt-6">
        <Block>
          <Button to="permission-notification" arrow className="h-[54px] text-lg">
            เข้าใช้งาน ThaiMove
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Permission - Notification (262:1944) ---------- */

export function PermissionNotificationScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <AppBar title="" />
      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">เปิดแจ้งเตือนไหม?</h1>
        <p className="pt-1.5 text-[13px] leading-[1.45] text-white">
          เราจะเตือนเฉพาะเรื่องที่คุณได้ประโยชน์ ปิดได้ทุกเมื่อในโปรไฟล์
        </p>
      </Block>

      <Block className="flex flex-col gap-2">
        <InfoCard title="สรุปแต้มรายวัน">บอกว่าวันนี้ได้กี่แต้ม และเหลืออีกเท่าไหร่ถึงเป้า</InfoCard>
        <InfoCard title="เตือนก่อนแต้มหมดอายุ">ล่วงหน้า 7 วัน จะได้แลกทัน</InfoCard>
        <InfoCard title="ผลจับรางวัลและอีเวนต์">รู้ผลทันทีที่ประกาศ</InfoCard>
        <InfoCard title="คลับของคุณนัดซ้อม">เฉพาะคลับที่คุณเข้าร่วมเท่านั้น</InfoCard>
      </Block>

      <Block>
        <InfoCard title="เราจะไม่ส่ง" titleTone="primary">
          โฆษณาแบบสุ่ม หรือแจ้งเตือนกลางดึก (22:00 - 07:00 เงียบเสมอ)
        </InfoCard>
      </Block>

      <Block className="flex flex-col gap-4 pt-2">
        <Button to="sync-loading" className="py-[15px] text-[15px]">
          เปิดแจ้งเตือน
        </Button>
        <Button to="dashboard" variant="secondary" className="py-[15px] text-[15px]">
          ไว้ทีหลัง
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Sync - Loading (220:320) ---------- */

export function SyncLoadingScreen() {
  return (
    <div className="flex min-h-[736px] flex-col items-center px-6 pb-5 pt-2.5">
      <CloseRow />
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        {/* วงแหวนหมุนสื่อว่ากำลังดึงข้อมูล */}
        <div className="relative grid size-24 place-items-center">
          <motion.span
            className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
          />
          <IconRefresh className="size-9 text-primary" />
        </div>
        <p className="text-[25px] font-bold text-white">กำลังซิงก์…</p>
        <p className="text-center text-sm text-white">
          กำลังดึงกิจกรรมล่าสุดจากแอปที่คุณเชื่อมต่อไว้
        </p>

        <div className="mt-2 w-full rounded-[24px] border border-hairline bg-surface p-4">
          {[
            { name: 'Strava', done: true },
            { name: 'Apple Health', done: false },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between py-1.5">
              <span className="text-[13.5px] font-bold text-white">{s.name}</span>
              {s.done ? (
                <span className="text-xs font-bold text-primary-active">สำเร็จ</span>
              ) : (
                <motion.span
                  className="text-xs font-bold text-white/50"
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  กำลังซิงก์…
                </motion.span>
              )}
            </div>
          ))}
          <div className="mt-3">
            <ProgressBar percent={62} height={5} />
          </div>
        </div>
      </div>

      <div className="w-full">
        <Button to="sync-success" variant="secondary" className="h-[50px] text-sm">
          ซิงก์เบื้องหลัง
        </Button>
      </div>
    </div>
  );
}

function CloseRow() {
  return (
    <div className="flex w-full justify-end">
      <span className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-[15px] font-bold text-white/70">
        ✕
      </span>
    </div>
  );
}

/* ---------- Sync - Success (220:384) ---------- */

export function SyncSuccessScreen() {
  return (
    <div className="flex min-h-[736px] flex-col items-center gap-4 px-6 pb-5 pt-2.5">
      <CloseRow />
      <div className="flex-1" />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 16 }}
        className="grid size-24 place-items-center rounded-full bg-primary/[0.14]"
      >
        <span className="grid size-[70px] place-items-center rounded-full bg-primary">
          <IconCheck className="size-[34px] text-ink" />
        </span>
      </motion.div>

      <p className="text-[25px] font-bold text-white">ซิงก์สำเร็จ</p>
      <p className="text-center text-sm text-white">อัปเดตกิจกรรมล่าสุดเรียบร้อยแล้ว</p>

      <div className="w-full rounded-[24px] border border-hairline bg-surface p-4">
        <div className="flex items-center justify-center gap-1.5 text-primary">
          <span className="text-[40px] font-bold tracking-[-1px]">
            +<CountUp value={124} duration={1} />
          </span>
          <span className="text-base font-semibold">pt</span>
        </div>
        <p className="text-center text-xs text-white">แต้มที่ได้รับจากการซิงก์นี้</p>

        <div className="my-4 h-px bg-white/[0.08]" />

        {[
          { icon: IconRun, title: 'วิ่งเช้า 5.2 กม.', meta: 'Strava 06:12 ยืนยันแล้ว', pt: '+52' },
          { icon: IconBike, title: 'ปั่นเลียบคลอง 18 กม.', meta: 'Apple Health 17:40', pt: '+72' },
        ].map(({ icon: Icon, title, meta, pt }) => (
          <div key={title} className="flex items-center gap-3 py-2">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/[0.08]">
              <Icon className="size-[18px] text-primary" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13.5px] font-bold text-white">{title}</p>
              <p className="truncate text-[11.5px] text-primary-active">{meta}</p>
            </div>
            <span className="text-[15px] font-bold text-primary">{pt}</span>
          </div>
        ))}

        <div className="my-4 h-px bg-white/[0.08]" />
        <p className="text-center text-[11.5px] text-white">ซิงก์เมื่อ 09:41 น. พบ 2 กิจกรรมใหม่</p>
      </div>

      <div className="flex-1" />

      <div className="flex w-full flex-col gap-4">
        <Button to="activity" className="h-[54px] text-[15px]">
          ดูกิจกรรมทั้งหมด
        </Button>
        <Button to="dashboard" variant="secondary" className="h-[50px] text-sm">
          เสร็จสิ้น
        </Button>
      </div>
    </div>
  );
}

/* ---------- Sync - Error (220:448) ---------- */

export function SyncErrorScreen() {
  return (
    <div className="flex min-h-[736px] flex-col items-center gap-3.5 px-6 pb-5 pt-2.5">
      <CloseRow />
      <div className="flex-1" />

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 16 }}
        className="grid size-[90px] place-items-center rounded-full bg-[#ff6b6b]/15"
      >
        <IconRefresh className="size-10 text-[#ff6b6b]" />
      </motion.div>

      <p className="text-[25px] font-bold text-white">ซิงก์ไม่สำเร็จ</p>
      <p className="text-center text-sm leading-[1.4] text-white">
        เชื่อมต่อกับ Strava ไม่ได้ กิจกรรมบางส่วนอาจยังไม่อัปเดต
      </p>

      <div className="flex w-full flex-col gap-3.5 rounded-[22px] border border-hairline bg-surface p-[14px]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-white/[0.08]">
              <IconStrava className="size-[18px] text-[#fc4c02]" />
            </span>
            <span className="text-[13.5px] font-bold text-white">Strava</span>
          </span>
          <span className="text-xs font-bold text-[#ff6b6b]">เชื่อมต่อไม่ได้</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-white/[0.08]">
              <IconApple className="size-[18px] text-white" />
            </span>
            <span className="text-[13.5px] font-bold text-white">Apple Health</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="grid size-[22px] place-items-center rounded-full bg-primary-active/[0.16]">
              <IconCheck className="size-3 text-primary-active" />
            </span>
            <span className="text-xs font-bold text-primary-active">สำเร็จ</span>
          </span>
        </div>
      </div>

      <div className="flex w-full items-start gap-2.5 pl-0.5">
        <IconHelpCircle className="size-[18px] shrink-0 text-white" />
        <p className="flex-1 text-xs leading-[1.35] text-white">
          ลองตรวจสอบอินเทอร์เน็ต แล้วซิงก์ใหม่ หรือเชื่อมต่อ Strava อีกครั้งในหน้าโปรไฟล์
        </p>
      </div>

      <p className="text-center text-[11px] text-white">รหัสข้อผิดพลาด: SYNC_503</p>

      <div className="flex-1" />

      <div className="flex w-full flex-col gap-4">
        <Button to="sync-loading" className="h-[54px] text-[15px]">
          <IconRefresh className="size-[18px]" />
          ลองซิงก์ใหม่
        </Button>
        <Button to="connected-app-manage" variant="secondary" className="h-[50px] text-sm">
          จัดการแอปที่เชื่อมต่อ
        </Button>
      </div>
    </div>
  );
}
