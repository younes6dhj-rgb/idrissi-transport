import { useLanguage } from "../i18n/LanguageContext";
import { images } from "../assets/images";

export default function Destinations() {
  const { t } = useLanguage();

  const cities = [
    { key: "marrakech", img: images.marrakech },
    { key: "casablanca", img: images.casablanca },
    { key: "chefchaouen", img: images.chefchaouen },
    { key: "sahara", img: images.sahara },
    { key: "fes", img: images.fes },
    { key: "eljadida", img: images.eljadida },
  ] as const;

  return (
    <section id="destinations" className="bg-stone-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-terracotta-600">{t.destinations.title}</p>
          <h2 className="font-display text-3xl font-extrabold text-stone-900 sm:text-4xl">{t.destinations.subtitle}</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {cities.map((c) => {
            const city = t.destinations.cities[c.key];
            return (
              <div key={c.key} className="group relative overflow-hidden rounded-2xl shadow-md">
                <img
                  src={c.img}
                  alt={city.name}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110 sm:aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <h3 className="font-display text-base font-bold text-white sm:text-lg">{city.name}</h3>
                  <p className="hidden text-xs text-stone-200 sm:block">{city.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-stone-500">{t.destinations.note}</p>
      </div>
    </section>
  );
}
