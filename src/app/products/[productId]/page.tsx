// src/app/products/[productId]/page.tsx

import { notFound } from 'next/navigation';
import ProductDetailsClient from '@/components/ProductDetailsClient';
import type { Product } from '@/types/product';

function getApiBase() {
  let raw = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '');
  if (!raw) return '';
  if (raw.startsWith('http://')) raw = raw.replace(/^http:\/\//, 'https://');
  return raw;
}

// Fetch a single product by its ID
async function getProduct(productId: string): Promise<Product | null> {
  const base = getApiBase();
  if (!base) return null;
  const url = `${base}/products/${productId}/`;

  const res = await fetch(url, { cache: 'no-store' });

  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error(`Failed to fetch product: HTTP ${res.status}`);
  }

  const data = await res.json();

  return {
    ...data,
    price: Number(data.price),
    images: Array.isArray(data.images) ? data.images : [],
    category: typeof data.category === 'string' ? data.category : '',
  } as Product;
}

// Fetch related products by category, excluding the current product
async function getRelatedProducts(category: string, excludeProductId: string): Promise<Product[]> {
  const base = getApiBase();
  if (!base) return [];
  const url = `${base}/products/?category=${encodeURIComponent(category)}`;

  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    return [];
  }
  const data = await res.json();

  // Flexible: accepts array or results list from paginated API
  const productsArr = Array.isArray(data)
    ? data
    : Array.isArray(data.results)
      ? data.results
      : [];

  return productsArr
    .filter((p: any) => String(p._id) !== String(excludeProductId))
    .map((p: any) => ({
      ...p,
      price: Number(p.price),
      images: Array.isArray(p.images) ? p.images : [],
      category: typeof p.category === 'string' ? p.category : '',
    }));
}

// Next.js page component
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
