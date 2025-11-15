import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Art Bay',
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-sm leading-relaxed">
      <h1 className="text-3xl font-semibold">Contact Art Bay</h1>
      <p>
        Have questions about an order, wholesale, or custom blends? Reach out using the details below and
        we&apos;ll get back to you within 1-2 business days.
      </p>
      <div className="space-y-2">
        <p>
          <strong>Email:</strong>{' '}
          <a className="text-blue-500 underline" href="mailto:support@art-bay.com">
            support@art-bay.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 555-0199
        </p>
        <p>
          <strong>Mailing:</strong> Art Bay, 123 Artisan Row, Nashville, TN 37201
        </p>
      </div>
      <p>
        You can also send a note from the{' '}
        <Link className="text-blue-500 underline" href="/profile">
          profile page
        </Link>{' '}
        if you have an account.
      </p>
    </section>
  );
}
