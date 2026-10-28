import type { Translation } from "../types";

const de: Translation = {
  dir: "ltr",
  meta: {
    title: "Transport Touristique IDRISSI — Privater Touristentransport in Marokko",
    description:
      "Privater Touristentransport in ganz Marokko mit einem Ford Tourneo, 7 Sitzplätze. Standorte in Casablanca und El Jadida. Rund um die Uhr verfügbar. Buchung per WhatsApp, Telefon oder E-Mail.",
  },
  nav: {
    home: "Startseite",
    company: "Unternehmen",
    services: "Dienstleistungen",
    vehicle: "Unser Fahrzeug",
    destinations: "Reiseziele",
    booking: "Buchung",
    contact: "Kontakt",
  },
  common: {
    callNow: "Jetzt Anrufen",
    whatsapp: "WhatsApp",
    emailUs: "E-Mail Senden",
    available247: "24/7 Verfügbar",
    phone: "Telefon",
    email: "E-Mail",
    baseCities: "Casablanca und El Jadida",
    serviceArea: "Ganz Marokko",
  },
  header: {
    tagline: "Privater Touristentransport in ganz Marokko",
  },
  hero: {
    titleLine1: "Ihr Privater Fahrer",
    titleLine2: "Überall in Marokko",
    subtitle:
      "Komfortabler, zuverlässiger Transport in unserem Ford Tourneo (7 Sitzplätze). Mit Standorten in Casablanca und El Jadida bedienen wir ganz Marokko, rund um die Uhr, 7 Tage die Woche.",
    badgeVehicle: "Ford Tourneo · 7 Sitze",
    badgeAvailability: "24/7 Verfügbar",
    badgeArea: "Service in ganz Marokko",
    ctaWhatsapp: "Per WhatsApp Buchen",
    ctaCall: "Jetzt Anrufen",
    scrollToBook: "Buchen Sie Ihre Reise unten",
  },
  booking: {
    title: "Buchen Sie Ihre Reise",
    subtitle:
      "Füllen Sie das Formular unten aus und senden Sie es uns per WhatsApp oder E-Mail. Wir antworten schnell, rund um die Uhr.",
    labels: {
      pickup: "Abholort",
      destination: "Zielort",
      date: "Reisedatum",
      time: "Abholzeit",
      passengers: "Anzahl der Passagiere",
      serviceType: "Art der Dienstleistung",
      name: "Vollständiger Name",
      phone: "Telefon-/WhatsApp-Nummer",
      email: "E-Mail-Adresse (optional)",
      notes: "Zusätzliche Hinweise (optional)",
    },
    placeholders: {
      pickup: "z. B. Flughafen Mohammed V, Casablanca",
      destination: "z. B. Stadtzentrum von Marrakesch",
      passengers: "1 bis 7",
      name: "Ihr vollständiger Name",
      phone: "z. B. +212 6 00 00 00 00",
      email: "sie@beispiel.com",
      notes: "Flugnummer, Gepäck, besondere Wünsche...",
      serviceType: "Dienstleistung auswählen",
    },
    serviceTypeOptions: {
      transfer: "Einfacher Transfer (Abholung → Zielort)",
      hourly: "Fahrer zur Verfügung — stundenweise",
      fullDay: "Fahrer zur Verfügung — ganzer Tag",
      multiDay: "Fahrer zur Verfügung — mehrere Tage",
    },
    errors: {
      required: "Dieses Feld ist erforderlich.",
      invalidPhone: "Bitte geben Sie eine gültige Telefonnummer ein.",
      invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      pastDate: "Das Datum darf nicht in der Vergangenheit liegen.",
      passengersRange: "Die Anzahl der Passagiere muss zwischen 1 und 7 liegen.",
    },
    buttons: {
      sendWhatsapp: "Über WhatsApp Senden",
      sendEmail: "Per E-Mail Senden",
      sending: "Wird gesendet...",
    },
    status: {
      emailSuccess: "Ihre Buchungsanfrage wurde erfolgreich gesendet! Wir melden uns in Kürze bei Ihnen.",
      emailError: "Entschuldigung, Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per WhatsApp oder Telefon.",
      tryWhatsappOrCall: "Sie können uns auch sofort per WhatsApp oder Telefon erreichen.",
      configMissing: "Die E-Mail-Buchung ist noch nicht konfiguriert. Bitte nutzen Sie WhatsApp oder rufen Sie uns direkt an.",
    },
    whatsappMessage: {
      heading: "Neue Buchungsanfrage — Transport Touristique IDRISSI",
      name: "Name",
      phone: "Telefon",
      email: "E-Mail",
      pickup: "Abholort",
      destination: "Zielort",
      date: "Reisedatum",
      time: "Abholzeit",
      passengers: "Passagiere",
      serviceType: "Art der Dienstleistung",
      notes: "Hinweise",
      closing: "Bitte bestätigen Sie meine Buchung. Vielen Dank!",
    },
    honeypotLabel: "Dieses Feld leer lassen",
  },
  company: {
    title: "Über Unser Unternehmen",
    subtitle: "Transport Touristique IDRISSI",
    paragraph1:
      "Transport Touristique IDRISSI ist ein privates Touristentransportunternehmen mit Sitz in Casablanca und El Jadida, das Reisende in ganz Marokko bedient. Wir bieten komfortablen, sicheren und pünktlichen Privattransport für Touristen, Geschäftsreisende und Familien.",
    paragraph2:
      "Unsere Mission ist einfach: Wir bieten Ihnen eine entspannte Art, Marokko zu entdecken — mit einem engagierten Fahrer, einem komfortablen Fahrzeug und ständiger Verfügbarkeit, rund um die Uhr, 7 Tage die Woche.",
    point1Title: "Zuverlässig & Vertrauenswürdig",
    point1Desc: "Pünktliche Abholungen und sicheres Fahren im ganzen Land.",
    point2Title: "Komfortables Fahrzeug",
    point2Desc: "Ein geräumiger Ford Tourneo mit 7 Sitzen für Einzelpersonen, Familien oder kleine Gruppen.",
    point3Title: "Immer Verfügbar",
    point3Desc: "Buchung über Website, WhatsApp oder E-Mail, rund um die Uhr, 7 Tage die Woche.",
  },
  services: {
    title: "Unsere Dienstleistungen",
    subtitle: "Zwei einfache Wege, mit uns zu reisen",
    service1Title: "Abhol- und Bringtransfers",
    service1Desc:
      "Wir holen Sie genau dort ab, wo Sie sind — Flughafen, Hotel, Riad oder jede andere Adresse — und bringen Sie direkt zu Ihrem gewünschten Ziel, überall in Marokko.",
    service2Title: "Fahrer zu Ihrer Verfügung",
    service2Desc:
      "Benötigen Sie einen Fahrer für den ganzen Tag, mehrere Tage oder eine individuelle Route? Unser Fahrer bleibt bei Ihnen und bringt Sie dorthin, wohin Sie möchten, für die von Ihnen gewählte Dauer.",
    bookNow: "Diese Dienstleistung Buchen",
  },
  vehicle: {
    title: "Unser Fahrzeug",
    subtitle: "Ford Tourneo — 7 Sitzplätze",
    description:
      "Reisen Sie komfortabel in unserem modernen Ford Tourneo. Mit 7 bequemen Sitzen, Klimaanlage und viel Gepäckraum ist er das ideale Fahrzeug für Flughafentransfers, Stadtrundfahrten oder lange Roadtrips durch Marokko.",
    feature1: "7 bequeme Passagiersitze",
    feature2: "Klimaanlage",
    feature3: "Geräumiger Gepäckraum",
    feature4: "Ideal für Familien und kleine Gruppen",
    seatsLabel: "7 Sitzplätze",
    reserveCta: "Dieses Fahrzeug Reservieren",
  },
  destinations: {
    title: "Reiseziele & Einsatzgebiet",
    subtitle:
      "Wir bedienen ganz Marokko. Hier sind einige beliebte Reiseziele — sagen Sie uns, wohin Sie möchten, und wir bringen Sie dorthin.",
    note: "Ihr Reiseziel ist nicht dabei? Fragen Sie uns einfach — wir decken das ganze Land ab.",
    cities: {
      marrakech: { name: "Marrakesch", desc: "Die lebendige Rote Stadt, berühmt für ihre Medina und Gärten." },
      casablanca: { name: "Casablanca", desc: "Marokkos moderne Wirtschaftsmetropole an der Küste." },
      chefchaouen: { name: "Chefchaouen", desc: "Die charmante blaue Stadt in den Bergen." },
      sahara: { name: "Sahara-Wüste", desc: "Goldene Dünen und unvergessliche Wüstenlandschaften." },
      fes: { name: "Fès", desc: "Die alte Kaiserstadt mit ihrer historischen Medina." },
      eljadida: { name: "El Jadida", desc: "Eine Küstenstadt mit portugiesischem Erbe." },
    },
  },
  contact: {
    title: "Kontaktieren Sie Uns",
    subtitle: "Wir sind rund um die Uhr, 7 Tage die Woche verfügbar. Kontaktieren Sie uns, wie es Ihnen am besten passt.",
    phoneLabel: "Telefon",
    whatsappLabel: "WhatsApp",
    emailLabel: "E-Mail",
    availabilityLabel: "Verfügbarkeit",
    availabilityValue: "Rund um die Uhr, 7 Tage die Woche",
    baseLabel: "Standorte in",
    formCta: "Oder nutzen Sie das Buchungsformular oben",
  },
  footer: {
    tagline: "Privater Touristentransport in ganz Marokko, rund um die Uhr verfügbar.",
    rights: "Alle Rechte vorbehalten.",
    quickLinks: "Schnellzugriff",
    contactTitle: "Kontakt",
  },
  languageSelector: {
    label: "Sprache",
  },
};

export default de;
