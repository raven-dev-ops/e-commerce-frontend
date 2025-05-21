// frontend/src/store/useStore.ts
import create from 'zustand';

export interface CartItem {
  productId: number;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (productId: number, qty?: number) => void;
  clearCart: () => void;
  updateCartItemQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (productId, qty = 1) =>
    set((state) => {
      const existing = state.cart.find((i) => i.productId === productId);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.productId === productId
              ? { ...i, quantity: i.quantity + qty }
              : i
          ),
        };
      }
      return {
        cart: [...state.cart, { productId, quantity: qty }],
      };
    }),
  clearCart: () => set({ cart: [] }),
  updateCartItemQuantity: (productId, newQuantity) =>
    set((state) => {
      if (newQuantity <= 0) {
        return {
          cart: state.cart.filter((item) => item.productId !== productId),
        };
      }
      return {
        cart: state.cart.map((item) =>
          item.productId === productId ? { ...item, quantity: newQuantity } : item
        ),
      };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    })),
}));
