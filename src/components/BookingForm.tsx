import { useState, type FormEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import {
  EMAIL,
  PHONE_DIGITS,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
  WHATSAPP_LINK,
} from "../config/site";
import {
  isValidEmail,
  isValidPassengerCount,
  isValidPhone,
  isTodayOrFuture,
  todayDateString,
} from "../utils/validation";

interface FormState {
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  serviceType: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  website: string; // honeypot
}

type FormErrors = Partial<Record<keyof Omit<FormState, "website">, string>>;

const initialState: FormState = {
  pickup: "",
  destination: "",
  date: "",
  time: "",
  passengers: "",
  serviceType: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
  website: "",
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function BookingForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [emailStatus, setEmailStatus] = useState<SubmitStatus>("idle");

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    const required = t.booking.errors.required;

    if (!form.pickup.trim()) next.pickup = required;
    if (!form.destination.trim()) next.destination = required;
    if (!form.date) next.date = required;
    else if (!isTodayOrFuture(form.date)) next.date = t.booking.errors.pastDate;
    if (!form.time) next.time = required;
    if (!form.passengers) next.passengers = required;
    else if (!isValidPassengerCount(form.passengers)) next.passengers = t.booking.errors.passengersRange;
    if (!form.serviceType) next.serviceType = required;
    if (!form.name.trim()) next.name = required;
    if (!form.phone.trim()) next.phone = required;
    else if (!isValidPhone(form.phone)) next.phone = t.booking.errors.invalidPhone;
    if (form.email.trim() && !isValidEmail(form.email)) next.email = t.booking.errors.invalidEmail;

    return next;
  };

  const serviceTypeLabel = (value: string): string => {
    switch (value) {
      case "transfer":
        return t.booking.serviceTypeOptions.transfer;
      case "hourly":
        return t.booking.serviceTypeOptions.hourly;
      case "fullDay":
        return t.booking.serviceTypeOptions.fullDay;
      case "multiDay":
        return t.booking.serviceTypeOptions.multiDay;
      default:
        return value;
    }
  };

  const buildWhatsappMessage = (): string => {
    const m = t.booking.whatsappMessage;
    const lines = [
      `*${m.heading}*`,
      "",
      `${m.name}: ${form.name}`,
      `${m.phone}: ${form.phone}`,
    ];
    if (form.email.trim()) lines.push(`${m.email}: ${form.email}`);
    lines.push(
      `${m.pickup}: ${form.pickup}`,
      `${m.destination}: ${form.destination}`,
      `${m.date}: ${form.date}`,
      `${m.time}: ${form.time}`,
      `${m.passengers}: ${form.passengers}`,
      `${m.serviceType}: ${serviceTypeLabel(form.serviceType)}`,
    );
    if (form.notes.trim()) lines.push(`${m.notes}: ${form.notes}`);
    lines.push("", m.closing);
    return lines.join("\n");
  };

  const handleWhatsappSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const message = buildWhatsappMessage();
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (emailStatus === "sending") return;

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Honeypot check: if filled, silently drop (likely a bot)
    if (form.website.trim()) {
      setEmailStatus("success");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setEmailStatus("error");
      return;
    }

    setEmailStatus("sending");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New booking request — Transport Touristique IDRISSI`,
          from_name: form.name,
          to: EMAIL,
          name: form.name,
          phone: form.phone,
          email: form.email || "(not provided)",
          pickup_location: form.pickup,
          destination: form.destination,
          travel_date: form.date,
          pickup_time: form.time,
          passengers: form.passengers,
          service_type: serviceTypeLabel(form.serviceType),
          notes: form.notes || "(none)",
          message: buildWhatsappMessage(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && data.success) {
        setEmailStatus("success");
        setForm(initialState);
      } else {
        setEmailStatus("error");
      }
    } catch {
      setEmailStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-base text-stone-800 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-majorelle-500 disabled:opacity-60";
  const labelBase = "mb-1.5 block text-sm font-semibold text-stone-700";
  const errorBase = "mt-1 text-sm font-medium text-red-600";

  const fieldBorder = (hasError?: string) => (hasError ? "border-red-400" : "border-stone-200");

  return (
    <div
      id="booking"
      className="relative w-full rounded-3xl border border-stone-200 bg-white/95 p-5 shadow-xl shadow-stone-900/5 backdrop-blur sm:p-7 lg:p-8"
    >
      <div className="mb-5">
        <h2 className="font-display text-2xl font-bold text-stone-900 sm:text-3xl">{t.booking.title}</h2>
        <p className="mt-2 text-sm text-stone-600 sm:text-base">{t.booking.subtitle}</p>
      </div>

      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" noValidate>
        {/* Honeypot field - hidden from humans */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">{t.booking.honeypotLabel}</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange("website")}
          />
        </div>

        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="pickup">
            {t.booking.labels.pickup} <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="pickup"
            type="text"
            className={`${inputBase} ${fieldBorder(errors.pickup)}`}
            placeholder={t.booking.placeholders.pickup}
            value={form.pickup}
            onChange={handleChange("pickup")}
          />
          {errors.pickup && <p className={errorBase}>{errors.pickup}</p>}
        </div>

        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="destination">
            {t.booking.labels.destination} <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="destination"
            type="text"
            className={`${inputBase} ${fieldBorder(errors.destination)}`}
            placeholder={t.booking.placeholders.destination}
            value={form.destination}
            onChange={handleChange("destination")}
          />
          {errors.destination && <p className={errorBase}>{errors.destination}</p>}
        </div>

        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="date">
            {t.booking.labels.date} <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="date"
            type="date"
            min={todayDateString()}
            className={`${inputBase} ${fieldBorder(errors.date)}`}
            value={form.date}
            onChange={handleChange("date")}
          />
          {errors.date && <p className={errorBase}>{errors.date}</p>}
        </div>

        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="time">
            {t.booking.labels.time} <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="time"
            type="time"
            className={`${inputBase} ${fieldBorder(errors.time)}`}
            value={form.time}
            onChange={handleChange("time")}
          />
          {errors.time && <p className={errorBase}>{errors.time}</p>}
        </div>

        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="passengers">
            {t.booking.labels.passengers} <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="passengers"
            type="number"
            inputMode="numeric"
            min={1}
            max={7}
            className={`${inputBase} ${fieldBorder(errors.passengers)}`}
            placeholder={t.booking.placeholders.passengers}
            value={form.passengers}
            onChange={handleChange("passengers")}
          />
          {errors.passengers && <p className={errorBase}>{errors.passengers}</p>}
        </div>

        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="serviceType">
            {t.booking.labels.serviceType} <span className="text-terracotta-600">*</span>
          </label>
          <select
            id="serviceType"
            className={`${inputBase} ${fieldBorder(errors.serviceType)}`}
            value={form.serviceType}
            onChange={handleChange("serviceType")}
          >
            <option value="" disabled>
              {t.booking.placeholders.serviceType}
            </option>
            <option value="transfer">{t.booking.serviceTypeOptions.transfer}</option>
            <option value="hourly">{t.booking.serviceTypeOptions.hourly}</option>
            <option value="fullDay">{t.booking.serviceTypeOptions.fullDay}</option>
            <option value="multiDay">{t.booking.serviceTypeOptions.multiDay}</option>
          </select>
          {errors.serviceType && <p className={errorBase}>{errors.serviceType}</p>}
        </div>

        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="name">
            {t.booking.labels.name} <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            className={`${inputBase} ${fieldBorder(errors.name)}`}
            placeholder={t.booking.placeholders.name}
            value={form.name}
            onChange={handleChange("name")}
          />
          {errors.name && <p className={errorBase}>{errors.name}</p>}
        </div>

        <div className="sm:col-span-1">
          <label className={labelBase} htmlFor="phone">
            {t.booking.labels.phone} <span className="text-terracotta-600">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={`${inputBase} ${fieldBorder(errors.phone)}`}
            placeholder={t.booking.placeholders.phone}
            value={form.phone}
            onChange={handleChange("phone")}
          />
          {errors.phone && <p className={errorBase}>{errors.phone}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className={labelBase} htmlFor="email">
            {t.booking.labels.email}
          </label>
          <input
            id="email"
            type="email"
            className={`${inputBase} ${fieldBorder(errors.email)}`}
            placeholder={t.booking.placeholders.email}
            value={form.email}
            onChange={handleChange("email")}
          />
          {errors.email && <p className={errorBase}>{errors.email}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className={labelBase} htmlFor="notes">
            {t.booking.labels.notes}
          </label>
          <textarea
            id="notes"
            rows={3}
            className={`${inputBase} ${fieldBorder()} resize-none`}
            placeholder={t.booking.placeholders.notes}
            value={form.notes}
            onChange={handleChange("notes")}
          />
        </div>

        <div className="sm:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleWhatsappSubmit}
            className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-green-900/10 transition hover:brightness-95 active:scale-[0.98]"
          >
            <WhatsappIcon className="h-5 w-5" />
            {t.booking.buttons.sendWhatsapp}
          </button>
          <button
            type="button"
            onClick={handleEmailSubmit}
            disabled={emailStatus === "sending"}
            className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl bg-majorelle-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-majorelle-900/10 transition hover:bg-majorelle-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <MailIcon className="h-5 w-5" />
            {emailStatus === "sending" ? t.booking.buttons.sending : t.booking.buttons.sendEmail}
          </button>
        </div>

        {emailStatus === "success" && (
          <div className="sm:col-span-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
            {t.booking.status.emailSuccess}
          </div>
        )}
        {emailStatus === "error" && (
          <div className="sm:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            <p>
              {WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
                ? t.booking.status.configMissing
                : t.booking.status.emailError}
            </p>
            <p className="mt-1">{t.booking.status.tryWhatsappOrCall}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                WhatsApp
              </a>
              <a href={`tel:+${PHONE_DIGITS}`} className="font-bold underline">
                {t.common.callNow}
              </a>
            </div>
          </div>
        )}
      </form>
    </div>
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
