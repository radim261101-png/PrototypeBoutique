# Boutique Elegance - Luxury eCommerce Platform

## Overview

Boutique Elegance is a bilingual (English/Arabic) luxury eCommerce website specializing in premium watches, accessories, makeup, and gift items. The platform features a sophisticated boutique aesthetic with visual-first merchandising, seamless bilingual support with RTL (right-to-left) layout for Arabic, and a streamlined order placement system. Built as a modern full-stack application, it emphasizes premium presentation and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

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

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js for REST API
- **Database ORM:** Drizzle ORM
- **Validation:** Zod schemas for request/response validation

**API Design:**
- RESTful endpoints for categories, products, and orders
- JSON-based request/response format
- Schema validation using Drizzle-Zod integration
- In-memory storage implementation (MemStorage) with interface for future database integration

**Server Structure:**
- Modular route registration system
- Custom logging middleware for API requests
- Error handling middleware with standardized responses
- Static file serving for product images from attached_assets directory
- Development-only Vite middleware integration

### Data Architecture

**Database Schema (PostgreSQL via Drizzle):**

1. **Categories Table:**
   - Bilingual names (English/Arabic)
   - URL-friendly slugs
   - Image references

2. **Products Table:**
   - Bilingual names and descriptions
   - Price with currency support
   - Multiple images (array)
   - Featured flag for homepage display
   - Category relationship via categoryId

3. **Orders Table:**
   - Customer contact information (name, phone)
   - Product reference and snapshot data
   - Quantity and calculated total price

**Design Decisions:**
- UUID primary keys for all tables
- Denormalized product name in orders for historical accuracy
- Array type for product images to support galleries
- Separate featured flag instead of ordering for flexible featured product selection

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