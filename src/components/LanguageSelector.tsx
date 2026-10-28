import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LANGUAGES } from "../i18n";
import type { LanguageCode } from "../i18n";

export default function LanguageSelector({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang)!;

  const select = (code: LanguageCode) => {
    setLang(code);
    setOpen(false);
  };

  const baseBtn =
    variant === "dark"
      ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
      : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.languageSelector.label}
        className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition ${baseBtn}`}
      >
        <GlobeIcon className="h-4 w-4" />
        <span>{current.nativeName}</span>
        <ChevronIcon className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute end-0 z-50 mt-2 max-h-80 w-48 overflow-y-auto rounded-xl border border-stone-200 bg-white py-1.5 shadow-xl"
          role="menu"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => select(l.code)}
              dir={l.dir}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-start text-sm transition hover:bg-stone-50 ${
                l.code === lang ? "font-bold text-terracotta-600" : "text-stone-700"
              }`}
            >
              {l.nativeName}
              {l.code === lang && <CheckIcon className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
