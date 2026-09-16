# ThaiMove — UI Preview

หน้าเว็บ public หน้าเดียวที่จำลองหน้าจอแอป **ThaiMove** จากดีไซน์ใน Figma
เปิดดูได้เลยโดยไม่ต้องล็อกอิน กดเมนูลอยด้านล่างของเครื่องเพื่อสลับหน้า

## หน้าจอที่ทำไว้

ทำครบตาม 5 แท็บของ component `menu-light` ใน Figma

| แท็บ | หน้าจอ | Figma node |
| --- | --- | --- |
| หน้าหลัก | Dashboard | `198:2` |
| ชาเลนจ์ | Events | `205:2` |
| กิจกรรม | Activity - Detail | `201:2` |
| อันดับ | Ranking - Leaderboard | `204:2` |
| รางวัล | Points & Rewards | `202:2` |

เมนูลอยด้านล่างมาจาก component `menu-light` (`281:2105`)


## Animation ที่ใส่ไว้

- สลับหน้าแบบสไลด์ตามทิศทางของแท็บ (ไปขวา/ไปซ้าย) ด้วย `AnimatePresence`
- เนื้อหาในแต่ละหน้าทยอยโผล่ไล่กันทีละชิ้น (stagger)
- ตัวเลขนับขึ้นจาก 0 เช่น 268 แต้ม, 46.8 กม., 1,240 แต้ม
- แถบ progress วิ่งจาก 0 ไปยังค่าจริง
- กราฟแท่งรายสัปดาห์งอกขึ้นจากด้านล่างทีละแท่ง
- หยดสีใต้เมนูเลื่อนตามแท็บที่เลือก และขีดใต้ของ tab filter เลื่อนตามเช่นกัน (`layoutId`)
- ปุ่ม/การ์ดมี hover และ tap feedback, โพเดียมอันดับเด้งขึ้นแบบ spring
- รองรับ `prefers-reduced-motion` — ถ้าผู้ใช้ตั้งค่าลดการเคลื่อนไหว จะไม่มี animation ที่วนซ้ำ

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4 — design token จาก Figma อยู่ใน `@theme` ที่ `app/globals.css`
- framer-motion สำหรับ animation
- ฟอนต์ Anuphan ผ่าน `next/font/google`

## รันในเครื่อง

```bash
npm install
npm run dev      # เปิด http://localhost:3000
npm run build    # build static ออกมาที่โฟลเดอร์ out/
```

## Deploy

push ขึ้น `main` แล้ว GitHub Actions (`.github/workflows/deploy.yml`) จะ build
เป็น static แล้ว deploy ขึ้น GitHub Pages ให้อัตโนมัติ

ครั้งแรกต้องไปตั้งค่าที่ **Settings → Pages → Source: GitHub Actions** ก่อนหนึ่งครั้ง
หลังจากนั้นเว็บจะอยู่ที่ <https://nidss.github.io/thm/>

`basePath` ถูกตั้งเป็น `/thm` ผ่าน env `NEXT_PUBLIC_BASE_PATH` ตอน build ใน CI
เวลารันในเครื่องจะเป็นค่าว่าง จึงเปิดที่ root ได้ตามปกติ

## หมายเหตุเรื่องรูปภาพและไอคอน

environment ที่ใช้ทำงานบล็อกการต่อออกไปยัง `figma.com` จึงโหลดไฟล์ asset
ที่ export ไว้ (รูปถ่าย, โลโก้แบรนด์, ไฟล์ SVG ไอคอน) ลงมาไม่ได้ ในโค้ดจึงใช้

- **ไอคอน** — วาดใหม่เป็น inline SVG ใน `components/icons.tsx` ให้ตรงกับ
  glyph และสไตล์ของ HugeIcons (stroke-rounded) ที่ดีไซน์อ้างอิงไว้
- **รูปภาพ** — ใช้ gradient แทน โดยใช้ค่า gradient ชุดเดียวกับที่ไฟล์ Figma
  ใช้เป็น placeholder อยู่แล้ว (ดู `components/Surface.tsx`)

ถ้าต้องการรูปจริง ให้ใส่ไฟล์ลง `public/` แล้วเปลี่ยน `GradientBlock`
เป็น `next/image` ได้เลย ส่วนโครงและขนาดกล่องวางไว้ตรงตามดีไซน์แล้ว
