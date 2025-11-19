# Project Timeline

This timeline is organized around the same milestones used in `BACKLOG.md`: **MVP**, **Beta**, and **GA**, plus ongoing post-launch work.

## Phase 1 – MVP (Core Storefront)

Goal: Prove the full shopping flow end-to-end against the Art Bay API.

- Unified credentials login with fallback and token handling.
- Google OAuth login button and error-resilient auth flows.
- Products index with search and category filters.
- Product detail page with gallery and related products.
- Cart connected to server endpoints and synced with auth state.
- Checkout order creation with Stripe card payments.
- Order detail page with live status updates.
- Basic addresses management UI.
- Accessibility fundamentals for the auth modal and core forms.
- Image and bundle performance essentials.
- Developer flow: end-to-end smoke tests for the happy path.

Status: **In progress** – see `BACKLOG.md` items marked `[MVP]` for the detailed checklist and current state.

## Phase 2 – Beta (Polish and Expansion)

Goal: Make the experience pleasant and robust for a small set of real users.

- Improve empty states, error messaging, and loading across key pages.
- Refine product discovery (sorting, filters, search UX).
- Tighten cart and checkout UX (validation, edge cases, and retries).
- Add initial marketing/landing content and lightweight content management.
- Enhance order history and tracking views beyond MVP.
- Expand basic analytics and logging for storefront behavior.

Status: **Not started** – to be scheduled after MVP is feature-complete.

## Phase 3 – GA (Launch Readiness)

Goal: Prepare for broader public launch.

- Harden auth, checkout, and orders with additional test coverage.
- Performance and accessibility passes targeting Core Web Vitals and basic WCAG compliance.
- Production-grade monitoring, alerting, and incident runbooks.
- Documentation for setup, deployment, and operations.

Status: **Planned** – depends on Beta feedback and stability.

## Phase 4 – Post-GA Iterations

Goal: Iterate continuously based on user feedback and business needs.

- UX refinements to browsing, cart, and profile based on real usage.
- Exploration of additional sales channels or storefront variants.
- Ongoing performance tuning and dependency upgrades.

Status: **Ongoing** – treated as a rolling backlog of improvements.

