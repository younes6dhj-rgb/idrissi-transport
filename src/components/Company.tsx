import { useLanguage } from "../i18n/LanguageContext";
import { images } from "../assets/images";

export default function Company() {
  const { t } = useLanguage();

  const points = [
    { title: t.company.point1Title, desc: t.company.point1Desc, icon: ShieldIcon },
    { title: t.company.point2Title, desc: t.company.point2Desc, icon: CarIcon },
    { title: t.company.point3Title, desc: t.company.point3Desc, icon: ClockIcon },
  ];

  return (
    <section id="company" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-terracotta-600">
              {t.company.subtitle}
            </p>
            <h2 className="font-display text-3xl font-extrabold text-stone-900 sm:text-4xl">
              {t.company.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">{t.company.paragraph1}</p>
            <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">{t.company.paragraph2}</p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {points.map((p) => (
                <div key={p.title} className="rounded-2xl border border-stone-100 bg-stone-50 p-5">
                  <p.icon className="h-7 w-7 text-terracotta-600" />
                  <h3 className="mt-3 text-sm font-bold text-stone-900">{p.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-terracotta-200 to-majorelle-200 opacity-60 blur-xl" />
            <img
              src={images.marrakech}
              alt="Marrakech, Morocco"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM3 17V9l2-5h14l2 5v8" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
