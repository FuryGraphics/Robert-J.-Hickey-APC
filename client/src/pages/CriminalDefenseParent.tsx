import Layout from "@/components/Layout";
import SEO, { getLegalServiceSchema } from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "wouter";
import { Shield, ArrowRight, Check, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRACTICE_AREAS, PHONE } from "@/lib/site-data";

export default function CriminalDefenseParent() {
  const breadcrumbs = [{ name: "Criminal Defense" }];

  const processSteps = [
    {
      num: "01",
      title: "Immediate Case Review",
      desc: "Call (714) 525-4457 or fill out our online form for a 100% free, fully confidential evaluation of your charges.",
    },
    {
      num: "02",
      title: "Evidence Analysis & Strategy",
      desc: "Robert Hickey personally analyzes police reports, chemical test results, and officer protocols to construct a customized defense strategy.",
    },
    {
      num: "03",
      title: "Aggressive Defense in Court",
      desc: "We stand with you at every hearing, filing motions to suppress illegal evidence and fighting tirelessly for a dismissal or reduction.",
    },
  ];

  const benefits = [
    "Over 30 Years of Courtroom Defense Experience",
    "Fierce, Aggressive Trial Representation",
    "Personal Attention — No Passing Cases to Juniors",
    "Deep Knowledge of Orange County & Southern CA Courts",
    "Flexible Payment Plans & Immediate Jail Visits",
  ];

  return (
    <Layout>
      <SEO
        title="Criminal Defense Attorney Fullerton CA"
        description="Facing criminal charges in Southern California? Robert Hickey provides aggressive criminal defense in Fullerton, Orange County, LA County, Riverside & San Bernardino. Call now."
        canonicalUrl="https://www.topdefense.com/criminal-defense"
        schema={getLegalServiceSchema()}
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              Criminal Defense Attorney in{" "}
              <span className="text-gold italic relative inline-block">
                Fullerton, California
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Protecting Your Freedom, Rights, and Reputation Throughout Southern California
            </p>
          </div>
        </div>
      </section>

      {/* Intro & Overview */}
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Intro text */}
            <div className="lg:col-span-7 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Facing Criminal Prosecution? We Stand Between You and the State.
              </h2>
              <p>
                A criminal arrest in California can derail your entire life, threatening your career, family relationships, and personal freedom. Whether you are facing a misdemeanor DUI or a severe felony violent crime allegation, the State is already building a case against you. You cannot afford to wait.
              </p>
              <p>
                At the Law Office of Robert J. Hickey, APC, we believe in taking immediate, aggressive, and proactive action. Robert Hickey is a veteran defense attorney who knows how Southern California prosecutors construct cases, and more importantly, how to expose the weaknesses in their arguments.
              </p>
              <p>
                From challenging the legality of traffic stops and searches to negotiating alternative sentencing programs, we explore every avenue of defense. We aim for complete dismissal of charges or significant reductions to minimize the impact on your life.
              </p>
            </div>

            {/* Why Hire Us Bullets */}
            <div className="lg:col-span-5 bg-neutral-950 border border-dark-border p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold"></div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-6 uppercase tracking-wider">
                Why Choose Robert Hickey?
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground font-semibold">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-dark-border/50">
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="flex items-center justify-center gap-2 bg-gold text-dark-bg font-bold py-3.5 uppercase tracking-wider text-xs hover:bg-gold-hover transition-colors">
                  <Phone className="w-4 h-4 fill-dark-bg" />
                  <span>Call {PHONE} For Immediate Help</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sub-practice area cards grid */}
          <div className="space-y-8 mb-20">
            <div className="border-b border-dark-border pb-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Practice Areas We Handle
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRACTICE_AREAS.map((area, index) => (
                <FadeIn key={area.slug} delay={index * 0.05}>
                  <div className="bg-neutral-950 border border-dark-border p-6 hover:border-gold/30 transition-all duration-300 flex flex-col h-full group">
                    <h4 className="font-serif text-lg font-bold text-foreground group-hover:text-gold transition-colors mb-2 flex items-center justify-between">
                      <span>{area.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {area.shortDesc}
                    </p>
                    <Link href={`/criminal-defense/${area.slug}`} className="text-gold font-bold text-[10px] uppercase tracking-wider hover:underline">
                      View Strategy &rarr;
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 3-Step Process Timeline */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Our Defense Process
              </h3>
              <p className="text-sm text-muted-foreground">
                How we construct your defense from the moment you call us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {processSteps.map((step, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-neutral-950 border border-dark-border p-8 h-full relative">
                    <span className="font-serif text-5xl font-bold text-neutral-900 absolute top-6 right-8">
                      {step.num}
                    </span>
                    <div className="relative z-10">
                      <h4 className="font-serif text-lg font-bold text-gold mb-3">
                        {step.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
