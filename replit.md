# AURA Luxury (أورا لوكس) - Luxury eCommerce Platform

## Overview

AURA Luxury is a bilingual (English/Arabic) luxury eCommerce website specializing in premium watches, accessories, makeup, and gift items. The platform features a sophisticated boutique aesthetic with visual-first merchandising, seamless bilingual support with RTL (right-to-left) layout for Arabic, and a streamlined order placement system. Built as a modern frontend-only application deployable on Vercel, it emphasizes premium presentation and user experience.

## Recent Updates (October 2024)

- **Rebranded** from "Boutique Elegance" to "AURA Luxury" (أورا لوكس)
- **Converted to frontend-only**: All data stored in static files (client/src/lib/productsData.ts) and localStorage for orders
- **Expanded product catalog**: 25 luxury items with realistic, compelling bilingual descriptions
- **Added SpecialOffer component**: Jewelry sale promotion (up to 30% off) on homepage
- **Improved mobile responsiveness**: Enhanced touch targets, better text sizing, improved spacing across all breakpoints
- **Fixed image paths**: All product images moved to client/public/images for Vercel deployment
- **Repositioned wishlist button**: Moved to top-left corner of product images with smaller size

## User Preferences

Preferred communication style: Simple, everyday language (Arabic preferred)

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React with TypeScript using Vite as the build tool
- **Routing:** Wouter for lightweight client-side routing
- **State Management:** TanStack Query (React Query) for server state management
- **UI Framework:** shadcn/ui components built on Radix UI primitives
- **Styling:** Tailwind CSS with custom design tokens
- **Internationalization:** i18next for bilingual support (English/Arabic)

**Design System:**
- Custom color palette with light/dark mode support
- Typography: Playfair Display (serif) for headings, Inter (sans-serif) for body, Noto Sans Arabic for Arabic text
- Responsive design with mobile-first approach
- Sophisticated boutique aesthetic with generous whitespace

**Key Frontend Patterns:**
- Component-based architecture with reusable UI primitives
- Query-based data fetching with automatic caching and refetching disabled (staleTime: Infinity)
- Form handling with react-hook-form and Zod validation
- Bilingual content rendering based on language context
- RTL layout support for Arabic language

### Data Architecture

**Frontend-Only Data Management:**
- Static product and category data in `client/src/lib/productsData.ts`
- Order submissions saved to browser localStorage
- No backend API or database required

**Product Data Structure:**
- 25 premium products across 4 categories (Watches, Accessories, Makeup, Gifts)
- Each product includes:
  - Bilingual names and descriptions (English/Arabic)
  - Multiple product images (stored in client/public/images/)
  - Price with currency support
  - Featured flag for homepage display
  - Category relationship

**Category Structure:**
- 4 main categories with bilingual names and slugs
- Each category has its own image

**Design Decisions:**
- All images served from client/public/images for Vercel compatibility
- Featured products displayed prominently on homepage
- Wishlist stored in localStorage with useWishlist hook
- Orders stored in localStorage (frontend-only implementation)

### Key Components

**SpecialOffer Component:**
- Promotional banner showing jewelry sale (up to 30% off)
- Bilingual content with countdown timer
- Grid of featured jewelry images with discount badges
- CTA button directing to accessories category

**ProductCard Component:**
- Wishlist button positioned at top-left (top-right for RTL)
- Smaller button size (h-8 w-8) for better aesthetics
- Hover effects and smooth transitions

**Mobile Responsiveness:**
- Hero section with responsive text sizing (text-3xl to text-7xl)
- Product page carousel with always-visible navigation on mobile
- Improved padding and spacing across all breakpoints
- Full-width CTA buttons on small screens

### External Dependencies

**Core Libraries:**
- **@neondatabase/serverless:** Serverless PostgreSQL client (Neon Database)
- **drizzle-orm:** Type-safe ORM for database operations
- **drizzle-kit:** Database migration and schema management tools

**UI Component Libraries:**
- **@radix-ui/*:** Headless UI primitives (18+ components including dialogs, dropdowns, popovers, etc.)
- **embla-carousel-react:** Touch-friendly carousel for product images
- **lucide-react:** Icon library

**Form & Validation:**
- **react-hook-form:** Form state management
- **@hookform/resolvers:** Resolver adapters for validation libraries
- **zod:** TypeScript-first schema validation
- **drizzle-zod:** Integration between Drizzle schemas and Zod validation

**Internationalization:**
- **i18next:** Core internationalization framework
- **react-i18next:** React bindings for i18next
- **i18next-browser-languagedetector:** Automatic language detection

**Development Tools:**
- **@replit/vite-plugin-*:** Replit-specific development enhancements (runtime error overlay, cartographer, dev banner)
- **tsx:** TypeScript execution for development server
- **esbuild:** Fast bundler for production server build

**Session & Storage:**
- **connect-pg-simple:** PostgreSQL session store for Express (prepared for session management)

**Utilities:**
- **class-variance-authority:** CSS variant management
- **clsx & tailwind-merge:** Conditional className utilities
- **date-fns:** Date formatting and manipulation
- **nanoid:** Unique ID generation