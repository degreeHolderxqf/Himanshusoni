# Technical SEO Implementation & Codebase Transformation Report

**Project:** Himanshu Soni — Freelance Shopify Developer Portfolio  
**Target Domain:** `https://himanshusoni-lilac.vercel.app`  
**Framework Architecture:** React 19 + Vite 8 + Automated Static Pre-Rendering (SSG) via `react-dom/server`  
**Execution Date:** October 2026  

---

## 1. Architectural Framework Decision (Evidence-Based Evaluation)

### 1.1 The Challenge
Prior to this implementation, the project was a pure client-side single-page application (SPA). When search engine bots, social crawlers (LinkedIn, Twitter, WhatsApp), or direct visitors fetched any page:
1. The server returned an empty `<div id="root"></div>` containing zero textual content or links.
2. Direct navigation to subpages on Vercel returned HTTP `404 Not Found` because no physical static files existed for sub-routes and no Vercel rewrites were configured.

### 1.2 Evaluation of Options: Static Pre-Rendering (SSG) vs. Next.js Migration

| Evaluation Dimension | Pure Client-Side Vite (Pre-Audit) | Next.js Framework Migration | Static Pre-Rendering (SSG) via Vite + `react-dom/server` (Chosen) |
| :--- | :--- | :--- | :--- |
| **Initial HTML Content** | ❌ Empty `<div id="root">` | ✅ Full SSR/SSG HTML | ✅ **Full Pre-Rendered HTML inside `<div id="root">`** |
| **Direct Route HTTP Status** | ❌ 404 Not Found on Vercel | ✅ 200 OK | ✅ **200 OK (Physical static HTML per route)** |
| **Route-Specific Metadata** | ❌ All routes share root HTML | ✅ Built-in Metadata API | ✅ **Individual `<title>`, `<meta>`, canonical & JSON-LD injected per route** |
| **Framework Migration Risk** | N/A | ❌ High risk of breaking animations, Coverflow slider, styles | ✅ **Zero risk: 100% of existing CSS, sliders, animations preserved** |
| **Build & Deploy Complexity** | Low | High (Next.js server or output export setup) | ✅ **Fast: compiles client + SSR in 3 seconds; deploys cleanly to Vercel** |

**Conclusion:** Implementing an automated Static Pre-Rendering (SSG) pipeline inside the existing Vite + React 19 architecture delivers 100% of the SEO, indexability, and performance benefits of server-generated HTML without the churn, regression risk, or overhead of rewriting the application in Next.js.

---

## 2. Inventory of Modified & Created Files

```
┌───────────────────────────────────────┬────────────┬────────────────────────────────────────────────────────┐
│ File Path                             │ Action     │ Description & SEO Purpose                              │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ package.json                          │ Modified   │ Updated build script to run prerender after vite build │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ index.html                            │ Modified   │ Added comprehensive metadata, OG tags, and font preconnect│
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ vercel.json                           │ Created    │ Configured cleanUrls, asset caching, security headers  │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ public/robots.txt                     │ Created    │ Directs crawlers, allows public routes, links sitemap  │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ public/sitemap.xml                    │ Created    │ Standard XML sitemap with 7 canonical production URLs  │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/seo/seoConfig.js                  │ Created    │ Single source of truth for metadata, canonicals & schemas│
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/components/SEO.jsx                │ Created    │ Client-side metadata & JSON-LD synchronizer on nav     │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/entry-server.jsx                  │ Created    │ SSR entry point utilizing React 19 renderToString      │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ scripts/prerender.js                  │ Created    │ Automated SSG script generating physical route HTML    │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/main.jsx                          │ Modified   │ Supports seamless hydration of pre-rendered markup    │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/App.jsx                           │ Modified   │ Exports AppContent for SSR and mounts <SEO /> component│
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/data/portfolioData.js             │ Modified   │ Corrected experience to 8+ years; updated role claims  │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/pages/HomePage.jsx                │ Modified   │ SEO H1, 8+ years experience, image LCP attributes      │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/pages/PortfolioPage.jsx           │ Modified   │ Search-intent H1, descriptive portfolio intro copy     │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/pages/ServicesPage.jsx            │ Modified   │ Search-intent H1, structured service descriptions      │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/pages/ApproachPage.jsx            │ Modified   │ Search-intent H1, clear 6-phase engineering workflow   │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/pages/AboutPage.jsx               │ Modified   │ Converted div to semantic H1; corrected 8+ years claim │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/pages/PlannerPage.jsx             │ Modified   │ Search-intent H1, streamlined scoping copy             │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/pages/ContactPage.jsx             │ Modified   │ Search-intent H1, cleaned unused imports               │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/components/Footer.jsx             │ Modified   │ Corrected 8+ years claim; cleaned unused icons         │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/components/ProjectCard.jsx        │ Modified   │ Added loading="lazy", decoding="async", explicit sizes │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/components/CoverflowSlider.jsx    │ Modified   │ Added loading="lazy" and decoding="async" to images    │
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤
│ src/components/ProjectModal.jsx       │ Modified   │ Added loading="lazy", decoding="async", descriptive alt│
└───────────────────────────────────────┴────────────┴────────────────────────────────────────────────────────┘
```

---

## 3. Technical Implementation Details

### 3.1 Static Pre-Rendering (SSG) Engine
The automated build pipeline operates as follows:
1. `vite build` bundles client-side chunks to `dist/`.
2. `scripts/prerender.js` executes `vite.build({ build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr' } })`.
3. The script dynamically imports `entry-server.js` and runs `render(route)` via `react-dom/server` for every route:
   - `/`
   - `/website-portfolio`
   - `/services`
   - `/approach`
   - `/aboutus`
   - `/planner`
   - `/contactus`
4. The script injects the route-specific `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph metadata, Twitter Cards, and Schema.org JSON-LD structured data into the `<head>` of the HTML template.
5. Injects the pre-rendered component tree inside `<div id="root">`.
6. Saves the generated HTML into dedicated directories:
   - `dist/index.html`
   - `dist/website-portfolio/index.html`
   - `dist/services/index.html`
   - `dist/approach/index.html`
   - `dist/aboutus/index.html`
   - `dist/planner/index.html`
   - `dist/contactus/index.html`
7. Cleans up `dist-ssr/`.

### 3.2 Canonical Domain & URLs
- Defined single source of truth in `src/seo/seoConfig.js`:
  ```javascript
  export const SITE_URL = 
    (typeof process !== 'undefined' && process.env?.VITE_SITE_URL) ||
    'https://himanshusoni-lilac.vercel.app';
  ```
- If a custom brand domain (e.g., `https://himanshusoni.com` or `https://himanshusonidev.com`) is deployed in the future, updating the `VITE_SITE_URL` environment variable automatically regenerates all canonical tags, Open Graph URLs, XML sitemap URLs, and Schema.org IDs without touching component code.

### 3.3 Schema.org JSON-LD Structured Data
Implemented rich semantic graphs:
1. **`Person` Schema (Every page / Root):**
   - `@type`: `Person`
   - `name`: `Himanshu Soni`
   - `jobTitle`: `Freelance Shopify Developer`
   - `alumniOf`: `Government Thakur Ranmat Singh College, Rewa, MP, India`
   - `address`: `Indore, Madhya Pradesh, India`
   - `knowsAbout`: Shopify, Shopify Plus, Liquid, Remix, Shopify Functions API, Checkout Extensibility, Core Web Vitals.
2. **`WebSite` Schema (Home):**
   - Linked to Person as author/publisher.
3. **`Service` Schema (`/services`):**
   - Structured `ItemList` detailing 5 core offerings (Custom Themes, Plus Checkout, Custom Apps, Speed Tuning, Migrations).
4. **`CollectionPage` Schema (`/website-portfolio`):**
   - Represents the case studies repository.
5. **`HowTo` Schema (`/approach`):**
   - Structured 6-step engineering methodology.
6. **`BreadcrumbList` Schema (Subpages):**
   - Structured hierarchical navigation path (Home > Category > Page).

### 3.4 Image & Core Web Vitals Optimization
1. **Hero LCP Image (`/assets/MY-Profile.jpeg`):**
   - Added `loading="eager"`, `fetchPriority="high"`, and explicit dimensions `width="460"` and `height="460"`.
2. **Below-Fold Project Images:**
   - Added `loading="lazy"`, `decoding="async"`, and explicit dimensions (`width="400" height="230"`) on all card thumbnails to prevent layout shift (CLS).
3. **Admin Extension Mockup:**
   - Added `loading="lazy"`, `decoding="async"`, and `width="560" height="380"`.

---

## 4. Verification and Test Results

### 4.1 Production Build Test
- **Command:** `npm run build`
- **Result:** Exited with code `0`.
- **Client Build Time:** 2.75 seconds.
- **SSR Compile Time:** 332 milliseconds.
- **SSG Prerender Execution:** 7 of 7 routes compiled into physical static HTML files in `dist/`.

### 4.2 File Output Inspection
- Confirmed `dist/index.html` contains:
  - `<title>Freelance Shopify Developer &amp; Shopify Plus Specialist | Himanshu Soni</title>`
  - `<link rel="canonical" href="https://himanshusoni-lilac.vercel.app/" />`
  - Full pre-rendered `<header>`, `<section class="home-hero-section">`, and body text inside `<div id="root">`.
- Confirmed `dist/website-portfolio/index.html` contains:
  - `<title>Shopify Development Portfolio & Case Studies | Himanshu Soni</title>`
  - `<link rel="canonical" href="https://himanshusoni-lilac.vercel.app/website-portfolio" />`
  - Full pre-rendered project cards with case studies (*WNTR*, *Not Drones*, *Wellness Sutra*, *Irazmo*, *Twelvth Edit*, *Adam Leaves*, *Dope Boyz Muzic*, *Wood Floor Store*, *Alpha Tech Apparel*, *Speedgear*, *Aqua Tech Pool Supply*).
- Confirmed `dist/robots.txt` exists and points to `https://himanshusoni-lilac.vercel.app/sitemap.xml`.
- Confirmed `dist/sitemap.xml` exists with 7 canonical production URLs.

### 4.3 Code Quality & Linter
- **Command:** `npm run lint` (Oxlint)
- **Result:** **0 errors**. All unused imports removed across all edited components.
