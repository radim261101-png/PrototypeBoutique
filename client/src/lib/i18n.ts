import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        shop: 'Shop',
        watches: 'Watches',
        accessories: 'Accessories',
        makeup: 'Makeup',
        gifts: 'Gifts',
      },
      search: {
        placeholder: 'Search products...',
      },
      hero: {
        title: 'Where Luxury Meets Distinction',
        subtitle: 'Handpicked collections of exquisite timepieces, fine jewelry, and premium cosmetics for those who appreciate the extraordinary',
        cta: 'Explore Collection',
      },
      home: {
        featured: 'Featured Products',
        categories: 'Shop by Category',
        viewAll: 'View All Products',
      },
      product: {
        orderNow: 'Order Now',
        description: 'Description',
        placeOrder: 'Place Your Order',
        backToHome: 'Back to Home',
        backToShop: 'Back to Shop',
      },
      order: {
        title: 'Complete Your Order',
        name: 'Your Name',
        phone: 'Phone Number',
        quantity: 'Quantity',
        submit: 'Submit Order',
        success: 'Order submitted successfully!',
        error: 'Please fill in all fields',
      },
      footer: {
        about: 'About AURA',
        aboutText: 'AURA Luxury is your destination for refined sophistication. We source the world\'s most prestigious brands and artisans, delivering unparalleled quality and timeless style to discerning collectors worldwide.',
        categories: 'Collections',
        policies: 'Policies',
        shipping: 'Shipping & Delivery',
        returns: 'Returns & Exchanges',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact Us',
        email: 'Email',
        phone: 'Phone',
        rights: 'All rights reserved',
      },
      shop: {
        title: 'Shop All Products',
        category: 'Category',
        allCategories: 'All Categories',
        priceRange: 'Price Range',
        sortBy: 'Sort By',
        featured: 'Featured',
        popularity: 'Popularity',
        priceLowToHigh: 'Price: Low to High',
        priceHighToLow: 'Price: High to Low',
        productsFound: '{{count}} products found',
        noProducts: 'No products found matching your criteria',
      },
      wishlist: {
        title: 'My Wishlist',
        item: 'item',
        items: 'items',
        empty: 'Your wishlist is empty',
        emptyDescription: 'Start adding products you love to your wishlist',
        browseProducts: 'Browse Products',
        clearAll: 'Clear All',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        shop: 'المتجر',
        watches: 'ساعات',
        accessories: 'إكسسوارات',
        makeup: 'مكياج',
        gifts: 'هدايا',
      },
      search: {
        placeholder: 'البحث عن المنتجات...',
      },
      hero: {
        title: 'حيث تلتقي الفخامة بالتميز',
        subtitle: 'مجموعات منتقاة بعناية من الساعات الفاخرة، المجوهرات الراقية، ومستحضرات التجميل الفاخرة لمن يقدّرون التميز',
        cta: 'استكشف المجموعة',
      },
      home: {
        featured: 'المنتجات المميزة',
        categories: 'تسوق حسب الفئة',
        viewAll: 'عرض جميع المنتجات',
      },
      product: {
        orderNow: 'اطلب الآن',
        description: 'الوصف',
        placeOrder: 'أكمل طلبك',
        backToHome: 'العودة للرئيسية',
        backToShop: 'العودة للمتجر',
      },
      order: {
        title: 'أكمل طلبك',
        name: 'الاسم',
        phone: 'رقم الهاتف',
        quantity: 'الكمية',
        submit: 'إرسال الطلب',
        success: 'تم إرسال الطلب بنجاح!',
        error: 'يرجى ملء جميع الحقول',
      },
      footer: {
        about: 'عن أورا',
        aboutText: 'أورا لوكس هي وجهتك للتميز الراقي. نستقطب أرقى العلامات التجارية والحرفيين من جميع أنحاء العالم، لنقدم لك جودة لا مثيل لها وأسلوباً خالداً يليق بالذواقة في كل مكان.',
        categories: 'المجموعات',
        policies: 'السياسات',
        shipping: 'الشحن والتوصيل',
        returns: 'الإرجاع والاستبدال',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        contact: 'اتصل بنا',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        rights: 'جميع الحقوق محفوظة',
      },
      shop: {
        title: 'تسوق جميع المنتجات',
        category: 'الفئة',
        allCategories: 'جميع الفئات',
        priceRange: 'نطاق السعر',
        sortBy: 'ترتيب حسب',
        featured: 'مميز',
        popularity: 'الشعبية',
        priceLowToHigh: 'السعر: من الأقل للأعلى',
        priceHighToLow: 'السعر: من الأعلى للأقل',
        productsFound: 'تم العثور على {{count}} منتج',
        noProducts: 'لم يتم العثور على منتجات تطابق معاييرك',
      },
      wishlist: {
        title: 'قائمة أمنياتي',
        item: 'منتج',
        items: 'منتجات',
        empty: 'قائمة أمنياتك فارغة',
        emptyDescription: 'ابدأ بإضافة المنتجات التي تحبها إلى قائمة أمنياتك',
        browseProducts: 'تصفح المنتجات',
        clearAll: 'مسح الكل',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
});

const initialLang = i18n.language || 'en';
const initialDir = initialLang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.dir = initialDir;
document.documentElement.lang = initialLang;

export default i18n;