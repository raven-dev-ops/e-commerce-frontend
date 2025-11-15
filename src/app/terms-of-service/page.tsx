import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | TwiinZ Beard',
};

export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-6 text-sm leading-relaxed">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <p>
        By using this website and placing an order with TwiinZ Beard Balm &amp; Essentials, you agree to our
        terms. Products are handcrafted in small batches and made available while supplies last. Prices and
        availability are subject to change without notice.
      </p>
      <p>
        All content, branding, photography, and formulas remain the property of TwiinZ Beard Balm &amp;
        Essentials. You may not reproduce or redistribute any materials without written consent.
      </p>
      <p>
        This site is provided &ldquo;as-is&rdquo; without warranties of any kind. We limit liability to the
        total value of your purchase. For help, contact{' '}
        <a className="text-blue-500 underline" href="mailto:support@twiinzbeard.com">
          support@twiinzbeard.com
        </a>
        .
      </p>
    </section>
  );
}
