// src/app/products/[productId]/page.tsx

import { notFound } from 'next/navigation';
import ProductDetailsClient from '@/components/ProductDetailsClient';
import type { Product } from '@/types/product';

async function getProduct(productId: string): Promise<Product | null> {
  // 1. Normalize base URL (no trailing slash)
  const rawBase = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') || '';
  const url = `${rawBase}/products/${productId}/`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // 2. Robustly pull out the object ID
    let id = '';
    if (typeof data.id === 'string' && data.id) {
      id = data.id;
    } else if (typeof data._id === 'string' && data._id) {
      id = data._id;
    } else if (
      typeof data._id === 'object' &&
      data._id != null &&
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

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);
  if (!product) notFound();
  return <ProductDetailsClient product={product} />;
}
