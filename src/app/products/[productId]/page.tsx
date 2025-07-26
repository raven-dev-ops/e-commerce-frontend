// src/app/products/[productId]/page.tsx

import { notFound } from 'next/navigation';
import ProductDetailsClient from '@/components/ProductDetailsClient';
import type { Product } from '@/types/product';

interface PageProps {
  params: {
    productId: string;
  };
}

async function getProduct(productId: string): Promise<Product | null> {
  // Build and normalize base URL
  let raw = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  raw = raw.replace(/\/$/, '');                    // strip trailing slash
  if (raw.startsWith('http://')) {
    raw = raw.replace(/^http:\/\//, 'https://');   // force HTTPS
  }
  const base = raw.endsWith('/api') ? raw : `${raw}/api`;

  const url = `${base}/products/${productId}/`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Normalize the ID field
    let id = '';
    if (typeof data.id === 'string' && data.id) {
      id = data.id;
    } else if (typeof data._id === 'string' && data._id) {
      id = data._id;
    } else if (
      data._id &&
      typeof data._id === 'object' &&
      '$oid' in data._id
    ) {
      id = (data._id as { $oid: string }).$oid;
    }

    return {
      ...data,
      _id: id,
      price: Number(data.price),
    };
  } catch (err) {
    console.error('Failed to fetch product details:', err);
    throw err;
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await getProduct(params.productId);
  if (!product) notFound();

  return <ProductDetailsClient product={product} />;
}
