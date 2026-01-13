# The Hop & Vine Website

## Project Overview

Website for The Hop & Vine, a micropub and wine bar located in Cowling, North Yorkshire. The site showcases the pub's offerings including real ales, wines, spirits, and cocktails. **Note: This is a drinks-only establishment - no food is served.**

**Repository:** https://github.com/Silicon-Beck/hop-and-vine-website

## About The Hop & Vine

- **Type:** Micropub & Wine Bar (converted from offices/café in 2021-2022)
- **Address:** 111 Keighley Road, Cowling, BD22 0BE
- **Email:** hopandvine02@gmail.com
- **Instagram:** [@hopandvinecowling](https://www.instagram.com/hopandvinecowling/)
- **Facebook:** [Hop & Vine](https://www.facebook.com/profile.php?id=100063901756921)

### Opening Hours
- Monday - Tuesday: Closed
- Wednesday - Thursday: 4pm - 11pm
- Friday: 3pm - 11pm
- Saturday: 2pm - 11pm
- Sunday: 2pm - 9:30pm

### What They Serve
- Real ales (Dark Horse Hetton Pale Ale, Saltaire Blonde, Timothy Taylor Landlord)
- Wines, spirits, cocktails
- Hot drinks (tea, coffee, hot chocolate)
- **No food**

### Facilities
- Two levels (bar downstairs, function room upstairs)
- Beer store visible through glazed wall
- Real fire
- Dog-friendly (pub dog Dax)
- Family-friendly
- Garden/outdoor seating
- Board games and dominoes
- Wi-Fi
- LocAle supporter (local breweries)

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
2. **Hero** - Full-screen welcome with "Micropub & Wine Bar" tagline
3. **About** - Micropub description with 6 feature cards (Real Ales, Wine & Spirits, Real Fire, Dog Friendly, Board Games, Function Room)
4. **Drinks** - Drinks menu (Real Ales, Wines, Spirits & Cocktails, Soft & Hot Drinks)
5. **Contact** - Address, opening hours, email, social links, Google Maps link
6. **Footer** - Copyright, tagline, and social links

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
- `480px` - Small mobile (2-column feature grid)

## Key Patterns

### Adding Drink Items

Menu items in `App.tsx` follow this structure:

```tsx
<li>
  <span className="item-name">Drink Name</span>
  <span className="item-price">ABV% or Price</span>
  <span className="item-desc">Description of the drink</span>
</li>
```

### Adding New Sections

1. Add section in `App.tsx` with appropriate `id` for navigation
2. Add corresponding styles in `App.css`
3. Update navbar links if needed

## Project Management

**Issues:** https://github.com/Silicon-Beck/hop-and-vine-website/issues

All work should be tracked with GitHub issues. Current open issues cover:
- UI improvements (mobile menu)
- Content (photos)
- Features (events, Google Maps embed, reviews)
- Technical (SEO, accessibility, deployment)

### Workflow

1. Pick an issue from the backlog
2. Create a branch: `git checkout -b feature/issue-number-description`
3. Make changes and test locally
4. Commit with issue reference: `git commit -m "Add feature X (fixes #N)"`
5. Push and create PR

## Data Sources

Information about the pub was sourced from:
- [Official website](https://hopandvine.bar/)
- [CAMRA listing](https://camra.org.uk/pubs/hop-vine-cowling-196174)
- [Instagram @hopandvinecowling](https://www.instagram.com/hopandvinecowling/)

## Future Considerations

- **Real Photos:** Need images of the pub interior, beer selection, atmosphere
- **Google Maps Embed:** Replace placeholder with actual embedded map
- **Events Section:** For quiz nights, live music, etc.
- **Image Optimization:** WebP format with lazy loading when photos added
- **Deployment:** Vercel or Netlify recommended for Vite projects
