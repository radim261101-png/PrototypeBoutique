import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Timer } from 'lucide-react';

export default function SpecialOffer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 border-y border-border py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-start">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">
                {isRTL ? 'عرض محدود' : 'Limited Time Offer'}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6 leading-tight">
              {isRTL ? 'خصم حتى 30% على المجوهرات الفاخرة' : 'Up to 30% Off Premium Jewelry'}
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {isRTL 
                ? 'اكتشف مجموعتنا الحصرية من المجوهرات الراقية والألماس المصنوع يدوياً. عرض لفترة محدودة فقط.'
                : 'Discover our exclusive collection of fine jewelry and handcrafted diamonds. Limited time offer while supplies last.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <Link href="/category/accessories">
                <Button size="lg" className="w-full sm:w-auto px-8 text-base">
                  {isRTL ? 'تسوق الآن' : 'Shop Now'}
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Timer className="h-5 w-5" />
                <span className="text-sm font-medium">
                  {isRTL ? 'ينتهي خلال 5 أيام' : 'Ends in 5 days'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-chart-2"></div>
                <span>{isRTL ? 'شحن مجاني' : 'Free Shipping'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-chart-3"></div>
                <span>{isRTL ? 'ضمان الأصالة' : 'Authenticity Guaranteed'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-chart-4"></div>
                <span>{isRTL ? 'إرجاع سهل' : 'Easy Returns'}</span>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative group overflow-hidden rounded-lg md:rounded-2xl">
                <img
                  src="/images/elegant_jewelry_acce_2b234ecd.jpg"
                  alt="Jewelry 1"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                  -30%
                </Badge>
              </div>
              <div className="relative group overflow-hidden rounded-lg md:rounded-2xl mt-8">
                <img
                  src="/images/elegant_jewelry_acce_ab2c1b10.jpg"
                  alt="Jewelry 2"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                  -25%
                </Badge>
              </div>
              <div className="relative group overflow-hidden rounded-lg md:rounded-2xl col-span-2">
                <img
                  src="/images/elegant_jewelry_acce_74bb331e.jpg"
                  alt="Jewelry 3"
                  className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                  -20%
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
