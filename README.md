# Frontend

A Next.js 15 (App Router) storefront for an e‑commerce backend (Django/DRF + MongoEngine). This repo previously contained placeholder branding. The app is now brand‑agnostic and configurable via environment variables.

## Tech
- Next.js 15, React 19, TypeScript
- Tailwind CSS v4
- Zustand for client state (auth, cart)
- Stripe Elements for checkout UI
- SWR/Fetch for data fetching

## Getting Started
1. Install deps

```bash
npm i
```

2. Create `.env.local` (see `.env.example`)

3. Run dev server

```bash
npm run dev
```

## Environment Variables
- `NEXT_PUBLIC_API_BASE_URL`: Backend base URL (no trailing slash), e.g. `https://api.example.com/api/v1` or `https://backend.example.com/api/v1`.
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`: Google OAuth client id for the header modal login.
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`: Stripe publishable key.
- `NEXT_PUBLIC_SITE_NAME`: Site display name.
- `NEXT_PUBLIC_SITE_TAGLINE`: Short tagline.
- `NEXT_PUBLIC_SITE_DESCRIPTION`: Longer description used in SEO metadata.

See `.env.example` for a starting point.

## Configuration
- Branding is centralized in `src/lib/siteConfig.ts` which pulls from env.
- API client is in `src/lib/api.ts`. It normalizes base URL, enforces HTTPS, and attaches Authorization header from localStorage.
- Middleware in `src/middleware.ts` uses a non‑httpOnly cookie `accessToken` to protect pages like `/cart`. For production, prefer an API route to set httpOnly cookies.

## Pages
- `src/app/products`: Product listing and detail. Uses server data fetching with `fetch` against the backend REST.
- `src/app/cart`: Client cart view; product details fetched per item for pricing.
- `src/app/checkout`: Renders Stripe Elements and summary.
- `src/app/auth`: Basic email/password login/registration using backend endpoints under `/authentication/`.

## Notes
- This app expects backend endpoints similar to the provided overview (DRF, JWT/Token, Products, Cart, Orders).
- Replace public images in `public/images/` as needed.

## Scripts
- `npm run dev` — Start dev server
- `npm run build` — Build
- `npm run start` — Start production server
