import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "wouter";
import { MapPin, Scale, Shield, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCATIONS, PHONE, ADDRESS, GOOGLE_MAPS_EMBED, PRACTICE_AREAS } from "@/lib/site-data";

interface LocationPageProps {
  slug: string;
}

export default function LocationPage({ slug }: LocationPageProps) {
  const locInfo = LOCATIONS.find(l => l.slug === slug);

  if (!locInfo) {
    return null;
  }

  const isFullerton = slug === "fullerton";
  const isCountyHub = slug === "orange-county";

  // Customize SEO Title and details based on city/county
  const title = `Criminal Defense Attorney ${locInfo.name} CA | Law Office of Robert J. Hickey`;
  const description = `Robert J. Hickey is ${locInfo.name}'s trusted criminal defense attorney. Serving clients in ${locInfo.county} with aggressive representation. Free consultations.`;
  const headline = `Criminal Defense Attorney in ${locInfo.name}, California`;

  const breadcrumbs = [{ name: `${locInfo.name} Office` }];

  // Local courthouse info to boost local SEO
  const courthouseInfo = isFullerton
    ? {
        name: "North Justice Center",
        address: "1275 N. Berkeley Ave., Fullerton, CA 92832",
        desc: "The North Justice Center handles misdemeanor and felony criminal matters arising in northern Orange County, including Fullerton, Anaheim, and Brea.",
      }
    : {
        name: "Orange County Central Justice Center",
        address: "700 Civic Center Drive West, Santa Ana, CA 92701",
        desc: "The Central Justice Center handles criminal trials, arraignments, and hearings for matters across Orange County.",
      };

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        canonicalUrl={`https://www.topdefense.com/${slug}`}
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              Criminal Defense Attorney in{" "}
              <span className="text-gold italic relative inline-block">
                {locInfo.name}, CA
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Aggressive, Locally-Rooted Representation in {locInfo.county}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left Column: Local Copy */}
            <div className="lg:col-span-7 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Defending the Accused in {locInfo.name} and Surrounding Communities
              </h2>
              <p>
                If you have been arrested or are facing criminal charges in {locInfo.name}, California, navigating the local justice system can be intimidating. Police officers and local prosecutors in {locInfo.county} are notoriously aggressive. To protect your future, you need a defense attorney who knows the local courts, judges, and procedures.
              </p>
              <p>
                Robert J. Hickey, APC has successfully defended clients in the {locInfo.name} area for over 20 years. We handle all tiers of criminal defense, from first-offense DUIs and traffic citations to serious felony violent crimes and drug charges.
              </p>
              <p>
                Our defense strategy focuses on immediate intervention. By analyzing police conduct, questioning the validity of traffic stops, and challenging the credibility of evidence early, we seek to prevent formal charges from being filed, or secure dismissals in court.
              </p>

              {/* Local Courthouse SEO booster */}
              <div className="bg-neutral-950 border border-dark-border p-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-gold shrink-0" />
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Local Courthouse Information
                  </h3>
                </div>
                <p className="text-sm font-semibold text-gold mb-1">{courthouseInfo.name}</p>
                <p className="text-xs text-muted-foreground mb-3">{courthouseInfo.address}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{courthouseInfo.desc}</p>
              </div>
            </div>

            {/* Right Column: Local Maps & Practice Areas */}
            <div className="lg:col-span-5 space-y-8">
              {/* Address Box */}
              <div className="bg-neutral-950 border border-dark-border p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold"></div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-6 uppercase tracking-wider">
                  Office Contact Details
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Office Location</span>
                      <span className="text-muted-foreground">{ADDRESS}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Direct Phone</span>
                      <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-muted-foreground hover:text-gold transition-colors font-semibold">
                        {PHONE}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-dark-border/50">
                  <Button asChild className="w-full bg-gold text-dark-bg font-bold uppercase tracking-wider text-xs rounded-none py-5">
                    <Link href="/contact">Request Consultation</Link>
                  </Button>
                </div>
              </div>

              {/* Map Embed */}
              <div className="border border-dark-border overflow-hidden h-[250px] relative">
                <iframe
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title={`${locInfo.name} Office Location Map`}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Local Practice Areas served */}
          <div className="border-t border-dark-border pt-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
              Defense Specialties Handled at this Location
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRACTICE_AREAS.slice(0, 6).map((area) => (
                <div key={area.slug} className="bg-neutral-950 border border-dark-border p-6 flex items-start gap-4">
                  <Shield className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-base font-bold text-foreground mb-1">{area.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{area.shortDesc}</p>
                    <Link href={`/criminal-defense/${area.slug}`} className="text-gold font-semibold text-[10px] uppercase tracking-wider hover:underline">
                      Explore Defense &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
