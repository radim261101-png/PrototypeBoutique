import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Menu, X, Search, Heart, ShoppingBag } from 'lucide-react';
import { useTheme } from './theme-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useRef, useEffect } from 'react';
import { products } from '@/lib/productsData';
import { useWishlist } from '@/hooks/useWishlist';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [, setLocation] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === 'ar';
  const { count } = useWishlist();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const categories = [
    { name: t('nav.watches'), slug: 'watches' },
    { name: t('nav.accessories'), slug: 'accessories' },
    { name: t('nav.makeup'), slug: 'makeup' },
    { name: t('nav.gifts'), slug: 'gifts' },
  ];

  // Filter products based on search query
  const filteredProducts = searchQuery.trim()
    ? products.filter((product) => {
        const name = isRTL ? product.nameAr : product.nameEn;
        const description = isRTL ? product.descriptionAr : product.descriptionEn;
        const query = searchQuery.toLowerCase();
        return (
          name.toLowerCase().includes(query) ||
          description.toLowerCase().includes(query)
        );
      }).slice(0, 5)
    : [];

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductSelect = (slug: string) => {
    setSearchQuery('');
    setShowSuggestions(false);
    setLocation(`/product/${slug}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <Link href="/" className="flex items-center hover-elevate active-elevate-2 rounded-md px-3 py-2">
            <h1 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" data-testid="logo-text">
              {isRTL ? 'أورا لوكس' : 'AURA Luxury'}
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 h-9 px-4 py-2"
                data-testid={`nav-link-${category.slug}`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-4" ref={searchRef}>
            <div className="relative">
              <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground`} />
              <Input
                type="text"
                placeholder={t('search.placeholder', 'Search products...')}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className={`${isRTL ? 'pr-10' : 'pl-10'}`}
                data-testid="input-search"
              />

              {showSuggestions && filteredProducts.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-popover border border-border rounded-md shadow-lg z-50 overflow-hidden">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductSelect(product.slug)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-accent transition-colors text-left"
                      data-testid={`search-result-${product.slug}`}
                    >
                      <img
                        src={product.images[0]}
                        alt={isRTL ? product.nameAr : product.nameEn}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">
                          {isRTL ? product.nameAr : product.nameEn}
                        </p>
                        <p className="text-sm text-primary font-semibold">
                          ${product.price}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/shop">
              <Button variant="ghost" data-testid="nav-shop">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="ghost" className="relative" data-testid="nav-wishlist">
                <Heart className="h-5 w-5" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
              className="relative"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              data-testid="button-theme-toggle"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="mb-4 px-4" ref={searchRef}>
              <div className="relative">
                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground`} />
                <Input
                  type="text"
                  placeholder={t('search.placeholder', 'Search products...')}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className={`${isRTL ? 'pr-10' : 'pl-10'}`}
                  data-testid="input-search-mobile"
                />

                {showSuggestions && filteredProducts.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-popover border border-border rounded-md shadow-lg z-50 overflow-hidden">
                    {filteredProducts.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          handleProductSelect(product.slug);
                          setMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 p-3 hover:bg-accent transition-colors text-left"
                        data-testid={`search-result-mobile-${product.slug}`}
                      >
                        <img
                          src={product.images[0]}
                          alt={isRTL ? product.nameAr : product.nameEn}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">
                            {isRTL ? product.nameAr : product.nameEn}
                          </p>
                          <p className="text-sm text-primary font-semibold">
                            ${product.price}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="inline-flex items-center justify-start rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 h-9 px-4 py-2 w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${category.slug}`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}