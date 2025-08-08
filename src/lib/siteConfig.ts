export const siteConfig = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'My Store',
  siteTagline:
    process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Quality products. Fair prices.',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'An e‑commerce storefront with secure checkout, customer accounts, and fast browsing.',
  logoPath: '/images/logos/logo.png',
};