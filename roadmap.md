# Project Roadmap

High-level roadmap for the Art Bay frontend, aligned with the phases in `timeline.md` and the items in `BACKLOG.md`.

## Now (toward MVP)

Focus: complete the end-to-end shopping flow.

- Finalize unified credentials login and token storage/hydration.
- Complete Google OAuth login and error handling.
- Ship products index with search and category filters.
- Ship product detail page with related products.
- Connect cart to server endpoints and merge guest carts on login where supported.
- Wire Stripe card payments for checkout and clear the cart on success.
- Implement order detail view with live status updates and fallbacks.
- Deliver basic addresses management UI.
- Cover the happy path with end-to-end tests (login → browse → cart → checkout → order status).

## Next (toward Beta)

Focus: polish, robustness, and initial growth levers.

- Improve error states, loading indicators, and empty states across the app.
- Refine navigation and discovery patterns across products and orders.
- Add initial marketing/landing content for campaigns.
- Introduce basic analytics and logging for core flows.
- Address prioritized accessibility issues beyond the MVP baseline.

## Later (toward GA and beyond)

Focus: scale, observability, and continuous improvement.

- Harden infrastructure for production (monitoring, alerting, and incident runbooks).
- Expand test coverage (unit, integration, and more E2E scenarios).
- Optimize performance and bundle size as traffic grows.
- Explore additional integrations and sales channels as needed.

For item-by-item detail, priorities, and status, see `BACKLOG.md`.

