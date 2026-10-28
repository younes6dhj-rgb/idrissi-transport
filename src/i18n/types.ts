export type LanguageCode = "ar" | "en" | "fr" | "es" | "zh" | "de" | "pt" | "ru";

export interface LanguageInfo {
  code: LanguageCode;
  nativeName: string;
  dir: "ltr" | "rtl";
}

export interface Translation {
  dir: "ltr" | "rtl";
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    company: string;
    services: string;
    vehicle: string;
    destinations: string;
    booking: string;
    contact: string;
  };
  common: {
    callNow: string;
    whatsapp: string;
    emailUs: string;
    available247: string;
    phone: string;
    email: string;
    baseCities: string;
    serviceArea: string;
  };
  header: {
    tagline: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    badgeVehicle: string;
    badgeAvailability: string;
    badgeArea: string;
    ctaWhatsapp: string;
    ctaCall: string;
    scrollToBook: string;
  };
  booking: {
    title: string;
    subtitle: string;
    labels: {
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
    };
    placeholders: {
      pickup: string;
      destination: string;
      passengers: string;
      name: string;
      phone: string;
      email: string;
      notes: string;
      serviceType: string;
    };
    serviceTypeOptions: {
      transfer: string;
      hourly: string;
      fullDay: string;
      multiDay: string;
    };
    errors: {
      required: string;
      invalidPhone: string;
      invalidEmail: string;
      pastDate: string;
      passengersRange: string;
    };
    buttons: {
      sendWhatsapp: string;
      sendEmail: string;
      sending: string;
    };
    status: {
      emailSuccess: string;
      emailError: string;
      tryWhatsappOrCall: string;
      configMissing: string;
    };
    whatsappMessage: {
      heading: string;
      name: string;
      phone: string;
      email: string;
      pickup: string;
      destination: string;
      date: string;
      time: string;
      passengers: string;
      serviceType: string;
      notes: string;
      closing: string;
    };
    honeypotLabel: string;
  };
  company: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
  };
  services: {
    title: string;
    subtitle: string;
    service1Title: string;
    service1Desc: string;
    service2Title: string;
    service2Desc: string;
    bookNow: string;
  };
  vehicle: {
    title: string;
    subtitle: string;
    description: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    seatsLabel: string;
    reserveCta: string;
  };
  destinations: {
    title: string;
    subtitle: string;
    note: string;
    cities: {
      marrakech: { name: string; desc: string };
      casablanca: { name: string; desc: string };
      chefchaouen: { name: string; desc: string };
      sahara: { name: string; desc: string };
      fes: { name: string; desc: string };
      eljadida: { name: string; desc: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    availabilityLabel: string;
    availabilityValue: string;
    baseLabel: string;
    formCta: string;
  };
  footer: {
    tagline: string;
    rights: string;
    quickLinks: string;
    contactTitle: string;
  };
  languageSelector: {
    label: string;
  };
}
