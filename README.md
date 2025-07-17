# The Bloom Umbrella Website

A purpose-driven, content-rich website focused on healing, storytelling, and financial literacy. Built with React, Tailwind CSS, and modern web technologies for seamless WordPress + Elementor integration.

## 🌟 Features

### Complete Page Structure
- **Home Page**: Hero section, branch overview, testimonials, and CTAs
- **About Us**: Mission, values, and team information
- **Your Story**: Story submission form with category selection
- **Contact**: Contact form and information
- **FAQs**: Interactive accordion with search functionality
- **Privacy Policy**: Comprehensive privacy information
- **Terms of Service**: Legal terms and conditions
- **Blog**: Stories from the Umbrella with 5-category filtering system
- **4 Branch Landing Pages**: Specialized pages for each program

### Branch Pages
1. **Bloom Unbound**: Personal growth and healing through storytelling
2. **Bloom-a-Bean**: Financial literacy and empowerment
3. **Resonant Resilience**: Building mental and emotional strength
4. **Bloom in Transit**: Cultural exchange and travel stories

### Design Features
- Soft, friendly design with storytelling-inspired visuals
- Custom color palette: Green (#4ade80), Teal (#06b6d4), Gold (#fbbf24), Plum (#8b5cf6)
- Typography: Playfair Display (headings), Open Sans (body), Montserrat (buttons)
- Mobile-responsive layout with touch support
- Accessible design practices with proper focus states
- Smooth animations and transitions

### Interactive Elements
- Working navigation between all pages
- Blog filtering system (Personal Resilience, Parenting & Autism, Impact & Community, Faith & Reflection, Travel & Cultural Exchange)
- Newsletter signup forms (MailerLite ready)
- Contact forms with validation
- Story submission system
- Testimonials carousel
- Interactive FAQ accordion
- Gumroad product integration placeholders

### Technical Specifications
- Built with React 18 and Vite
- Tailwind CSS for styling
- Lucide React for icons
- Shadcn/ui components
- Mobile-first responsive design
- SEO-ready structure
- Cross-browser compatibility
- Fast loading performance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone or extract the project
cd bloom-umbrella

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development Server
The development server runs on `http://localhost:5173/` with hot reload enabled.

## 📁 Project Structure

```
bloom-umbrella/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Footer.jsx    # Site footer
│   │   └── pages/        # All page components
│   ├── data/
│   │   └── blogPosts.js  # Sample blog data
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   └── main.jsx          # Application entry point
├── dist/                  # Production build output
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary Green**: #4ade80 (growth, healing)
- **Teal**: #06b6d4 (trust, communication)
- **Gold**: #fbbf24 (wisdom, prosperity)
- **Plum**: #8b5cf6 (creativity, transformation)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Open Sans (sans-serif)
- **Buttons/UI**: Montserrat (sans-serif)

### Components
All components are built with accessibility in mind and include:
- Proper ARIA labels
- Keyboard navigation support
- Focus indicators
- Responsive breakpoints
- Hover and active states

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

All components adapt gracefully across devices with touch-friendly interactions on mobile.

## 🔗 Integration Ready

### WordPress + Elementor
The component structure is designed for easy WordPress integration:
- Modular component architecture
- Reusable UI elements
- Clean HTML structure
- CSS classes compatible with Elementor
- No complex state management dependencies

### Third-Party Integrations
- **MailerLite**: Newsletter forms ready for API integration
- **Gumroad**: Product blocks with placeholder URLs
- **Social Media**: Links configured for YouTube, Substack, Instagram, Spotify
- **Analytics**: Clean structure for Google Analytics integration

## 🧪 Testing

The website has been tested for:
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness
- Accessibility standards (WCAG 2.1)
- Performance optimization
- SEO best practices

## 📄 Pages Overview

### Core Pages
1. **Home**: Welcome message, branch overview, testimonials
2. **About**: Mission, values, team information
3. **Your Story**: Story submission with category selection
4. **Contact**: Contact form and information
5. **Blog**: Filterable story collection
6. **FAQs**: Searchable frequently asked questions
7. **Privacy**: Privacy policy and data protection
8. **Terms**: Terms of service and legal information

### Branch Pages
Each branch page includes:
- Hero section with branch-specific branding
- Feature highlights
- Product/resource sections
- Testimonials
- Newsletter signup
- Call-to-action sections

## 🛠 Customization

### Adding New Pages
1. Create component in `src/components/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Header.jsx`

### Modifying Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --bloom-green: #4ade80;
  --bloom-teal: #06b6d4;
  --bloom-gold: #fbbf24;
  --bloom-plum: #8b5cf6;
}
```

### Adding Blog Posts
Update `src/data/blogPosts.js` with new entries following the existing structure.

## 🚀 Deployment

### Static Hosting
The built files in `/dist` can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

### WordPress Integration
1. Convert components to PHP templates
2. Integrate with WordPress theme structure
3. Add Elementor widget compatibility
4. Configure database connections for dynamic content

## 📞 Support

For questions about implementation or customization, refer to:
- Component documentation in source files
- Tailwind CSS documentation
- React documentation
- Accessibility guidelines (WCAG 2.1)

## 🎯 Next Steps

1. **Content Integration**: Replace placeholder content with real data
2. **API Connections**: Connect forms to backend services
3. **CMS Integration**: Set up WordPress or headless CMS
4. **Analytics**: Add tracking and monitoring
5. **SEO Optimization**: Add meta tags and structured data
6. **Performance**: Optimize images and implement caching

---

Built with ❤️ for The Bloom Umbrella community

