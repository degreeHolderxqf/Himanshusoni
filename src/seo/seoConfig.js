// SEO Configuration and Structured Data (JSON-LD) Definitions
// Single source of truth for metadata, canonical URLs, and Schema.org markup.

export const SITE_URL = 
  (typeof process !== 'undefined' && process.env?.VITE_SITE_URL) ||
  'https://himanshusoni-lilac.vercel.app';

export const routesMeta = {
  '/': {
    title: 'Freelance Shopify Developer & Shopify Plus Specialist | Himanshu Soni',
    description: 'Freelance Shopify Developer with 5+ years experience. 250+ Shopify stores delivered. Bespoke Shopify 2.0 themes, Shopify Plus checkout extensibility, custom Remix apps & speed optimization.',
    canonical: `${SITE_URL}/`,
    keywords: 'freelance shopify developer, shopify freelancer, hire shopify developer, shopify plus developer, custom shopify developer, shopify theme developer, custom shopify app development',
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/MY-Profile.jpeg`,
    h1: 'Freelance Shopify Developer & Shopify Plus Specialist'
  },
  '/website-portfolio': {
    title: 'Shopify Development Portfolio & Case Studies | Himanshu Soni',
    description: 'Explore genuine Shopify case studies: custom Liquid themes, Shopify Plus checkout functions, Remix inventory sync apps, and speed optimization for scaling D2C brands.',
    canonical: `${SITE_URL}/website-portfolio`,
    keywords: 'shopify portfolio, shopify developer case studies, custom shopify store examples, shopify plus projects, liquid theme examples',
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/projects/luggage-brand.jpg`,
    h1: 'Shopify Development Portfolio & Case Studies',
    breadcrumb: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Portfolio', url: `${SITE_URL}/website-portfolio` }
    ]
  },
  '/services': {
    title: 'Freelance Shopify Development Services & Capabilities | Himanshu Soni',
    description: 'Freelance Shopify services: bespoke 2.0 themes, Shopify Plus checkout extensibility, custom Remix apps, inventory sync, and Core Web Vitals speed optimization.',
    canonical: `${SITE_URL}/services`,
    keywords: 'shopify development services, custom shopify theme development, shopify plus customization, shopify app development, shopify speed optimization, shopify migration',
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/projects/admin-extension.jpg`,
    h1: 'Freelance Shopify Development Services & Technical Capabilities',
    breadcrumb: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` }
    ]
  },
  '/approach': {
    title: 'Shopify Development Process & Engineering Workflow | Himanshu Soni',
    description: 'Explore my 6-phase Shopify development workflow: technical discovery, forensic store audit, bespoke Liquid coding, device QA testing, and zero-downtime launch.',
    canonical: `${SITE_URL}/approach`,
    keywords: 'shopify development process, shopify store audit, shopify development workflow, zero downtime shopify migration',
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/projects/admin-extension.jpg`,
    h1: 'My Shopify Development Process & Engineering Workflow',
    breadcrumb: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Approach', url: `${SITE_URL}/approach` }
    ]
  },
  '/aboutus': {
    title: 'About Himanshu Soni | Freelance Shopify Developer & Plus Specialist',
    description: 'Meet Himanshu Soni, freelance Shopify developer with 5+ years experience and 250+ delivered stores. Specializing in Liquid themes, Remix apps, and speed optimization.',
    canonical: `${SITE_URL}/aboutus`,
    keywords: 'about himanshu soni, freelance shopify developer background, shopify expert india, hire independent shopify consultant',
    ogType: 'profile',
    ogImage: `${SITE_URL}/assets/MY-Profile.jpeg`,
    h1: 'About Himanshu Soni — Freelance Shopify Developer',
    breadcrumb: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'About', url: `${SITE_URL}/aboutus` }
    ]
  },
  '/planner': {
    title: 'Plan Your Shopify Project & Estimate Scope | Himanshu Soni',
    description: 'Use the interactive Shopify Project Planner to scope requirements, feature needs, budget, and timeline for custom Shopify 2.0 themes or Shopify Plus builds.',
    canonical: `${SITE_URL}/planner`,
    keywords: 'shopify project planner, shopify development cost calculator, estimate shopify project, hire shopify developer scope',
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/MY-Profile.jpeg`,
    h1: 'Plan Your Shopify Development Project & Estimate Scope',
    breadcrumb: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Project Planner', url: `${SITE_URL}/planner` }
    ]
  },
  '/contactus': {
    title: 'Hire a Freelance Shopify Developer | Contact Himanshu Soni',
    description: 'Contact freelance Shopify developer Himanshu Soni for custom Shopify 2.0 themes, Shopify Plus checkout extensibility, custom Remix apps, or speed optimization.',
    canonical: `${SITE_URL}/contactus`,
    keywords: 'contact freelance shopify developer, hire shopify developer, shopify plus consultant inquiry, book shopify developer call',
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/MY-Profile.jpeg`,
    h1: 'Hire a Freelance Shopify Developer | Contact Himanshu Soni',
    breadcrumb: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Contact', url: `${SITE_URL}/contactus` }
    ]
  }
};

// Generates Schema.org JSON-LD structured data for a given path
export function getStructuredDataForRoute(pathname) {
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  const schemas = [];

  // Base Person schema representing Himanshu Soni
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Himanshu Soni',
    jobTitle: 'Freelance Shopify Developer',
    description: 'Independent freelance Shopify developer specializing in custom Shopify 2.0 theme development, Shopify Plus checkout extensibility, custom Remix applications, and Core Web Vitals speed optimization.',
    url: SITE_URL,
    image: `${SITE_URL}/assets/MY-Profile.jpeg`,
    email: 'mailto:himanshusoni7899@gmail.com',
    telephone: '+919302615727',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'India'
    },
    knowsAbout: [
      'Shopify',
      'Shopify Plus',
      'Shopify Online Store 2.0',
      'Liquid Template Architecture',
      'Shopify Functions API',
      'Checkout Extensibility',
      'Remix App Development',
      'Shopify GraphQL Admin API',
      'Inventory Synchronization',
      'Core Web Vitals Speed Optimization',
      'E-commerce Conversion Rate Optimization'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Government Thakur Ranmat Singh College',
      address: 'Rewa, Madhya Pradesh, India'
    },
    sameAs: [
      'https://github.com',
      'https://linkedin.com/in'
    ]
  };

  // Base WebSite schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Himanshu Soni — Freelance Shopify Developer',
    url: SITE_URL,
    description: 'Independent Freelance Shopify Developer & Shopify Plus Specialist Portfolio.',
    publisher: {
      '@id': `${SITE_URL}/#person`
    },
    inLanguage: 'en-US'
  };

  if (cleanPath === '/') {
    schemas.push(personSchema, websiteSchema);
  } else {
    // Add BreadcrumbList if configured
    const meta = routesMeta[cleanPath];
    if (meta && meta.breadcrumb) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: meta.breadcrumb.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.url
        }))
      });
    }
  }

  // Page-specific Schemas
  if (cleanPath === '/services') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Shopify Development Services by Himanshu Soni',
      itemListElement: [
        {
          '@type': 'Service',
          position: 1,
          name: 'Custom Shopify Store & Theme Development',
          description: 'Bespoke Shopify 2.0 storefronts built from Figma designs or specifications using clean, modular Liquid architecture.',
          provider: { '@id': `${SITE_URL}/#person` }
        },
        {
          '@type': 'Service',
          position: 2,
          name: 'Shopify Plus & Checkout Extensibility',
          description: 'Custom checkout functions, delivery customization, and payment validation using Shopify Functions API.',
          provider: { '@id': `${SITE_URL}/#person` }
        },
        {
          '@type': 'Service',
          position: 3,
          name: 'Custom Shopify Applications & Integrations',
          description: 'Full-stack embedded Remix applications, GraphQL Admin API integrations, and webhook synchronization pipelines.',
          provider: { '@id': `${SITE_URL}/#person` }
        },
        {
          '@type': 'Service',
          position: 4,
          name: 'Storefront Performance & Speed Optimization (85+)',
          description: 'Systematic Core Web Vitals optimization, asset deferral, and script pruning for mobile Lighthouse 85+.',
          provider: { '@id': `${SITE_URL}/#person` }
        },
        {
          '@type': 'Service',
          position: 5,
          name: 'Store Migrations & Re-Platforming',
          description: 'Seamless migration from WordPress, WooCommerce, or legacy carts with 100% 301 SEO preservation.',
          provider: { '@id': `${SITE_URL}/#person` }
        }
      ]
    });
  } else if (cleanPath === '/website-portfolio') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Shopify Development Portfolio & Case Studies',
      url: `${SITE_URL}/website-portfolio`,
      description: 'Verified case studies of custom Shopify 2.0 themes, Shopify Plus checkout functions, Remix apps, and speed optimization shipped by Himanshu Soni.',
      creator: { '@id': `${SITE_URL}/#person` }
    });
  } else if (cleanPath === '/approach') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '6-Phase Shopify Development Process',
      description: 'A disciplined engineering workflow for developing high-converting, high-speed Shopify stores.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Discovery & Requirements', text: 'Analyze store architecture, catalog structure, and business objectives.' },
        { '@type': 'HowToStep', position: 2, name: 'Store & Technical Audit', text: 'Forensic audit of theme code, third-party apps, checkout drop-offs, and speed.' },
        { '@type': 'HowToStep', position: 3, name: 'Planning & Solution Design', text: 'Architect native Liquid sections, Shopify Functions, or Remix webhook pipelines.' },
        { '@type': 'HowToStep', position: 4, name: 'Development & Integration', text: 'Clean production-ready Liquid coding, Remix endpoints, and API integrations.' },
        { '@type': 'HowToStep', position: 5, name: 'Testing & Quality Assurance', text: 'Rigorous cross-device testing, cart flows, coupon edge cases, and speed validation.' },
        { '@type': 'HowToStep', position: 6, name: 'Delivery & Handover', text: 'Zero-downtime deployment, DNS verification, and merchant documentation.' }
      ]
    });
  } else if (cleanPath === '/aboutus') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Himanshu Soni — Freelance Shopify Developer',
      url: `${SITE_URL}/aboutus`,
      mainEntity: { '@id': `${SITE_URL}/#person` }
    });
  } else if (cleanPath === '/contactus') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Freelance Shopify Developer Himanshu Soni',
      url: `${SITE_URL}/contactus`,
      mainEntity: { '@id': `${SITE_URL}/#person` }
    });
  }

  return schemas;
}
