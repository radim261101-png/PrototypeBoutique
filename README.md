# AURA Luxury - Frontend Application

A sophisticated bilingual (English/Arabic) luxury eCommerce boutique featuring exquisite timepieces, fine jewelry, premium cosmetics, and curated gift collections.

## Features

- **Bilingual Support**: Seamless English/Arabic language switching with RTL layout
- **Luxury Collections**: 25+ premium products across 4 categories
- **Responsive Design**: Mobile-first approach with elegant UI
- **Dark/Light Mode**: Theme switching for optimal viewing
- **Product Search**: Instant search with suggestions
- **Wishlist**: Save favorite items for later
- **Order Management**: Simple order placement with localStorage

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Internationalization**: i18next
- **State**: React Query (for caching)

## Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the configuration
4. Deploy!

The app uses static data (no backend required), making it perfect for edge deployment.

### Other Platforms

Build command: `npm run build`  
Output directory: `dist/public`

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
client/
  src/
    components/    # Reusable UI components
    pages/         # Page components
    lib/           # Utilities and data
    hooks/         # Custom React hooks
attached_assets/   # Static images
```

## Customization

- **Products**: Edit `client/src/lib/productsData.ts`
- **Translations**: Edit `client/src/lib/i18n.ts`
- **Branding**: Update logo text in `client/src/components/Navbar.tsx`
- **Styling**: Modify Tailwind config in `tailwind.config.ts`

## License

MIT
