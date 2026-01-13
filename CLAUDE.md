# The Hop & Vine Website

## Project Overview

Website for The Hop & Vine, a village pub located in Cowling, North Yorkshire. The site showcases the pub's offerings including craft beers, fine wines, and traditional pub food.

**Repository:** https://github.com/Silicon-Beck/hop-and-vine-website

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Plain CSS with CSS custom properties (no frameworks)
- **Package Manager:** npm

## Project Structure

```
├── src/
│   ├── App.tsx          # Main application component (all sections)
│   ├── App.css          # All styles for the website
│   ├── main.tsx         # React entry point
│   └── index.css        # Global/reset styles
├── index.html           # HTML template
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Website Sections

The site is a single-page application with these sections:

1. **Navbar** - Fixed navigation with smooth scroll links
2. **Hero** - Full-screen welcome with tagline and CTA
3. **About** - Pub description with feature cards (Craft Beers, Fine Wines, Pub Grub)
4. **Menu** - Food and drinks menu with prices (Starters, Mains, Sunday Roasts, Drinks)
5. **Contact** - Address, opening hours, contact details, map placeholder
6. **Footer** - Copyright and tagline

## Styling Conventions

### CSS Custom Properties (defined in App.css)

```css
--color-primary: #2c1810;      /* Dark brown */
--color-secondary: #8b4513;    /* Saddle brown */
--color-accent: #d4a574;       /* Tan/amber */
--color-light: #f5f0e8;        /* Cream */
--color-dark: #1a0f0a;         /* Near black */
--color-text: #333;
--color-text-light: #666;
```

### Typography

- Primary font: Georgia (serif) for traditional pub feel
- Headings use `--color-primary` or `--color-accent`

### Responsive Breakpoints

- `968px` - Tablet (single column layouts)
- `768px` - Mobile (stacked navbar, smaller headings)

## Key Patterns

### Adding Menu Items

Menu items in `App.tsx` follow this structure:

```tsx
<li>
  <span className="item-name">Item Name</span>
  <span className="item-price">£X.XX</span>
  <span className="item-desc">Description of the item</span>
</li>
```

### Adding New Sections

1. Add section in `App.tsx` with appropriate `id` for navigation
2. Add corresponding styles in `App.css`
3. Update navbar links if needed

## Known Placeholders

These items need updating with real information:

- **Phone number:** Currently shows placeholder in Contact section
- **Email:** Using placeholder `info@hopandvine-cowling.co.uk`
- **Map:** Currently a styled placeholder div
- **Images:** Using CSS gradients/patterns instead of real photos

## Project Management

**Issues:** https://github.com/Silicon-Beck/hop-and-vine-website/issues

All work should be tracked with GitHub issues. Current open issues cover:
- UI improvements (mobile menu, social links)
- Content (photos, contact details)
- Features (booking, events, specials, newsletter, reviews)
- Technical (SEO, accessibility, deployment)

### Workflow

1. Pick an issue from the backlog
2. Create a branch: `git checkout -b feature/issue-number-description`
3. Make changes and test locally
4. Commit with issue reference: `git commit -m "Add feature X (fixes #N)"`
5. Push and create PR

## Future Considerations

- **CMS Integration:** For easy menu/events updates by pub staff
- **Booking System:** Third-party (OpenTable) or custom form
- **Image Optimization:** WebP format with lazy loading
- **Deployment:** Vercel or Netlify recommended for Vite projects
