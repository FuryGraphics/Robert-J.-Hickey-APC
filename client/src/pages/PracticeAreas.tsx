import Layout from "@/components/Layout";
import SEO, { getLegalServiceSchema } from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "wouter";
import { Shield, ArrowRight, CheckCircle } from "lucide-react";
import { PRACTICE_AREAS, SUB_DUI_PAGES, SUB_TRAFFIC_PAGES } from "@/lib/site-data";

export default function PracticeAreas() {
  const breadcrumbs = [{ name: "Practice Areas" }];

  return (
    <Layout>
      <SEO
        title="Practice Areas | Criminal Defense Law Office Fullerton"
        description="Explore the comprehensive criminal defense specialties offered by Robert J. Hickey, APC. We handle DUI, drug crimes, assault, domestic violence, expungements, and more."
        canonicalUrl="https://www.topdefense.com/practice-areas"
        schema={getLegalServiceSchema()}
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              Comprehensive{" "}
              <span className="text-gold italic relative inline-block">
                Practice Areas
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Aggressive Legal Defense For All Misdemeanors & Felonies In California
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Overview Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Criminal Defense Capabilities
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              When facing prosecution in Southern California, your choice of representation is the single most critical factor. Robert J. Hickey has successfully navigated the complexities of California criminal law for over 20 years. We build rigorous, evidence-backed defenses across a wide array of practice areas.
            </p>
          </div>

          {/* Primary Practice Area Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {PRACTICE_AREAS.map((area, index) => (
              <FadeIn key={area.slug} delay={index * 0.05}>
                <div className="bg-neutral-950 border border-dark-border p-8 hover:border-gold/50 transition-all duration-300 flex flex-col h-full group relative">
                  <span className="absolute top-6 right-8 font-serif text-3xl font-bold text-neutral-900 group-hover:text-gold/10 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-4 mb-6">
                    <Shield className="w-8 h-8 text-gold shrink-0" />
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {area.description}
                  </p>
                  <Link
                    href={`/criminal-defense/${area.slug}`}
                    className="text-gold font-semibold text-xs uppercase tracking-wider hover:underline flex items-center gap-1 mt-auto"
                  >
                    <span>View Defense Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Sub-Specialties Breakdown */}
          <div className="border-t border-dark-border pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* DUI Sub-specialties */}
              <FadeIn>
                <div className="bg-neutral-950 border border-dark-border p-8">
                  <h3 className="font-serif text-xl font-bold text-gold border-b border-dark-border pb-3 mb-6">
                    DUI Defense Sub-Specialties
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    DUI laws in California are strict and multi-faceted. We handle every tier of DUI prosecution:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SUB_DUI_PAGES.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/criminal-defense/${sub.slug}`}
                          className="flex items-center gap-2 text-sm text-foreground hover:text-gold transition-colors"
                        >
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span>{sub.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Traffic Violations Sub-specialties */}
              <FadeIn delay={0.1}>
                <div className="bg-neutral-950 border border-dark-border p-8">
                  <h3 className="font-serif text-xl font-bold text-gold border-b border-dark-border pb-3 mb-6">
                    Traffic Defense Sub-Specialties
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Protect your driving privileges, clean record, and auto insurance rates from serious citations:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SUB_TRAFFIC_PAGES.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/criminal-defense/${sub.slug}`}
                          className="flex items-center gap-2 text-sm text-foreground hover:text-gold transition-colors"
                        >
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span>{sub.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
