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
    <section className="relative min-h-[450px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/luxury_boutique_stor_964bcc79.jpg"
          alt="Luxury boutique store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 sm:py-20 md:py-32 text-center md:text-left">
        <div className="max-w-2xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight"
            data-testid="hero-title"
          >
            {t('hero.title')}
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed"
            data-testid="hero-subtitle"
          >
            {t('hero.subtitle')}
          </p>
          <Button
            size="lg"
            onClick={scrollToProducts}
            className="bg-primary/90 hover:bg-primary backdrop-blur-sm text-primary-foreground border border-primary-border px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg w-full sm:w-auto"
            data-testid="button-hero-cta"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
