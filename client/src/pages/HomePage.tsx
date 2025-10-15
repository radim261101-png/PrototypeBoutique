import { useTranslation } from 'react-i18next';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import SpecialOffer from '@/components/SpecialOffer';
import { products, categories } from '@/lib/productsData';

export default function HomePage() {
  const { t } = useTranslation();

  const featuredProducts = products.filter(p => p.featured === 1).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Hero />

      <section id="featured-products" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12" data-testid="featured-products-title">
          {t('home.featured')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" data-testid="featured-products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <SpecialOffer />

      <section className="bg-card border-y border-card-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12" data-testid="categories-title">
            {t('home.categories')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" data-testid="categories-grid">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
