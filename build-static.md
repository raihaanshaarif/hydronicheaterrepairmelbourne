# Static Site Generation Guide

## Your website has been converted to a fully static site for cPanel hosting!

### What Changed:

1. **next.config.js**: Added `output: 'export'`, `trailingSlash: true`, and `images: { unoptimized: true }`
2. **Forms**: All forms now use mailto links instead of API routes
3. **Checkout**: Modified to show contact information instead of Stripe processing
4. **Build Process**: Updated to generate static files

### Build Commands:

```bash
# Install dependencies
npm install

# Build static site
npm run build

# The static files will be in the 'out' folder
```

### Deploy to cPanel:

1. Run `npm run build`
2. Upload all contents of the `out` folder to your cPanel's `public_html` directory
3. Your static site will be live!

### Form Handling Options:

Currently forms use mailto links. For better form handling, consider:

1. **Formspree** (https://formspree.io) - Free tier available
2. **EmailJS** (https://emailjs.com) - Send emails directly from frontend
3. **Netlify Forms** (if hosting on Netlify)
4. **Contact form services** compatible with static sites

### Email Configuration:

Update all email addresses in the forms from `your-email@example.com` to your actual email address.

### File Structure After Build:

```
out/
├── index.html
├── about.html
├── contact-us.html
├── _next/
│   ├── static/
│   └── ...
├── images/
└── ...
```

### Important Notes:

- No server-side functionality (no API routes)
- All images are unoptimized for static export
- Forms redirect to email client
- Shopping cart redirects to contact information
- Perfect for cPanel shared hosting
