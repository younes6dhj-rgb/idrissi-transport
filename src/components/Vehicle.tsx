import { useLanguage } from "../i18n/LanguageContext";
import { WHATSAPP_LINK } from "../config/site";
import { images } from "../assets/images";

export default function Vehicle() {
  const { t } = useLanguage();

  const features = [t.vehicle.feature1, t.vehicle.feature2, t.vehicle.feature3, t.vehicle.feature4];

  return (
    <section id="vehicle" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images.tourneoExterior}
              alt="Ford Tourneo exterior"
              className="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover shadow-xl"
            />
            <img
              src={images.tourneoInterior}
              alt="Ford Tourneo interior"
              className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover shadow-xl sm:col-span-1"
            />
            <div className="col-span-2 flex flex-col justify-center rounded-3xl bg-gradient-to-br from-majorelle-600 to-majorelle-800 p-6 text-white shadow-xl sm:col-span-1">
              <SeatIcon className="h-8 w-8" />
              <p className="mt-3 text-3xl font-black">{t.vehicle.seatsLabel}</p>
              <p className="text-sm text-majorelle-100">{t.vehicle.subtitle}</p>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-terracotta-600">{t.vehicle.title}</p>
            <h2 className="font-display text-3xl font-extrabold text-stone-900 sm:text-4xl">{t.vehicle.subtitle}</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">{t.vehicle.description}</p>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 rounded-xl bg-stone-50 px-4 py-3 text-sm font-semibold text-stone-700">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-terracotta-600" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-green-900/10 transition hover:brightness-95"
            >
              <WhatsappIcon className="h-5 w-5" />
              {t.vehicle.reserveCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 10V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3M6 10h8M6 10l-2 9h12l-2-9" />
      <path d="M8 19v2M14 19v2" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
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
