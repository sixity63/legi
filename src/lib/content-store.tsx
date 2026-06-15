import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { siteData, type SiteContent } from "./site-data";

const STORAGE_KEY = "te-unsrat-content-v1";

type Ctx = {
  content: SiteContent;
  setContent: (updater: SiteContent | ((prev: SiteContent) => SiteContent)) => void;
  reset: () => void;
};

const ContentContext = createContext<Ctx | null>(null);

function loadInitial(): SiteContent {
  if (typeof window === "undefined") return siteData;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return siteData;
    const parsed = JSON.parse(raw);

    const gallery = Array.isArray(parsed.gallery) && parsed.gallery.length > 0
      ? parsed.gallery.map((item: any, index: number) => ({
          ...siteData.gallery[index],
          ...item,
          src: item?.src || siteData.gallery[index]?.src,
        }))
      : siteData.gallery;

    return { ...siteData, ...parsed, gallery } as SiteContent;
  } catch {
    return siteData;
  }
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(siteData);

  // hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setContentState(loadInitial());
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setContentState(loadInitial());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setContent: Ctx["setContent"] = (updater) => {
    setContentState((prev) => {
      const next = typeof updater === "function" ? (updater as (p: SiteContent) => SiteContent)(prev) : updater;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore quota errors
      }
      return next;
    });
  };

  const reset = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* noop */ }
    setContentState(siteData);
  };

  return (
    <ContentContext.Provider value={{ content, setContent, reset }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used inside <ContentProvider>");
  return ctx;
}

// --- Admin session (very simple, client-only) ---
const ADMIN_KEY = "te-unsrat-admin-session";
export const ADMIN_PASSWORD =
  (import.meta.env.VITE_ADMIN_PASSWORD as string | undefined) || "admin123";

export function isAdminLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(ADMIN_KEY) === "1";
}
export function loginAdmin(password: string): boolean {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem(ADMIN_KEY, "1");
    return true;
  }
  return false;
}
export function logoutAdmin() {
  sessionStorage.removeItem(ADMIN_KEY);
}