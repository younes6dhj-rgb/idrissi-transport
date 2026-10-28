import type { Translation } from "../types";

const en: Translation = {
  dir: "ltr",
  meta: {
    title: "Transport Touristique IDRISSI — Private Tourist Transport in Morocco",
    description:
      "Private tourist transport across Morocco with a Ford Tourneo, 7 seats. Based in Casablanca & El Jadida. Available 24/7. Book by WhatsApp, phone or email.",
  },
  nav: {
    home: "Home",
    company: "Company",
    services: "Services",
    vehicle: "Our Vehicle",
    destinations: "Destinations",
    booking: "Booking",
    contact: "Contact",
  },
  common: {
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    emailUs: "Email Us",
    available247: "Available 24/7",
    phone: "Phone",
    email: "Email",
    baseCities: "Casablanca & El Jadida",
    serviceArea: "All of Morocco",
  },
  header: {
    tagline: "Private tourist transport across Morocco",
  },
  hero: {
    titleLine1: "Your Private Driver",
    titleLine2: "Anywhere in Morocco",
    subtitle:
      "Comfortable, reliable transport aboard our Ford Tourneo (7 seats). Based in Casablanca & El Jadida, serving all of Morocco, 24 hours a day, 7 days a week.",
    badgeVehicle: "Ford Tourneo · 7 seats",
    badgeAvailability: "Available 24/7",
    badgeArea: "Serving all of Morocco",
    ctaWhatsapp: "Book on WhatsApp",
    ctaCall: "Call Now",
    scrollToBook: "Book your trip below",
  },
  booking: {
    title: "Book Your Trip",
    subtitle:
      "Fill in the form below and send it to us by WhatsApp or email. We reply quickly, 24/7.",
    labels: {
      pickup: "Pickup Location",
      destination: "Destination",
      date: "Travel Date",
      time: "Pickup Time",
      passengers: "Number of Passengers",
      serviceType: "Service Type",
      name: "Full Name",
      phone: "Phone / WhatsApp Number",
      email: "Email Address (optional)",
      notes: "Additional Notes (optional)",
    },
    placeholders: {
      pickup: "e.g. Casablanca Mohammed V Airport",
      destination: "e.g. Marrakech City Center",
      passengers: "1 to 7",
      name: "Your full name",
      phone: "e.g. +212 6 00 00 00 00",
      email: "you@example.com",
      notes: "Flight number, luggage, special requests...",
      serviceType: "Select a service",
    },
    serviceTypeOptions: {
      transfer: "One-way transfer (pickup → destination)",
      hourly: "Driver at your disposal — by the hour",
      fullDay: "Driver at your disposal — full day",
      multiDay: "Driver at your disposal — multiple days",
    },
    errors: {
      required: "This field is required.",
      invalidPhone: "Please enter a valid phone number.",
      invalidEmail: "Please enter a valid email address.",
      pastDate: "The date cannot be in the past.",
      passengersRange: "Number of passengers must be between 1 and 7.",
    },
    buttons: {
      sendWhatsapp: "Send via WhatsApp",
      sendEmail: "Send via Email",
      sending: "Sending...",
    },
    status: {
      emailSuccess: "Your booking request was sent successfully! We will contact you shortly.",
      emailError: "Sorry, we could not send your request. Please try again or contact us on WhatsApp or by phone.",
      tryWhatsappOrCall: "You can also reach us instantly on WhatsApp or by phone.",
      configMissing: "Email booking is not yet configured. Please use WhatsApp or call us directly.",
    },
    whatsappMessage: {
      heading: "New Booking Request — Transport Touristique IDRISSI",
      name: "Name",
      phone: "Phone",
      email: "Email",
      pickup: "Pickup location",
      destination: "Destination",
      date: "Travel date",
      time: "Pickup time",
      passengers: "Passengers",
      serviceType: "Service type",
      notes: "Notes",
      closing: "Please confirm my booking. Thank you!",
    },
    honeypotLabel: "Leave this field empty",
  },
  company: {
    title: "About Our Company",
    subtitle: "Transport Touristique IDRISSI",
    paragraph1:
      "Transport Touristique IDRISSI is a private tourist transport company based in Casablanca and El Jadida, serving travelers across all of Morocco. We offer comfortable, safe and punctual private transport for tourists, business travelers and families.",
    paragraph2:
      "Our mission is simple: give you a stress-free way to explore Morocco with a dedicated driver, a comfortable vehicle, and availability around the clock — 24 hours a day, 7 days a week.",
    point1Title: "Trusted & Reliable",
    point1Desc: "Punctual pickups and safe driving across the whole country.",
    point2Title: "Comfortable Vehicle",
    point2Desc: "A spacious Ford Tourneo with 7 seats for individuals, families or small groups.",
    point3Title: "Always Available",
    point3Desc: "Booking by website, WhatsApp or email, 24 hours a day, 7 days a week.",
  },
  services: {
    title: "Our Services",
    subtitle: "Two simple ways to travel with us",
    service1Title: "Pickup & Drop-off Transfers",
    service1Desc:
      "We pick you up from your exact location — airport, hotel, riad, or any address — and take you directly to any destination you choose anywhere in Morocco.",
    service2Title: "Driver at Your Disposal",
    service2Desc:
      "Need a driver for the whole day, several days, or a custom itinerary? Our driver stays with you and takes you wherever you need, for the duration you choose.",
    bookNow: "Book This Service",
  },
  vehicle: {
    title: "Our Vehicle",
    subtitle: "Ford Tourneo — 7 Passenger Seats",
    description:
      "Travel in comfort aboard our modern Ford Tourneo. With 7 comfortable seats, air conditioning and plenty of luggage space, it's the perfect vehicle for airport transfers, city tours or long road trips across Morocco.",
    feature1: "7 comfortable passenger seats",
    feature2: "Air conditioning",
    feature3: "Spacious luggage compartment",
    feature4: "Ideal for families & small groups",
    seatsLabel: "7 Seats",
    reserveCta: "Reserve This Vehicle",
  },
  destinations: {
    title: "Destinations & Service Area",
    subtitle:
      "We serve all of Morocco. Here are a few popular destinations — tell us where you want to go, and we will take you there.",
    note: "Don't see your destination? Just ask — we cover the entire country.",
    cities: {
      marrakech: { name: "Marrakech", desc: "The vibrant Red City, famous medina and gardens." },
      casablanca: { name: "Casablanca", desc: "Morocco's modern economic capital on the coast." },
      chefchaouen: { name: "Chefchaouen", desc: "The charming blue-painted mountain town." },
      sahara: { name: "Sahara Desert", desc: "Golden dunes and unforgettable desert landscapes." },
      fes: { name: "Fes", desc: "The ancient imperial city and its historic medina." },
      eljadida: { name: "El Jadida", desc: "A coastal city with Portuguese heritage." },
    },
  },
  contact: {
    title: "Contact Us",
    subtitle: "We are available 24 hours a day, 7 days a week. Reach us any way you prefer.",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    availabilityLabel: "Availability",
    availabilityValue: "24 hours a day, 7 days a week",
    baseLabel: "Based in",
    formCta: "Or use the booking form above",
  },
  footer: {
    tagline: "Private tourist transport across Morocco, available 24/7.",
    rights: "All rights reserved.",
    quickLinks: "Quick Links",
    contactTitle: "Contact",
  },
  languageSelector: {
    label: "Language",
  },
};

export default en;
