
import { Product } from '@shared/schema';

const WISHLIST_KEY = 'boutique_wishlist';

export interface WishlistItem {
  productId: string;
  addedAt: number;
}

export const wishlistStorage = {
  get(): WishlistItem[] {
    try {
      const stored = localStorage.getItem(WISHLIST_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  set(items: WishlistItem[]): void {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save wishlist:', error);
    }
  },

  add(productId: string): void {
    const items = this.get();
    if (!items.find(item => item.productId === productId)) {
      items.push({ productId, addedAt: Date.now() });
      this.set(items);
    }
  },

  remove(productId: string): void {
    const items = this.get().filter(item => item.productId !== productId);
    this.set(items);
  },

  has(productId: string): boolean {
    return this.get().some(item => item.productId === productId);
  },

  clear(): void {
    this.set([]);
  },

  getProductIds(): string[] {
    return this.get().map(item => item.productId);
  }
};
