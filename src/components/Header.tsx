import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { COMPANY_NAME, PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from "../config/site";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#company", label: t.nav.company },
    { href: "#services", label: t.nav.services },
    { href: "#vehicle", label: t.nav.vehicle },
    { href: "#destinations", label: t.nav.destinations },
    { href: "#booking", label: t.nav.booking },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-terracotta-500 to-terracotta-700 text-lg font-black text-white shadow-md">
            TI
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold text-stone-900 sm:text-base">{COMPANY_NAME}</span>
            <span className="hidden text-xs text-stone-500 sm:block">{t.header.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-stone-600 transition hover:text-terracotta-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSelector />
          <a
            href={TEL_LINK}
            className="flex items-center gap-1.5 rounded-full border border-stone-200 px-3.5 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
          >
            <PhoneIcon className="h-4 w-4" />
            {t.common.callNow}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:brightness-95"
          >
            <WhatsappIcon className="h-4 w-4" />
            {t.common.whatsapp}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSelector />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-700"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex gap-2 border-t border-stone-100 pt-3">
            <a
              href={TEL_LINK}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-stone-200 px-3 py-2.5 text-sm font-semibold text-stone-700"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.common.callNow}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-sm font-bold text-white"
            >
              <WhatsappIcon className="h-4 w-4" />
              {t.common.whatsapp}
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-stone-400" dir="ltr">{PHONE_DISPLAY}</p>
        </div>
      )}
    </header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.26 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-9.84-10.01-9.84Zm5.84 14.19c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.13-.98-.32-1.69-.63-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.21-1.6-1.21-3.06 0-1.45.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.12 1 2.07 1.31 2.37 1.46.3.15.47.13.65-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.77.84 2.07.99.3.15.5.22.57.35.07.13.07.74-.18 1.44Z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
