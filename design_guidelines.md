# Design Guidelines: Boutique eCommerce Website

## Design Approach

**Selected Approach:** Reference-Based Design inspired by premium eCommerce platforms (Shopify boutiques, Etsy artisan stores, luxury brand websites)

**Key Design Principles:**
- Visual-first merchandising with high-quality product imagery
- Sophisticated, boutique aesthetic that elevates perceived product value
- Seamless bilingual experience with culturally appropriate layouts
- Premium feel through refined typography and generous whitespace
- Trust-building through polished, professional presentation

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Background: 0 0% 98% (soft white)
- Surface: 0 0% 100% (pure white cards)
- Primary: 340 75% 45% (sophisticated rose/burgundy for luxury feel)
- Text Primary: 220 20% 15% (deep charcoal)
- Text Secondary: 220 15% 45% (muted slate)
- Border: 220 13% 91% (subtle dividers)

**Dark Mode:**
- Background: 220 25% 8% (rich dark navy)
- Surface: 220 20% 12% (elevated card surface)
- Primary: 340 70% 55% (lighter rose for contrast)
- Text Primary: 220 15% 95% (off-white)
- Text Secondary: 220 12% 70% (muted light gray)
- Border: 220 15% 20% (subtle dark borders)

**Accent (Use sparingly):**
- Success/Trust: 160 60% 45% (emerald green for trust badges)

### B. Typography

**Font Families (Google Fonts):**
- Display: 'Playfair Display' - elegant serif for headings and hero
- Body: 'Inter' - clean, readable sans-serif for content
- Arabic: 'Noto Sans Arabic' - professional Arabic typography

**Scale:**
- Hero Display: text-6xl md:text-7xl, font-bold (Playfair)
- Section Headings: text-3xl md:text-4xl, font-semibold (Playfair)
- Product Titles: text-xl md:text-2xl, font-semibold (Inter)
- Body Text: text-base md:text-lg (Inter)
- Small/Meta: text-sm (Inter)
- Prices: text-2xl md:text-3xl, font-bold (Inter)

### C. Layout System

**Tailwind Spacing Primitives:** Consistently use units of 4, 6, 8, 12, 16, 20, 24 for cohesive rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24
- Grid gaps: gap-6 to gap-8
- Container: max-w-7xl mx-auto px-4 md:px-6

**Grid Systems:**
- Product Grids: grid-cols-1 md:grid-cols-3 lg:grid-cols-4
- Category Cards: grid-cols-2 md:grid-cols-4
- Feature Sections: grid-cols-1 md:grid-cols-2

### D. Component Library

**Navigation Bar:**
- Sticky header with backdrop blur
- Logo left, category menu center, utilities right (language, theme, cart icon)
- Mobile: Hamburger menu with slide-in drawer
- Height: h-16 md:h-20

**Hero Section:**
- Full-width hero image (luxury boutique storefront or curated product styling)
- Overlay gradient: from-black/60 to-transparent
- Centered content with large display typography
- Primary CTA button with blurred background on image
- Height: min-h-[500px] md:min-h-[600px]

**Product Cards:**
- Image container: aspect-square with object-cover
- Hover effect: subtle scale transform and shadow increase
- Price badge: Prominent display with currency
- Quick view button overlay on hover
- Rounded corners: rounded-lg

**Product Gallery:**
- Main image: aspect-square or aspect-[4/3]
- Thumbnail strip: grid of 4-6 images, scrollable
- Click to expand full-screen lightbox view
- Image zoom on hover (desktop)

**Order Form:**
- Floating card with elevated shadow
- Input fields: Outlined style with focus rings
- Labels above inputs, icons inside fields
- Submit button: Full-width, prominent
- Success state: Checkmark animation

**Category Cards:**
- Circular image containers for elegant presentation
- Category name below in refined typography
- Hover: lift effect with subtle shadow

**Featured Products Carousel:**
- Horizontal scroll on mobile, 3-4 column grid on desktop
- Navigation arrows (desktop), swipe gestures (mobile)
- Auto-scroll disabled to respect user control

**Footer:**
- 4-column layout (desktop): About, Categories, Policies, Contact
- Social media icons: Outlined style with hover fill
- Newsletter signup: Inline form with email input
- Background: Subtle contrast from main background
- Padding: py-12 md:py-16

**Trust Indicators:**
- Secure checkout badge
- Free shipping banner (if applicable)
- Customer review stars
- Return policy highlight

**Buttons:**
- Primary: Solid fill with primary color, white text
- Secondary: Outline style with primary border
- On images: Blurred glass-morphism background with white text
- Sizes: Regular (px-6 py-3), Large (px-8 py-4)
- Border radius: rounded-lg

### E. Animations

**Subtle Interactions Only:**
- Card hover: transform scale-105, transition-transform duration-300
- Button hover: Built-in button states (no custom implementation)
- Image lazy load: Fade in effect
- Page transitions: None (instant for performance)
- Form success: Checkmark scale animation

---

## Images

**Hero Section:**
- Large hero image: Sophisticated boutique interior or beautifully styled product flat-lay
- Dimensions: 1920x1080 minimum
- Style: High-quality, professional photography with warm, inviting lighting
- Overlay: Dark gradient to ensure text readability

**Product Images:**
- Clean white or neutral background for product focus
- Multiple angles: Front, detail shots, lifestyle context
- Square format: 800x800px minimum
- Use Unsplash collections: watches, cosmetics, accessories, gifts

**Category Images:**
- Circular crops: 400x400px
- Iconic product representation for each category
- Consistent styling and lighting across all categories

**Trust/About Section:**
- Optional: Boutique storefront or team photo for authenticity
- Dimensions: 800x600px

---

## Responsive Breakpoints

- Mobile: < 768px (single column, touch-optimized)
- Tablet: 768px - 1024px (2-column layouts)
- Desktop: > 1024px (multi-column, hover states)

## RTL Considerations

- Automatic text direction: `dir="rtl"` for Arabic
- Mirrored layouts: Navigation, product grids flip horizontally
- Icons: Direction-neutral or mirrored appropriately
- Maintain visual hierarchy in both directions