
import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import type { Product, Category } from '@shared/schema';

export default function ShopPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const { data: products = [], isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const { data: categories = [], isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ['/api/categories'],
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  // Calculate max price from products
  const maxPrice = useMemo(() => {
    if (products.length === 0) return 2000;
    return Math.ceil(Math.max(...products.map(p => parseFloat(p.price))));
  }, [products]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.categoryId === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(p => {
      const price = parseFloat(p.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price-desc':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'popularity':
        case 'featured':
        default:
          // Featured items first, then by id
          if (a.featured !== b.featured) {
            return b.featured - a.featured;
          }
          return a.id.localeCompare(b.id);
      }
    });

    return filtered;
  }, [products, selectedCategory, sortBy, priceRange]);

  if (categoriesLoading || productsLoading) {
    return (
      <div className="min-h-screen py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-10 bg-muted animate-pulse rounded w-1/4 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="h-32 bg-muted animate-pulse rounded" />
              <div className="h-32 bg-muted animate-pulse rounded" />
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('product.backToHome')}
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8" data-testid="text-shop-title">
          {t('shop.title', 'Shop All Products')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6" data-testid="filters-sidebar">
            {/* Category Filter */}
            <div className="bg-card border border-card-border rounded-lg p-6">
              <Label className="text-base font-semibold mb-4 block">
                {t('shop.category', 'Category')}
              </Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger data-testid="select-category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" data-testid="category-all">
                    {t('shop.allCategories', 'All Categories')}
                  </SelectItem>
                  {categories.map((category) => (
                    <SelectItem 
                      key={category.id} 
                      value={category.id}
                      data-testid={`category-${category.slug}`}
                    >
                      {isRTL ? category.nameAr : category.nameEn}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Filter */}
            <div className="bg-card border border-card-border rounded-lg p-6">
              <Label className="text-base font-semibold mb-4 block">
                {t('shop.priceRange', 'Price Range')}
              </Label>
              <div className="space-y-4">
                <Slider
                  min={0}
                  max={maxPrice}
                  step={50}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  data-testid="slider-price"
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span data-testid="text-price-min">${priceRange[0]}</span>
                  <span data-testid="text-price-max">${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div className="bg-card border border-card-border rounded-lg p-6">
              <Label className="text-base font-semibold mb-4 block">
                {t('shop.sortBy', 'Sort By')}
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger data-testid="select-sort">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured" data-testid="sort-featured">
                    {t('shop.featured', 'Featured')}
                  </SelectItem>
                  <SelectItem value="popularity" data-testid="sort-popularity">
                    {t('shop.popularity', 'Popularity')}
                  </SelectItem>
                  <SelectItem value="price-asc" data-testid="sort-price-asc">
                    {t('shop.priceLowToHigh', 'Price: Low to High')}
                  </SelectItem>
                  <SelectItem value="price-desc" data-testid="sort-price-desc">
                    {t('shop.priceHighToLow', 'Price: High to Low')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-muted-foreground" data-testid="text-results-count">
              {t('shop.productsFound', { count: filteredAndSortedProducts.length }, `${filteredAndSortedProducts.length} products found`)}
            </div>

            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {t('shop.noProducts', 'No products found matching your criteria')}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="products-grid">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
