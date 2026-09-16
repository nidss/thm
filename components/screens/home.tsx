'use client';

import { motion } from 'framer-motion';
import { Img } from '../Surface';
import { IconRefresh, IconRun, IconWifi } from '../icons';
import { riseItem } from '../motion';
import { AppBar, Block, Button, DarkField, Screen } from '../ui';

/* ---------- Activity - Item Detail (262:2080) ---------- */

const METRICS = [
  ['ระยะทาง', '5.20 กม.'],
  ['เวลา', '28:41 นาที'],
  ['เพซเฉลี่ย', '5:31 /กม.'],
  ['ชีพจรเฉลี่ย', '148 bpm'],
  ['แคลอรี', '412 kcal'],
  ['ความสูงสะสม', '62 ม.'],
];

export function ActivityItemDetailScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <AppBar title="" />

      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">วิ่งเช้า 5.2 กม.</h1>
        <div className="flex items-center gap-1.5 pt-1.5">
          <span className="size-[7px] rounded-full bg-primary-active" />
          <p className="text-xs leading-[1.45] text-white/70">
            Strava · 10 ก.ย. 2569 · 06:12 น. · ยืนยันแล้ว
          </p>
        </div>
      </Block>

      {/* แผนที่เส้นทางจริงที่ export มาจาก Figma */}
      <Block>
        <div className="relative h-[150px] w-full overflow-hidden rounded-[24px]">
          <Img name="activityMap" alt="เส้นทางวิ่ง" />
        </div>
      </Block>

      <Block className="grid grid-cols-2 gap-2">
        {METRICS.map(([label, value]) => (
          <div key={label} className="rounded-[22px] bg-surface p-[14px]">
            <p className="text-[11.5px] text-primary">{label}</p>
            <p className="pt-0.5 text-base font-bold text-white">{value}</p>
          </div>
        ))}
      </Block>

      <Block>
        <div className="rounded-[22px] border border-primary/45 bg-primary/[0.12] p-4">
          <p className="text-xs font-semibold leading-[1.45] text-white/85">แต้มที่ได้จากกิจกรรมนี้</p>
          <div className="flex items-baseline gap-1.5 py-1">
            <span className="text-[28px] font-bold text-primary">+52</span>
            <span className="text-sm font-bold text-white/80">pt</span>
          </div>
          <p className="text-[11.5px] leading-[1.45] text-white">
            คิดจาก 5.2 กม. × 10 pt/กม. ปัดลงเป็นจำนวนเต็ม
          </p>
          <button type="button" className="pt-2 text-xs font-bold text-primary">
            ดูวิธีคิดแต้มทั้งหมด
          </button>
        </div>
      </Block>

      <Block>
        <Button variant="secondary" className="py-[15px] text-[15px]">
          แจ้งแต้มไม่ถูกต้อง
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Activity - Manual Upload (270:735) ---------- */

export function ActivityManualUploadScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">อัปโหลดกิจกรรมเอง</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            ใช้เมื่อแอปไม่ซิงก์ให้ กิจกรรมที่ส่งเองต้องรอตรวจสอบไม่เกิน 2 ชม.
          </p>
        </Block>

        <Block className="flex flex-col gap-3.5">
          <DarkField label="ประเภทกิจกรรม" value="วิ่ง" />
          <DarkField label="ระยะทาง (กม.)" value="5.20" />
          <DarkField label="เวลาที่ใช้" value="28:41 นาที" />
          <DarkField label="วันและเวลาที่เริ่ม" value="10 ก.ย. 2569 · 06:12" />

          <motion.div
            whileHover={{ borderColor: 'rgba(111,255,232,0.5)' }}
            className="flex flex-col items-center gap-1.5 rounded-[18px] border border-dashed border-white/15 bg-white/[0.03] p-5"
          >
            <p className="text-[13.5px] font-semibold text-white">แนบหลักฐาน</p>
            <p className="text-[11.5px] text-white/45">ภาพหน้าจอจากแอป หรือไฟล์ .gpx สูงสุด 10 MB</p>
          </motion.div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-primary/[0.08] p-4">
            <div className="flex items-center gap-2">
              <p className="flex-1 text-[13px] text-white/70">แต้มที่จะได้โดยประมาณ</p>
              <p className="text-base font-bold text-primary">+52 pt</p>
            </div>
            <p className="pt-1 text-[11.5px] text-white/45">
              คิดจาก 5.2 กม. × 10 pt/กม. · แต้มจะเข้าหลังตรวจสอบผ่าน
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="activity" className="h-12 text-lg">
            ส่งตรวจสอบ
          </Button>
        </Block>
        <Block>
          <Button variant="ghost" className="h-12 text-lg">
            ยกเลิก
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Notifications (270:813) ---------- */

const NOTIFICATIONS = [
  {
    unread: true,
    title: 'ซิงก์สำเร็จ พบ 2 กิจกรรมใหม่',
    body: 'Strava, Apple Health · ได้รับ +124 pt',
    time: '09:41',
  },
  {
    unread: true,
    title: 'แต้ม 312 pt กำลังจะหมดอายุ',
    body: 'ใช้ก่อน 31 ธ.ค. 2569 ไม่งั้นแต้มหาย',
    time: 'เมื่อวาน',
  },
  {
    unread: false,
    title: 'ประกาศผลลุ้นรางวัลรอบกันยายน',
    body: 'คุณถูกรางวัลที่ 2 กดดูรายละเอียด',
    time: '2 วันที่แล้ว',
  },
  {
    unread: false,
    title: 'คลับนัดซ้อมกลุ่ม',
    body: 'วิ่งเพื่ออาหารเปียก · พรุ่งนี้ 06:00 สวนรถไฟ',
    time: '3 วันที่แล้ว',
  },
  {
    unread: false,
    title: 'อันดับคุณขึ้นมา 6 อันดับ',
    body: 'ตอนนี้อยู่ที่ #42 อีก 1.8 กม. แซงได้อีก 3 คน',
    time: '4 วันที่แล้ว',
  },
];

const NOTI_FILTERS = ['ทั้งหมด', 'แต้ม', 'อีเวนต์', 'คลับ'];

export function NotificationsScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block className="flex items-center gap-2">
          <h1 className="flex-1 text-xl font-bold text-white">การแจ้งเตือน</h1>
          <button type="button" className="text-[12.5px] font-medium text-primary">
            อ่านทั้งหมด
          </button>
        </Block>

        <Block className="flex items-center gap-2">
          {NOTI_FILTERS.map((f, i) => (
            <span
              key={f}
              className={`rounded-full px-[14px] py-[7px] text-[12.5px] font-medium ${
                i === 0 ? 'bg-primary text-ink' : 'bg-surface text-white/70'
              }`}
            >
              {f}
            </span>
          ))}
        </Block>

        <Block className="flex flex-col">
          {NOTIFICATIONS.map((n, i) => (
            <div key={n.title}>
              <motion.div
                variants={riseItem}
                whileHover={{ x: 2 }}
                className="flex items-start gap-3 px-1 py-3.5"
              >
                <span
                  className={`mt-1.5 size-2 shrink-0 rounded-full ${
                    n.unread ? 'bg-primary' : 'bg-white/20'
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm leading-[1.45] ${
                      n.unread ? 'font-semibold text-white' : 'font-medium text-white/80'
                    }`}
                  >
                    {n.title}
                  </p>
                  <p className="pt-0.5 text-xs leading-[1.45] text-white/45">{n.body}</p>
                </div>
                <span className="shrink-0 text-[11px] text-white/35">{n.time}</span>
              </motion.div>
              {i < NOTIFICATIONS.length - 1 ? <div className="h-px bg-white/[0.08]" /> : null}
            </div>
          ))}
        </Block>
      </Screen>

      <div className="mt-auto px-4 pb-6 pt-6">
        <Block>
          <div className="rounded-[24px] bg-white/[0.04] p-4">
            <p className="text-[13px] font-semibold text-white">อยากได้แจ้งเตือนน้อยลง?</p>
            <p className="pt-1 text-xs leading-[1.45] text-white/50">
              เลือกเฉพาะเรื่องที่สนใจได้ที่ โปรไฟล์ › การแจ้งเตือน
            </p>
          </div>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Empty - No Activity (224:407) ---------- */

export function EmptyNoActivityScreen() {
  return (
    <div className="flex min-h-[736px] flex-col items-center gap-4 px-4 pb-2.5 pt-1.5">
      <div className="flex w-full items-center justify-between">
        <div>
          <p className="text-[26px] font-bold text-white">กิจกรรม</p>
          <p className="text-xs text-white/50">ยังไม่มีการซิงก์วันนี้</p>
        </div>
        <span className="grid size-[38px] place-items-center rounded-full border border-white/10 bg-white/[0.07]">
          <IconRefresh className="size-[18px] text-primary" />
        </span>
      </div>

      <div className="flex-1" />

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="grid size-[110px] place-items-center rounded-full border border-primary/[0.18] bg-primary/[0.08]"
      >
        <IconRun className="size-12 text-primary" />
      </motion.div>

      <p className="text-[23px] font-bold text-white">ยังไม่มีกิจกรรม</p>
      <p className="text-center text-sm leading-[1.45] text-white/60">
        เริ่มขยับร่างกายแล้วซิงก์แอปออกกำลังกาย กิจกรรมและแต้มของคุณจะมาแสดงที่นี่
      </p>

      <div className="flex-1" />

      <div className="flex w-full flex-col gap-2.5">
        <Button to="sync-loading" className="h-[54px] text-[15px]">
          <IconRefresh className="size-[18px]" />
          ซิงก์ตอนนี้
        </Button>
        <Button to="connect-apps" variant="secondary" className="h-[50px] text-sm">
          เชื่อมต่อแอปเพิ่ม
        </Button>
      </div>
    </div>
  );
}

/* ---------- Error - No Internet (224:365) ---------- */

export function ErrorNoInternetScreen() {
  return (
    <div className="flex min-h-[736px] flex-col items-center gap-4 px-4 pb-5 pt-3">
      <div className="flex-1" />

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="grid size-[100px] place-items-center rounded-full border border-hairline bg-surface"
      >
        <IconWifi className="size-11 text-white/50" />
      </motion.div>

      <p className="text-[25px] font-bold text-white">ไม่มีการเชื่อมต่อ</p>
      <p className="text-center text-sm leading-[1.45] text-white/60">
        ดูเหมือนว่าคุณกำลังออฟไลน์อยู่ ลองตรวจสอบ Wi-Fi หรืออินเทอร์เน็ตมือถือแล้วลองใหม่
      </p>

      <div className="w-full rounded-[20px] border border-hairline bg-white/5 p-[14px]">
        <div className="flex items-start gap-2.5">
          <IconRefresh className="size-[18px] shrink-0 text-primary" />
          <p className="flex-1 text-xs leading-[1.35] text-white/60">
            กิจกรรมที่บันทึกไว้จะถูกซิงก์ให้อัตโนมัติทันทีที่กลับมาออนไลน์
          </p>
        </div>
      </div>

      <div className="flex-1" />

      <div className="flex w-full flex-col gap-2.5">
        <Button to="sync-loading" className="h-[54px] text-[15px]">
          <IconRefresh className="size-[18px]" />
          ลองใหม่อีกครั้ง
        </Button>
        <Button to="dashboard" variant="secondary" className="h-[50px] text-sm">
          ใช้งานแบบออฟไลน์
        </Button>
      </div>
    </div>
  );
}

/* ---------- Skeleton (258:1287) ---------- */

/** บล็อกสีเทาที่กะพริบ ใช้แทนเนื้อหาที่กำลังโหลด */
function Shimmer({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`rounded-full bg-white/[0.07] ${className}`}
      animate={{ opacity: [0.4, 0.9, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export function SkeletonScreen() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-32 pt-3">
      <div className="flex items-center gap-2">
        <Shimmer className="size-10 rounded-full" />
        <div className="flex-1 space-y-1.5">
          <Shimmer className="h-2.5 w-20" />
          <Shimmer className="h-3.5 w-32" />
        </div>
        <Shimmer className="size-[38px] rounded-full" />
      </div>

      <div className="flex flex-col items-center gap-3 py-3">
        <Shimmer className="h-3 w-24" />
        <Shimmer className="h-12 w-36 rounded-2xl" />
        <Shimmer className="h-[7px] w-full" />
      </div>

      <Shimmer className="h-[156px] w-full rounded-[28px]" />

      <div className="flex gap-2.5">
        {[0, 1, 2].map((i) => (
          <Shimmer key={i} className="h-[92px] flex-1 rounded-[22px]" />
        ))}
      </div>

      <Shimmer className="h-4 w-28" />
      <Shimmer className="h-[72px] w-full rounded-[24px]" />

      <Shimmer className="h-4 w-20" />
      <div className="flex flex-col gap-2.5">
        <Shimmer className="h-[62px] w-full rounded-[22px]" />
        <Shimmer className="h-[62px] w-full rounded-[22px]" />
      </div>
    </div>
  );
}
