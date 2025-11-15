import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Art Bay',
};

export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-6 text-sm leading-relaxed">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <p>
        By using this website and placing an order with Art Bay, you agree to our terms. Artwork is sourced
        from independent studios and is available in limited quantities. Prices and availability are subject
        to change without notice.
      </p>
      <p>
        All content, branding, photography, and artwork previews remain the property of Art Bay and the
        represented artists. You may not reproduce or redistribute any materials without written consent.
      </p>
      <p>
        This site is provided &ldquo;as-is&rdquo; without warranties of any kind. We limit liability to the
        total value of your purchase. For help, contact{' '}
        <a className="text-blue-500 underline" href="mailto:support@art-bay.com">
          support@art-bay.com
        </a>
        .
      </p>
    </section>
  );
}
