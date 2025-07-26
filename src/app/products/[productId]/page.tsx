// src/app/products/[productId]/page.tsx
import { notFound } from 'next/navigation'
import ProductDetailsClient from '@/components/ProductDetailsClient'
import type { Product } from '@/types/product'

interface PageProps {
  params: {
    productId: string
  }
}

async function getProduct(productId: string): Promise<Product | null> {
  // 1. grab and normalize your NEXT_PUBLIC_API_BASE_URL
  const raw = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '')
  const httpsBase = raw.startsWith('http://')
    ? raw.replace(/^http:\/\//, 'https://')
    : raw
  // 2. ensure your front‑end always calls the same /api prefix
  const apiBase = httpsBase.endsWith('/api')
    ? httpsBase
    : `${httpsBase}/api`

  const res = await fetch(`${apiBase}/products/${productId}/`, {
    cache: 'no-store',
  })

  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Failed to fetch product: HTTP ${res.status}`)

  const data = await res.json()

  // flatten whatever _id / id you got back into a simple string
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
}: PageProps) {
  const product = await getProduct(params.productId)
  if (!product) notFound()

  return <ProductDetailsClient product={product} />
}
