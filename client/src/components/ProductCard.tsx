import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import type { Product } from '@shared/schema';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { isInWishlist, toggleWishlist } = useWishlist();

  const name = isRTL ? product.nameAr : product.nameEn;
  const price = `${product.currency === 'USD' ? '$' : product.currency} ${product.price}`;
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div className="relative">
      <Link href={`/product/${product.slug}`}>
        <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 h-full flex flex-col" data-testid={`card-product-${product.id}`}>
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={product.images[0]}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-testid={`img-product-${product.id}`}
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2" data-testid={`text-product-name-${product.id}`}>
              {name}
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-primary mt-auto" data-testid={`text-product-price-${product.id}`}>
              {price}
            </p>
          </div>
        </Card>
      </Link>
      <Button
        variant="ghost"
        size="icon"
        className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} z-10 hover-elevate`}
        onClick={handleWishlistClick}
        data-testid={`button-wishlist-${product.id}`}
      >
        <Heart className={`h-5 w-5 ${inWishlist ? 'fill-red-500 text-red-500' : ''}`} />
      </Button>
    </div>
  );
}
