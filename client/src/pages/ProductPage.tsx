import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRoute, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import OrderForm from '@/components/OrderForm';
import { products } from '@/lib/productsData';

export default function ProductPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [, params] = useRoute('/product/:slug');

  const product = products.find(p => p.slug === params?.slug);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('product.backToHome')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const name = isRTL ? product.nameAr : product.nameEn;
  const description = isRTL ? product.descriptionAr : product.descriptionEn;
  const price = `${product.currency === 'USD' ? '$' : product.currency} ${product.price}`;

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('product.backToHome')}
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
              <img
                src={product.images[selectedImageIndex]}
                alt={name}
                className="w-full h-full object-cover"
                data-testid={`img-product-main`}
              />
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                    onClick={prevImage}
                    data-testid="button-prev-image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                    onClick={nextImage}
                    data-testid="button-next-image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4" data-testid="product-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden hover-elevate active-elevate-2 transition-all ${
                      selectedImageIndex === index ? 'ring-2 ring-primary' : ''
                    }`}
                    data-testid={`button-thumbnail-${index}`}
                  >
                    <img
                      src={image}
                      alt={`${name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4" data-testid="text-product-name">
                {name}
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-primary" data-testid="text-product-price">
                {price}
              </p>
            </div>

            <div className="prose prose-sm md:prose-base max-w-none">
              <h3 className="text-lg font-semibold mb-3" data-testid="text-description-title">
                {t('product.description')}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-product-description">
                {description}
              </p>
            </div>

            <OrderForm product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
