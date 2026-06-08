import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "wouter";
import { PRACTICE_AREAS, LOCATIONS, SUB_DUI_PAGES, SUB_TRAFFIC_PAGES } from "@/lib/site-data";

export default function Sitemap() {
  const breadcrumbs = [{ name: "HTML Sitemap" }];

  return (
    <Layout>
      <SEO
        title="HTML Sitemap | Law Office of Robert J. Hickey"
        description="HTML Sitemap for the Law Office of Robert J. Hickey, APC. Easy access to all practice areas, locations, and blog pages on topdefense.com."
        canonicalUrl="https://www.topdefense.com/sitemap"
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              HTML{" "}
              <span className="text-gold italic relative inline-block">
                Sitemap
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Complete Page Directory for Topdefense.com
            </p>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-20 bg-dark-bg text-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Column 1: Core Pages */}
            <FadeIn>
              <div className="space-y-6">
                <h2 className="font-serif text-xl font-bold text-gold border-b border-dark-border pb-2">
                  Core Pages
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="hover:text-gold text-foreground transition-colors">
                      Homepage (Criminal Defense Fullerton)
                    </Link>
                  </li>
                  <li>
                    <Link href="/attorney" className="hover:text-gold text-foreground transition-colors">
                      Meet Robert Hickey (Attorney Bio)
                    </Link>
                  </li>
                  <li>
                    <Link href="/practice-areas" className="hover:text-gold text-foreground transition-colors">
                      Practice Areas Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" className="hover:text-gold text-foreground transition-colors">
                      Client Reviews & Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-gold text-foreground transition-colors">
                      Legal Blog Index
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-gold text-foreground transition-colors">
                      Contact & Free Consultation
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:text-gold text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer" className="hover:text-gold text-foreground transition-colors">
                      Legal Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Column 2: Criminal Defense Pages */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <h2 className="font-serif text-xl font-bold text-gold border-b border-dark-border pb-2">
                  Practice Area Pages
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/criminal-defense" className="hover:text-gold text-foreground font-semibold transition-colors">
                      Criminal Defense Overview
                    </Link>
                  </li>
                  {PRACTICE_AREAS.map((area) => (
                    <li key={area.slug} className="pl-3 border-l border-dark-border">
                      <Link href={`/criminal-defense/${area.slug}`} className="hover:text-gold text-foreground transition-colors">
                        {area.name} Defense
                      </Link>
                    </li>
                  ))}
                  {SUB_DUI_PAGES.map((sub) => (
                    <li key={sub.slug} className="pl-6 border-l border-dark-border">
                      <Link href={`/criminal-defense/${sub.slug}`} className="hover:text-gold text-muted-foreground transition-colors text-xs">
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                  {SUB_TRAFFIC_PAGES.map((sub) => (
                    <li key={sub.slug} className="pl-6 border-l border-dark-border">
                      <Link href={`/criminal-defense/${sub.slug}`} className="hover:text-gold text-muted-foreground transition-colors text-xs">
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Column 3: Locations & Blog */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="font-serif text-xl font-bold text-gold border-b border-dark-border pb-2">
                    Location Pages
                  </h2>
                  <ul className="space-y-3">
                    {LOCATIONS.map((loc) => (
                      <li key={loc.slug}>
                        <Link href={`/${loc.slug}`} className="hover:text-gold text-foreground transition-colors">
                          Criminal Defense {loc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-serif text-xl font-bold text-gold border-b border-dark-border pb-2">
                    Blog Posts
                  </h2>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog/what-to-do-if-arrested-in-california" className="hover:text-gold text-foreground transition-colors">
                        What to Do If Arrested in California
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/first-dui-california-penalties" className="hover:text-gold text-foreground transition-colors">
                        First DUI California Penalties
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/how-to-get-criminal-record-expunged-california" className="hover:text-gold text-foreground transition-colors">
                        How to Get Record Expunged
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
