import { type Category, type InsertCategory, type Product, type InsertProduct, type Order, type InsertOrder } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getCategories(): Promise<Category[]>;
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
}

export class MemStorage implements IStorage {
  private categories: Map<string, Category>;
  private products: Map<string, Product>;
  private orders: Map<string, Order>;

  constructor() {
    this.categories = new Map();
    this.products = new Map();
    this.orders = new Map();
    this.initializeData();
  }

  private initializeData() {
    const categories: Category[] = [
      {
        id: randomUUID(),
        nameEn: "Watches",
        nameAr: "ساعات",
        slug: "watches",
        image: "/stock_images/luxury_gold_watch_on_f521e06a.jpg",
      },
      {
        id: randomUUID(),
        nameEn: "Accessories",
        nameAr: "إكسسوارات",
        slug: "accessories",
        image: "/stock_images/elegant_jewelry_acce_2b234ecd.jpg",
      },
      {
        id: randomUUID(),
        nameEn: "Makeup",
        nameAr: "مكياج",
        slug: "makeup",
        image: "/stock_images/luxury_makeup_cosmet_ef2662b8.jpg",
      },
      {
        id: randomUUID(),
        nameEn: "Gifts",
        nameAr: "هدايا",
        slug: "gifts",
        image: "/stock_images/luxury_perfume_gift__548a5b12.jpg",
      },
    ];

    categories.forEach(cat => this.categories.set(cat.id, cat));

    const watchesCat = categories.find(c => c.slug === 'watches')!;
    const accessoriesCat = categories.find(c => c.slug === 'accessories')!;
    const makeupCat = categories.find(c => c.slug === 'makeup')!;
    const giftsCat = categories.find(c => c.slug === 'gifts')!;

    const products: Product[] = [
      {
        id: randomUUID(),
        categoryId: watchesCat.id,
        nameEn: "Classic Gold Watch",
        nameAr: "ساعة ذهبية كلاسيكية",
        descriptionEn: "Elegant gold-plated timepiece with precision Swiss movement. Features a classic round dial with Roman numerals and genuine leather strap. Water-resistant up to 50 meters. Perfect for both formal and casual occasions.",
        descriptionAr: "ساعة أنيقة مطلية بالذهب مع حركة سويسرية دقيقة. تتميز بقرص دائري كلاسيكي مع أرقام رومانية وحزام جلد أصلي. مقاومة للماء حتى 50 متر. مثالية للمناسبات الرسمية والعادية.",
        price: "899.00",
        currency: "USD",
        images: [
          "/stock_images/luxury_gold_watch_on_f521e06a.jpg",
          "/stock_images/luxury_gold_watch_on_173d21b2.jpg",
          "/stock_images/luxury_gold_watch_on_8dadeeca.jpg",
        ],
        featured: 1,
        slug: "classic-gold-watch",
      },
      {
        id: randomUUID(),
        categoryId: watchesCat.id,
        nameEn: "Luxury Chronograph Watch",
        nameAr: "ساعة كرونوغراف فاخرة",
        descriptionEn: "Premium chronograph watch with stainless steel case and sapphire crystal. Features three subdials and a date display. Automatic movement with 48-hour power reserve. Ideal for the distinguished gentleman.",
        descriptionAr: "ساعة كرونوغراف فاخرة مع علبة من الفولاذ المقاوم للصدأ وكريستال الياقوت. تتميز بثلاثة أقراص فرعية وعرض التاريخ. حركة أوتوماتيكية مع احتياطي طاقة 48 ساعة. مثالية للرجل المميز.",
        price: "1299.00",
        currency: "USD",
        images: [
          "/stock_images/luxury_gold_watch_on_173d21b2.jpg",
          "/stock_images/luxury_gold_watch_on_f521e06a.jpg",
        ],
        featured: 0,
        slug: "luxury-chronograph-watch",
      },
      {
        id: randomUUID(),
        categoryId: accessoriesCat.id,
        nameEn: "Diamond Pendant Necklace",
        nameAr: "قلادة مع دلاية ألماس",
        descriptionEn: "Exquisite 18K white gold necklace featuring a brilliant-cut diamond pendant. Delicate chain design with secure clasp. Comes with certificate of authenticity. A timeless piece of elegance.",
        descriptionAr: "قلادة رائعة من الذهب الأبيض عيار 18 قيراط تتميز بدلاية ألماس مقطوعة ببراعة. تصميم سلسلة رقيق مع قفل آمن. يأتي مع شهادة أصالة. قطعة أناقة خالدة.",
        price: "1599.00",
        currency: "USD",
        images: [
          "/stock_images/elegant_jewelry_acce_2b234ecd.jpg",
          "/stock_images/elegant_jewelry_acce_ab2c1b10.jpg",
        ],
        featured: 1,
        slug: "diamond-pendant-necklace",
      },
      {
        id: randomUUID(),
        categoryId: accessoriesCat.id,
        nameEn: "Pearl Drop Earrings",
        nameAr: "أقراط اللؤلؤ المتدلية",
        descriptionEn: "Sophisticated freshwater pearl earrings with sterling silver settings. Classic drop design that complements any outfit. Hypoallergenic and perfect for sensitive ears. Includes elegant gift box.",
        descriptionAr: "أقراط أنيقة من اللؤلؤ الطبيعي مع إطارات من الفضة الإسترلينية. تصميم متدلي كلاسيكي يكمل أي ملابس. مضاد للحساسية ومثالي للأذن الحساسة. يشمل صندوق هدايا أنيق.",
        price: "399.00",
        currency: "USD",
        images: [
          "/stock_images/elegant_jewelry_acce_ab2c1b10.jpg",
          "/stock_images/elegant_jewelry_acce_74bb331e.jpg",
        ],
        featured: 0,
        slug: "pearl-drop-earrings",
      },
      {
        id: randomUUID(),
        categoryId: accessoriesCat.id,
        nameEn: "Gold Bracelet Set",
        nameAr: "طقم أساور ذهبية",
        descriptionEn: "Elegant set of three gold-plated bangles with intricate detailing. Stackable design for versatile styling. Adjustable sizing for comfortable wear. Perfect gift for any occasion.",
        descriptionAr: "طقم أنيق من ثلاثة أساور مطلية بالذهب مع تفاصيل معقدة. تصميم قابل للتكديس لتنسيق متعدد الاستخدامات. مقاس قابل للتعديل لارتداء مريح. هدية مثالية لأي مناسبة.",
        price: "499.00",
        currency: "USD",
        images: [
          "/stock_images/elegant_jewelry_acce_74bb331e.jpg",
          "/stock_images/elegant_jewelry_acce_2b234ecd.jpg",
        ],
        featured: 0,
        slug: "gold-bracelet-set",
      },
      {
        id: randomUUID(),
        categoryId: makeupCat.id,
        nameEn: "Luxury Lipstick Collection",
        nameAr: "مجموعة أحمر شفاه فاخرة",
        descriptionEn: "Premium lipstick set featuring 5 gorgeous shades from nude to bold red. Long-lasting, hydrating formula enriched with vitamin E. Elegant gold packaging. Cruelty-free and paraben-free.",
        descriptionAr: "طقم أحمر شفاه فاخر يضم 5 درجات رائعة من اللون الطبيعي إلى الأحمر الجريء. تركيبة طويلة الأمد ومرطبة غنية بفيتامين E. تغليف ذهبي أنيق. خالي من القسوة والبارابين.",
        price: "149.00",
        currency: "USD",
        images: [
          "/stock_images/luxury_makeup_cosmet_ef2662b8.jpg",
          "/stock_images/luxury_makeup_cosmet_435574f1.jpg",
        ],
        featured: 1,
        slug: "luxury-lipstick-collection",
      },
      {
        id: randomUUID(),
        categoryId: makeupCat.id,
        nameEn: "Professional Eyeshadow Palette",
        nameAr: "لوحة ظلال عيون احترافية",
        descriptionEn: "Stunning eyeshadow palette with 12 highly pigmented shades. Mix of matte and shimmer finishes. Blendable formula for professional results. Includes dual-ended brush and mirror.",
        descriptionAr: "لوحة ظلال عيون مذهلة مع 12 درجة عالية الصبغة. مزيج من التشطيبات المطفية واللامعة. تركيبة قابلة للمزج لنتائج احترافية. تشمل فرشاة مزدوجة الطرف ومرآة.",
        price: "89.00",
        currency: "USD",
        images: [
          "/stock_images/luxury_makeup_cosmet_435574f1.jpg",
          "/stock_images/luxury_makeup_cosmet_38f4e6ef.jpg",
        ],
        featured: 0,
        slug: "professional-eyeshadow-palette",
      },
      {
        id: randomUUID(),
        categoryId: makeupCat.id,
        nameEn: "Luxury Makeup Brush Set",
        nameAr: "طقم فرش مكياج فاخر",
        descriptionEn: "Complete 10-piece brush set with synthetic bristles. Includes face, eye, and lip brushes in elegant rose gold handles. Comes with premium leather case. Perfect for travel and daily use.",
        descriptionAr: "طقم فرش كامل من 10 قطع مع شعيرات صناعية. يشمل فرش الوجه والعين والشفاه مع مقابض ذهبية وردية أنيقة. يأتي مع حافظة جلدية فاخرة. مثالي للسفر والاستخدام اليومي.",
        price: "199.00",
        currency: "USD",
        images: [
          "/stock_images/luxury_makeup_cosmet_38f4e6ef.jpg",
          "/stock_images/luxury_makeup_cosmet_ef2662b8.jpg",
        ],
        featured: 0,
        slug: "luxury-makeup-brush-set",
      },
      {
        id: randomUUID(),
        categoryId: giftsCat.id,
        nameEn: "Premium Perfume Gift Set",
        nameAr: "طقم عطر فاخر للهدايا",
        descriptionEn: "Luxurious perfume gift set featuring our signature fragrance in 100ml bottle plus travel-size 15ml. Notes of jasmine, vanilla, and sandalwood. Presented in elegant gift packaging.",
        descriptionAr: "طقم عطر فاخر للهدايا يضم عطرنا المميز في زجاجة 100 مل بالإضافة إلى حجم السفر 15 مل. روائح الياسمين والفانيليا وخشب الصندل. يقدم في تغليف هدايا أنيق.",
        price: "299.00",
        currency: "USD",
        images: [
          "/stock_images/luxury_perfume_gift__548a5b12.jpg",
          "/stock_images/luxury_perfume_gift__aa85a4a9.jpg",
        ],
        featured: 1,
        slug: "premium-perfume-gift-set",
      },
      {
        id: randomUUID(),
        categoryId: giftsCat.id,
        nameEn: "Deluxe Fragrance Collection",
        nameAr: "مجموعة عطور ديلوكس",
        descriptionEn: "Exclusive collection of 3 miniature perfumes in travel-friendly sizes. Features floral, woody, and oriental scents. Perfect gift for fragrance lovers. Premium glass bottles with gold accents.",
        descriptionAr: "مجموعة حصرية من 3 عطور صغيرة بأحجام مناسبة للسفر. تضم روائح زهرية وخشبية وشرقية. هدية مثالية لعشاق العطور. زجاجات زجاجية فاخرة مع لمسات ذهبية.",
        price: "179.00",
        currency: "USD",
        images: [
          "/stock_images/luxury_perfume_gift__aa85a4a9.jpg",
          "/stock_images/luxury_perfume_gift__94fbf062.jpg",
        ],
        featured: 0,
        slug: "deluxe-fragrance-collection",
      },
      {
        id: randomUUID(),
        categoryId: giftsCat.id,
        nameEn: "Elegant Perfume Bottle",
        nameAr: "زجاجة عطر أنيقة",
        descriptionEn: "Sophisticated eau de parfum in crystal-cut bottle. Long-lasting floral and citrus notes perfect for day and evening wear. Makes a stunning gift. 75ml premium fragrance.",
        descriptionAr: "عطر فاخر في زجاجة مقطوعة بالكريستال. روائح زهرية وحمضيات طويلة الأمد مثالية للنهار والمساء. يقدم هدية مذهلة. عطر فاخر 75 مل.",
        price: "249.00",
        currency: "USD",
        images: [
          "/stock_images/luxury_perfume_gift__94fbf062.jpg",
          "/stock_images/luxury_perfume_gift__548a5b12.jpg",
        ],
        featured: 0,
        slug: "elegant-perfume-bottle",
      },
    ];

    products.forEach(prod => this.products.set(prod.id, prod));
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(p => p.slug === slug);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const product = await this.getProductBySlug(insertOrder.productId);
    const totalPrice = product ? (parseFloat(product.price) * insertOrder.quantity).toFixed(2) : "0.00";
    
    const id = randomUUID();
    const order: Order = {
      ...insertOrder,
      id,
      totalPrice,
    };
    this.orders.set(id, order);
    return order;
  }
}

export const storage = new MemStorage();
