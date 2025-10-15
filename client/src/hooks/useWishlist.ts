
import { useState, useEffect } from 'react';
import { wishlistStorage } from '@/lib/wishlist';

export function useWishlist() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  useEffect(() => {
    setWishlistIds(wishlistStorage.getProductIds());

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'boutique_wishlist') {
        setWishlistIds(wishlistStorage.getProductIds());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addToWishlist = (productId: string) => {
    wishlistStorage.add(productId);
    setWishlistIds(wishlistStorage.getProductIds());
  };

  const removeFromWishlist = (productId: string) => {
    wishlistStorage.remove(productId);
    setWishlistIds(wishlistStorage.getProductIds());
  };

  const toggleWishlist = (productId: string) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistIds.includes(productId);
  };

  const clearWishlist = () => {
    wishlistStorage.clear();
    setWishlistIds([]);
  };

  return {
    wishlistIds,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
    count: wishlistIds.length
  };
}
