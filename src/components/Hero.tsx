import { useLanguage } from "../i18n/LanguageContext";
import { TEL_LINK, WHATSAPP_LINK } from "../config/site";
import { images } from "../assets/images";
import BookingForm from "./BookingForm";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-stone-900">
      <div className="absolute inset-0">
        <img src={images.hero} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/75 to-stone-950" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-12 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="animate-fade-up text-center lg:sticky lg:top-28 lg:text-start">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <Badge>{t.hero.badgeVehicle}</Badge>
            <Badge>{t.hero.badgeAvailability}</Badge>
            <Badge>{t.hero.badgeArea}</Badge>
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-white text-balance sm:text-5xl lg:text-5xl xl:text-6xl">
            {t.hero.titleLine1}
            <span className="mt-1 block bg-gradient-to-r from-terracotta-400 to-terracotta-200 bg-clip-text text-transparent">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg lg:mx-0">
            {t.hero.subtitle}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-green-950/30 transition hover:brightness-95 sm:w-auto"
            >
              <WhatsappIcon className="h-5 w-5" />
              {t.hero.ctaWhatsapp}
            </a>
            <a
              href={TEL_LINK}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              {t.hero.ctaCall}
            </a>
          </div>

          <a
            href="#booking-form"
            className="mt-6 hidden items-center gap-1.5 text-sm font-semibold text-stone-300 hover:text-white lg:inline-flex"
          >
            {t.hero.scrollToBook}
            <ArrowDownIcon className="h-4 w-4" />
          </a>
        </div>

        <div id="booking-form" className="animate-fade-up scroll-mt-24">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
      {children}
    </span>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.26 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-9.84-10.01-9.84Zm5.84 14.19c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12-.43-.13-.98-.32-1.69-.63-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.21-1.6-1.21-3.06 0-1.45.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.12 1 2.07 1.31 2.37 1.46.3.15.47.13.65-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.77.84 2.07.99.3.15.5.22.57.35.07.13.07.74-.18 1.44Z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}
