import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const categories = [
    { name: t('nav.watches'), slug: 'watches' },
    { name: t('nav.accessories'), slug: 'accessories' },
    { name: t('nav.makeup'), slug: 'makeup' },
    { name: t('nav.gifts'), slug: 'gifts' },
  ];

  const policies = [
    { name: t('footer.shipping'), slug: 'shipping' },
    { name: t('footer.returns'), slug: 'returns' },
    { name: t('footer.privacy'), slug: 'privacy' },
    { name: t('footer.terms'), slug: 'terms' },
  ];

  return (
    <footer className="bg-card border-t border-card-border mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold" data-testid="footer-about-title">
              {t('footer.about')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="footer-about-text">
              {t('footer.aboutText')}
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-full p-2"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-full p-2"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-full p-2"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="footer-categories-title">
              {t('footer.categories')}
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 rounded-md px-2 py-1 inline-block"
                    data-testid={`footer-link-${category.slug}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="footer-policies-title">
              {t('footer.policies')}
            </h3>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.slug}>
                  <a href={`#${policy.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 rounded-md px-2 py-1 inline-block" data-testid={`footer-link-${policy.slug}`}>
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="footer-contact-title">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              <a href="mailto:info@boutiqueelegance.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 rounded-md px-2 py-1" data-testid="footer-email">
                <Mail className="h-4 w-4" />
                <span>info@boutiqueelegance.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 rounded-md px-2 py-1" data-testid="footer-phone">
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2024 {isRTL ? 'بوتيك الأناقة' : 'Boutique Elegance'}. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
