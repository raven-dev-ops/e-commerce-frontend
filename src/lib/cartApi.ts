import { api } from '@/lib/api';

// MongoDB ObjectId strings used everywhere for IDs
export interface CartItem {
  id: string;             // Cart item ID (MongoDB ObjectId)
  product_id: string;     // Product ID (MongoDB ObjectId)
  product_name: string;
  quantity: number;
  price: number;
  // Add other properties if needed
}

export interface Cart {
  id: string;             // Cart ID (MongoDB ObjectId)
  items: CartItem[];
  total_price: string;    // Or number depending on backend
  // Add other properties if needed
}

export interface AddItemData {
  product_id: string;     // Changed to string
  quantity: number;
}

export interface UpdateItemData {
  item_id: string;        // Changed to string
  quantity: number;
}

export interface RemoveItemData {
  item_id: string;        // Changed to string
}

// Fetch cart contents
export async function fetchCartContents(): Promise<Cart> {
  try {
    const response = await api.get<Cart>('/cart/');
    return response.data;
  } catch (error) {
    console.error('Error fetching cart contents:', error);
    throw error;
  }
}

// Add product to cart
export async function addItemToCart(itemData: AddItemData): Promise<Cart> {
  try {
    const response = await api.post<Cart>('/cart/', itemData);
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
}

// Update cart item quantity
export async function updateCartItemQuantity(updateData: UpdateItemData): Promise<Cart> {
  try {
    const response = await api.put<Cart>('/cart/', updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    throw error;
  }
}

// Remove item from cart
export async function removeCartItem(removeData: RemoveItemData): Promise<Cart> {
  try {
    const response = await api.delete<Cart>('/cart/', { data: removeData });
    return response.data;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
}

// Optional: Clear entire cart (uncomment if backend supports)
// export async function clearCart(): Promise<void> {
//   try {
//     await api.delete<void>('/cart/');
//   } catch (error) {
//     console.error('Error clearing cart:', error);
//     throw error;
//   }
// }
