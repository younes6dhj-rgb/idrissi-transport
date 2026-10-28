import type { LanguageCode, LanguageInfo, Translation } from "./types";
import ar from "./locales/ar";
import en from "./locales/en";
import fr from "./locales/fr";
import es from "./locales/es";
import zh from "./locales/zh";
import de from "./locales/de";
import pt from "./locales/pt";
import ru from "./locales/ru";

export const LANGUAGES: LanguageInfo[] = [
  { code: "ar", nativeName: "العربية", dir: "rtl" },
  { code: "en", nativeName: "English", dir: "ltr" },
  { code: "fr", nativeName: "Français", dir: "ltr" },
  { code: "es", nativeName: "Español", dir: "ltr" },
  { code: "zh", nativeName: "中文", dir: "ltr" },
  { code: "de", nativeName: "Deutsch", dir: "ltr" },
  { code: "pt", nativeName: "Português", dir: "ltr" },
  { code: "ru", nativeName: "Русский", dir: "ltr" },
];

export const translations: Record<LanguageCode, Translation> = {
  ar,
  en,
  fr,
  es,
  zh,
  de,
  pt,
  ru,
};

export const DEFAULT_LANGUAGE: LanguageCode = "fr";

export type { LanguageCode, Translation };
