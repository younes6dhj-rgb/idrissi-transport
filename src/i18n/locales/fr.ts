import type { Translation } from "../types";

const fr: Translation = {
  dir: "ltr",
  meta: {
    title: "Transport Touristique IDRISSI — Transport Touristique Privé au Maroc",
    description:
      "Transport touristique privé dans tout le Maroc avec un Ford Tourneo, 7 places. Basé à Casablanca et El Jadida. Disponible 24h/24 et 7j/7. Réservez par WhatsApp, téléphone ou email.",
  },
  nav: {
    home: "Accueil",
    company: "Entreprise",
    services: "Services",
    vehicle: "Notre Véhicule",
    destinations: "Destinations",
    booking: "Réservation",
    contact: "Contact",
  },
  common: {
    callNow: "Appeler",
    whatsapp: "WhatsApp",
    emailUs: "Nous Écrire",
    available247: "Disponible 24h/24 et 7j/7",
    phone: "Téléphone",
    email: "Email",
    baseCities: "Casablanca et El Jadida",
    serviceArea: "Tout le Maroc",
  },
  header: {
    tagline: "Transport touristique privé dans tout le Maroc",
  },
  hero: {
    titleLine1: "Votre Chauffeur Privé",
    titleLine2: "Partout au Maroc",
    subtitle:
      "Un transport confortable et fiable à bord de notre Ford Tourneo (7 places). Basés à Casablanca et El Jadida, nous desservons tout le Maroc, 24h/24 et 7j/7.",
    badgeVehicle: "Ford Tourneo · 7 places",
    badgeAvailability: "Disponible 24h/24 et 7j/7",
    badgeArea: "Nous desservons tout le Maroc",
    ctaWhatsapp: "Réserver sur WhatsApp",
    ctaCall: "Appeler Maintenant",
    scrollToBook: "Réservez votre trajet ci-dessous",
  },
  booking: {
    title: "Réservez Votre Trajet",
    subtitle:
      "Remplissez le formulaire ci-dessous et envoyez-le nous par WhatsApp ou email. Nous répondons rapidement, 24h/24 et 7j/7.",
    labels: {
      pickup: "Lieu de Prise en Charge",
      destination: "Destination",
      date: "Date du Voyage",
      time: "Heure de Prise en Charge",
      passengers: "Nombre de Passagers",
      serviceType: "Type de Service",
      name: "Nom Complet",
      phone: "Numéro de Téléphone / WhatsApp",
      email: "Adresse Email (optionnel)",
      notes: "Remarques Supplémentaires (optionnel)",
    },
    placeholders: {
      pickup: "ex. Aéroport Mohammed V, Casablanca",
      destination: "ex. Centre-ville de Marrakech",
      passengers: "1 à 7",
      name: "Votre nom complet",
      phone: "ex. +212 6 00 00 00 00",
      email: "vous@exemple.com",
      notes: "Numéro de vol, bagages, demandes spéciales...",
      serviceType: "Choisissez un service",
    },
    serviceTypeOptions: {
      transfer: "Transfert simple (prise en charge → destination)",
      hourly: "Chauffeur à disposition — à l'heure",
      fullDay: "Chauffeur à disposition — journée complète",
      multiDay: "Chauffeur à disposition — plusieurs jours",
    },
    errors: {
      required: "Ce champ est obligatoire.",
      invalidPhone: "Veuillez saisir un numéro de téléphone valide.",
      invalidEmail: "Veuillez saisir une adresse email valide.",
      pastDate: "La date ne peut pas être dans le passé.",
      passengersRange: "Le nombre de passagers doit être compris entre 1 et 7.",
    },
    buttons: {
      sendWhatsapp: "Envoyer via WhatsApp",
      sendEmail: "Envoyer par Email",
      sending: "Envoi en cours...",
    },
    status: {
      emailSuccess: "Votre demande de réservation a été envoyée avec succès ! Nous vous contacterons bientôt.",
      emailError: "Désolé, votre demande n'a pas pu être envoyée. Veuillez réessayer ou nous contacter sur WhatsApp ou par téléphone.",
      tryWhatsappOrCall: "Vous pouvez aussi nous joindre instantanément sur WhatsApp ou par téléphone.",
      configMissing: "La réservation par email n'est pas encore configurée. Veuillez utiliser WhatsApp ou nous appeler directement.",
    },
    whatsappMessage: {
      heading: "Nouvelle Demande de Réservation — Transport Touristique IDRISSI",
      name: "Nom",
      phone: "Téléphone",
      email: "Email",
      pickup: "Lieu de prise en charge",
      destination: "Destination",
      date: "Date du voyage",
      time: "Heure de prise en charge",
      passengers: "Passagers",
      serviceType: "Type de service",
      notes: "Remarques",
      closing: "Merci de confirmer ma réservation !",
    },
    honeypotLabel: "Laissez ce champ vide",
  },
  company: {
    title: "À Propos de Notre Entreprise",
    subtitle: "Transport Touristique IDRISSI",
    paragraph1:
      "Transport Touristique IDRISSI est une entreprise de transport touristique privé basée à Casablanca et El Jadida, au service des voyageurs dans tout le Maroc. Nous offrons un transport privé confortable, sûr et ponctuel pour les touristes, voyageurs d'affaires et familles.",
    paragraph2:
      "Notre mission est simple : vous offrir une façon sereine d'explorer le Maroc avec un chauffeur dédié, un véhicule confortable et une disponibilité continue — 24 heures sur 24, 7 jours sur 7.",
    point1Title: "Fiable et Sérieux",
    point1Desc: "Prises en charge ponctuelles et conduite sûre dans tout le pays.",
    point2Title: "Véhicule Confortable",
    point2Desc: "Un Ford Tourneo spacieux avec 7 places pour particuliers, familles ou petits groupes.",
    point3Title: "Toujours Disponible",
    point3Desc: "Réservation par site web, WhatsApp ou email, 24h/24 et 7j/7.",
  },
  services: {
    title: "Nos Services",
    subtitle: "Deux façons simples de voyager avec nous",
    service1Title: "Transferts Prise en Charge & Dépose",
    service1Desc:
      "Nous venons vous chercher exactement où vous êtes — aéroport, hôtel, riad ou toute autre adresse — et vous conduisons directement à la destination de votre choix, partout au Maroc.",
    service2Title: "Chauffeur à Votre Disposition",
    service2Desc:
      "Besoin d'un chauffeur pour toute la journée, plusieurs jours ou un itinéraire personnalisé ? Notre chauffeur reste avec vous et vous conduit où vous le souhaitez, pour la durée que vous choisissez.",
    bookNow: "Réserver ce Service",
  },
  vehicle: {
    title: "Notre Véhicule",
    subtitle: "Ford Tourneo — 7 Places Passagers",
    description:
      "Voyagez confortablement à bord de notre Ford Tourneo moderne. Avec 7 sièges confortables, climatisation et un grand espace bagages, c'est le véhicule idéal pour les transferts aéroport, excursions urbaines ou longs trajets à travers le Maroc.",
    feature1: "7 sièges passagers confortables",
    feature2: "Climatisation",
    feature3: "Grand coffre à bagages",
    feature4: "Idéal pour familles et petits groupes",
    seatsLabel: "7 Places",
    reserveCta: "Réserver ce Véhicule",
  },
  destinations: {
    title: "Destinations & Zone de Service",
    subtitle:
      "Nous desservons tout le Maroc. Voici quelques destinations populaires — dites-nous où vous voulez aller, nous vous y emmènerons.",
    note: "Vous ne voyez pas votre destination ? Demandez-nous — nous couvrons tout le pays.",
    cities: {
      marrakech: { name: "Marrakech", desc: "La vibrante ville rouge, sa médina et ses jardins célèbres." },
      casablanca: { name: "Casablanca", desc: "La capitale économique moderne du Maroc, en bord de mer." },
      chefchaouen: { name: "Chefchaouen", desc: "La charmante ville bleue nichée dans les montagnes." },
      sahara: { name: "Désert du Sahara", desc: "Dunes dorées et paysages désertiques inoubliables." },
      fes: { name: "Fès", desc: "L'ancienne cité impériale et sa médina historique." },
      eljadida: { name: "El Jadida", desc: "Une ville côtière à l'héritage portugais." },
    },
  },
  contact: {
    title: "Contactez-Nous",
    subtitle: "Nous sommes disponibles 24h/24 et 7j/7. Contactez-nous comme vous le préférez.",
    phoneLabel: "Téléphone",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    availabilityLabel: "Disponibilité",
    availabilityValue: "24 heures sur 24, 7 jours sur 7",
    baseLabel: "Basés à",
    formCta: "Ou utilisez le formulaire de réservation ci-dessus",
  },
  footer: {
    tagline: "Transport touristique privé dans tout le Maroc, disponible 24h/24 et 7j/7.",
    rights: "Tous droits réservés.",
    quickLinks: "Liens Rapides",
    contactTitle: "Contact",
  },
  languageSelector: {
    label: "Langue",
  },
};

export default fr;
