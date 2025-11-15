import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Art Bay',
};

export default function RefundPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-sm leading-relaxed">
      <h1 className="text-3xl font-semibold">Refund &amp; Returns Policy</h1>
      <p>
        We want you to love every purchase. If a product arrives damaged or you have an issue, email{' '}
        <a className="text-blue-500 underline" href="mailto:support@art-bay.com">
          support@art-bay.com
        </a>{' '}
        within 14 days of delivery. Please include your order number and photos so we can make it right.
      </p>
      <p>
        Due to the handcrafted and personal-care nature of our items, opened or used products are not
        eligible for resell and may not be returnable unless damaged in transit. Refunds are issued back to
        the original payment method once the issue is confirmed.
      </p>
      <p>
        For exchanges, we&apos;ll cover the replacement shipment if the product defect is on us. Otherwise,
        shipping charges are non-refundable. Reach out and we&apos;ll help with the best option.
      </p>
    </section>
  );
}
