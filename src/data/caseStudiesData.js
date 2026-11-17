// Editorial case-study content. Project-specific facts come from the supplied portfolio brief.
// Provided performance figures are retained as claims that need evidence before publication.
const verificationDate = '2026-11-18';

export const caseStudiesData = [
  {
    id: 'luggage-brand',
    slug: 'wntr',
    name: 'WNTR',
    category: 'Luggage & travel',
    title: 'WNTR — Modern Luggage & Travel Storefront',
    summary: 'A Shopify 2.0 travel storefront shaped around product scale, luggage comparison, and a smoother mobile checkout.',
    heroImage: '/assets/projects/luggage-brand.jpg',
    heroAlt: 'WNTR luggage storefront presented across desktop and mobile screens',
    gallery: [{ src: '/assets/projects/luggage-brand.jpg', alt: 'WNTR luggage storefront across device layouts' }],
    services: ['Shopify 2.0 storefront', 'Product discovery', 'Mobile checkout'],
    overview: 'WNTR brings modern luggage and travel products to an online audience. The storefront brief centers on helping travelers understand a bag’s scale and compare dimensions, then carry that confidence into a mobile purchase.',
    audience: 'Travelers comparing luggage for different trips and cabin requirements.',
    challenge: 'Luggage is difficult to assess from a product photo alone. The experience needed useful visual previews and dimension guidance so shoppers could compare size before choosing a bag.',
    strategy: 'Place product visualization and dimension comparison close to the buying decision, then keep the mobile journey focused through checkout.',
    features: [
      { title: 'Interactive baggage previews', description: 'Interactive 3D previews give shoppers another way to inspect the luggage before purchase.', benefit: 'Makes product exploration more visual and informative.', visualKind: 'preview' },
      { title: 'Dimension comparison guide', description: 'A comparison guide helps customers review luggage dimensions in one place.', benefit: 'Supports size and fit decisions while browsing.', visualKind: 'comparison' },
      { title: 'Mobile-first shopping', description: 'The storefront adapts its product browsing and purchase flow for smaller screens.', benefit: 'Keeps product details and actions accessible on mobile.', visualKind: 'mobile' },
      { title: 'Streamlined checkout', description: 'Checkout improvements reduce unnecessary friction at the final purchase step.', benefit: 'Creates a clearer path from product selection to order.', visualKind: 'checkout' }
    ],
    technicalSummary: 'The supplied implementation stack pairs Shopify 2.0 and Liquid with JavaScript ES6+ for interactive product experiences.',
    technologies: ['Shopify 2.0', 'Liquid', 'JavaScript ES6+'],
    outcome: 'The delivered experience combines visual luggage previews, dimension guidance, and a mobile-focused purchase path.',
    metricClaims: [
      { label: 'Conversion rate', value: '+38%', status: 'verification-needed' },
      { label: 'Mobile speed score', value: '92/100', status: 'verification-needed' }
    ],
    liveUrl: 'https://wntrtravel.com/',
    liveUrlVerified: true,
    liveUrlVerification: { status: 'verified', checkedOn: verificationDate, evidenceUrl: 'https://wntrtravel.com/', evidence: 'The official WNTR store presents luggage, trolleys, bags, and travel products.' },
    seoTitle: 'WNTR Shopify Case Study | Luggage & Travel Storefront',
    seoDescription: 'Explore the WNTR Shopify 2.0 case study: interactive luggage previews, dimension comparison, and mobile-first shopping.',
    visualTheme: 'sand'
  },
  {
    id: 'electronics-brand',
    slug: 'not-drones',
    name: 'Not Drones',
    category: 'Consumer electronics',
    title: 'Not Drones — High-Tech Electronics & Audio Storefront',
    summary: 'A product discovery experience organized around technical specifications, side-by-side comparison, and predictive search.',
    heroImage: '/assets/projects/electronics-brand.jpg',
    heroAlt: 'Not Drones product storefront displayed on desktop and mobile screens',
    gallery: [{ src: '/assets/projects/electronics-brand.jpg', alt: 'Not Drones product discovery layouts across devices' }],
    services: ['Shopify Plus', 'Product comparison', 'Predictive search'],
    overview: 'The supplied brief describes a consumer electronics and audio storefront. Its central experience is helping shoppers find products, understand specifications, and compare options before checkout.',
    audience: 'Shoppers comparing electronics and audio products by features and specifications.',
    challenge: 'Technical product details can be difficult to compare across multiple items. The storefront needed comparison, structured specifications, and a faster way to locate relevant products.',
    strategy: 'Make product attributes easier to scan and connect comparison with search, so discovery works across both browsing and direct queries.',
    features: [
      { title: 'Multi-product comparison', description: 'Comparison tables bring selected products and their specifications into a shared view.', benefit: 'Helps shoppers review differences before choosing.', visualKind: 'comparison' },
      { title: 'Dynamic specification sheets', description: 'Product specifications are presented in structured, scannable sections.', benefit: 'Makes technical information easier to evaluate.', visualKind: 'specs' },
      { title: 'Predictive search', description: 'Search suggestions help surface matching products as a shopper enters a query.', benefit: 'Shortens the path from intent to relevant product.', visualKind: 'search' },
      { title: 'Improved product discovery', description: 'Search and comparison work together as complementary routes through the catalog.', benefit: 'Gives shoppers more than one clear way to evaluate products.', visualKind: 'discovery' }
    ],
    technicalSummary: 'The supplied implementation stack lists Shopify Plus, Liquid sections, and the Predictive Search API.',
    technologies: ['Shopify Plus', 'Liquid Sections', 'Predictive Search API'],
    outcome: 'The planned storefront brings product comparison, technical specifications, and predictive search into one discovery flow.',
    metricClaims: [
      { label: 'Search conversion', value: '+32%', status: 'verification-needed' },
      { label: 'Product return rate', value: '-25%', status: 'verification-needed' }
    ],
    liveUrl: null,
    liveUrlVerified: false,
    liveUrlVerification: {
      status: 'manual-review-required',
      checkedOn: verificationDate,
      evidenceUrl: 'https://notdrones.com/collections/products',
      evidence: 'The official NOT Drones catalog is a drone and accessories store. That conflicts with the supplied audio-store description, so the link is withheld until the project identity is confirmed.'
    },
    seoTitle: 'Not Drones Shopify Case Study | Product Discovery & Comparison',
    seoDescription: 'See how the Not Drones storefront brief brings product comparisons, specification sheets, and predictive search together.',
    visualTheme: 'electric'
  },
  {
    id: 'wellness-retreats',
    slug: 'wellness-sutra',
    name: 'Wellness Sutra',
    category: 'Wellness & retreats',
    title: 'Wellness Sutra — Organic Wellness, Retreats & Spa Products',
    summary: 'A wellness storefront connecting product shopping with recurring subscriptions and retreat booking inquiries.',
    heroImage: '/assets/projects/wellness-retreats.jpg',
    heroAlt: 'Wellness Sutra storefront and editorial product layouts',
    gallery: [{ src: '/assets/projects/wellness-retreats.jpg', alt: 'Wellness Sutra storefront shown in an editorial layout' }],
    services: ['Shopify 2.0 storefront', 'Subscriptions', 'Retreat booking forms'],
    overview: 'Wellness Sutra brings organic wellness products and retreat experiences together. The project brief calls for an online experience that supports both product purchases and retreat inquiries, with recurring subscriptions for products that customers replenish.',
    audience: 'Wellness customers exploring products, repeat orders, and retreat experiences.',
    challenge: 'A product storefront and a retreat inquiry flow serve different needs. The experience needed to support both, while recurring orders remained straightforward to manage.',
    strategy: 'Organize product shopping, subscription choices, and retreat inquiries as distinct but connected paths within a mobile-friendly storefront.',
    features: [
      { title: 'Wellness product storefront', description: 'Product pages provide a direct route to explore and purchase the wellness range.', benefit: 'Keeps product discovery clear within the broader wellness experience.', visualKind: 'catalog' },
      { title: 'Recurring subscriptions', description: 'Subscription functionality supports repeat purchasing for eligible products.', benefit: 'Makes replenishment part of the shopping experience.', visualKind: 'subscription' },
      { title: 'Retreat inquiry forms', description: 'Booking forms give visitors a way to ask about retreat experiences.', benefit: 'Connects online discovery with a next step for retreat planning.', visualKind: 'booking' },
      { title: 'Mobile shopping experience', description: 'The storefront experience adapts to mobile browsing and product selection.', benefit: 'Keeps the main shopping actions usable on smaller screens.', visualKind: 'mobile' }
    ],
    technicalSummary: 'The supplied stack includes Shopify 2.0, Liquid, and Recharge Subscriptions for the recurring-order experience.',
    technologies: ['Shopify 2.0', 'Liquid', 'Recharge Subscriptions'],
    outcome: 'The project joins product shopping, repeat orders, and retreat inquiries in one wellness-focused destination.',
    metricClaims: [
      { label: 'Subscription revenue', value: '+54%', status: 'verification-needed' },
      { label: 'Mobile bounce rate', value: '-28%', status: 'verification-needed' }
    ],
    liveUrl: 'https://wellnessutra.com/',
    liveUrlVerified: true,
    liveUrlVerification: { status: 'verified', checkedOn: verificationDate, evidenceUrl: 'https://wellnessutra.com/', evidence: 'The Wellness Sutra site describes wellness products, Ayurveda, yoga, and retreat experiences under the matching brand.' },
    seoTitle: 'Wellness Sutra Shopify Case Study | Wellness & Retreat Storefront',
    seoDescription: 'Explore the Wellness Sutra storefront case study for wellness products, subscriptions, retreat inquiries, and mobile shopping.',
    visualTheme: 'sage'
  },
  {
    id: 'perfume-brand',
    slug: 'irazmo',
    name: 'Irazmo',
    category: 'Fragrance',
    title: 'Irazmo — Luxury Niche Perfumery & Fragrance Store',
    summary: 'A considered fragrance shopping journey with a scent quiz, discovery sets, and personalized bottle engraving.',
    heroImage: '/assets/projects/perfume-brand.jpg',
    heroAlt: 'Irazmo fragrance storefront and perfume product imagery',
    gallery: [{ src: '/assets/projects/perfume-brand.jpg', alt: 'Irazmo fragrance storefront presented with product imagery' }],
    services: ['Shopify 2.0', 'Fragrance discovery', 'Custom product options'],
    overview: 'Irazmo sells niche fragrances through a premium e-commerce experience. The project brief focuses on helping a customer discover a scent, try a smaller sample set, and personalize a bottle for gifting or personal use.',
    audience: 'Fragrance shoppers exploring scent profiles, discovery sets, and gifting options.',
    challenge: 'Scent is hard to evaluate online. The shopping journey needed to offer useful discovery steps and sampling choices before asking a customer to commit to a full bottle.',
    strategy: 'Pair guided scent discovery with lower-commitment sample sets, then carry personalization into the product and cart experience.',
    features: [
      { title: 'Four-step fragrance quiz', description: 'A guided quiz narrows fragrance discovery through a short sequence of choices.', benefit: 'Gives shoppers a more directed way to explore scents.', visualKind: 'quiz' },
      { title: 'Discovery sample sets', description: 'Sample sets create an entry point for customers who want to try fragrances first.', benefit: 'Supports trial before a full-size purchase.', visualKind: 'samples' },
      { title: 'Bottle engraving', description: 'Custom engraving adds a personal detail to selected bottles.', benefit: 'Makes the product more personal for gifting and self-expression.', visualKind: 'personalize' },
      { title: 'Luxury shopping flow', description: 'Editorial product presentation supports a calm, considered fragrance journey.', benefit: 'Keeps discovery and purchase aligned with the brand category.', visualKind: 'editorial' }
    ],
    technicalSummary: 'The supplied stack lists Shopify 2.0, Liquid architecture, and custom scent-quiz logic.',
    technologies: ['Shopify 2.0', 'Liquid Architecture', 'Custom Scent Quiz Logic'],
    outcome: 'The experience links guided scent discovery, sampling, and bottle personalization in one fragrance journey.',
    metricClaims: [
      { label: 'Sample-to-full-bottle conversion', value: '42%', status: 'verification-needed' },
      { label: 'Average order value', value: '+30%', status: 'verification-needed' }
    ],
    liveUrl: 'https://irazmo.com/',
    liveUrlVerified: true,
    liveUrlVerification: { status: 'verified', checkedOn: verificationDate, evidenceUrl: 'https://irazmo.com/', evidence: 'The live Irazmo storefront sells fragrances and presents guided scent discovery and sample products; the reference case study also links to this brand site.' },
    seoTitle: 'Irazmo Shopify Case Study | Fragrance Discovery & Store Design',
    seoDescription: 'Explore the Irazmo fragrance case study: a scent quiz, discovery sample sets, bottle engraving, and Shopify development.',
    visualTheme: 'noir'
  },
  {
    id: 'apparel-brand',
    slug: 'twelvth-edit',
    name: 'Twelvth Edit',
    category: 'Apparel',
    title: 'Twelvth Edit — Minimalist Shopify 2.0 Apparel Storefront',
    summary: 'An editorial apparel storefront with shoppable lookbooks, a progress-led cart drawer, and responsive mobile design.',
    heroImage: '/assets/projects/apparel-brand.jpg',
    heroAlt: 'Twelvth Edit apparel storefront shown across mobile product screens',
    gallery: [{ src: '/assets/projects/apparel-brand.jpg', alt: 'Twelvth Edit apparel product experience on mobile screens' }],
    services: ['Bespoke Liquid', 'Shoppable lookbooks', 'Cart drawer'],
    overview: 'Twelvth Edit is an apparel brand with an editorial point of view. The project brief connects its lookbook content to product discovery and carries a progress incentive into the cart experience.',
    audience: 'Apparel shoppers discovering collections through editorial looks and product pages.',
    challenge: 'An editorial browsing experience still needs to make products easy to shop. The brief also calls for a cart that communicates progress incentives without interrupting browsing.',
    strategy: 'Make editorial content actionable with shoppable lookbooks, then keep cart feedback available in a lightweight slide-out interaction.',
    features: [
      { title: 'Shoppable lookbooks', description: 'Lookbook content links visual inspiration with the products featured in each composition.', benefit: 'Connects editorial browsing to product discovery.', visualKind: 'lookbook' },
      { title: 'Custom cart drawer', description: 'A slide-out cart lets shoppers review selections without leaving the page.', benefit: 'Keeps cart review close to the current browsing context.', visualKind: 'cart' },
      { title: 'Progress-based incentives', description: 'The cart communicates progress toward an incentive as items are added.', benefit: 'Makes the relationship between cart value and offer easier to understand.', visualKind: 'progress' },
      { title: 'Responsive editorial design', description: 'The storefront adapts its layouts across desktop and mobile screens.', benefit: 'Preserves the visual shopping experience on smaller devices.', visualKind: 'mobile' }
    ],
    technicalSummary: 'The supplied implementation stack includes bespoke Liquid, the AJAX Cart API, CSS Grid, and Flexbox.',
    technologies: ['Bespoke Liquid', 'AJAX Cart API', 'CSS Grid & Flexbox'],
    outcome: 'Editorial browsing, shoppable content, and cart incentives meet in a responsive storefront experience.',
    metricClaims: [
      { label: 'Mobile conversion', value: '+34%', status: 'verification-needed' },
      { label: 'Lighthouse performance', value: '94/100', status: 'verification-needed' }
    ],
    liveUrl: 'https://twelvthedit.com/',
    liveUrlVerified: true,
    liveUrlVerification: { status: 'verified', checkedOn: verificationDate, evidenceUrl: 'https://twelvthedit.com/', evidence: 'The official Twelvth Edit site sells apparel and includes lookbooks, editorial content, and a Shopify storefront.' },
    seoTitle: 'Twelvth Edit Shopify Case Study | Editorial Apparel Storefront',
    seoDescription: 'See the Twelvth Edit Shopify case study for shoppable lookbooks, a custom cart drawer, and responsive apparel shopping.',
    visualTheme: 'clay'
  },
  {
    id: 'fashion-brand',
    slug: 'adam-leaves',
    name: 'Adam Leaves',
    category: 'Sustainable fashion',
    title: 'Adam Leaves — Contemporary Sustainable Tailoring & Fashion',
    summary: 'A bespoke fashion storefront bringing material information, made-to-measure sizing, and product recommendations into the shopping journey.',
    heroImage: '/assets/projects/fashion-brand.jpg',
    heroAlt: 'Adam Leaves sustainable fashion storefront and product layouts',
    gallery: [{ src: '/assets/projects/fashion-brand.jpg', alt: 'Adam Leaves clothing storefront and editorial product layouts' }],
    services: ['Shopify 2.0', 'Tailoring configurator', 'Product recommendations'],
    overview: 'Adam Leaves creates contemporary fashion with a focus on natural materials. The project brief combines product storytelling with made-to-measure sizing and recommendations to help customers choose garments with more context.',
    audience: 'Fashion shoppers looking for natural materials, considered design, and tailored fit.',
    challenge: 'Customers need to understand material choices and fit while browsing apparel. The experience needed to make those details part of product evaluation.',
    strategy: 'Bring material information and sizing guidance alongside product selection, with recommendations available as a supporting discovery path.',
    features: [
      { title: 'Material information', description: 'Product storytelling surfaces information about the materials used in each garment.', benefit: 'Helps customers assess a garment with more context.', visualKind: 'materials' },
      { title: 'Made-to-measure sizing', description: 'Sizing interactions support customers choosing a tailored fit.', benefit: 'Makes fit selection a more explicit part of the purchase journey.', visualKind: 'sizing' },
      { title: 'Smart recommendations', description: 'Related product suggestions support continued discovery across the catalog.', benefit: 'Connects shoppers with complementary styles and options.', visualKind: 'recommendations' },
      { title: 'Custom fashion storefront', description: 'A bespoke Shopify experience presents apparel and fit details in one flow.', benefit: 'Keeps product storytelling and shopping actions together.', visualKind: 'editorial' }
    ],
    technicalSummary: 'The supplied implementation stack includes Shopify 2.0, Liquid, and a tailoring configurator.',
    technologies: ['Shopify 2.0', 'Liquid', 'Tailoring Configurator'],
    outcome: 'Material context, tailored sizing, and product recommendations become part of the same apparel shopping experience.',
    metricClaims: [
      { label: 'Return rate', value: '-22%', status: 'verification-needed' },
      { label: 'Checkout completion', value: '+29%', status: 'verification-needed' }
    ],
    liveUrl: 'https://adamleaves.com/',
    liveUrlVerified: true,
    liveUrlVerification: { status: 'verified', checkedOn: verificationDate, evidenceUrl: 'https://adamleaves.com/collections/women', evidence: 'The official Adam Leaves store sells sustainable clothing and describes natural fabrics and tailored garment details.' },
    seoTitle: 'Adam Leaves Shopify Case Study | Sustainable Fashion & Tailoring',
    seoDescription: 'Explore the Adam Leaves Shopify case study for material information, made-to-measure sizing, and fashion product discovery.',
    visualTheme: 'botanical'
  },
  {
    id: 'dope-boyz-muzic',
    slug: 'dope-boyz-muzic',
    name: 'Dope Boyz Muzic',
    category: 'Music & digital products',
    title: 'Dope Boyz Muzic — Custom Filter & Search System',
    summary: 'Custom homepage filtering, collection-style sorting, infinite scrolling, and search for a music-focused catalog.',
    heroImage: '/assets/projects/dopeboyz.jpg',
    heroAlt: 'Dope Boyz Muzic digital music storefront displayed on a laptop',
    gallery: [{ src: '/assets/projects/dopeboyz.jpg', alt: 'Dope Boyz Muzic storefront interface on a laptop' }],
    services: ['Custom filtering', 'Infinite scrolling', 'Product search'],
    overview: 'Dope Boyz Muzic offers digital music products. The project brief brings filtering and sorting to the homepage, aligning discovery there with collection browsing and adding search for a catalog of beats and related products.',
    audience: 'Artists and music buyers browsing beats and related digital products.',
    challenge: 'Product discovery should work consistently from the homepage and collection pages. The experience also needed to support longer catalog browsing without making search harder to reach.',
    strategy: 'Share filtering and sorting behavior across entry points, then support continuous browsing and direct search within the same catalog experience.',
    features: [
      { title: 'Homepage filters', description: 'Custom filters make product selection available directly on the homepage.', benefit: 'Lets shoppers narrow the catalog without first changing page context.', visualKind: 'filters' },
      { title: 'Collection-style sorting', description: 'Homepage sorting mirrors the behavior shoppers expect while browsing collections.', benefit: 'Creates a more consistent discovery pattern across pages.', visualKind: 'sorting' },
      { title: 'Infinite scrolling', description: 'Additional products load as shoppers continue through the catalog.', benefit: 'Supports longer browsing sessions with fewer manual page changes.', visualKind: 'scroll' },
      { title: 'Advanced product search', description: 'Search gives customers a direct route to relevant products.', benefit: 'Makes the catalog easier to navigate by intent.', visualKind: 'search' }
    ],
    technicalSummary: 'The supplied stack lists Shopify 2.0, Liquid, and JavaScript ES6+ for the custom discovery interactions.',
    technologies: ['Shopify 2.0', 'Liquid', 'JavaScript ES6+'],
    outcome: 'Filtering, sorting, scrolling, and search give the music catalog multiple connected discovery paths.',
    metricClaims: [
      { label: 'Product discovery', value: '+35%', status: 'verification-needed' },
      { label: 'Search conversion', value: '+28%', status: 'verification-needed' }
    ],
    liveUrl: 'https://dopeboyzmuzic.com/',
    liveUrlVerified: true,
    liveUrlVerification: { status: 'verified', checkedOn: verificationDate, evidenceUrl: 'https://dopeboyzmuzic.com/', evidence: 'The official DopeBoyzMuzic site offers beats, licenses, and music-related services under the matching brand.' },
    seoTitle: 'Dope Boyz Muzic Shopify Case Study | Custom Filters & Search',
    seoDescription: 'See the Dope Boyz Muzic case study for homepage filters, collection-style sorting, infinite scrolling, and product search.',
    visualTheme: 'midnight'
  },
  {
    id: 'wood-floor-store',
    slug: 'wood-floor-store',
    name: 'Wood Floor Store',
    category: 'Flooring & home improvement',
    title: 'Wood Floor Store — Custom Pricing Calculator',
    summary: 'An interactive flooring calculator translates project measurements into product quantities and pricing details.',
    heroImage: '/assets/projects/woodfloor.jpg',
    heroAlt: 'Wood Floor Store flooring storefront and product selection layout',
    gallery: [{ src: '/assets/projects/woodfloor.jpg', alt: 'Wood Floor Store flooring storefront displayed on desktop' }],
    services: ['Custom Liquid', 'Pricing calculator', 'Responsive UI'],
    overview: 'Wood Floor Store sells flooring for home projects. The supplied brief describes a custom calculator, designed from Figma, that helps customers work through flooring quantities, product specifications, and pricing.',
    audience: 'Homeowners and trade customers planning a flooring purchase.',
    challenge: 'Flooring orders depend on project measurements and product coverage. The experience needed a clear way to translate those inputs into useful quantity and pricing information.',
    strategy: 'Keep the calculator close to product selection, make the inputs understandable, and present the computed details in a responsive interface.',
    features: [
      { title: 'Interactive pricing calculator', description: 'Customers enter project measurements to calculate flooring quantities and pricing.', benefit: 'Turns project dimensions into a more actionable product estimate.', visualKind: 'calculator' },
      { title: 'Specification calculations', description: 'The calculator presents product coverage and specification details alongside quantity.', benefit: 'Helps customers review what the calculation represents.', visualKind: 'specs' },
      { title: 'Figma-led interface', description: 'The custom interface follows the supplied Figma design direction.', benefit: 'Keeps the tool visually aligned with the storefront.', visualKind: 'design' },
      { title: 'Responsive experience', description: 'The calculator layout adapts for mobile and desktop use.', benefit: 'Makes project planning usable across screen sizes.', visualKind: 'mobile' }
    ],
    technicalSummary: 'The supplied implementation stack includes custom Liquid, JavaScript calculations, and a Figma-based UI implementation.',
    technologies: ['Custom Liquid', 'JavaScript Calculator', 'Figma Implementation'],
    outcome: 'The calculator connects project measurements with flooring quantity and price information in the shopping flow.',
    metricClaims: [
      { label: 'Quote preparation time', value: '-40%', status: 'verification-needed' },
      { label: 'Visitor usage', value: '65%', status: 'verification-needed' }
    ],
    liveUrl: 'https://woodfloorstore.uk/',
    liveUrlVerified: true,
    liveUrlVerification: { status: 'verified', checkedOn: verificationDate, evidenceUrl: 'https://woodfloorstore.uk/', evidence: 'The official Wood Floor Store site sells wood, laminate, engineered, and vinyl flooring.' },
    seoTitle: 'Wood Floor Store Shopify Case Study | Flooring Pricing Calculator',
    seoDescription: 'Explore the Wood Floor Store case study for a responsive flooring calculator built with custom Liquid and JavaScript.',
    visualTheme: 'oak'
  },
  {
    id: 'alpha-tech-apparel',
    slug: 'alpha-tech-apparel',
    name: 'Alpha Tech Apparel',
    category: 'Apparel & inventory systems',
    title: 'Alpha Tech Apparel — Inventory Synchronization App',
    summary: 'A custom Shopify application keeps gender-specific variants aligned with a shared physical inventory pool.',
    heroImage: '/assets/projects/alphatech.jpg',
    heroAlt: 'Alpha Tech apparel storefront shown on a desktop display',
    gallery: [
      { src: '/assets/projects/alphatech.jpg', alt: 'Alpha Tech apparel storefront on desktop' },
      { src: '/assets/projects/inventory-sync.jpg', alt: 'Inventory synchronization dashboard interface' }
    ],
    services: ['Shopify Admin API', 'Inventory synchronization', 'Webhooks'],
    overview: 'Alpha Tech Apparel needs men’s and women’s product variants to reflect the same physical stock pool. The project brief describes a custom application that synchronizes inventory across those related variants.',
    audience: 'Store operators managing apparel variants that draw from shared stock.',
    challenge: 'When multiple product variants represent the same physical stock, inventory needs to stay consistent across each listing as orders and stock changes occur.',
    strategy: 'Use Shopify inventory events to recalculate the shared quantity and update the connected variants through an event-driven application flow.',
    features: [
      { title: 'Shared inventory pool', description: 'Related gender-specific variants draw from a common stock quantity.', benefit: 'Keeps the catalog aligned with the underlying physical stock.', visualKind: 'sync' },
      { title: 'Variant synchronization', description: 'Inventory changes are reflected across the connected variants.', benefit: 'Reduces the risk of a single variant showing stale availability.', visualKind: 'variants' },
      { title: 'Shopify API integration', description: 'The application connects inventory logic with Shopify’s admin data.', benefit: 'Keeps stock management within the merchant’s Shopify workflow.', visualKind: 'integration' },
      { title: 'Overselling prevention', description: 'Shared quantities are recalculated as inventory events occur.', benefit: 'Helps keep sellable quantities aligned with stock.', visualKind: 'inventory' }
    ],
    technicalSummary: 'The supplied stack includes Shopify Admin API, webhooks, and Node.js for the inventory synchronization application.',
    technologies: ['Shopify Admin API', 'Webhooks', 'Node.js'],
    outcome: 'The application connects related product variants to one shared inventory view and synchronization flow.',
    metricClaims: [
      { label: 'Inventory discrepancies', value: '-95%', status: 'verification-needed' },
      { label: 'Overselling incidents', value: '0%', status: 'verification-needed' }
    ],
    liveUrl: null,
    liveUrlVerified: false,
    liveUrlVerification: { status: 'manual-review-required', checkedOn: verificationDate, evidenceUrl: null, evidence: 'No official Alpha Tech Apparel website could be confirmed from an exact-name search. The existing alphatechapparel.com value is not verified.' },
    seoTitle: 'Alpha Tech Apparel Case Study | Shopify Inventory Sync App',
    seoDescription: 'Explore an apparel inventory synchronization case study using Shopify Admin API, webhooks, and Node.js.',
    visualTheme: 'steel'
  },
  {
    id: 'speedgear',
    slug: 'speedgear',
    name: 'Speedgear',
    category: 'Motorsport & apparel',
    title: 'Speedgear — WordPress to Shopify Migration',
    summary: 'A commerce migration connecting a Shopify storefront with inventory synchronization for retail and wholesale operations.',
    heroImage: '/assets/projects/speedgear.jpg',
    heroAlt: 'Speedgear motorsport storefront presented on a laptop',
    gallery: [{ src: '/assets/projects/speedgear.jpg', alt: 'Speedgear motorsport and apparel storefront on desktop' }],
    services: ['Platform migration', 'Inventory synchronization', 'Collection filtering'],
    overview: 'Speedgear serves motorsport shoppers with apparel and related products. The supplied project brief covers a move from WordPress to Shopify, shared inventory between retail and wholesale stores, and category-specific product discovery.',
    audience: 'Motorsport customers browsing product categories and store operators coordinating two sales channels.',
    challenge: 'A migration needs to carry the catalog and its navigation into a new commerce platform, while retail and wholesale inventory remain connected.',
    strategy: 'Rebuild the storefront on Shopify, use Liquid and metafields for category-specific filtering, and connect the two inventory views through Shopify APIs.',
    features: [
      { title: 'WordPress to Shopify migration', description: 'The storefront moves to Shopify while preserving a structured product catalog.', benefit: 'Creates a new platform foundation for the commerce experience.', visualKind: 'migration' },
      { title: 'Retail and wholesale stock sync', description: 'Inventory synchronization connects the retail and wholesale storefronts.', benefit: 'Helps keep stock information aligned across the two channels.', visualKind: 'sync' },
      { title: 'Category-specific filters', description: 'Liquid and metafields support filtering tailored to product categories.', benefit: 'Lets customers narrow a motorsport catalog by relevant attributes.', visualKind: 'filters' },
      { title: 'Shopify 2.0 storefront', description: 'The migrated storefront uses Shopify 2.0 and Liquid architecture.', benefit: 'Provides a modular foundation for the new storefront.', visualKind: 'storefront' }
    ],
    technicalSummary: 'The supplied implementation details include a Shopify 2.0 and Liquid storefront, plus Shopify API synchronization between retail and wholesale inventory.',
    technologies: ['Platform Migration', 'Shopify 2.0', 'Liquid', 'Shopify API'],
    outcome: 'The project brings the catalog onto Shopify and connects inventory and category discovery across the store experience.',
    metricClaims: [
      { label: 'Page load time', value: '-45%', status: 'verification-needed' },
      { label: 'Inventory accuracy', value: '98%', status: 'verification-needed' }
    ],
    liveUrl: 'https://speedgear.com/',
    liveUrlVerified: true,
    liveUrlVerification: { status: 'verified', checkedOn: verificationDate, evidenceUrl: 'https://speedgear.com/pages/about-us', evidence: 'The official Speedgear site identifies itself as a motorsport merchandise and racing apparel retailer.' },
    seoTitle: 'Speedgear Shopify Case Study | WordPress Migration & Inventory Sync',
    seoDescription: 'See the Speedgear migration case study for Shopify 2.0, retail and wholesale inventory synchronization, and filtering.',
    visualTheme: 'racing'
  },
  {
    id: 'aqua-tech-pool-supply',
    slug: 'aqua-tech-pool-supply',
    name: 'Aqua Tech Pool Supply',
    category: 'Pool & spa equipment',
    title: 'Aqua Tech Pool Supply — Storefront Redesign & Custom Filtering',
    summary: 'A pool equipment storefront brief focused on category navigation, commercial specifications, filtering, and B2B ordering.',
    heroImage: '/assets/projects/checkout-functions.jpg',
    heroAlt: 'Shopify commerce administration interface supplied for the Aqua Tech Pool Supply project',
    gallery: [{ src: '/assets/projects/checkout-functions.jpg', alt: 'Shopify commerce administration interface supplied with the project brief' }],
    services: ['Shopify 2.0', 'Custom filtering', 'B2B ordering'],
    overview: 'The supplied brief describes a pool and spa equipment storefront redesign. It combines improved category navigation with commercial equipment specifications and a streamlined B2B ordering experience.',
    audience: 'Pool equipment customers and commercial buyers comparing technical product requirements.',
    challenge: 'Pool equipment selection depends on finding the right category and understanding product specifications. The storefront brief calls for navigation and filtering that support those decisions.',
    strategy: 'Structure equipment categories around product discovery, make commercial specifications easier to review, and support the B2B order path.',
    features: [
      { title: 'Category navigation', description: 'Navigation helps customers move through pool and spa equipment categories.', benefit: 'Creates clearer routes into a broad equipment catalog.', visualKind: 'navigation' },
      { title: 'Commercial specifications', description: 'Product pages present commercial equipment details for evaluation.', benefit: 'Helps buyers review technical requirements before ordering.', visualKind: 'specs' },
      { title: 'Custom filtering', description: 'Filters narrow equipment choices using relevant product attributes.', benefit: 'Makes a technical catalog easier to browse.', visualKind: 'filters' },
      { title: 'B2B ordering experience', description: 'The ordering flow supports commercial purchasing needs.', benefit: 'Keeps business purchasing tasks in view through the storefront.', visualKind: 'ordering' }
    ],
    technicalSummary: 'The supplied stack lists Shopify 2.0, Liquid architecture, and Storefront API.',
    technologies: ['Shopify 2.0', 'Liquid Architecture', 'Storefront API'],
    outcome: 'The proposed storefront experience connects equipment navigation, specification review, and B2B ordering.',
    metricClaims: [
      { label: 'Mobile conversions', value: '+32%', status: 'verification-needed' },
      { label: 'Category load time', value: '-50%', status: 'verification-needed' }
    ],
    liveUrl: null,
    liveUrlVerified: false,
    liveUrlVerification: {
      status: 'manual-review-required',
      checkedOn: verificationDate,
      evidenceUrl: 'https://appaetechpoolsupply.com/',
      evidence: 'The candidate is AppaeTech Pool Supply, a pool equipment retailer, but the brand name does not match Aqua Tech. The domain is withheld until the project identity is confirmed.'
    },
    seoTitle: 'Aqua Tech Pool Supply Case Study | Shopify Storefront Redesign',
    seoDescription: 'Explore the Aqua Tech Pool Supply storefront brief for equipment navigation, specifications, custom filters, and B2B ordering.',
    visualTheme: 'water'
  }
];

export const caseStudiesById = Object.fromEntries(caseStudiesData.map((project) => [project.id, project]));
export const caseStudiesBySlug = Object.fromEntries(caseStudiesData.map((project) => [project.slug, project]));

export function getCaseStudyById(id) {
  return caseStudiesById[id] || null;
}

export function getCaseStudyBySlug(slug) {
  return caseStudiesBySlug[slug] || null;
}

export function getCaseStudyPath(project) {
  return `/website-portfolio/${project.slug}`;
}
