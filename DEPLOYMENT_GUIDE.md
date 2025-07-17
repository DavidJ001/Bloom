# The Bloom Umbrella - Deployment Guide

This guide provides step-by-step instructions for deploying The Bloom Umbrella website to various platforms and integrating with WordPress + Elementor.

## 🚀 Quick Deployment Options

### Option 1: Static Hosting (Recommended for Testing)

#### Netlify Deployment
1. Build the project: `pnpm build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Your site will be live instantly with a custom URL

#### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

#### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source as GitHub Actions
4. Use the provided workflow or create custom deployment

### Option 2: WordPress Integration

#### Prerequisites
- WordPress 5.0+
- Elementor Pro (recommended)
- PHP 7.4+
- Modern theme or custom theme development

#### Integration Steps

1. **Theme Setup**
   ```php
   // functions.php
   function bloom_umbrella_enqueue_styles() {
       wp_enqueue_style('bloom-umbrella', get_template_directory_uri() . '/assets/css/bloom-umbrella.css');
       wp_enqueue_script('bloom-umbrella', get_template_directory_uri() . '/assets/js/bloom-umbrella.js', array('jquery'), '1.0.0', true);
   }
   add_action('wp_enqueue_scripts', 'bloom_umbrella_enqueue_styles');
   ```

2. **Convert React Components to PHP Templates**
   - Create page templates for each main page
   - Convert JSX to PHP with WordPress functions
   - Implement WordPress hooks and filters

3. **Elementor Widget Creation**
   ```php
   // Create custom Elementor widgets for:
   // - Branch cards
   // - Testimonial carousel
   // - Newsletter signup
   // - Blog post grid with filters
   ```

4. **Database Setup**
   ```sql
   -- Custom tables for stories and user submissions
   CREATE TABLE bloom_stories (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255),
       content TEXT,
       category VARCHAR(100),
       author_name VARCHAR(100),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## 🔧 Configuration

### Environment Variables
Create `.env` file for production:
```env
VITE_API_BASE_URL=https://your-api-domain.com
VITE_MAILERLITE_API_KEY=your_mailerlite_key
VITE_GUMROAD_SELLER_ID=your_gumroad_id
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### API Integrations

#### MailerLite Newsletter
```javascript
// Newsletter signup integration
const subscribeToNewsletter = async (email, groupId) => {
  const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
    method: 'POST',
    headers: {
      'X-MailerLite-ApiKey': process.env.VITE_MAILERLITE_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      groups: [groupId]
    })
  });
  return response.json();
};
```

#### Contact Form Backend
```php
// WordPress contact form handler
function handle_contact_form() {
    if ($_POST['action'] === 'submit_contact') {
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $message = sanitize_textarea_field($_POST['message']);
        
        // Send email
        wp_mail('hello@bloomumbrella.com', 'Contact Form Submission', $message);
        
        wp_send_json_success('Message sent successfully');
    }
}
add_action('wp_ajax_submit_contact', 'handle_contact_form');
add_action('wp_ajax_nopriv_submit_contact', 'handle_contact_form');
```

## 📱 Mobile Optimization

### Performance Checklist
- [ ] Images optimized and compressed
- [ ] CSS and JS minified
- [ ] Lazy loading implemented
- [ ] Service worker for caching
- [ ] CDN configured for assets

### PWA Setup (Optional)
```javascript
// manifest.json
{
  "name": "The Bloom Umbrella",
  "short_name": "Bloom Umbrella",
  "description": "Healing, Storytelling & Financial Literacy",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4ade80",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## 🔍 SEO Configuration

### Meta Tags Template
```html
<!-- Add to each page -->
<meta name="description" content="Page-specific description">
<meta name="keywords" content="healing, storytelling, financial literacy">
<meta property="og:title" content="The Bloom Umbrella">
<meta property="og:description" content="Page description">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://bloomumbrella.com">
<meta name="twitter:card" content="summary_large_image">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Bloom Umbrella",
  "description": "A nurturing space for healing, storytelling, and financial literacy",
  "url": "https://bloomumbrella.com",
  "logo": "https://bloomumbrella.com/logo.png",
  "sameAs": [
    "https://youtube.com/bloomumbrella",
    "https://instagram.com/bloomumbrella",
    "https://substack.com/bloomumbrella"
  ]
}
```

## 🛡️ Security Considerations

### WordPress Security
```php
// Security headers
function add_security_headers() {
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    header('X-XSS-Protection: 1; mode=block');
    header('Referrer-Policy: strict-origin-when-cross-origin');
}
add_action('send_headers', 'add_security_headers');
```

### Form Validation
- Implement CSRF protection
- Sanitize all user inputs
- Use rate limiting for form submissions
- Add CAPTCHA for public forms

## 📊 Analytics Setup

### Google Analytics 4
```javascript
// Add to index.html
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href
});
```

### Custom Event Tracking
```javascript
// Track user interactions
const trackEvent = (eventName, parameters) => {
  gtag('event', eventName, parameters);
};

// Usage examples
trackEvent('newsletter_signup', { method: 'footer_form' });
trackEvent('story_submission', { category: 'personal_resilience' });
trackEvent('branch_visit', { branch_name: 'bloom_unbound' });
```

## 🔄 Content Management

### Blog Post Management
```php
// Custom post type for stories
function create_story_post_type() {
    register_post_type('story', array(
        'labels' => array(
            'name' => 'Stories',
            'singular_name' => 'Story'
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'taxonomies' => array('story_category')
    ));
}
add_action('init', 'create_story_post_type');
```

### Dynamic Content Loading
```javascript
// AJAX content loading for blog
const loadBlogPosts = async (category = 'all', page = 1) => {
  const response = await fetch(`/wp-json/wp/v2/stories?category=${category}&page=${page}`);
  return response.json();
};
```

## 🧪 Testing Checklist

### Pre-Deployment Testing
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Forms submit successfully
- [ ] Images display properly
- [ ] Mobile responsiveness verified
- [ ] Accessibility tested (WAVE, axe)
- [ ] Performance tested (Lighthouse)
- [ ] Cross-browser compatibility

### Post-Deployment Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking (Sentry)
- [ ] Monitor Core Web Vitals
- [ ] Track conversion rates
- [ ] Monitor form submissions

## 🆘 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for dependency conflicts
npm audit fix
```

#### WordPress Integration Issues
```php
// Debug mode
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);

// Check error logs
tail -f /path/to/wordpress/wp-content/debug.log
```

#### Performance Issues
- Optimize images (WebP format)
- Enable gzip compression
- Use CDN for static assets
- Implement browser caching
- Minify CSS/JS files

## 📞 Support Resources

- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **WordPress Codex**: https://codex.wordpress.org
- **Elementor Developers**: https://developers.elementor.com
- **Web Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/

---

For additional support or custom development needs, please refer to the main README.md file or contact the development team.

