// Simple, permissive international phone validation: allows +, digits, spaces, dashes, parentheses.
// Requires at least 8 actual digits so obviously invalid input is rejected.
export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  const allowedChars = /^[+\d\s()-]+$/;
  if (!allowedChars.test(trimmed)) return false;
  const digitsOnly = trimmed.replace(/\D/g, "");
  return digitsOnly.length >= 8 && digitsOnly.length <= 15;
}

export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  // Standard, practical email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmed);
}

export function isTodayOrFuture(dateStr: string): boolean {
  if (!dateStr) return false;
  const selected = new Date(dateStr + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected.getTime() >= today.getTime();
}

export function isValidPassengerCount(value: string): boolean {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= 7;
}

export function todayDateString(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
