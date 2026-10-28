import { useLanguage } from "../i18n/LanguageContext";
import { COMPANY_NAME, EMAIL, MAILTO_LINK, PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from "../config/site";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#company", label: t.nav.company },
    { href: "#services", label: t.nav.services },
    { href: "#vehicle", label: t.nav.vehicle },
    { href: "#destinations", label: t.nav.destinations },
    { href: "#booking-form", label: t.nav.booking },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-stone-950 pb-8 pt-12 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-terracotta-500 to-terracotta-700 text-base font-black text-white">
                TI
              </span>
              <span className="font-display text-base font-bold text-white">{COMPANY_NAME}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500">{t.footer.quickLinks}</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-stone-400 transition hover:text-terracotta-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div dir="ltr">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500">{t.footer.contactTitle}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-stone-400">
              <li>
                <a href={TEL_LINK} className="transition hover:text-terracotta-400">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition hover:text-terracotta-400">
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={MAILTO_LINK} className="break-all transition hover:text-terracotta-400">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-stone-500">
          © {year} {COMPANY_NAME}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
