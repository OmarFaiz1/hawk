const WISHLIST_KEY = 'shoe-store-wishlist';

export function toggleWishlist(productId: number) {
  const wishlist = getWishlist();
  const isInWishlist = wishlist.includes(productId);
  
  const updated = isInWishlist
    ? wishlist.filter(id => id !== productId)
    : [...wishlist, productId];
    
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
  return !isInWishlist;
}

export function isInWishlist(productId: number): boolean {
  return getWishlist().includes(productId);
}

export function getWishlist(): number[] {
  const stored = localStorage.getItem(WISHLIST_KEY);
  return stored ? JSON.parse(stored) : [];
}
