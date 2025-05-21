import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useStore } from '@/store/useStore';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Define a type for the product data

    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/'); // Adjust the endpoint if needed
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const { addToCart } = useStore();

  const handleAddToCart = (productId: string) => {
    addToCart(productId); // Assuming product._id is a string or can be converted to one
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && (
        products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <ul className="list-disc pl-5">
            {products.map((product: any) => (
              // TODO: Use a more specific type for product
              <li key={product._id} className="mb-4">
                <Link href={`/products/${product._id}`} passHref>
                  <div>
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.product_name}
                        width={100}
                        height={100}
                      />
                    )}
                    <div>{product.product_name} - ${product.price}</div>
                    <div className="text-gray-600 text-sm">{product.description}</div>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </li>
              // Assuming each product has a unique '_id', 'product_name', 'price',
              // 'description', and optionally 'image'
            ))}
          </ul>
        )
      )}
    </div>
  );
}