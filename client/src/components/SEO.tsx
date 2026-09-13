import { useEffect } from "react";
import { BUSINESS_SCHEMA } from "@/lib/business-schema";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({ title, description, canonicalUrl, schema }: SEOProps) {
  useEffect(() => {
    // Update Document Title
    // Titles that already carry the brand name are used as-is
    document.title = title.includes("Hickey") ? title : `${title} | Law Office of Robert J. Hickey`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update Open Graph Tags
    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:url": canonicalUrl,
      "og:type": "website",
      "og:site_name": "Law Office of Robert J. Hickey, APC",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Update Schema Markup (JSON-LD)
    // Keep the static business schema from index.html unless the page supplies its own
    const existingSchema = document.querySelectorAll(
      schema ? 'script[type="application/ld+json"]' : 'script[type="application/ld+json"][data-seo]'
    );
    existingSchema.forEach((el) => el.remove());

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((schemaObj) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "");
        script.text = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonicalUrl, schema]);

  return null;
}

// Generate LegalService Schema
export function getLegalServiceSchema() {
  return BUSINESS_SCHEMA;
}

// Generate Attorney Schema
export function getAttorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Robert J. Hickey",
    "memberOf": {
      "@type": "Organization",
      "name": "Law Office of Robert J. Hickey, APC"
    },
    "image": "https://www.topdefense.com/images/robert-hickey-placeholder.jpg",
    "telePhone": "(714) 525-4457",
    "email": "topdefender@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2201 E. Chapman Ave.",
      "addressLocality": "Fullerton",
      "addressRegion": "CA",
      "postalCode": "92831",
      "addressCountry": "US"
    }
  };
}

// Generate Breadcrumb Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
