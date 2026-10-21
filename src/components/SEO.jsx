import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routesMeta, getStructuredDataForRoute, SITE_URL } from '../seo/seoConfig';

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = pathname.replace(/\/$/, '') || '/';
    const meta = routesMeta[cleanPath] || routesMeta['/'];

    // Update document title
    if (meta?.title) {
      document.title = meta.title;
    }

    // Helper to update or create meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      let tag = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Update description and keywords
    if (meta?.description) {
      setMetaTag('name', 'description', meta.description);
      setMetaTag('property', 'og:description', meta.description);
      setMetaTag('name', 'twitter:description', meta.description);
    }

    if (meta?.keywords) {
      setMetaTag('name', 'keywords', meta.keywords);
    }

    // Update Open Graph and Twitter title
    if (meta?.title) {
      setMetaTag('property', 'og:title', meta.title);
      setMetaTag('name', 'twitter:title', meta.title);
    }

    // Update canonical link
    const canonicalUrl = meta?.canonical || `${SITE_URL}${cleanPath}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);
    setMetaTag('property', 'og:url', canonicalUrl);

    // Update OG Image
    const ogImg = meta?.ogImage || `${SITE_URL}/assets/MY-Profile.jpeg`;
    setMetaTag('property', 'og:image', ogImg);
    setMetaTag('name', 'twitter:image', ogImg);

    // Update JSON-LD structured data script
    const schemas = getStructuredDataForRoute(cleanPath);
    let scriptTag = document.getElementById('json-ld-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : { '@context': 'https://schema.org', '@graph': schemas });
  }, [pathname]);

  return null;
}
