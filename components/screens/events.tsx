'use client';

import { motion } from 'framer-motion';
import { Img } from '../Surface';
import { IconArrowRight, IconCheck } from '../icons';
import { CountUp, ProgressBar } from '../motion';
import { AppBar, Block, Button, Checkbox, Screen } from '../ui';

/* ---------- Event - Detail (Joined) (262:2268) ---------- */

const EVENT_DAYS = [
  { label: 'จ', state: 'done' },
  { label: 'อ', state: 'done' },
  { label: 'พ', state: 'done' },
  { label: 'พฤ', state: 'today' },
  { label: 'ศ', state: 'todo' },
  { label: 'ส', state: 'todo' },
  { label: 'อา', state: 'todo' },
] as const;

export function EventDetailJoinedScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <AppBar title="" />

      <Block>
        <div className="relative h-[140px] w-full overflow-hidden rounded-[24px]">
          <Img name="event7DayStepsWide" alt="7 วัน 7 หมื่นก้าว" priority />
        </div>
      </Block>

      <Block>
        <span className="inline-block rounded-full bg-primary/[0.16] px-2.5 py-[5px] text-[11px] font-bold text-primary">
          เข้าร่วมแล้ว
        </span>
        <h1 className="pt-1.5 text-[22px] font-bold leading-[1.3] text-white">7 วัน 7 หมื่นก้าว</h1>
        <p className="pt-1.5 text-xs leading-[1.45] text-white">
          15 - 21 ก.ย. 2569 · ฟรี · ผู้เข้าร่วม 3,204 คน
        </p>
      </Block>

      <Block>
        <div className="rounded-[22px] border border-primary/45 bg-primary/[0.12] p-4">
          <p className="text-xs font-semibold text-white/85">ความคืบหน้าของคุณ</p>
          <div className="flex items-baseline justify-between py-2">
            <span className="text-[26px] font-bold text-primary">
              <CountUp value={42180} duration={1.2} />
            </span>
            <span className="text-xs text-white">/ 70,000 ก้าว</span>
          </div>
          <ProgressBar percent={60} height={8} />
          <p className="pt-2 text-[11.5px] leading-[1.45] text-white">
            เหลืออีก 27,820 ก้าว · 3 วัน · เฉลี่ยวันละ 9,274 ก้าว
          </p>
        </div>
      </Block>

      <Block>
        <p className="pb-2 text-[13.5px] font-bold text-white">รายวัน</p>
        <div className="flex items-center justify-between">
          {EVENT_DAYS.map((d, i) => (
            <div key={d.label} className="flex flex-col items-center gap-1.5">
              <motion.span
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className={`grid size-9 place-items-center rounded-[12px] ${
                  d.state === 'done'
                    ? 'bg-primary'
                    : d.state === 'today'
                      ? 'bg-primary/35'
                      : 'bg-white/[0.08]'
                }`}
              >
                {d.state === 'done' ? <IconCheck className="size-6 text-ink" /> : null}
              </motion.span>
              <span className="text-xs font-semibold text-white">{d.label}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block>
        <div className="rounded-[22px] bg-surface p-[14px]">
          <p className="pb-2 text-[13.5px] font-bold text-white">รางวัลเมื่อทำสำเร็จ</p>
          <ul className="flex flex-col gap-2">
            {[
              'เหรียญดิจิทัล "7 วัน 7 หมื่นก้าว"',
              '+1,000 pt เข้าบัญชีทันที',
              'สิทธิ์ลุ้นรางวัลรอบพิเศษ 3 สิทธิ์',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-xs font-bold text-primary">•</span>
                <span className="flex-1 text-xs leading-[1.45] text-white">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Block>

      <Block className="flex flex-col gap-4">
        <Button to="ranking" className="py-[15px] text-[15px]">
          ดูอันดับในอีเวนต์
        </Button>
        <Button
          to="event-leave-confirm"
          variant="secondary"
          className="border-coral/50 bg-transparent py-[15px] text-[15px] text-coral"
        >
          ออกจากอีเวนต์
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Event - Join Confirm (219:290) ---------- */

export function EventJoinConfirmScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2.5">
        <AppBar title="รายละเอียดอีเวนต์" />

        <Block>
          <div className="relative h-[290px] overflow-hidden rounded-[24px] p-4">
            <Img name="event7DaySteps" alt="7 วัน 7 หมื่นก้าว" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-violet/45 to-ink/[0.92]" />
            <div className="relative flex h-full flex-col justify-between">
              <span className="w-fit rounded-full bg-primary px-[11px] py-[5px] text-[10px] font-semibold tracking-[0.6px] text-ink">
                เปิดรับสมัคร เริ่ม 15 ต.ค.
              </span>
              <div className="flex flex-col gap-2.5">
                <p className="text-[21px] font-bold leading-[1.15] text-white">7 วัน 7 หมื่นก้าว</p>
                <div className="flex items-start gap-2">
                  {[
                    ['ผู้เข้าร่วม', '3,204'],
                    ['ระยะเวลา', '7 วัน'],
                    ['ค่าเข้าร่วม', 'ฟรี'],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-1 flex-col gap-0.5 rounded-[18px] bg-white/[0.16] px-3 py-[11px]"
                    >
                      <span className="text-[11.5px] text-primary">{k}</span>
                      <span className="text-lg font-bold text-white">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] border border-hairline bg-surface p-4">
            {[
              ['เป้าหมาย', '70,000 ก้าว', true],
              ['รางวัลเมื่อสำเร็จ', 'เหรียญ + 1,000 แต้ม', false],
              ['ช่วงเวลา', '15–21 ต.ค. 2569', false],
              ['ประเภท', 'เดี่ยว ทุกระดับ', false],
            ].map(([k, v, hi], i) => (
              <div key={k as string}>
                <div className="flex items-center justify-between py-1.5 text-sm">
                  <span className="text-white">{k}</span>
                  <span className={hi ? 'text-primary' : 'text-white'}>{v}</span>
                </div>
                {i === 0 ? <div className="my-1 h-px bg-white/[0.07]" /> : null}
              </div>
            ))}
          </div>
        </Block>

        <Block className="flex items-center gap-2.5">
          <Checkbox checked />
          <p className="flex-1 text-xs text-white">ฉันยอมรับกติกาและเงื่อนไขของอีเวนต์นี้</p>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-4 px-4 pb-6 pt-6">
        <Block>
          <Button to="event-joined" className="h-[54px] text-[15px]">
            ยืนยันเข้าร่วม
            <IconArrowRight className="size-[18px]" />
          </Button>
        </Block>
        <Block>
          <Button variant="secondary" className="h-[50px] text-sm">
            ไว้ก่อน
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Event - Joined (219:354) ---------- */

export function EventJoinedScreen() {
  return (
    <div className="flex min-h-[736px] flex-col items-center gap-4 px-4 pb-5 pt-3">
      <div className="flex w-full justify-end">
        <span className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-[15px] font-bold text-white/70">
          ✕
        </span>
      </div>

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

      <p className="text-[25px] font-bold text-white">เข้าร่วมแล้ว!</p>
      <p className="text-center text-sm leading-[1.45] text-white/60">
        คุณอยู่ในอีเวนต์ &lsquo;7 วัน 7 หมื่นก้าว&rsquo; แล้ว เริ่มนับก้าวตั้งแต่ 15 ต.ค. เป็นต้นไป
      </p>

      <div className="w-full rounded-[24px] border border-hairline bg-surface p-4">
        {[
          ['เป้าหมาย', '70,000 ก้าว'],
          ['ช่วงเวลา', '15–21 ต.ค. 2569'],
          ['รางวัลเมื่อสำเร็จ', 'เหรียญ + 1,000 แต้ม'],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between py-1.5">
            <span className="text-[12.5px] text-white/55">{k}</span>
            <span className="text-[13px] font-bold text-white">{v}</span>
          </div>
        ))}
        <div className="my-2.5 h-px bg-white/[0.08]" />
        <p className="text-center text-[11.5px] text-white/50">
          เราจะเตือนคุณอีกครั้งในวันที่อีเวนต์เริ่ม
        </p>
      </div>

      <div className="flex-1" />

      <div className="flex w-full flex-col gap-2.5">
        <Button to="event-invite-friends" className="h-[54px] text-[15px]">
          ชวนเพื่อนมาร่วมด้วย
          <IconArrowRight className="size-[18px]" />
        </Button>
        <Button to="event-detail-joined" variant="secondary" className="h-[50px] text-sm">
          ดูรายละเอียดอีเวนต์
        </Button>
      </div>
    </div>
  );
}

/* ---------- Event - Leave Confirm (277:955) ---------- */

const LOSS_ITEMS = [
  ['ความคืบหน้า 42,180 ก้าว', 'เริ่มนับใหม่จาก 0 ถ้าสมัครอีกครั้ง'],
  ['เหรียญดิจิทัล 7 วัน 7 หมื่นก้าว', 'ได้เมื่อทำครบเท่านั้น'],
  ['โบนัส +1,000 pt', 'จ่ายเมื่อจบอีเวนต์'],
  ['สิทธิ์ลุ้นรางวัลรอบพิเศษ', 'เฉพาะผู้ที่ทำสำเร็จ'],
];

export function EventLeaveConfirmScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 16 }}
            className="grid size-14 place-items-center rounded-full bg-coral/[0.16]"
          >
            <span className="text-[26px] font-bold text-coral">!</span>
          </motion.div>
        </Block>

        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">
            ออกจาก &lsquo;7 วัน 7 หมื่นก้าว&rsquo;?
          </h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            คุณเดินไปแล้ว 42,180 ก้าว คิดเป็น 60% ของเป้าหมาย ออกตอนนี้ความคืบหน้าจะไม่ถูกเก็บไว้
          </p>
        </Block>

        <Block>
          <div className="rounded-[24px] border border-coral/40 bg-coral/[0.08] p-4">
            <p className="pb-3 text-xs font-semibold text-coral">สิ่งที่จะเสียไป</p>
            <div className="flex flex-col gap-3">
              {LOSS_ITEMS.map(([title, meta]) => (
                <div key={title} className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-coral" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-medium text-white">{title}</p>
                    <p className="text-[11px] text-white/45">{meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-white/[0.04] p-4">
            <p className="text-[12.5px] font-semibold text-primary-active">สิ่งที่ยังอยู่</p>
            <p className="pt-1.5 text-xs leading-[1.45] text-white/55">
              แต้มจากกิจกรรมที่ทำไปแล้วยังอยู่ครบ และสมัครกลับเข้าอีเวนต์ได้ถ้ายังไม่ปิดรับ
              (เหลืออีก 4 วัน)
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="event-detail-joined" className="h-12 text-lg">
            อยู่ต่อ ลุยให้จบ
          </Button>
        </Block>
        <Block>
          <Button
            to="events"
            variant="secondary"
            className="h-12 border-[#f5222d] bg-white text-lg text-[#cf1322]"
          >
            ยืนยันออกจากอีเวนต์
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Event - Invite Friends (277:1035) ---------- */

const FRIENDS = [
  { initial: 'บี', name: 'บีม ส.', meta: 'เข้าร่วมแล้ว', joined: true },
  { initial: 'นิ', name: 'นิดา ร.', meta: 'ชวนแล้ว รอตอบรับ', joined: false },
  { initial: 'ต้', name: 'ต้าร์ ว.', meta: 'อยู่คลับเดียวกัน', joined: false },
  { initial: 'โบ', name: 'โบว์ ก.', meta: 'เพิ่งเข้าร่วมแอป', joined: false },
];

export function EventInviteFriendsScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">ชวนเพื่อนมาลุยด้วยกัน</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            อีเวนต์ 7 วัน 7 หมื่นก้าว · เริ่ม 15 ต.ค. · เข้าร่วมฟรี
          </p>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-primary/10 p-4">
            <div className="flex items-center gap-2 pb-2">
              <span className="flex-1 text-xs font-semibold text-primary">โบนัสผู้ชวน</span>
              <span className="text-[11.5px] text-white/60">ชวนแล้ว 1 / 3 คน</span>
            </div>
            <ProgressBar percent={33} height={6} />
            <p className="pt-2 text-xs text-white/55">
              ชวนเพื่อนเข้าร่วมครบ 3 คน รับ +100 pt เมื่ออีเวนต์เริ่ม
            </p>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-2.5 text-xs font-semibold text-white/55">ลิงก์ชวนของคุณ</p>
            <div className="flex items-center gap-2.5 rounded-[18px] bg-surface px-[14px] py-3">
              <span className="min-w-0 flex-1 truncate text-[12.5px] text-white/70">
                thaimove.app/e/7d70k?ref=somchawee
              </span>
              <button type="button" className="shrink-0 text-xs font-semibold text-primary">
                คัดลอก
              </button>
            </div>
            <div className="flex items-center gap-2.5 pt-2.5">
              {['LINE', 'ข้อความ', 'QR code'].map((s) => (
                <motion.button
                  key={s}
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 rounded-[18px] bg-surface px-2.5 py-3 text-xs font-medium text-white/80"
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <div className="flex items-center gap-2 pb-3">
              <span className="flex-1 text-xs font-semibold text-white/55">เพื่อนในแอป</span>
              <button type="button" className="text-[11.5px] font-medium text-primary">
                เลือกทั้งหมด
              </button>
            </div>
            {FRIENDS.map((f, i) => (
              <div key={f.name}>
                <div className="flex items-center gap-3 py-2">
                  <span className="grid size-[38px] shrink-0 place-items-center rounded-full bg-white/10 text-[13px] font-bold text-white/80">
                    {f.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-medium text-white">{f.name}</p>
                    <p className="truncate text-[11px] text-white/45">{f.meta}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-[7px] text-[11.5px] font-medium ${
                      f.joined
                        ? 'bg-primary-active/[0.16] text-primary-active'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {f.joined ? 'เข้าร่วมแล้ว' : 'ชวน'}
                  </span>
                </div>
                {i < FRIENDS.length - 1 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="event-detail-joined" className="h-12 text-lg">
            ส่งคำชวน 3 คน
          </Button>
        </Block>
        <Block>
          <Button to="events" variant="ghost" className="h-12 text-lg">
            ข้ามไปก่อน
          </Button>
        </Block>
      </div>
    </div>
  );
}
