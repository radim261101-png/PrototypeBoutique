import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import type { Category } from '@shared/schema';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const name = isRTL ? category.nameAr : category.nameEn;

  return (
    <Link href={`/category/${category.slug}`}>
      <div className="group text-center hover-elevate active-elevate-2 rounded-lg p-4 transition-all duration-300" data-testid={`card-category-${category.slug}`}>
        <div className="aspect-square rounded-full overflow-hidden bg-muted mx-auto mb-4 w-32 md:w-40">
          <img
            src={category.image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            data-testid={`img-category-${category.slug}`}
          />
        </div>
        <h3 className="font-semibold text-lg" data-testid={`text-category-name-${category.slug}`}>
          {name}
        </h3>
      </div>
    </Link>
  );
}
