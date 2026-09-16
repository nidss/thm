'use client';

import { motion } from 'framer-motion';
import { GradientBlock } from '../Surface';
import {
  IconApple,
  IconBell,
  IconEye,
  IconHelpCircle,
  IconHistory,
  IconMinus,
  IconPlus,
  IconSettings,
  IconStrava,
  IconTarget,
  IconUser,
} from '../icons';
import { Block, Button, DarkField, DarkTextarea, InfoCard, ListRow, Screen, Toggle } from '../ui';

/* ---------- Profile - Settings (206:2) ---------- */

export function ProfileSettingsScreen() {
  return (
    <Screen className="gap-4 pb-8 pt-1">
      <Block className="flex items-center justify-between px-5 pb-4">
        <h1 className="text-[28px] font-bold tracking-[-0.8px] text-white">โปรไฟล์</h1>
        <motion.span
          whileHover={{ rotate: 45 }}
          className="grid size-[38px] place-items-center rounded-full border border-white/10 bg-white/[0.07]"
        >
          <IconSettings className="size-[19px] text-primary" />
        </motion.span>
      </Block>

      <Block className="px-4">
        <div className="flex items-center gap-3.5 rounded-[28px] border border-hairline bg-surface p-[18px]">
          <GradientBlock
            gradient="purple"
            className="size-[62px] rounded-full border-[2.5px] border-primary"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-lg font-bold text-white">สมฉวี ศรีภาระ</p>
            <p className="truncate text-[11.5px] text-white">@somchawee เข้าร่วม ก.ค. 2569</p>
            <span className="mt-1.5 inline-block rounded-full bg-primary/[0.14] px-2.5 py-[3px] text-[10.5px] font-semibold text-primary">
              Streak 5 วัน Lv.3 Mover
            </span>
          </div>
        </div>
      </Block>

      <Block className="flex items-center gap-2 px-4">
        {[
          { value: '1,240', label: 'แต้มคงเหลือ', hi: true },
          { value: '312', label: 'กม. รวม' },
          { value: '7', label: 'เหรียญ' },
        ].map((s) => (
          <div
            key={s.label}
            className="flex flex-1 flex-col items-center gap-0.5 rounded-[22px] bg-surface p-[13px]"
          >
            <span className={`text-[19px] font-bold ${s.hi ? 'text-primary' : 'text-white'}`}>
              {s.value}
            </span>
            <span className="text-[10px] text-white">{s.label}</span>
          </div>
        ))}
      </Block>

      <Block className="px-4 py-2">
        <p className="text-[10.5px] font-semibold tracking-[1.1px] text-white">แอปที่เชื่อมต่อ</p>
      </Block>

      <Block className="flex flex-col gap-2 px-4">
        {[
          {
            name: 'Strava',
            meta: 'ซิงก์ 5 นาทีที่ผ่านมา',
            icon: <IconStrava className="size-[19px] text-[#fc4c02]" />,
            bg: 'bg-[#fc4c02]/[0.16]',
          },
          {
            name: 'Apple Health',
            meta: 'ซิงก์ 12 นาทีที่ผ่านมา',
            icon: <IconApple className="size-[19px] text-white" />,
            bg: 'bg-white/10',
          },
        ].map((a) => (
          <ListRow
            key={a.name}
            to="connected-app-manage"
            icon={<span className={`grid size-9 place-items-center rounded-full ${a.bg}`}>{a.icon}</span>}
            title={a.name}
            subtitle={a.meta}
            right={
              <span className="shrink-0 rounded-full bg-white/[0.08] px-3 py-[5px] text-[11px] font-semibold text-white/60">
                จัดการ
              </span>
            }
          />
        ))}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="flex items-center justify-center gap-[7px] rounded-[24px] border border-dashed border-white/[0.18] py-3"
        >
          <IconPlus className="size-4 text-primary" />
          <span className="text-[12.5px] font-semibold text-white">
            เพิ่มแอปอื่น (Google Fit, Samsung, Huawei)
          </span>
        </motion.div>
      </Block>

      <Block className="px-4 py-2">
        <p className="text-[10.5px] font-semibold tracking-[1.1px] text-white">การตั้งค่า</p>
      </Block>

      <Block className="flex flex-col gap-2 px-4">
        <ListRow icon={<IconUser className="size-[19px]" />} title="แก้ไขโปรไฟล์" to="profile-edit" />
        <ListRow
          icon={<IconTarget className="size-[19px]" />}
          title="เป้าหมายรายสัปดาห์"
          to="set-goals"
          right={<span className="text-[11.5px] text-white">3 วัน</span>}
        />
        <ListRow
          icon={<IconBell className="size-[19px]" />}
          title="การแจ้งเตือน"
          right={<Toggle on />}
        />
        <ListRow
          icon={<IconEye className="size-[19px]" />}
          title="แสดงชื่อบนอันดับ"
          right={<Toggle on />}
        />
        <ListRow
          icon={<IconHistory className="size-[19px]" />}
          title="ประวัติการแลกแต้ม"
          to="points-history"
        />
        <ListRow
          icon={<IconHelpCircle className="size-[19px]" />}
          title="ช่วยเหลือ & กติกาแต้ม"
          to="help-point-rules"
        />
        <ListRow
          icon={<IconMinus className="size-[19px]" />}
          title="ลบบัญชี"
          to="account-delete"
          danger
        />
      </Block>
    </Screen>
  );
}

/* ---------- Profile - Edit (262:2389) ---------- */

export function ProfileEditScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">แก้ไขโปรไฟล์</h1>
      </Block>

      <Block className="flex flex-col items-center gap-2">
        <GradientBlock gradient="purple" className="size-[84px] rounded-full" />
        <button type="button" className="text-[12.5px] font-bold text-primary">
          เปลี่ยนรูปโปรไฟล์
        </button>
      </Block>

      <Block className="flex flex-col gap-4">
        <DarkField label="ชื่อที่แสดง" value="สมฉวี ศรีภาระ" />
        <DarkField
          label="ชื่อผู้ใช้ (username)"
          value="@somchawee"
          hint="ใช้ค้นหาเพื่อนได้ เปลี่ยนได้ปีละ 1 ครั้ง"
        />
        <DarkField label="อีเมล" value="somchawee@email.com" hint="ใช้เข้าสู่ระบบและกู้คืนบัญชี" />
        <DarkField label="เบอร์โทร" value="08X-XXX-1234" />
        <DarkField label="ปีเกิด" value="2537" hint="ใช้จัดกลุ่มอันดับตามช่วงอายุเท่านั้น" />
        <DarkField
          label="เพศ"
          placeholder="ไม่ระบุ"
          hint="ไม่บังคับ ใช้คำนวณแคลอรีให้แม่นขึ้น"
        />
      </Block>

      <Block>
        <div className="rounded-[22px] bg-surface p-[14px]">
          <p className="pb-2 text-[13px] font-bold text-white">ความเป็นส่วนตัว</p>
          {[
            { title: 'แสดงชื่อบนอันดับ', meta: 'เปิดอยู่ (ถ้าปิดจะแสดงเป็น "ผู้ใช้ไม่ระบุชื่อ")', on: true },
            { title: 'ให้เพื่อนค้นหาด้วยเบอร์โทร', meta: 'ปิดอยู่', on: false },
          ].map((r) => (
            <div key={r.title} className="flex items-start justify-between gap-3 py-1.5">
              <div className="min-w-0 flex-1">
                <p className="text-[12.5px] font-semibold text-white">{r.title}</p>
                <p className="text-[11px] leading-[1.45] text-white">{r.meta}</p>
              </div>
              <Toggle on={r.on} />
            </div>
          ))}
        </div>
      </Block>

      <Block className="flex flex-col gap-4">
        <Button to="profile-settings" className="py-[15px] text-[15px]">
          บันทึกการแก้ไข
        </Button>
        <Button variant="secondary" className="py-[15px] text-[15px]">
          ยกเลิก
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Connected App - Manage (262:2565) ---------- */

const PULLED_DATA = [
  ['ระยะทาง เวลา และประเภทกีฬา', true],
  ['จำนวนก้าวและแคลอรี', true],
  ['ชีพจรเฉลี่ย (ใช้แสดงผลเท่านั้น)', true],
  ['เส้นทาง GPS แบบละเอียด', false],
  ['รายชื่อเพื่อนใน Strava', false],
] as const;

const SYNC_LOG = [
  { time: 'วันนี้ 09:31', meta: '2 กิจกรรม · +124 pt', ok: true },
  { time: 'วันนี้ 06:20', meta: '1 กิจกรรม · +52 pt', ok: true },
  { time: 'เมื่อวาน 22:10', meta: 'ล้มเหลว · โทเคนหมดอายุ แล้วต่ออายุอัตโนมัติ', ok: false },
];

export function ConnectedAppManageScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <Block className="flex items-center gap-3">
        <span className="grid size-[52px] shrink-0 place-items-center rounded-[18px] border border-[#ff6b2c]/60 bg-[#ff6b2c]/[0.22] text-[22px] font-bold text-[#ff6b2c]">
          S
        </span>
        <div className="min-w-0">
          <p className="text-xl font-bold text-white">Strava</p>
          <p className="text-xs leading-[1.45] text-white">
            เชื่อมต่อเมื่อ 12 ก.ค. 2569 · ซิงก์ล่าสุด 5 นาทีที่ผ่านมา
          </p>
        </div>
      </Block>

      <Block>
        <div className="rounded-[22px] border border-primary/40 bg-primary/10 p-[14px]">
          <div className="flex items-center justify-between font-bold text-primary">
            <span className="text-[13px]">สถานะ: ปกติ</span>
            <button type="button" className="text-[12.5px]">
              ซิงก์เดี๋ยวนี้
            </button>
          </div>
          <p className="pt-2 text-xs text-white">ซิงก์อัตโนมัติทุก 30 นาที และเมื่อเปิดแอป</p>
        </div>
      </Block>

      <Block>
        <div className="rounded-[22px] bg-surface p-[14px]">
          <p className="pb-2 text-sm font-bold text-white">ข้อมูลที่เราดึงจาก Strava</p>
          {PULLED_DATA.map(([label, on]) => (
            <div key={label} className="flex items-center justify-between py-1 text-sm">
              <span className={`flex-1 ${on ? 'text-white' : 'text-white/45'}`}>{label}</span>
              <span className={`font-bold ${on ? 'text-primary' : 'text-white/40'}`}>
                {on ? 'ดึง' : 'ไม่ดึง'}
              </span>
            </div>
          ))}
        </div>
      </Block>

      <Block>
        <div className="rounded-[22px] bg-surface p-[14px]">
          <p className="pb-2 text-sm font-bold text-white">ประวัติการซิงก์ล่าสุด</p>
          {SYNC_LOG.map((s) => (
            <div key={s.time} className="flex items-start justify-between py-1.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white">{s.time}</p>
                <p className="text-xs text-white">{s.meta}</p>
              </div>
              <span className={`text-[13px] font-bold ${s.ok ? 'text-primary' : 'text-amber'}`}>
                {s.ok ? '✓' : '!'}
              </span>
            </div>
          ))}
        </div>
      </Block>

      <Block>
        <div className="rounded-[22px] border border-coral/45 bg-coral/10 p-[14px]">
          <p className="text-sm font-bold text-coral">ถ้ายกเลิกการเชื่อมต่อ</p>
          <p className="pt-1.5 text-xs leading-[1.45] text-white">
            กิจกรรมใหม่จะไม่ถูกนับแต้ม แต้มที่ได้ไปแล้วยังอยู่ครบ และประวัติเดิมยังสามารถดูได้
          </p>
        </div>
      </Block>

      <Block>
        <Button
          to="connected-app-disconnect-confirm"
          variant="secondary"
          className="border-coral/60 bg-transparent py-[15px] text-[15px] text-coral"
        >
          ยกเลิกการเชื่อมต่อ Strava
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Connected App - Disconnect Confirm (283:1071) ---------- */

export function ConnectedAppDisconnectScreen() {
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
          <h1 className="text-xl font-bold leading-[1.3] text-white">ยกเลิกการเชื่อมต่อ Strava?</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            เชื่อมต่อมาตั้งแต่ 12 ก.ค. 2569 · ซิงก์ล่าสุดวันนี้ 09:31 ได้ 124 pt
          </p>
        </Block>

        <Block>
          <div className="rounded-[24px] border border-coral/40 bg-coral/[0.08] p-4">
            <p className="pb-3 text-xs font-semibold text-coral">หลังยกเลิกจะเกิดอะไรขึ้น</p>
            {[
              ['กิจกรรมใหม่จาก Strava จะไม่ถูกนับ', 'แต้มจากกิจกรรมเดิมยังอยู่'],
              ['อีเวนต์ที่ใช้ข้อมูลจาก Strava จะหยุดนับ', '7 วัน 7 หมื่นก้าว กำลังนับอยู่'],
              ['ต้องเชื่อมต่อใหม่และให้สิทธิ์อีกครั้ง', 'ใช้เวลาไม่ถึง 1 นาที'],
            ].map(([title, meta]) => (
              <div key={title} className="flex items-start gap-2.5 py-1.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-coral" />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium text-white">{title}</p>
                  <p className="text-[11px] text-white/45">{meta}</p>
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-3 text-xs font-semibold text-white/55">ทางเลือกที่เบากว่า</p>
            {[
              { title: 'หยุดซิงก์ชั่วคราว', meta: 'เก็บการเชื่อมต่อไว้ แต่ไม่ดึงข้อมูลใหม่', on: false },
              { title: 'ลดข้อมูลที่ดึง', meta: 'เอาเฉพาะระยะทางกับเวลา ไม่เอาชีพจร', on: true },
            ].map((r, i) => (
              <div key={r.title}>
                <div className="flex items-center gap-3 py-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-[13.5px] font-medium text-white">{r.title}</p>
                    <p className="text-[11px] leading-[1.45] text-white/45">{r.meta}</p>
                  </div>
                  <Toggle on={r.on} />
                </div>
                {i === 0 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-white/[0.04] p-4">
            <p className="text-[12.5px] font-semibold text-white">ข้อมูลที่ดึงมาแล้ว</p>
            <p className="pt-1 text-[11.5px] leading-[1.45] text-white/50">
              เก็บต่อ 24 เดือนตามนโยบาย PDPA หรือขอลบทันทีได้ที่ โปรไฟล์ › ขอสำเนา/ลบข้อมูล
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="connected-app-manage" className="h-12 text-lg">
            เก็บการเชื่อมต่อไว้
          </Button>
        </Block>
        <Block>
          <Button
            to="profile-settings"
            variant="secondary"
            className="h-12 border-[#f5222d] bg-white text-lg text-[#cf1322]"
          >
            ยกเลิกการเชื่อมต่อ Strava
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Help & Point Rules (262:2623) ---------- */

const RATES = [
  ['วิ่ง', '10 pt / กม.'],
  ['เดิน', '6 pt / กม.'],
  ['ปั่นจักรยาน', '4 pt / กม.'],
  ['ว่ายน้ำ', '20 pt / กม.'],
  ['เวตเทรนนิ่ง', '5 pt / 10 นาที'],
];

const FAQS = [
  ['ทำไมแต้มยังไม่เข้า?', 'ระบบซิงก์ทุก 30 นาที ถ้าเกิน 2 ชม.แล้วยังไม่เข้า ให้กดซิงก์เองที่หน้าโปรไฟล์'],
  ['กิจกรรมซ้ำจะได้แต้ม 2 เท่าไหม?', 'ไม่ได้ ถ้าเชื่อมหลายแอปและกิจกรรมทับซ้อนกัน ระบบจะนับให้ครั้งเดียว'],
  ['แต้มหมดอายุเมื่อไหร่?', 'สิ้นปีปฏิทินถัดจากปีที่ได้รับ เราจะเตือนล่วงหน้า 7 วัน'],
  ['อัปโหลดกิจกรรมเองได้ไหม?', 'ได้ แต่ต้องรอตรวจสอบ 24 ชม. และอาจถูกปฏิเสธถ้าข้อมูลผิดปกติ'],
  ['ถูกตัดแต้มเพราะโกงได้ไหม?', 'ได้ ถ้าตรวจพบความเร็วหรือระยะที่เป็นไปไม่ได้ เราจะตัดแต้มและแจ้งเหตุผล'],
];

export function HelpPointRulesScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">ช่วยเหลือ &amp; กติกาแต้ม</h1>
      </Block>

      <Block>
        <div className="rounded-full border border-white/[0.14] bg-surface px-4 py-[13px] text-[13px] text-white">
          ค้นหาคำถาม เช่น &ldquo;แต้มไม่เข้า&rdquo;
        </div>
      </Block>

      <Block>
        <div className="rounded-[22px] border border-primary/40 bg-primary/10 p-4">
          <p className="pb-2 text-[13.5px] font-bold text-primary">อัตราแต้ม</p>
          {RATES.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-1 text-sm">
              <span className="text-white">{k}</span>
              <span className="font-bold text-primary">{v}</span>
            </div>
          ))}
          <p className="pt-2 text-xs leading-[1.45] text-white">
            เพดานสูงสุด 500 pt/วัน นับเฉพาะกิจกรรมที่ซิงก์จากแอปที่รองรับ
          </p>
        </div>
      </Block>

      <Block className="flex flex-col gap-2">
        <p className="text-sm font-bold text-white">คำถามที่พบบ่อย</p>
        {FAQS.map(([q, a]) => (
          <InfoCard key={q} title={q}>
            {a}
          </InfoCard>
        ))}
      </Block>

      <Block>
        <div className="rounded-[22px] bg-surface p-[14px]">
          <p className="text-sm font-bold text-white">ยังไม่ได้คำตอบ?</p>
          <p className="py-2 text-xs text-white">ตอบกลับภายใน 1 วันทำการ (จ-ศ 09:00-18:00)</p>
          <Button to="support-contact" className="py-[15px] text-[15px]">
            ติดต่อทีมงาน
          </Button>
        </div>
      </Block>
    </Screen>
  );
}

/* ---------- Support - Contact (279:1125) ---------- */

export function SupportContactScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">ติดต่อทีมงาน</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white">
            ตอบกลับภายใน 1 วันทำการ ถ้าเป็นเรื่องแต้มไม่เข้า ระบบจะแนบข้อมูลกิจกรรมให้อัตโนมัติ
          </p>
        </Block>

        <Block>
          <p className="pb-2 text-sm font-bold text-white">เรื่องที่ต้องการแจ้ง</p>
          <div className="flex flex-wrap gap-2">
            {['แต้มไม่ถูกต้อง', 'ซิงก์ไม่ได้', 'แลกรางวัล', 'บัญชี', 'อื่น ๆ'].map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-[14px] py-[7px] text-[12.5px] font-medium ${
                  i === 0 ? 'bg-primary text-ink' : 'bg-surface text-white'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-primary/[0.08] p-4">
            <div className="flex items-center gap-2 pb-2">
              <span className="flex-1 text-sm font-bold text-primary">ข้อมูลที่จะแนบไปด้วย</span>
              <button type="button" className="text-[11.5px] font-medium text-white">
                แก้ไข
              </button>
            </div>
            {[
              ['กิจกรรม', 'วิ่งเช้า 5.2 กม. · Strava · 10 ก.ย. 06:12'],
              ['แต้มที่ได้', '+52 pt (คาดว่าควรได้ +52 pt)'],
              ['เวอร์ชันแอป', 'iOS 2.4.1 · iPhone 14'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-2.5 py-1 text-xs">
                <span className="w-[70px] shrink-0 text-white">{k}</span>
                <span className="min-w-0 flex-1 font-medium text-white">{v}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block className="flex flex-col gap-3.5">
          <DarkField label="อีเมลสำหรับตอบกลับ" value="somchawee@email.com" />
          <DarkTextarea
            label="เล่าให้เราฟังหน่อย"
            placeholder="วิ่งเสร็จตั้งแต่เช้าแล้วแต้มยังไม่เข้า ลองซิงก์ใหม่ 2 ครั้งแล้ว"
          />
          <p className="-mt-2 text-[11.5px] text-white">ยิ่งบอกละเอียด ยิ่งตรวจสอบได้เร็ว</p>

          <div className="flex flex-col items-center gap-1.5 rounded-[18px] border border-dashed border-white/15 bg-white/[0.03] p-4">
            <p className="text-[13px] font-semibold text-white">แนบภาพหน้าจอ</p>
            <p className="text-[11.5px] text-white">สูงสุด 3 ไฟล์ · JPG หรือ PNG</p>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-white/[0.04] p-4">
            <p className="text-sm font-bold text-white">เรื่องนี้อาจตอบได้เลย</p>
            <p className="pt-1.5 text-[11.5px] leading-[1.45] text-white">
              &ldquo;ทำไมแต้มยังไม่เข้า&rdquo; ระบบซิงก์ทุก 30 นาที
              และกิจกรรมที่อัปโหลดเองต้องรอตรวจสอบไม่เกิน 2 ชม.
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button className="h-12 text-lg">ส่งเรื่องให้ทีมงาน</Button>
        </Block>
        <Block>
          <Button to="help-point-rules" variant="ghost" className="h-12 text-lg">
            อ่านคำถามที่พบบ่อยก่อน
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Account - Pause (278:1091) ---------- */

const PAUSE_EFFECTS = [
  ['ซ่อนชื่อจากอันดับทุกประเภท', 'coral'],
  ['หยุดซิงก์และหยุดสะสมแต้มใหม่', 'coral'],
  ['หยุดแจ้งเตือนทั้งหมด', 'coral'],
  ['แต้ม 1,240 pt และคูปองยังอยู่ครบ', 'green'],
  ['ออกจากอีเวนต์ที่กำลังแข่ง 1 รายการ', 'amber'],
] as const;

export function AccountPauseScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">พักบัญชีชั่วคราว</h1>
          <p className="pt-1.5 text-xs leading-[1.5] text-white">
            ทางเลือกที่เบากว่าการลบบัญชี ข้อมูลทุกอย่างยังอยู่ครบ กลับมาเมื่อไหร่ก็ใช้ต่อได้ทันที
          </p>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-3 text-sm font-bold text-white">พักนานแค่ไหน</p>
            {[
              { label: '30 วัน', meta: 'กลับมาอัตโนมัติ 10 ต.ค. 2569', on: true },
              { label: '90 วัน', meta: 'กลับมาอัตโนมัติ 9 ธ.ค. 2569', on: false },
              { label: 'ไม่กำหนด', meta: 'เปิดเองเมื่อพร้อม', on: false },
            ].map((o) => (
              <div
                key={o.label}
                className={`mb-3 flex items-center gap-3 rounded-[18px] px-[14px] py-3 ${
                  o.on ? 'border border-primary/70 bg-primary/10' : 'bg-white/5'
                }`}
              >
                <span
                  className={`grid size-4 shrink-0 place-items-center rounded-full border-2 ${
                    o.on ? 'border-primary' : 'border-white/30'
                  }`}
                >
                  {o.on ? <span className="size-2 rounded-full bg-primary" /> : null}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-semibold text-white">{o.label}</p>
                  <p className="text-[11.5px] text-white">{o.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-2 text-sm font-bold text-white">ระหว่างพักบัญชี</p>
            {PAUSE_EFFECTS.map(([text, tone]) => (
              <div key={text} className="flex items-center gap-2.5 py-1.5">
                <span
                  className={`size-1.5 shrink-0 rounded-full ${
                    tone === 'coral' ? 'bg-coral' : tone === 'green' ? 'bg-primary-active' : 'bg-amber'
                  }`}
                />
                <span className="flex-1 text-[13px] leading-[1.45] text-white">{text}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-amber/10 p-4">
            <p className="text-sm font-bold text-amber">เรื่องแต้มหมดอายุ</p>
            <p className="pt-1 text-xs leading-[1.45] text-white">
              การพักบัญชีไม่หยุดวันหมดอายุแต้ม 312 pt จะหมดอายุ 31 ธ.ค. 2569 ตามเดิม
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="profile-settings" className="h-12 text-lg">
            พักบัญชี 30 วัน
          </Button>
        </Block>
        <Block>
          <Button to="profile-settings" variant="ghost" className="h-12 text-lg">
            ไม่พัก กลับไปหน้าโปรไฟล์
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Account - Delete (262:2674) ---------- */

const DELETE_LOSSES = [
  'แต้มคงเหลือ 1,240 pt (ตีเป็นเงินคืนไม่ได้)',
  'คูปองที่ยังไม่ได้ใช้ 3 ใบ',
  'สิทธิ์ลุ้นรางวัลรอบนี้ 12 สิทธิ์',
  'ประวัติกิจกรรม 312 กม. และสถิติทั้งหมด',
  'สมาชิกภาพในคลับ และอันดับสะสม',
];

export function AccountDeleteScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">ลบบัญชีถาวร</h1>
        <p className="pt-1.5 text-[13px] leading-[1.45] text-white">
          ตามสิทธิ์ PDPA คุณขอลบข้อมูลได้ทุกเมื่อ อ่านให้ครบก่อนตัดสินใจ
        </p>
      </Block>

      <Block>
        <div className="rounded-[22px] border border-coral/50 bg-coral/[0.08] p-[14px]">
          <p className="pb-2 text-sm font-bold text-coral">สิ่งที่จะหายไปถาวร</p>
          {DELETE_LOSSES.map((t) => (
            <div key={t} className="flex items-center gap-2 py-1">
              <span className="size-1.5 shrink-0 rounded-full bg-coral" />
              <span className="flex-1 text-xs text-white">{t}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block>
        <InfoCard title="สิ่งที่เราต้องเก็บต่อตามกฎหมาย">
          บันทึกการแลกของรางวัลและเอกสารภาษี เก็บ 5 ปี ตามประมวลรัษฎากร
          โดยตัดข้อมูลระบุตัวตนออกให้มากที่สุด
        </InfoCard>
      </Block>

      <Block>
        <div className="rounded-[22px] bg-surface p-[14px]">
          <p className="pb-2 text-sm font-bold text-primary">ทางเลือกที่เบากว่า</p>
          {[
            ['พักบัญชีชั่วคราว', 'ซ่อนชื่อจากอันดับและหยุดแจ้งเตือน แต้มยังอยู่', 'account-pause'],
            ['ยกเลิกการเชื่อมต่อแอป', 'หยุดส่งข้อมูลสุขภาพ แต่ยังใช้แต้มเดิมได้', 'connected-app-manage'],
            ['ขอสำเนาข้อมูลของฉัน', 'ดาวน์โหลดไฟล์ทั้งหมดก่อนลบ ใช้เวลา 7 วัน', null],
          ].map(([title, meta]) => (
            <div key={title as string} className="py-1.5">
              <p className="text-sm font-bold text-primary">{title}</p>
              <p className="text-xs leading-[1.45] text-white">{meta}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block>
        <DarkField
          label='พิมพ์ "ลบบัญชี" เพื่อยืนยัน'
          placeholder="ลบบัญชี"
          danger
          hint="มีเวลาเปลี่ยนใจ 30 วัน หลังจากนั้นข้อมูลจะถูกลบถาวร"
        />
      </Block>

      <Block className="flex flex-col gap-2.5">
        <Button
          to="account-delete-scheduled"
          className="bg-coral py-[15px] text-[15px] text-ink"
        >
          ลบบัญชีถาวร
        </Button>
        <Button to="profile-settings" variant="secondary" className="py-[15px] text-[15px]">
          เก็บบัญชีไว้
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Account - Delete Scheduled (279:1047) ---------- */

export function AccountDeleteScheduledScreen() {
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
            <span className="text-xl font-bold text-coral">30</span>
          </motion.div>
        </Block>

        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">ตั้งเวลาลบบัญชีแล้ว</h1>
          <p className="pt-1.5 text-xs leading-[1.5] text-white">
            บัญชีจะถูกลบถาวรวันที่ 10 ต.ค. 2569 เวลา 09:41 ระหว่างนี้คุณยกเลิกได้ตลอด
          </p>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-3 text-sm font-bold text-white">ตั้งแต่ตอนนี้</p>
            {[
              ['บัญชีถูกซ่อนจากอันดับและคลับ', 'ทันที'],
              ['หยุดซิงก์และหยุดสะสมแต้ม', 'ทันที'],
              ['คูปองที่ยังไม่ใช้ 3 ใบ ใช้ได้ถึง 9 ต.ค.', 'เหลือ 30 วัน'],
              ['ดาวน์โหลดสำเนาข้อมูลได้', 'ก่อนวันลบเท่านั้น'],
            ].map(([k, v], i, arr) => (
              <div key={k}>
                <div className="flex items-center gap-2.5 py-2">
                  <span className="min-w-0 flex-1 text-[13px] leading-[1.45] text-white">{k}</span>
                  <span className="shrink-0 text-[11px] text-white">{v}</span>
                </div>
                {i < arr.length - 1 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] border border-coral/40 bg-coral/[0.08] p-4">
            <p className="text-sm font-bold text-coral">วันที่ 10 ต.ค. จะหายถาวร</p>
            <p className="pt-1.5 text-xs leading-[1.45] text-white">
              แต้ม 1,240 pt · คูปองที่เหลือ · สิทธิ์ลุ้นรางวัล 12 สิทธิ์ · ประวัติกิจกรรม 312 กม. ·
              สมาชิกภาพคลับ
            </p>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-white/[0.04] p-4">
            <p className="text-sm font-bold text-white">สิ่งที่เราต้องเก็บต่อตามกฎหมาย</p>
            <p className="pt-1 text-[11.5px] leading-[1.45] text-white">
              บันทึกการแลกของรางวัลและเอกสารภาษี เก็บ 5 ปีตามประมวลรัษฎากร โดยตัดข้อมูลระบุตัวตนออก
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="profile-settings" className="h-12 text-lg">
            ยกเลิกการลบ ใช้งานต่อ
          </Button>
        </Block>
        <Block>
          <Button variant="ghost" className="h-12 text-lg">
            ดาวน์โหลดสำเนาข้อมูล
          </Button>
        </Block>
      </div>
    </div>
  );
}
