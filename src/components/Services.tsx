import { useLanguage } from "../i18n/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="zellige-pattern bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-terracotta-600">{t.services.subtitle}</p>
          <h2 className="font-display text-3xl font-extrabold text-stone-900 sm:text-4xl">{t.services.title}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ServiceCard icon={<RouteIcon className="h-7 w-7" />} title={t.services.service1Title} desc={t.services.service1Desc} cta={t.services.bookNow} />
          <ServiceCard icon={<SteeringIcon className="h-7 w-7" />} title={t.services.service2Title} desc={t.services.service2Desc} cta={t.services.bookNow} />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, cta }: { icon: React.ReactNode; title: string; desc: string; cta: string }) {
  return (
    <div className="group flex flex-col rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta-50 text-terracotta-600 transition group-hover:bg-terracotta-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-stone-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 sm:text-base">{desc}</p>
      <a
        href="#booking-form"
        className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-majorelle-600 transition group-hover:gap-2.5"
      >
        {cta}
        <ArrowIcon className="h-4 w-4 rtl-flip" />
      </a>
    </div>
  );
}

function RouteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M6 17V9a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4" />
    </svg>
  );
}

function SteeringIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v6M4.9 19.1 9 15M19.1 19.1 15 15" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
