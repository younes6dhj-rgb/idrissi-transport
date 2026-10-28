/**
 * ============================================================
 *  SITE CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ============================================================
 *  Change your phone number, WhatsApp link or email ONLY here.
 *  Every button and link on the website reads from this file.
 * ============================================================
 */

export const COMPANY_NAME = "Transport Touristique IDRISSI";

// Raw international number, digits only (used for wa.me and tel:)
export const PHONE_DIGITS = "212629712966";

// Human readable phone number (used for display)
export const PHONE_DISPLAY = "+212 629 712 966";

// Business email address
export const EMAIL = "t.touristr.iidrissi@gmail.com";

// Ready-to-use links — used everywhere on the site
export const WHATSAPP_LINK = `https://wa.me/${PHONE_DIGITS}`;
export const TEL_LINK = `tel:+${PHONE_DIGITS}`;
export const MAILTO_LINK = `mailto:${EMAIL}`;

// Base cities & service area
export const BASE_CITIES = ["Casablanca", "El Jadida"];
export const SERVICE_AREA = "All of Morocco";

// Vehicle info
export const VEHICLE_NAME = "Ford Tourneo";
export const VEHICLE_SEATS = 7;

/**
 * Web3Forms access key — used to send the booking email.
 * 1) Create a free account at https://web3forms.com
 * 2) Copy your Access Key
 * 3) Paste it below, replacing the placeholder text
 */
export const WEB3FORMS_ACCESS_KEY = "01165f82-f331-45fa-9376-9d92c74a2c7d";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
