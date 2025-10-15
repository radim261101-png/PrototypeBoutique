
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@shared/schema';

export default function WishlistPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { wishlistIds, clearWishlist, count } = useWishlist();

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const wishlistProducts = products.filter(product => 
    wishlistIds.includes(product.id)
  );

  if (isLoading) {
    return (
      <div className="min-h-screen py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-10 bg-muted animate-pulse rounded w-48 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold">
              {t('wishlist.title')}
            </h1>
            {count > 0 && (
              <span className="text-sm text-muted-foreground">
                ({count} {count === 1 ? t('wishlist.item') : t('wishlist.items')})
              </span>
            )}
          </div>
          {count > 0 && (
            <Button 
              variant="outline" 
              onClick={clearWishlist}
              data-testid="button-clear-wishlist"
            >
              {t('wishlist.clearAll')}
            </Button>
          )}
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">{t('wishlist.empty')}</h2>
            <p className="text-muted-foreground mb-6">{t('wishlist.emptyDescription')}</p>
            <Link href="/shop">
              <Button data-testid="button-browse-products">
                <ShoppingBag className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('wishlist.browseProducts')}
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
