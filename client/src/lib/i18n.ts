import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        watches: 'Watches',
        accessories: 'Accessories',
        makeup: 'Makeup',
        gifts: 'Gifts',
      },
      hero: {
        title: 'Discover Timeless Elegance',
        subtitle: 'Curated luxury watches, accessories, and beauty products for the discerning shopper',
        cta: 'Shop Collection',
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
        about: 'About Us',
        aboutText: 'We curate the finest luxury products from around the world, bringing you timeless elegance and exceptional quality.',
        categories: 'Categories',
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
    },
  },
  ar: {
    translation: {
      nav: {
        watches: 'ساعات',
        accessories: 'إكسسوارات',
        makeup: 'مكياج',
        gifts: 'هدايا',
      },
      hero: {
        title: 'اكتشف الأناقة الخالدة',
        subtitle: 'ساعات فاخرة منتقاة، إكسسوارات، ومنتجات تجميل للمتسوق المميز',
        cta: 'تسوق المجموعة',
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
        about: 'من نحن',
        aboutText: 'نقدم أفضل المنتجات الفاخرة من حول العالم، نجلب لك الأناقة الخالدة والجودة الاستثنائية.',
        categories: 'الفئات',
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
