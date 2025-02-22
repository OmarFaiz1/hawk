const RECENTLY_VIEWED_KEY = 'recently-viewed-products';
const MAX_RECENT_ITEMS = 8;

export function addToRecentlyViewed(productId: number) {
  const viewed = getRecentlyViewed();
  const updated = [productId, ...viewed.filter(id => id !== productId)].slice(0, MAX_RECENT_ITEMS);
  localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated));
}

export function getRecentlyViewed(): number[] {
  const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
  return stored ? JSON.parse(stored) : [];
}
