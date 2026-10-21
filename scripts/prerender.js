import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';
import { routesMeta, getStructuredDataForRoute, SITE_URL } from '../src/seo/seoConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');

async function prerender() {
  console.log('🚀 Starting Static Pre-Rendering (SSG) for SEO crawlability...');

  // Step 1: Build the SSR bundle
  console.log('📦 Building SSR bundle with Vite...');
  await build({
    root: rootDir,
    build: {
      ssr: path.resolve(rootDir, 'src/entry-server.jsx'),
      outDir: distSsrDir,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          format: 'es',
          entryFileNames: 'entry-server.js'
        }
      }
    }
  });

  // Step 2: Load the compiled SSR entry module
  const ssrEntryPath = path.resolve(distSsrDir, 'entry-server.js');
  const { render } = await import(pathToFileURL(ssrEntryPath).href);

  // Step 3: Read the base index.html template from dist
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build not found at ${templatePath}. Run vite build first.`);
  }
  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Step 4: Define all indexable public routes
  const routes = [
    '/',
    '/website-portfolio',
    '/services',
    '/approach',
    '/aboutus',
    '/planner',
    '/contactus'
  ];

  console.log(`🔍 Pre-rendering ${routes.length} routes into static HTML files...`);

  for (const route of routes) {
    const meta = routesMeta[route] || routesMeta['/'];
    const schemas = getStructuredDataForRoute(route);
    const schemaJson = JSON.stringify(
      schemas.length === 1 ? schemas[0] : { '@context': 'https://schema.org', '@graph': schemas },
      null,
      2
    );

    // Render React components to HTML string
    let appHtml = '';
    try {
      appHtml = render(route);
    } catch (err) {
      console.error(`❌ Error rendering route ${route}:`, err);
      throw err;
    }

    // Build the final HTML document with injected metadata
    let html = baseTemplate;

    // Inject App HTML inside root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Replace Title
    html = html.replace(
      /<title>.*?<\/title>/s,
      `<title>${meta.title}</title>`
    );

    // Replace or inject Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${meta.description}" />`
    );

    // Replace Canonical Link
    const canonicalUrl = meta.canonical || `${SITE_URL}${route === '/' ? '/' : route}`;
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${meta.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${meta.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
    if (meta.ogImage) {
      html = html.replace(
        /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:image" content="${meta.ogImage}" />`
      );
    }

    // Replace Twitter Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${meta.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${meta.description}" />`
    );
    if (meta.ogImage) {
      html = html.replace(
        /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i,
        `<meta name="twitter:image" content="${meta.ogImage}" />`
      );
    }

    // Inject JSON-LD Structured Data right before </head>
    const jsonLdScript = `\n    <script id="json-ld-structured-data" type="application/ld+json">\n${schemaJson}\n    </script>\n  </head>`;
    html = html.replace('</head>', jsonLdScript);

    // Determine target file path
    let targetFilePath;
    if (route === '/') {
      targetFilePath = path.resolve(distDir, 'index.html');
    } else {
      const routeDir = path.resolve(distDir, route.replace(/^\//, ''));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      targetFilePath = path.resolve(routeDir, 'index.html');
    }

    fs.writeFileSync(targetFilePath, html, 'utf-8');
    console.log(`  ✓ Prerendered ${route} -> ${path.relative(rootDir, targetFilePath)}`);
  }

  // Step 5: Clean up temporary dist-ssr directory
  try {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
  } catch {
    // Ignore cleanup errors
  }

  console.log('✅ Static pre-rendering successfully completed for all routes!');
}

prerender().catch((err) => {
  console.error('Fatal prerender failure:', err);
  process.exit(1);
});
