import { useLanguage } from "../i18n/LanguageContext";
import {
  EMAIL,
  MAILTO_LINK,
  PHONE_DISPLAY,
  TEL_LINK,
  WHATSAPP_LINK,
} from "../config/site";

export default function Contact() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: PhoneIcon,
      label: t.contact.phoneLabel,
      value: PHONE_DISPLAY,
      href: TEL_LINK,
      color: "bg-majorelle-600",
    },
    {
      icon: WhatsappIcon,
      label: t.contact.whatsappLabel,
      value: PHONE_DISPLAY,
      href: WHATSAPP_LINK,
      color: "bg-[#25D366]",
      external: true,
    },
    {
      icon: MailIcon,
      label: t.contact.emailLabel,
      value: EMAIL,
      href: MAILTO_LINK,
      color: "bg-terracotta-600",
    },
  ];

  return (
    <section id="contact" className="bg-stone-900 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-3 text-stone-300">{t.contact.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition hover:-translate-y-1 hover:bg-white/10"
              dir="ltr"
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.color} text-white`}>
                <c.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold text-stone-300">{c.label}</span>
              <span className="break-all text-base font-bold text-white">{c.value}</span>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-sm font-semibold text-stone-400">{t.contact.availabilityLabel}</p>
            <p className="mt-1 text-lg font-bold">{t.contact.availabilityValue}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-sm font-semibold text-stone-400">{t.contact.baseLabel}</p>
            <p className="mt-1 text-lg font-bold">{t.common.baseCities}</p>
            <p className="text-xs text-stone-400">{t.common.serviceArea}</p>
          </div>
        </div>

        <p className="mt-10 text-center text-sm font-medium text-stone-400">
          {t.contact.formCta}{" "}
          <a href="#booking-form" className="font-bold text-terracotta-400 underline">
            ↑
          </a>
        </p>
      </div>
    </section>
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

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
