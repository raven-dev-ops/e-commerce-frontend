// src/app/products/[productId]/page.tsx

import { notFound } from 'next/navigation';
import ProductDetailsClient from '@/components/ProductDetailsClient';
import type { Product } from '@/types/product';

// Fetch a single product by its ID
async function getProduct(productId: string): Promise<Product | null> {
  let raw = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '');
  if (raw.startsWith('http://')) raw = raw.replace(/^http:\/\//, 'https://');
  const url = `${raw}/products/${productId}/`;
  console.log('[getProduct] Fetching:', url);

  const res = await fetch(url, { cache: 'no-store' });

  if (res.status === 404) {
    console.log('[getProduct] Not found:', productId);
    return null;
  }
  if (!res.ok) {
    console.error(`[getProduct] Failed to fetch product: HTTP ${res.status}`);
    throw new Error(`Failed to fetch product: HTTP ${res.status}`);
  }

  const data = await res.json();
  console.log('[getProduct] Success:', data);

  return {
    ...data,
    price: Number(data.price),
  } as Product;
}

// Fetch related products by category, excluding the current product
async function getRelatedProducts(category: string, excludeProductId: string): Promise<Product[]> {
  let raw = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '');
  if (raw.startsWith('http://')) raw = raw.replace(/^http:\/\//, 'https://');
  const url = `${raw}/products/?category=${encodeURIComponent(category)}`;
  console.log('[getRelatedProducts] Fetching:', url);

  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    console.error(`[getRelatedProducts] Failed: HTTP ${res.status}`);
    return [];
  }
  const data = await res.json();
  console.log('[getRelatedProducts] Success, products:', Array.isArray(data) ? data.length : 0);

  return Array.isArray(data)
    ? data
        .filter((p: any) => String(p._id) !== String(excludeProductId))
        .map((p: any) => ({
          ...p,
          price: Number(p.price),
        }))
    : [];
}

// The required default export for a Next.js app page
export default async function ProductDetailPage(props: any) {
  const {
    params: { productId },
  } = props;

  const product = await getProduct(productId);
  if (!product) notFound();

  let relatedProducts: Product[] = [];
  if (product.category) {
    relatedProducts = await getRelatedProducts(product.category, productId);
  }

  return (
    <ProductDetailsClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
