import { useStore } from '@/store/useStore';
import React from 'react';
import axios from 'axios';

export default function CartPage() {
  const { cart, updateCartItemQuantity, removeFromCart } = useStore();

  // Helper function to fetch product details
  const fetchProductDetails = async (productId: string | number) => {
    try {
      const response = await axios.get(`/api/products/${productId}/`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${productId} details:`, error);
      return null;
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.productId}>
              Product ID: {item.productId}, Quantity: {item.quantity}
              <input
                type="number"
                min="0"
                value={item.quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value, 10);
                  if (!isNaN(newQuantity) && newQuantity >= 0) {
                    updateCartItemQuantity(item.productId, newQuantity);
                  }
                }}
              />
              <button
                onClick={() => removeFromCart(item.productId)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              >
                Remove
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Add these imports at the top of the file if not already present
import React, { useState, useEffect, useMemo } from 'react';
import { useStore, CartItem } from '@/store/useStore';
import axios from 'axios';
import Image from 'next/image'; // Assuming you want to display images

// Keep your existing fetchProductDetails helper function here
// const fetchProductDetails = async (productId: string | number) => { ... }

export default function CartPage() {
  const { cart, updateCartItemQuantity, removeFromCart } = useStore();

  // State to store fetched product details
  const [productDetails, setProductDetails] = useState<{ [productId: string | number]: any }>({});
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [errorFetchingDetails, setErrorFetchingDetails] = useState<string | null>(null);

  // Fetch product details for items in the cart
  useEffect(() => {
    const fetchDetails = async () => {
      setLoadingDetails(true);
      setErrorFetchingDetails(null);

      // Get unique product IDs from the cart
      const uniqueProductIds = Array.from(new Set(cart.map(item => item.productId)));

      const detailsMap: { [productId: string | number]: any } = {};
      const fetchPromises = uniqueProductIds.map(async (productId) => {
        try {
          // Reuse or call your fetchProductDetails function here
          const details = await fetchProductDetails(productId);
          if (details) {
            detailsMap[productId] = details;
          } else {
            // Handle case where fetching details for a specific product failed
            console.error(`Failed to fetch details for product ${productId}`);
            // You might want to set an error for this specific item
          }
        } catch (error) {
          console.error(`Error fetching details for product ${productId}:`, error);
          // Handle overall error if any fetch fails
          setErrorFetchingDetails('Failed to fetch some product details.');
        }
      });

      await Promise.all(fetchPromises);
      setProductDetails(detailsMap);
      setLoadingDetails(false);
    };

    if (cart.length > 0) {
      fetchDetails();
    } else {
      setProductDetails({}); // Clear details if cart is empty
      setLoadingDetails(false);
    }

  }, [cart]); // Re-run effect when the cart changes

  // Calculate the cart total
  const total = useMemo(() => {
    let calculatedTotal = 0;
    cart.forEach(item => {
      const product = productDetails[item.productId];
      if (product && product.price) {
        calculatedTotal += product.price * item.quantity;
      }
      // Note: Items with details not yet loaded or failed to load
      // will not be included in the total calculation until details are available.
    });
    return calculatedTotal;
  }, [cart, productDetails]); // Re-calculate when cart or fetched details change

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {loadingDetails && <p>Loading product details...</p>}
          {errorFetchingDetails && <p className="text-red-500">{errorFetchingDetails}</p>}
          <ul>
            {cart.map(item => {
              const product = productDetails[item.productId];
              // Display item details if available, otherwise show basic info or loading state
              if (!product) {
                return (
                  <li key={item.productId}>
                    Product ID: {item.productId}, Quantity: {item.quantity} - Loading details...
                  </li>
                );
              }
              return (
                <li key={item.productId} className="border-b py-2 flex items-center">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.product_name || 'Product image'}
                      width={50}
                      height={50}
                      className="mr-4"
                    />
                  )}
                  <div className="flex-grow">
                    <p className="font-bold">{product.product_name || 'Product Name'}</p>
                    <p>Price: ${product.price?.toFixed(2) || 'N/A'}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      if (!isNaN(newQuantity) && newQuantity >= 0) {
                        updateCartItemQuantity(item.productId, newQuantity);
                      }
                    }}
                    className="w-16 text-center border rounded mr-2"
                  />
                   {/* Assuming removeFromCart is imported and available */}
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <h2 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}
