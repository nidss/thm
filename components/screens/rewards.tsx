'use client';

import { motion } from 'framer-motion';
import { FixedImg, Img } from '../Surface';
import { IconArrowRight, IconCheck, IconFlame } from '../icons';
import { CountUp, ProgressBar, riseItem } from '../motion';
import { AppBar, Block, Button, Card, DataRow, Screen } from '../ui';

/* ---------- Reward - Detail (260:1601) ---------- */

const TERMS = [
  'ใช้ได้ที่สาขาที่ร่วมรายการทั่วประเทศ',
  'แสดงโค้ดให้พนักงานก่อนชำระเงิน',
  'ใช้ได้ 1 ครั้ง ต่อ 1 โค้ด ใช้ร่วมโปรโมชันอื่นไม่ได้',
  'โค้ดมีอายุ 30 วันหลังกดแลก',
  'แลกแล้วไม่สามารถคืนแต้มได้',
];

export function RewardDetailScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <AppBar title="" />

      <Block>
        <div className="relative h-[170px] w-full overflow-hidden rounded-[24px]">
          <Img name="rewardCafeAmazon" alt="คูปองกาแฟ Café Amazon" priority />
        </div>
      </Block>

      <Block>
        <p className="text-[11px] font-bold text-primary">CAFÉ AMAZON</p>
        <h1 className="pt-2 text-[19px] font-bold leading-[1.35] text-white">
          คูปองกาแฟฟรี 1 แก้ว (ร้อน/เย็น)
        </h1>
        <div className="flex items-center gap-2 pt-2">
          <span className="text-base font-bold text-primary">120 pt</span>
          <span className="text-xs text-white/60">· เหลือ 86 สิทธิ์</span>
        </div>
      </Block>

      <Block>
        <ProgressBar percent={60} height={6} />
        <p className="pt-1.5 text-[11.5px] text-white/60">แลกไปแล้ว 214 จาก 300 สิทธิ์</p>
      </Block>

      <Block>
        <div className="rounded-[22px] bg-surface p-[14px]">
          <p className="pb-2 text-[13.5px] font-bold text-white">เงื่อนไขการใช้</p>
          <ul className="flex flex-col gap-2">
            {TERMS.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-xs font-bold text-primary">•</span>
                <span className="flex-1 text-xs leading-[1.45] text-white/70">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Block>

      <Block>
        <div className="rounded-[22px] border border-amber/45 bg-amber/10 p-[14px]">
          <p className="text-[12.5px] font-bold text-amber">แลกแล้วเปลี่ยนใจไม่ได้</p>
          <p className="pt-1 text-xs leading-[1.45] text-white/70">
            ระบบจะตัดแต้ม 120 pt ทันทีที่ยืนยัน
          </p>
        </div>
      </Block>

      <Block className="flex flex-col gap-2.5">
        <Button to="redeem-confirm" className="py-[15px] text-[15px]">
          แลก 120 pt
        </Button>
        <Button variant="secondary" className="py-[15px] text-[15px]">
          เก็บไว้ก่อน
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Redeem - Confirm (216:245) ---------- */

export function RedeemConfirmScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <AppBar title="ยืนยันการแลก" />

        <Block>
          <div className="flex items-center gap-[13px] rounded-[24px] bg-surface px-[13px] py-[11px]">
            <FixedImg
              name="logoCafeAmazon"
              alt="Cafe Amazon"
              className="size-[60px] shrink-0 rounded-[18px] object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="text-[10.5px] font-semibold tracking-[0.8px] text-primary">
                CAFE AMAZON
              </p>
              <p className="truncate pt-0.5 text-[14.5px] font-bold leading-[1.35] text-white">
                คูปองกาแฟ ฟรี 1 แก้ว
              </p>
              <span className="mt-[5px] inline-block rounded-full bg-primary px-2.5 py-[3px] text-[11.5px] font-bold text-ink">
                120 แต้ม
              </span>
            </div>
          </div>
        </Block>

        <Block>
          <Card className="border border-hairline">
            <DataRow label="แต้มที่ใช้" value="120 แต้ม" tone="primary" />
            <div className="my-1 h-px bg-white/[0.07]" />
            <DataRow label="แต้มคงเหลือปัจจุบัน" value="1,240 แต้ม" />
            <DataRow label="แต้มหลังแลก" value="1,120 แต้ม" />
            <DataRow label="อายุคูปอง" value="ใช้ภายใน 30 วัน" />
          </Card>
        </Block>

        <Block>
          <p className="text-xs leading-[1.5] text-white/55">
            คูปองจะเข้าเมนู &lsquo;ประวัติการแลกแต้ม&rsquo; ทันที และใช้ได้เลยในร้านที่ร่วมรายการ
          </p>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="redeem-success" className="h-[54px] text-[15px]">
            ยืนยันการแลก 120 แต้ม
            <IconArrowRight className="size-[18px]" />
          </Button>
        </Block>
        <Block>
          <Button variant="secondary" className="h-[50px] text-sm">
            ยกเลิก
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Redeem - Success (218:260) ---------- */

export function RedeemSuccessScreen() {
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

      <p className="text-[25px] font-bold text-white">แลกสำเร็จ!</p>
      <p className="text-sm text-white/60">คูปองของคุณพร้อมใช้งานแล้ว</p>

      <div className="w-full rounded-[24px] border border-hairline bg-surface p-4">
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-[10px] font-semibold tracking-[0.8px] text-white/50">CAFE AMAZON</p>
          <p className="text-base font-bold text-white">คูปองกาแฟ ฟรี 1 แก้ว</p>
        </div>

        {/* โค้ดคูปองเด้งเข้ามาหลังไอคอนติ๊กถูก */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, type: 'spring', stiffness: 300, damping: 20 }}
          className="my-3 flex items-center justify-center rounded-[14px] border border-dashed border-primary/45 bg-primary/[0.08] py-3"
        >
          <span className="text-[19px] font-semibold tracking-[1.5px] text-primary">
            TMV-8K2P-QX10
          </span>
        </motion.div>

        <p className="text-center text-[11.5px] text-white/50">แสดงโค้ดนี้ที่เคาน์เตอร์เพื่อรับสิทธิ์</p>

        <div className="my-3 h-px bg-white/[0.08]" />

        <DataRow label="แต้มที่ใช้" value={<span className="text-amber">-120 แต้ม</span>} />
        <DataRow label="แต้มคงเหลือ" value="1,120 แต้ม" tone="primary" />
        <DataRow label="หมดอายุ" value="7 พ.ย. 2569" />
      </div>

      <div className="flex-1" />

      <div className="flex w-full flex-col gap-2.5">
        <Button to="my-coupons" className="h-[54px] text-[15px]">
          ใช้คูปองเลย
          <IconArrowRight className="size-[18px]" />
        </Button>
        <Button to="points-history" variant="secondary" className="h-[50px] text-sm">
          ดูในประวัติการแลก
        </Button>
      </div>
    </div>
  );
}

/* ---------- Redeem - Error (218:313) ---------- */

export function RedeemErrorScreen() {
  return (
    <div className="flex min-h-[736px] flex-col items-center gap-4 px-4 pb-5 pt-3">
      <div className="w-full">
        <AppBar title="แลกรางวัล" />
      </div>

      <div className="flex-1" />

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 16 }}
        className="grid size-[90px] place-items-center rounded-full bg-amber/15"
      >
        <span className="text-[46px] font-bold text-amber">!</span>
      </motion.div>

      <p className="text-[25px] font-bold text-white">แต้มไม่พอ</p>
      <p className="text-center text-sm leading-[1.4] text-white/60">
        รางวัลนี้ต้องใช้ 3,000 แต้ม แต่ตอนนี้คุณมี 1,240 แต้ม
      </p>

      <div className="w-full rounded-[24px] border border-hairline bg-surface p-4">
        <div className="flex items-center justify-between pb-2 text-[13px] font-bold">
          <span className="text-white">ความคืบหน้าแต้ม</span>
          <span className="text-amber">1,240 / 3,000</span>
        </div>
        <ProgressBar percent={41} height={8} barClassName="bg-amber" />
        <p className="pt-2 text-xs text-white/55">ขาดอีก 1,760 แต้ม จึงจะแลกรางวัลนี้ได้</p>
      </div>

      <div className="flex w-full items-start gap-2.5 px-1">
        <IconFlame className="size-[18px] shrink-0 text-primary" />
        <p className="flex-1 text-xs leading-[1.35] text-white/55">
          ออกกำลังกายต่ออีกนิด! เฉลี่ยแล้วอีกราว ~12 วัน ก็สะสมครบ 1,760 แต้ม
        </p>
      </div>

      <div className="flex-1" />

      <div className="flex w-full flex-col gap-2.5">
        <Button to="help-point-rules" className="h-[54px] text-[15px]">
          ดูวิธีสะสมแต้มเร็วขึ้น
          <IconArrowRight className="size-[18px]" />
        </Button>
        <Button to="rewards" variant="secondary" className="h-[50px] text-sm">
          เลือกรางวัลอื่น
        </Button>
      </div>
    </div>
  );
}

/* ---------- My Coupons (260:1645) ---------- */

const COUPONS = [
  {
    brand: 'CAFÉ AMAZON',
    title: 'กาแฟฟรี 1 แก้ว',
    code: 'TMV-8K2P-QX1G',
    note: 'หมดอายุ 7 ต.ค. 2569',
    status: 'ใช้ได้',
    tone: 'ok',
  },
  {
    brand: 'CENTRAL',
    title: 'ส่วนลด 300 บาท',
    code: 'TMV-3D9L-KK22',
    note: 'หมดอายุพรุ่งนี้ 11 ก.ย. 2569',
    status: 'ใกล้หมดอายุ',
    tone: 'warn',
  },
  {
    brand: 'THAIMOVE STORE',
    title: 'เสื้อวิ่ง Limited Edition',
    code: 'TMV-77QA-ZB01',
    note: 'หมดอายุ 20 พ.ย. 2569',
    status: 'ใช้ได้',
    tone: 'ok',
  },
  {
    brand: 'BANGKOK HALF',
    title: 'บัตรวิ่ง 10K',
    code: 'TMV-1B4C-MM90',
    note: 'ใช้แล้ว 2 ก.ย. 2569',
    status: 'ใช้แล้ว',
    tone: 'used',
  },
] as const;

export function MyCouponsScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <AppBar title="" />

      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">คูปองของฉัน</h1>
        <p className="pt-2 text-[13px] leading-[1.45] text-white/75">
          โค้ดที่แลกแล้วอยู่ที่นี่ ใช้ก่อนหมดอายุ
        </p>
      </Block>

      <Block className="flex items-center gap-2">
        {['ใช้ได้ (3)', 'ใช้แล้ว (5)', 'หมดอายุ (1)'].map((c, i) => (
          <span
            key={c}
            className={`rounded-full px-[14px] py-[9px] text-[12.5px] font-semibold ${
              i === 0
                ? 'bg-primary text-ink'
                : 'border border-white/[0.14] bg-surface text-white/80'
            }`}
          >
            {c}
          </span>
        ))}
      </Block>

      <Block className="flex flex-col gap-2.5">
        {COUPONS.map((c) => (
          <motion.div
            key={c.code}
            variants={riseItem}
            className={`rounded-[22px] bg-surface p-4 ${
              c.tone === 'warn' ? 'border border-amber/50' : ''
            } ${c.tone === 'used' ? 'opacity-55' : ''}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-bold text-primary">{c.brand}</p>
                <p className="pt-0.5 text-[13.5px] font-semibold text-white">{c.title}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-[5px] text-[11px] font-bold ${
                  c.tone === 'ok'
                    ? 'bg-primary/[0.16] text-primary'
                    : c.tone === 'warn'
                      ? 'bg-amber/[0.18] text-amber'
                      : 'bg-white/10 text-white/60'
                }`}
              >
                {c.status}
              </span>
            </div>

            <div className="my-2 flex items-center justify-between rounded-[14px] border border-dashed border-white/[0.12] bg-surface px-3 py-2.5">
              <span className="text-sm font-bold text-primary">{c.code}</span>
              <button type="button" className="text-xs font-bold text-white/70">
                คัดลอก
              </button>
            </div>

            <p className="text-[11.5px] text-white/55">{c.note}</p>
          </motion.div>
        ))}
      </Block>
    </Screen>
  );
}

/* ---------- Points - History (260:1541) ---------- */

const HISTORY = [
  {
    date: 'วันนี้ · 10 ก.ย. 2569',
    rows: [
      { title: 'วิ่งเช้า 5.2 กม.', meta: 'Strava · 06:12', delta: '+52', up: true },
      { title: 'ปั่นเลียบคลอง 18 กม.', meta: 'Apple Health · 17:40', delta: '+72', up: true },
    ],
  },
  {
    date: '9 ก.ย. 2569',
    rows: [
      { title: 'แลกคูปอง Café Amazon', meta: 'ฟรี 1 แก้ว · TMV-8K2P', delta: '-120', up: false },
      { title: 'โบนัสสตรีค 5 วันติด', meta: 'ระบบให้อัตโนมัติ', delta: '+30', up: true },
      { title: 'เดินเย็น 3.1 กม.', meta: 'Google Fit · 18:20', delta: '+31', up: true },
    ],
  },
];

export function PointsHistoryScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <AppBar title="" />

      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">ประวัติแต้ม</h1>
        <p className="pt-2 text-[13px] leading-[1.45] text-white">
          ทุกการได้และใช้แต้ม ย้อนหลังได้ 24 เดือน
        </p>
      </Block>

      <Block>
        <div className="rounded-[22px] border border-primary/50 bg-primary/[0.14] p-4">
          <p className="text-xs font-semibold text-white">แต้มคงเหลือ</p>
          <div className="flex items-baseline gap-1.5 py-1">
            <span className="text-[32px] font-bold text-primary">
              <CountUp value={1240} duration={1.1} />
            </span>
            <span className="text-sm font-bold text-white">pt</span>
          </div>
          <p className="text-[11.5px] font-semibold text-amber">312 pt จะหมดอายุ 31 ธ.ค. 2569</p>
        </div>
      </Block>

      <Block className="flex items-center gap-2">
        {['ทั้งหมด', 'ได้รับ', 'ใช้ไป', 'หมดอายุ'].map((c, i) => (
          <span
            key={c}
            className={`rounded-full px-[14px] py-[9px] text-[12.5px] font-semibold ${
              i === 0 ? 'bg-primary text-ink' : 'border border-white/[0.14] bg-surface text-white'
            }`}
          >
            {c}
          </span>
        ))}
      </Block>

      {HISTORY.map((group) => (
        <Block key={group.date} className="flex flex-col gap-2">
          <p className="text-[11.5px] font-semibold text-white">{group.date}</p>
          {group.rows.map((r) => (
            <div key={r.title} className="rounded-[22px] bg-surface p-[14px]">
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-semibold text-white">{r.title}</p>
                  <p className="truncate text-[11.5px] text-white">{r.meta}</p>
                </div>
                <span
                  className={`shrink-0 text-[15px] font-bold ${r.up ? 'text-primary' : 'text-coral'}`}
                >
                  {r.delta}
                </span>
              </div>
            </div>
          ))}
        </Block>
      ))}

      <Block>
        <button type="button" className="text-[13px] font-bold text-primary">
          ดูเพิ่มเติม
        </button>
      </Block>
    </Screen>
  );
}
