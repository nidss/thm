'use client';

import { motion } from 'framer-motion';
import { GradientBlock, Img } from '../Surface';
import { IconArrowRight, IconCheck, IconMinus, IconPlus } from '../icons';
import { CountUp } from '../motion';
import { AppBar, Block, Button, DarkField, Screen } from '../ui';

/** แถบบอกขั้นตอนของ flow รับรางวัล 3 ขั้น */
function ClaimSteps({ step }: { step: 1 | 2 | 3 }) {
  return (
    <Block className="w-full">
      <div className="flex items-center gap-1.5">
        {[1, 2, 3].map((i) => (
          <motion.span
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.35 }}
            className={`h-1 flex-1 origin-left rounded-full ${
              i <= step ? 'bg-primary' : 'bg-white/[0.12]'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 pt-2 text-[11.5px]">
        <span className="flex-1 font-medium text-primary">ขั้นที่ {step} จาก 3</span>
        <span className="text-white/40">ยืนยันภายใน 7 วัน</span>
      </div>
    </Block>
  );
}

/* ---------- Lucky Draw (203:2) ---------- */

export function LuckyDrawScreen() {
  return (
    <Screen className="gap-4 pb-8 pt-1">
      <AppBar title="ลุ้นรางวัล" />

      {/* แบนเนอร์รอบปัจจุบัน */}
      <Block className="px-4">
        <div className="relative h-[290px] overflow-hidden rounded-[28px] p-4">
          <Img name="luckyDraw" alt="ของรางวัลรอบเดือนตุลาคม" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-violet/45 to-ink/[0.92]" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="w-fit rounded-full bg-primary px-[11px] py-[5px] text-[10px] font-semibold tracking-[0.6px] text-ink">
              รอบเดือนตุลาคม
            </span>
            <div className="flex flex-col gap-2.5">
              <p className="text-[21px] font-bold leading-[1.15] text-white">
                ลุ้นตั๋วงานวิ่ง
                <br />+ สมาร์ตวอตช์ 5 รางวัล
              </p>
              <div className="flex items-center gap-2">
                {[
                  ['สิทธิ์ของคุณ', '12'],
                  ['ผู้ร่วมลุ้น', '8,412'],
                  ['หมดเขตอีก', '12 วัน'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-1 flex-col gap-0.5 rounded-[20px] bg-white/[0.16] px-3 py-[11px]"
                  >
                    <span className="text-xs text-primary">{label}</span>
                    <span className="text-xl font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Block>

      {/* ตัวนับจำนวนสิทธิ์ */}
      <Block className="px-4">
        <div className="rounded-[28px] border border-hairline bg-surface p-4">
          <p className="text-[15px] font-bold text-white">เพิ่มสิทธิ์ลุ้น</p>
          <p className="pt-0.5 text-xs text-white">50 แต้ม = 1 สิทธิ์ สูงสุด 20 สิทธิ์/รอบ</p>

          <div className="flex items-center justify-center gap-3 pt-3.5">
            <motion.button
              type="button"
              whileTap={{ scale: 0.88 }}
              aria-label="ลดจำนวนสิทธิ์"
              className="grid size-10 shrink-0 place-items-center rounded-full bg-white/[0.08]"
            >
              <IconMinus className="size-[18px] text-white" />
            </motion.button>
            <div className="flex min-w-0 flex-1 flex-col items-center">
              <span className="text-[32px] font-bold tracking-[-1px] text-white">4</span>
              <span className="text-[10.5px] text-white">สิทธิ์ ใช้ 200 แต้ม</span>
            </div>
            <motion.button
              type="button"
              whileTap={{ scale: 0.88 }}
              aria-label="เพิ่มจำนวนสิทธิ์"
              className="grid size-10 shrink-0 place-items-center rounded-full bg-primary"
            >
              <IconPlus className="size-[18px] text-ink" />
            </motion.button>
          </div>

          <div className="pt-3.5">
            <Button to="lucky-draw-my-tickets" className="h-12 text-[15px]">
              ยืนยันใช้ 200 แต้ม
              <IconArrowRight className="size-[18px]" />
            </Button>
          </div>
          <p className="pt-2.5 text-center text-[10.5px] text-white">เหลือหลังใช้ 1,040 แต้ม</p>
        </div>
      </Block>

      <Block className="px-4">
        <h2 className="text-base font-bold text-white">ของรางวัลในรอบนี้</h2>
      </Block>

      <Block className="flex items-start gap-[11px] px-4">
        {[
          { name: 'สมาร์ตวอตช์ GPS', img: 'prizeSmartwatch' as const, tag: '1 รางวัล', tone: 'amber' },
          { name: 'ตั๋วงานวิ่งฮาล์ฟ', img: 'prizeHalfMarathon' as const, tag: '5 รางวัล', tone: 'primary' },
        ].map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ y: -3 }}
            className="flex-1 overflow-hidden rounded-[24px] bg-surface"
          >
            <div className="relative h-[78px] w-full">
              <Img name={p.img} alt={p.name} />
            </div>
            <div className="flex flex-col gap-[5px] px-3 pb-3 pt-2.5">
              <p className="text-[12.5px] font-bold leading-[1.35] text-white">{p.name}</p>
              <span
                className={`w-fit rounded-full px-[9px] py-0.5 text-[10px] font-semibold ${
                  p.tone === 'amber' ? 'bg-amber/[0.18] text-amber' : 'bg-primary/[0.16] text-primary'
                }`}
              >
                {p.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </Block>

      <Block className="px-4">
        <div className="rounded-[24px] bg-white/5 px-4 py-3.5">
          <p className="text-[10.5px] font-semibold tracking-[1px] text-white">ผู้โชคดีรอบก่อน</p>
          <div className="flex items-center pt-2.5">
            <GradientBlock gradient="purple" className="size-7 rounded-full border-2 border-ink" />
            <GradientBlock
              gradient="green"
              className="-ml-2 size-7 rounded-full border-2 border-ink"
            />
            <GradientBlock
              gradient="maroon"
              className="-ml-2 size-7 rounded-full border-2 border-ink"
            />
            <span className="pl-[11px] text-[11.5px] text-white">นิดา, บีม, ต้าร์ และอีก 9 คน</span>
          </div>
        </div>
      </Block>
    </Screen>
  );
}

/* ---------- Lucky Draw - My Tickets (262:2151) ---------- */

const TICKETS = [
  ['TMV-0912-0041', '10 ก.ย. 2569 09:12'],
  ['TMV-0912-0042', '10 ก.ย. 2569 09:12'],
  ['TMV-0908-1177', '8 ก.ย. 2569 19:40'],
  ['TMV-0903-0620', '3 ก.ย. 2569 07:05'],
];

export function LuckyDrawMyTicketsScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <AppBar title="" />

      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">สิทธิ์ลุ้นรางวัลของฉัน</h1>
        <p className="pt-1.5 text-[13px] leading-[1.45] text-white">
          1 สิทธิ์ = 200 แต้ม · ประกาศผล 30 ก.ย. 2569 20:00 น.
        </p>
      </Block>

      <Block>
        <div className="rounded-[22px] border border-violet-soft/50 bg-violet/[0.18] p-4">
          <p className="text-[11.5px] font-bold text-violet-text">รอบเดือนกันยายน 2569</p>
          <div className="flex items-baseline justify-between py-1.5">
            <span className="text-[26px] font-bold text-white">
              <CountUp value={12} duration={0.9} /> สิทธิ์
            </span>
            <span className="text-xs text-white">ใช้ไป 2,400 pt</span>
          </div>
          <p className="text-[11.5px] leading-[1.45] text-white">
            โอกาสถูกรางวัลโดยประมาณ 1 ใน 704 (คำนวณจากสิทธิ์ทั้งหมด 8,412 สิทธิ์ ณ ตอนนี้)
          </p>
        </div>
      </Block>

      <Block className="flex flex-col gap-2">
        <p className="text-[13.5px] font-bold text-white">หมายเลขสิทธิ์</p>
        {TICKETS.map(([code, time]) => (
          <div
            key={code}
            className="flex items-center justify-between rounded-[18px] bg-surface px-[14px] py-3"
          >
            <span className="text-[13.5px] font-bold text-primary">{code}</span>
            <span className="text-[11.5px] text-white">{time}</span>
          </div>
        ))}
        <button type="button" className="w-fit text-[12.5px] font-bold text-primary">
          ดูทั้ง 12 หมายเลข
        </button>
      </Block>

      <Block>
        <div className="rounded-[22px] bg-surface p-[14px]">
          <p className="text-[12.5px] font-bold text-white">กติกาโดยย่อ</p>
          <p className="pt-1.5 text-[11.5px] leading-[1.45] text-white">
            สุ่มด้วยระบบอัตโนมัติ ตรวจสอบย้อนหลังได้ ผู้ถูกรางวัลต้องยืนยันตัวตนภายใน 7 วัน
            สิทธิ์ที่ไม่ถูกรางวัลจะหมดอายุเมื่อจบรอบ
          </p>
        </div>
      </Block>

      <Block>
        <Button to="lucky-draw-result" className="py-[15px] text-[15px]">
          ซื้อสิทธิ์เพิ่ม 200 pt
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Lucky Draw - Result (262:2206) ---------- */

const NEXT_STEPS = [
  ['ยืนยันตัวตน', 'อัปโหลดบัตรประชาชนภายใน 7 วัน (ภายใน 7 ต.ค. 2569)'],
  ['กรอกที่อยู่จัดส่ง', 'ส่งฟรีทั่วประเทศ ใช้เวลา 7-14 วันทำการ'],
  ['ชำระภาษีหัก ณ ที่จ่าย 5%', 'ตามกฎหมาย = 1,250 บาท ชำระผ่านแอปได้'],
];

export function LuckyDrawResultScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <AppBar title="" />

      <Block className="flex flex-col items-center gap-4 pt-2.5">
        <motion.div
          initial={{ scale: 0.4, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 14 }}
          className="grid size-[76px] place-items-center rounded-full bg-primary"
        >
          <span className="text-[34px] font-bold text-ink">★</span>
        </motion.div>
        <p className="text-2xl font-bold text-white">คุณถูกรางวัล!</p>
        <p className="text-center text-xs leading-[1.45] text-white">
          รอบเดือนกันยายน 2569 · ประกาศ 30 ก.ย. 20:00 น.
        </p>
      </Block>

      <Block>
        <div className="flex flex-col items-center gap-2 rounded-[22px] border border-violet-soft/60 bg-violet/20 p-4">
          <p className="text-[11.5px] font-bold text-violet-text">รางวัลที่ 2</p>
          <p className="text-center text-lg font-bold text-white">สมาร์ตวอตช์ รุ่น Move Pro</p>
          <p className="text-xs text-white">จากหมายเลข TMV-0912-0041</p>
        </div>
      </Block>

      <Block>
        <div className="rounded-[22px] bg-surface p-4">
          <p className="pb-2 text-[13.5px] font-bold text-white">ต้องทำอะไรต่อ</p>
          <div className="flex flex-col gap-2.5">
            {NEXT_STEPS.map(([title, desc], i) => (
              <div key={title} className="flex items-start gap-2.5">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-ink">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-bold text-white">{title}</p>
                  <p className="text-[11.5px] leading-[1.45] text-white">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Block>

      <Block>
        <div className="rounded-[22px] border border-amber/45 bg-amber/10 p-[14px]">
          <p className="text-[12.5px] font-bold text-amber">ไม่ยืนยันภายใน 7 วัน = สละสิทธิ์</p>
          <p className="pt-1.5 text-[11.5px] leading-[1.45] text-white">
            ระบบจะสุ่มผู้โชคดีสำรองแทนโดยอัตโนมัติ
          </p>
        </div>
      </Block>

      <Block className="flex flex-col gap-4">
        <Button to="claim-verify-identity" className="py-[15px] text-[15px]">
          ยืนยันรับรางวัล
        </Button>
        <Button to="lucky-draw-all-results" variant="secondary" className="py-[15px] text-[15px]">
          ดูผลรางวัลทั้งหมด
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Claim - Verify Identity (272:775) ---------- */

export function ClaimVerifyIdentityScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <ClaimSteps step={1} />

        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">ยืนยันตัวตนผู้รับรางวัล</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            ตามกฎหมายผู้ให้รางวัลต้องเก็บหลักฐานผู้รับ ข้อมูลนี้ใช้เฉพาะการส่งมอบรางวัลและงานภาษี
          </p>
        </Block>

        <Block>
          <div className="flex items-center gap-3 rounded-[18px] bg-surface px-[14px] py-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/[0.16] text-base font-bold text-primary">
              2
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13.5px] font-semibold text-white">
                สมาร์ตวอตช์ รุ่น MoveFit GPS
              </p>
              <p className="truncate text-[11.5px] text-white/45">
                รางวัลที่ 2 · หมายเลข TMV-0912-0041
              </p>
            </div>
          </div>
        </Block>

        <Block className="flex flex-col gap-3">
          <div className="flex flex-col items-center gap-1.5 rounded-[18px] border border-dashed border-white/15 bg-white/[0.03] p-[18px]">
            <p className="text-[13.5px] font-semibold text-white">บัตรประชาชน ด้านหน้า</p>
            <p className="text-center text-[11.5px] text-white/45">
              ถ่ายให้เห็นเลข 13 หลักชัดเจน · JPG หรือ PNG
            </p>
          </div>
          <div className="flex flex-col items-center gap-1.5 rounded-[18px] border border-primary-active/60 bg-primary-active/10 p-[18px]">
            <p className="text-[13.5px] font-semibold text-primary-active">
              อัปโหลดแล้ว · selfie คู่บัตร
            </p>
            <p className="text-center text-[11.5px] text-white/60">ตรวจสอบอัตโนมัติผ่านแล้ว แก้ไขได้</p>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-white/[0.04] p-4">
            <p className="text-[12.5px] font-semibold text-white">เราเก็บไฟล์นี้ไว้แค่ไหน</p>
            <p className="pt-1.5 text-xs leading-[1.45] text-white/50">
              เก็บ 90 วันหลังส่งมอบรางวัล แล้วลบอัตโนมัติ ไม่ใช้กับการตลาด และไม่ส่งต่อให้บุคคลที่สาม
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="claim-shipping-address" className="h-12 text-lg">
            ถัดไป · ที่อยู่จัดส่ง
          </Button>
        </Block>
        <Block>
          <Button variant="ghost" className="h-12 text-lg">
            บันทึกร่างไว้ก่อน
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Claim - Shipping Address (272:852) ---------- */

export function ClaimShippingAddressScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <ClaimSteps step={2} />

        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">ที่อยู่จัดส่งรางวัล</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            ส่งฟรีทั่วประเทศ ใช้เวลา 7-14 วันทำการ กรอกให้ครบเพื่อไม่ให้พัสดุตีกลับ
          </p>
        </Block>

        <Block className="flex flex-col gap-3.5">
          <DarkField label="ชื่อ-นามสกุลผู้รับ" value="สมฉวี ศรีภาระ" />
          <DarkField label="เบอร์โทรติดต่อ" value="08X-XXX-1234" />
          <DarkField
            label="ที่อยู่"
            value="128/45 ซอยลาดพร้าว 71 ถนนลาดพร้าว"
            hint="บ้านเลขที่ ซอย ถนน"
          />
          <div className="flex gap-2">
            <DarkField label="แขวง/ตำบล" value="คลองเจ้าคุณสิงห์" />
            <DarkField label="เขต/อำเภอ" value="วังทองหลาง" />
          </div>
          <div className="flex gap-2">
            <DarkField label="จังหวัด" value="กรุงเทพมหานคร" />
            <DarkField label="รหัสไปรษณีย์" value="10310" />
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-white/[0.04] p-4">
            <p className="text-[12.5px] font-semibold text-white">ตรวจที่อยู่ให้ดีก่อนกดถัดไป</p>
            <p className="pt-1.5 text-xs leading-[1.45] text-white/50">
              แก้ไขได้จนกว่าทีมงานจะเริ่มจัดส่ง หลังจากนั้นต้องติดต่อฝ่ายดูแลลูกค้า
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="claim-tax-payment" className="h-12 text-lg">
            ถัดไป · ชำระภาษี
          </Button>
        </Block>
        <Block>
          <Button variant="ghost" className="h-12 text-lg">
            บันทึกร่างไว้ก่อน
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Claim - Tax Payment (273:823) ---------- */

export function ClaimTaxPaymentScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <ClaimSteps step={3} />

        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">ชำระภาษีหัก ณ ที่จ่าย</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            ของรางวัลมูลค่าเกิน 1,000 บาท ต้องหักภาษี 5% ตามประมวลรัษฎากร ผู้รับรางวัลเป็นผู้ชำระ
          </p>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-2.5 text-xs font-semibold text-white/55">รายละเอียดค่าใช้จ่าย</p>
            {[
              ['มูลค่ารางวัลที่ประเมิน', '25,000 บาท'],
              ['อัตราภาษีหัก ณ ที่จ่าย', '5%'],
              ['ค่าจัดส่ง', 'ฟรี'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-2.5 py-1">
                <span className="flex-1 text-[13px] text-white/55">{k}</span>
                <span className="text-[13.5px] font-medium text-white">{v}</span>
              </div>
            ))}
            <div className="my-2.5 h-px bg-white/[0.08]" />
            <div className="flex items-center gap-2.5">
              <span className="flex-1 text-sm font-semibold text-white">ยอดที่ต้องชำระ</span>
              <span className="text-[17px] font-bold text-primary">1,250 บาท</span>
            </div>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-2.5 text-xs font-semibold text-white/55">เลือกวิธีชำระ</p>
            {[
              {
                name: 'พร้อมเพย์ QR',
                desc: 'ชำระผ่านแอปธนาคาร ยืนยันอัตโนมัติ',
                on: true,
              },
              {
                name: 'บัตรเครดิต / เดบิต',
                desc: 'มีค่าธรรมเนียม 2.2% จากผู้ให้บริการ',
                on: false,
              },
            ].map((m) => (
              <div
                key={m.name}
                className={`mb-2.5 flex items-center gap-3 rounded-[18px] px-[14px] py-3 ${
                  m.on ? 'border border-primary/70 bg-primary/10' : 'bg-white/5'
                }`}
              >
                <span
                  className={`grid size-4 shrink-0 place-items-center rounded-full border-2 ${
                    m.on ? 'border-primary' : 'border-white/30'
                  }`}
                >
                  {m.on ? <span className="size-2 rounded-full bg-primary" /> : null}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-semibold text-white">{m.name}</p>
                  <p className="text-[11.5px] leading-[1.45] text-white/45">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-amber/[0.12] p-4">
            <p className="text-[12.5px] font-semibold text-amber">ถ้าไม่ชำระภายใน 7 วัน</p>
            <p className="pt-1 text-xs leading-[1.45] text-white/60">
              สิทธิ์จะถูกโอนให้ผู้โชคดีสำรอง และแต้มที่ใช้ลุ้นจะไม่ได้รับคืน
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="claim-submitted" className="h-12 text-lg">
            ชำระ 1,250 บาท
          </Button>
        </Block>
        <Block>
          <Button variant="ghost" className="h-12 text-lg">
            ขอใบเสร็จภาษีทีหลัง
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Claim - Submitted (273:914) ---------- */

const DELIVERY_STEPS = [
  { title: 'ยืนยันตัวตนและชำระภาษี', meta: '10 ก.ย. 2569 09:41', state: 'done' },
  { title: 'ทีมงานตรวจสอบเอกสาร', meta: 'ภายใน 3 วันทำการ', state: 'current' },
  { title: 'จัดส่งรางวัล', meta: 'ได้เลขพัสดุทางแจ้งเตือน', state: 'todo' },
  { title: 'รับของและยืนยันการรับ', meta: '7-14 วันทำการ', state: 'todo' },
] as const;

export function ClaimSubmittedScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 16 }}
            className="grid size-16 place-items-center rounded-full bg-primary/[0.16]"
          >
            <IconCheck className="size-[30px] text-primary" />
          </motion.div>
        </Block>

        <Block>
          <h1 className="text-[22px] font-bold leading-[1.45] text-white">ยืนยันรับรางวัลเรียบร้อย</h1>
          <p className="pt-1.5 text-[13.5px] leading-[1.45] text-white/60">
            เราได้รับเอกสารและยอดชำระภาษีของคุณแล้ว ทีมงานจะตรวจสอบภายใน 3 วันทำการ
          </p>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-3.5 text-xs font-semibold text-white/55">สถานะการส่งมอบ</p>
            <div className="flex flex-col gap-3.5">
              {DELIVERY_STEPS.map((s) => (
                <div key={s.title} className="flex items-start gap-3">
                  <span
                    className={`mt-1 size-2.5 shrink-0 rounded-full ${
                      s.state === 'done'
                        ? 'bg-primary-active'
                        : s.state === 'current'
                          ? 'bg-primary'
                          : 'bg-white/20'
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[13.5px] ${
                        s.state === 'todo'
                          ? 'font-medium text-white/50'
                          : s.state === 'current'
                            ? 'font-semibold text-white'
                            : 'font-medium text-white'
                      }`}
                    >
                      {s.title}
                    </p>
                    <p className="text-[11.5px] text-white/40">{s.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-white/[0.04] p-4">
            <div className="flex items-center gap-2.5">
              <span className="flex-1 text-[13px] text-white/55">เลขอ้างอิงการรับรางวัล</span>
              <span className="text-[13.5px] font-medium text-white">CLM-0912-0041</span>
            </div>
            <p className="pt-1 text-[11.5px] text-white/45">
              เก็บเลขนี้ไว้ใช้ติดต่อทีมงาน หรือดูได้ที่ ลุ้นรางวัล › สิทธิ์ของฉัน
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="lucky-draw-my-tickets" className="h-12 text-lg">
            ดูสถานะการรับรางวัล
          </Button>
        </Block>
        <Block>
          <Button to="dashboard" variant="ghost" className="h-12 text-lg">
            กลับหน้าหลัก
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Lucky Draw - All Results (275:869) ---------- */

const WINNERS = [
  { rank: 'ที่ 1', prize: 'สมาร์ตวอตช์ GPS', code: 'TMV-0901-0233', who: 'นิ***า ร.', me: false },
  { rank: 'ที่ 2', prize: 'สมาร์ตวอตช์ GPS', code: 'TMV-0912-0041', who: 'คุณ', me: true },
  { rank: 'ที่ 3', prize: 'ตั๋วงานวิ่งฮาล์ฟ', code: 'TMV-0907-1042', who: 'บี***ม ส.', me: false },
  { rank: 'ที่ 4', prize: 'ตั๋วงานวิ่งฮาล์ฟ', code: 'TMV-0904-0771', who: 'ต้***ร ว.', me: false },
  { rank: 'ที่ 5', prize: 'ตั๋วงานวิ่งฮาล์ฟ', code: 'TMV-0910-1888', who: 'โบ***ว ก.', me: false },
];

export function LuckyDrawAllResultsScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">ผลรางวัลย้อนหลัง</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            ประกาศทุกวันที่ 1 ของเดือน สุ่มด้วยระบบอัตโนมัติและตรวจสอบย้อนหลังได้
          </p>
        </Block>

        <Block className="flex items-center gap-2">
          {['ก.ย. 2569', 'ส.ค. 2569', 'ก.ค. 2569'].map((m, i) => (
            <span
              key={m}
              className={`rounded-full px-[14px] py-[7px] text-[12.5px] font-medium ${
                i === 0 ? 'bg-primary text-ink' : 'bg-surface text-white/70'
              }`}
            >
              {m}
            </span>
          ))}
        </Block>

        <Block>
          <div className="rounded-[24px] border border-primary/50 bg-primary/10 p-4">
            <div className="flex items-center gap-2">
              <span className="flex-1 text-xs font-semibold text-white/60">ผลของคุณรอบนี้</span>
              <span className="text-[11.5px] text-white/50">12 สิทธิ์</span>
            </div>
            <p className="pt-1.5 text-base font-bold text-primary">
              ถูกรางวัลที่ 2 · สมาร์ตวอตช์ GPS
            </p>
            <p className="pt-1 text-xs text-white/50">
              จากหมายเลข TMV-0912-0041 · ยืนยันรับรางวัลแล้ว
            </p>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-3 text-xs font-semibold text-white/55">ผู้โชคดีรอบกันยายน 2569</p>
            {WINNERS.map((w, i) => (
              <div key={w.code}>
                <div className="flex items-center gap-3 py-2">
                  <span
                    className={`grid h-[26px] w-[38px] shrink-0 place-items-center rounded-full text-[11.5px] font-bold ${
                      w.me ? 'bg-primary text-ink' : 'bg-white/[0.08] text-white/70'
                    }`}
                  >
                    {w.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-medium text-white">{w.prize}</p>
                    <p className="truncate text-[11px] text-white/35">{w.code}</p>
                  </div>
                  <span
                    className={`shrink-0 text-[12.5px] ${
                      w.me ? 'font-bold text-primary' : 'text-white/60'
                    }`}
                  >
                    {w.who}
                  </span>
                </div>
                {i < WINNERS.length - 1 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="lucky-draw" className="h-12 text-lg">
            ลุ้นรอบตุลาคม
          </Button>
        </Block>
        <Block>
          <Button variant="ghost" className="h-12 text-lg">
            วิธีสุ่มและการตรวจสอบ
          </Button>
        </Block>
      </div>
    </div>
  );
}
