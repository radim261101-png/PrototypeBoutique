import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    const element = document.getElementById('featured-products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/luxury_boutique_stor_964bcc79.jpg"
          alt="Luxury boutique store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center md:text-left">
        <div className="max-w-2xl">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            data-testid="hero-title"
          >
            {t('hero.title')}
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            data-testid="hero-subtitle"
          >
            {t('hero.subtitle')}
          </p>
          <Button
            size="lg"
            onClick={scrollToProducts}
            className="bg-primary/90 hover:bg-primary backdrop-blur-sm text-primary-foreground border border-primary-border px-8 py-6 text-base md:text-lg"
            data-testid="button-hero-cta"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
