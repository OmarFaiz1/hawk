import { CartItem } from "@shared/schema";

const CART_STORAGE_KEY = "shoe-store-cart";

export function getCart(): CartItem[] {
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const existingItem = cart.find(
    i => i.productId === item.productId && i.size === item.size
  );
  
  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function removeFromCart(productId: number, size: string) {
  const cart = getCart().filter(
    item => !(item.productId === productId && item.size === size)
  );
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
}
