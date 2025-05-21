import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useStore } from '@/store/useStore';

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { addToCart } = useStore();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}/`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Assuming product data structure includes image, product_name, price, description
  return (
    <div className="container mx-auto p-4">
      {product.image && (
        <div className="mb-4">
          <Image
            src={product.image}
            alt={product.product_name}
            width={300}
            height={300}
          />
        </div>
      )}
      <h1>{product.product_name}</h1>
      <p className="text-lg font-semibold mb-2">${product.price}</p>
      <p>{product.description}</p>

      <button
        onClick={() => addToCart(product._id)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>

    </div>
  );
}
