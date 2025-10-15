import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@shared/schema';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const name = isRTL ? product.nameAr : product.nameEn;
  const price = `${product.currency === 'USD' ? '$' : product.currency} ${product.price}`;

  return (
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
  );
}
