# Dr. Jan Duffy Realtor - Las Vegas Real Estate

A modern, responsive real estate website built with SvelteKit for Dr. Jan Duffy, a professional real estate agent serving the Las Vegas area.

## 🏠 About

This website showcases Dr. Jan Duffy's real estate services, property listings, market insights, and provides tools for buyers and sellers in the Las Vegas real estate market.

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Full-stack web framework
- **Language**: TypeScript - Type-safe JavaScript
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Code Quality**: Biome - Modern linter and formatter
- **Package Manager**: npm - Node package manager
- **Deployment**: Vercel - Cloud platform for static sites and serverless functions
- **Icons**: Lucide Svelte - Beautiful icon library

## 🎨 Design System

### Color Palette
- **Primary Blue**: #3b82f6 (Professional Blue)
- **Neutral Grays**: #fafafa to #171717 (Clean, modern grays)
- **Accent Green**: #10b981 (Call-to-action green)
- **Luxury Gold**: #d4af37 (Premium property highlighting)

### Typography
- **Headings**: Playfair Display, serif
- **Body**: Inter, system-ui, sans-serif

## 📁 Project Structure

```
src/
├── routes/                 # SvelteKit pages and API routes
│   ├── +layout.svelte     # Root layout
│   ├── +page.svelte       # Homepage
│   ├── about/             # About page
│   ├── properties/        # Property listings
│   ├── contact/           # Contact page
│   └── api/               # API endpoints
├── lib/
│   ├── components/        # Reusable Svelte components
│   │   ├── Header.svelte
│   │   ├── PropertyCard.svelte
│   │   └── ContactForm.svelte
│   ├── data/              # Static data and content
│   │   ├── properties.js
│   │   ├── testimonials.js
│   │   └── market-data.js
│   └── utils/             # Helper functions
│       ├── formatters.js
│       ├── validators.js
│       └── api.js
static/
├── images/                # Static assets
│   ├── properties/        # Property photos
│   ├── team/             # Team photos
│   └── branding/         # Logo and branding
└── favicon.ico
```

## 🚀 Local Development

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd drjanduffy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript checks
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## 🌐 Deployment (Vercel)

### Automatic Deployment

This project is configured for automatic deployment with Vercel:

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect SvelteKit and configure build settings

2. **Environment Variables**
   Set the following in your Vercel dashboard:
   ```
   PUBLIC_SITE_URL=https://drjanduffy.com
   PUBLIC_API_URL=https://api.drjanduffy.com
   DATABASE_URL=your_database_connection_string
   EMAIL_SERVICE_API_KEY=your_email_service_key
   MAPS_API_KEY=your_google_maps_api_key
   ```

3. **Build Configuration**
   - **Build Command**: `npm run build`
   - **Output Directory**: `.svelte-kit`
   - **Install Command**: `npm install`

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Public variables (accessible in browser)
PUBLIC_SITE_URL=http://localhost:5173
PUBLIC_API_URL=http://localhost:5173/api

# Private variables (server-side only)
DATABASE_URL=your_database_connection_string
EMAIL_SERVICE_API_KEY=your_email_service_key
MAPS_API_KEY=your_google_maps_api_key
CONTACT_FORM_WEBHOOK_URL=your_contact_form_webhook

# Optional: Analytics
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_FACEBOOK_PIXEL_ID=your_facebook_pixel_id

# Real Estate API Keys (if using external services)
REALTY_MOLE_API_KEY=your_realty_mole_api_key
ZILLOW_API_KEY=your_zillow_api_key
REALTOR_API_KEY=your_realtor_api_key
```

## 📱 Features

- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Property Listings** - Dynamic property showcase with filtering
- **Contact Forms** - Lead capture with validation
- **Market Insights** - Local market data and trends
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Performance** - Optimized images, lazy loading, code splitting
- **Accessibility** - WCAG 2.1 AA compliant
- **Sticky Navigation** - Professional header with dropdown menus

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Dr. Jan Duffy Realtor.

## 📞 Contact

**Dr. Jan Duffy**  
Real Estate Agent  
Las Vegas, NV  
Email: drduffy@bhhsnv.com  
Phone: (702) 222-1964

---

Built with ❤️ using SvelteKit and deployed on Vercel.