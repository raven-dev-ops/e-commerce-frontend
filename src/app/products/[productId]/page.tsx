// src/app/products/[productId]/page.tsx

import { notFound } from 'next/navigation'
import ProductDetailsClient from '@/components/ProductDetailsClient'
import type { Product } from '@/types/product'

async function getProduct(productId: string): Promise<Product | null> {
  // Normalize base URL and force HTTPS
  let raw = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '')
  if (raw.startsWith('http://')) raw = raw.replace(/^http:\/\//, 'https://')
  // Ensure we hit the same `/api` prefix you use elsewhere
  const apiBase = raw.endsWith('/api') ? raw : `${raw}/api`

  const res = await fetch(`${apiBase}/products/${productId}/`, {
    cache: 'no-store',
  })

  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Failed to fetch product: HTTP ${res.status}`)

  const data = await res.json()

  // Flatten whatever form of _id / id came back into a string
  let id = ''
  if (typeof data.id === 'string' && data.id) {
    id = data.id
  } else if (typeof data._id === 'string' && data._id) {
    id = data._id
  } else if (
    data._id &&
    typeof data._id === 'object' &&
    '$oid' in data._id
  ) {
    id = (data._id as { $oid: string }).$oid
  }

  return {
    ...data,
    _id: id,
    price: Number(data.price),
  } as Product
}

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string }
}) {
  const product = await getProduct(params.productId)
  if (!product) notFound()

  return <ProductDetailsClient product={product} />
}
