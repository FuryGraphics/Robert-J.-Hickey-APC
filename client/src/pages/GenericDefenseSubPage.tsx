import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "wouter";
import { ShieldAlert, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRACTICE_AREAS, PHONE, ALL_PRACTICE_AREAS_MAP } from "@/lib/site-data";

interface GenericDefenseSubPageProps {
  slug: string;
}

export default function GenericDefenseSubPage({ slug }: GenericDefenseSubPageProps) {
  // Find standard metadata or build dynamically
  const parentPractice = PRACTICE_AREAS.find(p => p.slug === slug);
  
  // Handle specific sub-pages mapping to parent
  let title = "";
  let description = "";
  let headline = "";
  let introText = "";
  let bullets: string[] = [];

  if (parentPractice) {
    title = `${parentPractice.name} Defense Attorney Fullerton CA`;
    description = `Facing ${parentPractice.name.toLowerCase()} charges in Southern California? Robert Hickey is an experienced criminal defense lawyer in Fullerton. Free consultation.`;
    headline = `${parentPractice.name} Defense Attorney Serving Southern California`;
    introText = parentPractice.description;
    bullets = [
      `Aggressive representation against all ${parentPractice.name.toLowerCase()} allegations.`,
      "Meticulous investigation into police procedures and witness credibility.",
      "Strategic defense designed to secure dismissals or reduce charges.",
      "Direct representation by Robert Hickey — over 20 years of courtroom experience.",
    ];
  } else {
    // Dynamic naming based on slug
    const cleanName = slug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    title = `${cleanName} Attorney California | Robert J. Hickey`;
    description = `Accused of ${cleanName.toLowerCase()} in Southern California? Robert Hickey is an aggressive criminal defense attorney in Fullerton. Free consultation.`;
    headline = `California ${cleanName} Defense Lawyer`;
    introText = `Facing ${cleanName.toLowerCase()} allegations in California can lead to severe consequences, including jail time, substantial fines, and a permanent criminal record. Robert J. Hickey provides experienced, aggressive defense representation to protect your rights, freedom, and future.`;
    bullets = [
      `Experienced defense against California ${cleanName.toLowerCase()} charges.`,
      "Rigorous examination of physical evidence and prosecution arguments.",
      "Proven courtroom litigator with over 20 years of California legal experience.",
      "Personalized, direct client attention on every single case.",
    ];
  }

  const breadcrumbs = [
    { name: "Criminal Defense", url: "/criminal-defense" },
    { name: parentPractice ? parentPractice.name : slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") },
  ];

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        canonicalUrl={`https://www.topdefense.com/criminal-defense/${slug}`}
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              {headline.split(" Serving ")[0]}{" "}
              <span className="text-gold italic relative inline-block">
                Defense
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Aggressive, Strategic Representation to Protect Your Future
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Fight Your Charges with an Aggressive, Proven Advocate
              </h2>
              <p>{introText}</p>
              <p>
                Under California law, prosecutors must prove every element of a crime beyond a reasonable doubt. We do not simply accept the state's version of events. We investigate the scene, interview witnesses, analyze police conduct, and challenge the admissibility of evidence.
              </p>
              <p>
                With over 20 years of litigation experience, Robert Hickey knows how to negotiate with prosecutors for a dismissal or reduction of charges, and is always fully prepared to take your case to trial if it is in your best interest.
              </p>

              {/* Navigation Back to parent */}
              <div className="pt-6">
                <Link href="/criminal-defense" className="text-gold hover:underline font-semibold flex items-center gap-1">
                  &larr; Back to Criminal Defense Overview
                </Link>
              </div>
            </div>

            {/* Right Side: Case Highlights */}
            <div className="lg:col-span-5 bg-neutral-950 border border-dark-border p-8 relative h-fit">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold"></div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-6 uppercase tracking-wider">
                Defense Focus Points
              </h3>
              <ul className="space-y-4 mb-8">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground font-semibold">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-dark-border/50 pt-6">
                <h4 className="font-serif text-base font-bold text-foreground mb-3">
                  Urgent Case Evaluation
                </h4>
                <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                  Your future is too important to leave to chance. Contact us today for a free, 100% confidential consultation.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-gold text-dark-bg font-bold uppercase tracking-wider text-xs rounded-none py-5">
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
