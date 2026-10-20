// Portfolio Data for Himanshu Soni — Shopify Developer & Plus Specialist
// Sourced strictly from genuine resume and technical background

export const personalInfo = {
  name: "Himanshu Soni",
  role: "Shopify Developer",
  subRole: "Shopify Plus, Remix Apps & Checkout Customization Specialist",
  tagline: "Building high-performance Shopify storefronts, custom apps, and checkout systems that scale e-commerce revenue.",
  experienceYears: "3+",
  phone: "+91 93026 15727",
  email: "himanshusoni7899@gmail.com",
  location: "Dewas / Indore, Madhya Pradesh, India",
  github: "https://github.com",
  linkedin: "https://linkedin.com/in",
  availability: "Available for Custom Theme, Shopify Plus, and Custom App Projects",
  bio: `Shopify Developer with 3 years of experience architecting custom Shopify applications, Shopify Plus checkout extensions, and high-performance storefronts. Skilled in Shopify APIs, Remix, Liquid, GraphQL, and the modern MERN ecosystem. Proven track record of cutting warehouse order processing time by 60%, boosting Lighthouse speed scores from 40 to 85+, and deploying over 60+ custom e-commerce stores.`
};

export const verifiedMetrics = [
  { value: "60+", label: "Custom Shopify Stores Shipped", detail: "Bespoke themes & Shopify 2.0 architectures" },
  { value: "60%", label: "Order Processing Time Cut", detail: "Through custom Admin UI printing extensions" },
  { value: "85+", label: "Lighthouse Performance Score", detail: "Storefront optimization & Core Web Vitals" },
  { value: "20+", label: "Integrations Deployed", detail: "Stripe, PayPal, Klaviyo & Mailchimp integrations" }
];

export const servicesData = [
  {
    id: "shopify-plus",
    title: "Shopify Plus & Checkout Extensibility",
    tagline: "Custom Checkout & Functions",
    description: "Leverage Shopify Functions API to build custom discount rules, delivery customizations, payment validation, and cart transformation with zero checkout performance impact.",
    capabilities: [
      "Shopify Functions (Delivery & Payment Customization)",
      "Checkout UI Extensions & Post-Purchase Offers",
      "B2B & Wholesale Shopify Plus Configuration",
      "Custom Cart Transformation & Bundle Rules"
    ],
    icon: "layers"
  },
  {
    id: "remix-apps",
    title: "Custom Shopify Apps (Remix & APIs)",
    tagline: "Embedded Apps & Webhooks",
    description: "Full-stack Shopify apps built with Remix, Node.js, and GraphQL Admin API. Embedded Admin UI extensions that streamline operations and automate merchant workflows.",
    capabilities: [
      "Real-Time Webhook Pipelines & Stock Sync",
      "Embedded Admin UI Extensions with Polaris",
      "Custom Order Processing & Label Printing Apps",
      "Third-Party ERP & CRM API Connections"
    ],
    icon: "app"
  },
  {
    id: "custom-themes",
    title: "Bespoke Theme Development",
    tagline: "Shopify 2.0 & Liquid",
    description: "Tailor-made Shopify 2.0 themes built from Figma or scratch using clean Liquid architecture, dynamic section blocks, and responsive mobile-first UX.",
    capabilities: [
      "Modular Shopify 2.0 Sections & Blocks",
      "Custom Product Configurators & Swatches",
      "Ajax Flyout Cart & Slide-Over Drawers",
      "Dynamic Filtering with Search & Discovery"
    ],
    icon: "code"
  },
  {
    id: "speed-optimization",
    title: "Storefront Performance & Core Web Vitals",
    tagline: "Speed Tuning from 40 to 85+",
    description: "Systematic performance engineering that eliminates render-blocking app bloat, optimizes critical asset delivery, and delivers lightning-fast mobile shopping experiences.",
    capabilities: [
      "Lighthouse Score Improvement (40 to 85+)",
      "App Script Auditing & Tag Deferral",
      "Next-Gen Image & Lazy-Loading Strategy",
      "Core Web Vitals (LCP, FID/INP, CLS) Tuning"
    ],
    icon: "gauge"
  },
  {
    id: "integrations",
    title: "Payment, Marketing & API Integrations",
    tagline: "Third-Party Automation",
    description: "Seamless integration of essential merchant tools including Stripe, PayPal, Klaviyo, Mailchimp, and custom webhooks for automated retention and fulfillment.",
    capabilities: [
      "Payment Gateways (Stripe, PayPal Express)",
      "Klaviyo & Mailchimp Retention Events",
      "Automated Order & Shipping Webhooks",
      "Inventory Sync Across Variant Clusters"
    ],
    icon: "link"
  },
  {
    id: "store-migration",
    title: "Platform Migrations & Store Redesign",
    tagline: "Seamless Re-platforming",
    description: "Smooth migration of catalog, customer data, and SEO structure from legacy platforms or WooCommerce/Wix onto optimized Shopify architectures.",
    capabilities: [
      "Catalog, Variant & Customer Data Migration",
      "URL Redirects & Zero-Downtime SEO Protection",
      "Custom Liquid Architecture Re-build",
      "Merchant Staff Training & Handover"
    ],
    icon: "refresh"
  }
];

export const projectsData = [
  {
    id: "inventory-sync-app",
    title: "Real-Time Multi-Variant Inventory Sync App",
    category: "Shopify Apps & Remix",
    categorySlug: "apps",
    thumbnail: "/assets/projects/inventory-sync.jpg",
    clientType: "Fashion & Lifestyle Apparel Brand",
    summary: "Built an event-driven Shopify app using Shopify API and Remix with background webhooks to share a single inventory pool across gender-specific variants, preventing overselling.",
    challenge: "High-volume apparel merchant sold gender-neutral and gender-specific variant collections that physically pulled from identical warehouse inventory units. Standard Shopify inventory tracking resulted in frequent overselling, negative stock levels, and manual reconciliation overhead.",
    solution: "Engineered an event-driven inventory synchronization app using Shopify API and Remix with background webhook pipelines. Listened to inventory_levels/update and orders/create events to compute single-pool stock across grouped SKU clusters within sub-50ms latency.",
    highlights: [
      "Event-driven Shopify webhooks pipeline for instant inventory recalculation",
      "Remix full-stack embedded app running inside Shopify Admin",
      "Configurable SKU clustering dashboard for merchant admins",
      "Automatic multi-location inventory adjustments with zero overselling"
    ],
    metrics: [
      { label: "Overselling Incidents", value: "0% (Eliminated)" },
      { label: "Sync Latency", value: "< 50ms" },
      { label: "Monthly SKU Syncs", value: "10,000+" }
    ],
    technologies: ["Shopify API", "Remix", "Node.js", "Shopify Webhooks", "GraphQL Admin API", "Polaris UI"]
  },
  {
    id: "bulk-order-printing",
    title: "Shopify Plus Admin UI Bulk Order Printing Extension",
    category: "Shopify Plus & Admin Extensions",
    categorySlug: "plus",
    thumbnail: "/assets/projects/admin-extension.jpg",
    clientType: "High-Volume D2C E-Commerce Merchant",
    summary: "Created a custom Shopify Admin UI extension for bulk order printing and warehouse packing slip generation, cutting order processing time by 60%.",
    challenge: "Merchant fulfillment operators spent up to 4 minutes per batch manually opening individual orders to verify custom notes, package dimensions, and print standardized warehouse packing slips and dispatch labels.",
    solution: "Built an embedded Shopify Admin UI extension right within the native Shopify Admin order index view. Implemented bulk selection handlers, packing slip compilation, dynamic invoice templating, and instant 1-click batch printing.",
    highlights: [
      "Embedded Shopify Admin UI extension using native Polaris design system",
      "Bulk action trigger directly on the orders index list",
      "Dynamic packing slip compiler with thermal & A4 printer support",
      "Direct integration with custom fulfillment metadata"
    ],
    metrics: [
      { label: "Processing Time Cut", value: "60%" },
      { label: "Daily Orders Handled", value: "1,500+" },
      { label: "Fulfillment Errors", value: "-85%" }
    ],
    technologies: ["Admin UI Extensions", "Shopify Polaris", "React.js", "GraphQL Admin API", "Shopify CLI"]
  },
  {
    id: "delivery-customization",
    title: "Custom Delivery Rules Engine via Shopify Functions",
    category: "Shopify Plus & Checkout",
    categorySlug: "plus",
    thumbnail: "/assets/projects/checkout-functions.jpg",
    clientType: "Omnichannel Retail & Freight Merchant",
    summary: "Implemented Delivery Customization functions utilizing Shopify Functions API to conditionally hide and adjust shipping methods at checkout with zero performance lag.",
    challenge: "Merchant required conditional shipping rules: hide express shipping for oversized bulky items, restrict cash-on-delivery in select pin-codes, and dynamically apply priority freight tiers based on cart weight and delivery zones without degrading checkout speed.",
    solution: "Built and deployed custom Delivery Customization functions utilizing Shopify Functions API. Evaluated cart attributes and zip codes server-side on Shopify's global edge infrastructure without relying on client-side JS or checkout blocking scripts.",
    highlights: [
      "Server-side execution on Shopify's global edge infrastructure",
      "Zero client-side latency or checkout blocking script penalty",
      "Dynamic zip code and cart weight evaluation rules",
      "Custom checkout delivery option filtering based on product tags"
    ],
    metrics: [
      { label: "Freight Penalty Reduction", value: "28%" },
      { label: "Checkout Speed Impact", value: "0ms (Zero Lag)" },
      { label: "Rule Accuracy", value: "100%" }
    ],
    technologies: ["Shopify Functions API", "Delivery Customization", "Shopify Plus Checkout Extensibility", "Liquid"]
  },
  {
    id: "luxury-apparel-storefront",
    title: "Luxury Apparel E-Commerce Custom Storefront",
    category: "Custom Themes & Liquid",
    categorySlug: "themes",
    thumbnail: "/assets/projects/luxury-storefront.jpg",
    clientType: "Premium D2C Fashion & Apparel Brand",
    summary: "Architected and deployed a bespoke Shopify 2.0 custom theme with dynamic collection filtering, custom color swatch logic, and smooth interactive cart drawer.",
    challenge: "The client was constrained by a bloated off-the-shelf commercial theme with poor mobile layout fidelity, sluggish product filtering, and a clumsy cart experience causing high bounce rates.",
    solution: "Rebuilt the storefront from the ground up as a bespoke Shopify 2.0 theme. Developed modular Liquid sections, native collection facet filtering, custom color swatch selectors, and an Ajax flyout cart with free-shipping threshold gamification.",
    highlights: [
      "Modular Shopify 2.0 sections with rich theme customization controls",
      "Instant client-side swatch preview and dynamic variant updates",
      "Mobile-first responsive UX with sticky buy buttons and quick add",
      "Clean CSS architecture with zero bulky framework dependencies"
    ],
    metrics: [
      { label: "Mobile Bounce Rate", value: "-34%" },
      { label: "Cart Add-to-Checkout", value: "+22%" },
      { label: "Average Session Duration", value: "+45s" }
    ],
    technologies: ["Shopify 2.0", "Liquid", "Vanilla CSS", "JavaScript ES6", "Storefront Search & Discovery"]
  },
  {
    id: "storefront-speed-optimization",
    title: "E-Commerce Core Web Vitals & Speed Optimization",
    category: "Storefront Performance",
    categorySlug: "speed",
    thumbnail: "/assets/projects/speed-optimization.jpg",
    clientType: "Multi-Brand E-Commerce Retailer (60+ Stores Architecture)",
    summary: "Systematic performance overhaul of custom Shopify storefronts, reducing total blocking time and boosting Lighthouse performance scores from 40 to 85+.",
    challenge: "Accumulated third-party tracking scripts, unoptimized high-res banners, synchronous liquid loops, and app embeds degraded storefront Lighthouse mobile scores to 38-42, directly harming ad conversion rates.",
    solution: "Conducted exhaustive code and script audits: removed redundant DOM elements, deferred non-critical analytics tags, implemented native image srcset with responsive sizes, inlined critical CSS, and replaced heavyweight apps with native Liquid sections.",
    highlights: [
      "Comprehensive app script audit and deferred third-party tag firing",
      "Native Liquid section replacements for bloated third-party plugin apps",
      "Implementation of responsive image delivery and layout shift fixes",
      "Core Web Vitals optimization across mobile and desktop devices"
    ],
    metrics: [
      { label: "Lighthouse Mobile Score", value: "40 → 85+" },
      { label: "Largest Contentful Paint", value: "1.2s (Pass)" },
      { label: "Total Blocking Time", value: "< 100ms" }
    ],
    technologies: ["Lighthouse Auditing", "Core Web Vitals", "Liquid Optimization", "CSS Minification", "JavaScript Deferral"]
  },
  {
    id: "marketing-payment-automation",
    title: "Multi-Gateway Payment & Retention Automation Stack",
    category: "API Integrations & Automation",
    categorySlug: "apps",
    thumbnail: "/assets/projects/checkout-functions.jpg",
    clientType: "Growing D2C E-Commerce Brands (20+ Implementations)",
    summary: "Integrated Stripe, PayPal, Klaviyo, and Mailchimp across 20+ custom Shopify stores to automate checkout flows, abandoned cart recovery, and customer lifecycle marketing.",
    challenge: "Clients struggled with fragmented customer communications, lost abandoned carts, and complicated checkout flows that resulted in dropped purchases.",
    solution: "Engineered robust multi-payment checkout setups with express wallet buttons and connected real-time webhooks to Klaviyo and Mailchimp. Created dynamic cart triggers, personalized post-purchase follow-ups, and automated inventory back-in-stock alerts.",
    highlights: [
      "Stripe and PayPal Express one-click checkout implementation",
      "Custom event tracking for Viewed Product and Added to Cart in Klaviyo",
      "Automated webhook pipelines for multi-channel email retention flows",
      "Custom cart drawer upsell triggers based on current cart value"
    ],
    metrics: [
      { label: "Client Stores Integrated", value: "20+" },
      { label: "Abandoned Cart Recovery", value: "+18%" },
      { label: "Checkout Drop-off", value: "-14%" }
    ],
    technologies: ["Stripe API", "PayPal SDK", "Klaviyo API", "Mailchimp", "Shopify Webhooks", "Liquid"]
  }
];

export const workExperience = [
  {
    role: "Shopify Developer",
    company: "Parkhya Solutions Pvt. Ltd.",
    location: "Indore, MP, India",
    period: "Jul 2025 – Present",
    current: true,
    summary: "Focusing on custom Shopify apps, Shopify Plus checkout extensions, and Shopify Functions for high-growth e-commerce merchants.",
    bullets: [
      "Developed multiple custom Shopify apps using Shopify API and Remix, including checkout and admin UI extensions and Shopify Functions.",
      "Built a real-time inventory sync app using Shopify webhooks to share single stock across gender-specific variants, preventing overselling.",
      "Created a custom Admin UI extension for bulk order printing, cutting order processing time by 60% for high-volume merchants.",
      "Implemented Delivery Customization functions to conditionally hide shipping options at checkout, enabling flexible shipping strategies and lower costs.",
      "Built custom checkout, cart, and fulfillment logic using the Shopify Functions API with zero performance impact."
    ]
  },
  {
    role: "Web Developer",
    company: "ITGeeks Technologies Pvt. Ltd.",
    location: "Dewas, MP, India",
    period: "Jan 2024 – Jul 2025",
    current: false,
    summary: "Led frontend architecture, custom Shopify theme engineering, and performance optimization across e-commerce client engagements.",
    bullets: [
      "Architected and deployed 60+ custom Shopify stores with dynamic filtering, custom checkout, and third-party integrations.",
      "Integrated Stripe, PayPal, Klaviyo, and Mailchimp for 20+ e-commerce clients; improved Lighthouse scores from 40 to 85+.",
      "Collaborated with brand founders to translate design wireframes into responsive, high-converting Liquid themes.",
      "Engineered bespoke product customizers, slide-out carts, and responsive collection layouts."
    ]
  },
  {
    role: "Web Developer",
    company: "Oasis Infobyte",
    location: "Delhi, India",
    period: "Feb 2023 – Aug 2023",
    current: false,
    summary: "Built modern responsive frontend interfaces, RESTful API endpoints, and authenticated web applications.",
    bullets: [
      "Built responsive React.js and Next.js applications achieving 85+ PageSpeed scores.",
      "Developed RESTful APIs with Node.js and Express, implementing JWT authentication and role-based access control.",
      "Ensured cross-browser compatibility and accessible component design."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Government Thakur Ranmat Singh College",
    location: "Rewa, MP, India",
    period: "2020 – 2023",
    type: "Higher Education"
  },
  {
    degree: "Class XII (PCM)",
    institution: "Bright Star Public H.S. School",
    location: "Dewas, MP, India",
    period: "2019 – 2020",
    type: "Secondary School"
  }
];

export const certificationsData = [
  {
    title: "Software Engineer Virtual Program",
    issuer: "Walmart Global Tech",
    date: "Jun 2023",
    credentialId: "6YgBBActnoQpTYCHS"
  },
  {
    title: "Frontend Development Workshop",
    issuer: "Scholarhat",
    date: "Oct 2023",
    credentialId: "511Y251023"
  },
  {
    title: "Build E-Commerce Platform",
    issuer: "Scaler Academy",
    date: "May 2023",
    credentialId: "Verified Certificate"
  }
];

export const approachStages = [
  {
    step: "01",
    name: "Discovery & Requirements",
    subtitle: "Understanding Business & Technical Context",
    color: "#ff8c38",
    description: "Every successful Shopify build begins with deep technical discovery. We analyze your catalog structure, merchant operational bottlenecks, customer touchpoints, and commercial goals.",
    deliverables: [
      "Store architecture and catalog mapping",
      "Third-party app and API audit",
      "Technical requirement specification (TRS)",
      "Project milestone schedule"
    ]
  },
  {
    step: "02",
    name: "Store & Technical Audit",
    subtitle: "Performance & Code Quality Review",
    color: "#ff00ba",
    description: "For existing stores or redesigns, we conduct a rigorous forensic audit of theme code, app script bloat, checkout drop-offs, and Core Web Vitals to identify highest-impact opportunities.",
    deliverables: [
      "Lighthouse & Core Web Vitals speed report",
      "Redundant app script & tag audit",
      "Checkout flow friction analysis",
      "Theme code structure and Liquid review"
    ]
  },
  {
    step: "03",
    name: "Planning & Solution Design",
    subtitle: "Architecture & Data Flow Definition",
    color: "#eab308",
    description: "We map out whether requirements need native Shopify 2.0 sections, Shopify Functions, or an embedded Remix app with webhooks, ensuring lean architecture without unnecessary dependencies.",
    deliverables: [
      "Component & section wireframe mapping",
      "Shopify Functions vs App architecture plan",
      "Webhook and data synchronization flowcharts",
      "Design tokens and UI state specifications"
    ]
  },
  {
    step: "04",
    name: "Development & Integration",
    subtitle: "Clean Code & Bespoke Implementation",
    color: "#0a8fff",
    description: "Clean, production-quality implementation of custom Liquid templates, Remix endpoints, Shopify Functions, and third-party gateway integrations following official Shopify best practices.",
    deliverables: [
      "Custom Shopify 2.0 theme sections & blocks",
      "Embedded Remix app & GraphQL Admin API integration",
      "Shopify Functions (delivery & cart rules)",
      "Payment (Stripe, PayPal) & marketing (Klaviyo) hooks"
    ]
  },
  {
    step: "05",
    name: "Testing & Quality Assurance",
    subtitle: "Rigorous Edge-Case Validation",
    color: "#10b981",
    description: "We rigorously test user flows across real mobile devices, tablets, and desktop browsers, validating cart drawer state, coupon redemption, checkout edge-cases, and speed benchmarks.",
    deliverables: [
      "Cross-browser and responsive device testing",
      "Checkout, currency, and coupon validation",
      "Load time benchmarking (85+ target score)",
      "Webhook failure & retry simulation"
    ]
  },
  {
    step: "06",
    name: "Delivery & Handover",
    subtitle: "Smooth Launch & Merchant Enablement",
    color: "#ba9afd",
    description: "Launch execution with zero downtime, DNS cutover verification, and comprehensive handover documentation ensuring your team can manage store sections with total confidence.",
    deliverables: [
      "Live deployment and DNS verification",
      "Theme customize settings documentation",
      "Admin extension & app usage walkthrough",
      "Post-launch warranty and performance monitoring"
    ]
  }
];

export const tickerItems = [
  "Shopify Plus Specialist",
  "Remix App Development",
  "Shopify Functions API",
  "60+ Stores Shipped",
  "Real-Time Inventory Sync",
  "Checkout Extensibility",
  "85+ Lighthouse Performance",
  "Admin UI Extensions",
  "Custom Liquid Themes",
  "Stripe & Klaviyo Integration"
];
