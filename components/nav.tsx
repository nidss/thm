'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_SCREEN, isScreenSlug, type ScreenSlug } from './screenList';

type NavValue = {
  current: ScreenSlug;
  /** ทิศทางของ transition: 1 = เข้าหน้าใหม่, -1 = ย้อนกลับ */
  direction: number;
  go: (slug: ScreenSlug) => void;
  back: () => void;
  canBack: boolean;
};

const NavContext = createContext<NavValue | null>(null);

/** อ่าน slug จาก hash ของ URL เช่น #/login */
function slugFromHash(): ScreenSlug | null {
  if (typeof window === 'undefined') return null;
  const raw = window.location.hash.replace(/^#\/?/, '');
  return isScreenSlug(raw) ? raw : null;
}

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [stack, setStack] = useState<ScreenSlug[]>([DEFAULT_SCREEN]);
  const [direction, setDirection] = useState(1);

  const current = stack[stack.length - 1];

  // เปิดลิงก์ที่มี hash มาตรง ๆ หรือกดปุ่ม back ของเบราว์เซอร์ ต้องเปลี่ยนหน้าตาม
  useEffect(() => {
    const sync = () => {
      const slug = slugFromHash();
      if (!slug) return;
      setStack((prev) => (prev[prev.length - 1] === slug ? prev : [...prev, slug]));
      setDirection(1);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  // เขียน hash กลับไปที่ URL เพื่อให้ copy ลิงก์ของหน้านั้น ๆ ไปแชร์ได้
  useEffect(() => {
    const target = `#/${current}`;
    if (window.location.hash !== target) {
      window.history.replaceState(null, '', target);
    }
  }, [current]);

  const go = useCallback((slug: ScreenSlug) => {
    setStack((prev) => (prev[prev.length - 1] === slug ? prev : [...prev, slug]));
    setDirection(1);
  }, []);

  const back = useCallback(() => {
    setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    setDirection(-1);
  }, []);

  const value = useMemo<NavValue>(
    () => ({ current, direction, go, back, canBack: stack.length > 1 }),
    [current, direction, go, back, stack.length],
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error('useNav ต้องอยู่ภายใต้ NavProvider');
  return ctx;
}
