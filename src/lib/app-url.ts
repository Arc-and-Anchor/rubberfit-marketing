/**
 * Canonical app URL — used by every CTA on the marketing site that
 * deep-links into the Rubberfit app. Reads NEXT_PUBLIC_APP_URL so
 * previews / staging can override; falls back to the Vercel production
 * apex.
 */
export function appUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://rubberfit.app"
}
