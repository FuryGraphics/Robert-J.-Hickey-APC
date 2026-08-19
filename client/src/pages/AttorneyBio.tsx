import Layout from "@/components/Layout";
import SEO, { getAttorneySchema } from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, BookOpen, ShieldCheck, Scale, Phone } from "lucide-react";
import { PHONE } from "@/lib/site-data";

export default function AttorneyBio() {
  const breadcrumbs = [{ name: "Meet Robert Hickey" }];

  return (
    <Layout>
      <SEO
        title="Robert J. Hickey | Criminal Defense Attorney Fullerton CA"
        description="Meet Robert J. Hickey — aggressive criminal defense attorney serving Fullerton and all of Southern California. 30+ years of experience. Free consultation."
        canonicalUrl="https://www.topdefense.com/attorney"
        schema={getAttorneySchema()}
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              Robert J. Hickey — Your{" "}
              <span className="text-gold italic relative inline-block">
                Criminal Defense
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>{" "}
              Attorney
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Founder & Lead Trial Attorney &bull; Over 30 Years of Courtroom Experience
            </p>
          </div>
        </div>
      </section>

      {/* Bio Details Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Photo & Quick Facts */}
            <div className="lg:col-span-4 space-y-8">
              <FadeIn>
                <div className="relative w-full aspect-[5/4] shadow-2xl overflow-hidden border border-dark-border mb-6">
                  <img
                    src="/robert-hickey.jpg"
                    alt="Robert J. Hickey, Criminal Defense Attorney"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Quick Info Box */}
                <div className="bg-neutral-950 border border-dark-border p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-gold border-b border-dark-border pb-2">
                    Attorney Profile
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="block text-muted-foreground uppercase tracking-wider font-semibold mb-1">Bar Admission</span>
                      <span className="text-foreground font-medium">California State Bar (Active & In Good Standing)</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground uppercase tracking-wider font-semibold mb-1">Experience</span>
                      <span className="text-foreground font-medium">30+ Years Criminal Litigation</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground uppercase tracking-wider font-semibold mb-1">Primary Office</span>
                      <span className="text-foreground font-medium">Fullerton, CA</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground uppercase tracking-wider font-semibold mb-1">Counties Served</span>
                      <span className="text-foreground font-medium">Orange, Los Angeles, Riverside, San Bernardino</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Bio Narrative */}
            <div className="lg:col-span-8 space-y-8">
              <FadeIn delay={0.1}>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Aggressive Advocacy. Strategic Defense. Proven Courtroom Results.
                  </h2>
                  <p>
                    For over two decades, Robert J. Hickey has served as a fearless defender of the accused in Southern California. Since establishing the Law Office of Robert J. Hickey, APC, his practice has been dedicated exclusively to criminal defense, representing individuals facing misdemeanor and felony charges alike.
                  </p>
                  <p>
                    Robert believes that every individual is entitled to an uncompromising defense, regardless of the severity of the charges. He has earned a reputation among peers, judges, and prosecutors as an attorney who meticulously analyzes every piece of evidence, uncovers procedural violations, and crafts creative, highly effective defense strategies.
                  </p>
                  <p>
                    What sets Robert apart is his highly personalized approach. He understands that facing criminal charges is one of the most stressful experiences in a person's life. Therefore, he maintains a strict policy of personally handling every client's case. When you hire Robert Hickey, you get Robert Hickey—not a junior associate or paralegal. He is always accessible to answer questions, provide updates, and offer peace of mind.
                  </p>
                  <p>
                    Whether arguing before a jury, negotiating with prosecutors for reduced charges, or challenging unlawful police actions in pre-trial motions, Robert is a relentless advocate. His aggressive representation has resulted in thousands of dismissed charges, reduced sentences, and acquitted verdicts for his clients.
                  </p>
                </div>
              </FadeIn>

              {/* Credentials & Philosophy Tabs/Grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <FadeIn delay={0.2}>
                  <div className="bg-neutral-950 border border-dark-border p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Scale className="w-6 h-6 text-gold" />
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        Practice Philosophy
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "I treat every case as if my own freedom were on the line. I do not accept the prosecution's narrative at face value. We investigate, we challenge, and we fight aggressively to secure the absolute best possible outcome for our clients."
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="bg-neutral-950 border border-dark-border p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-6 h-6 text-gold" />
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        Professional Milestones
                      </h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2"></div>
                        <span>Thousands of successful case outcomes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2"></div>
                        <span>Admitted to the State Bar of California</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2"></div>
                        <span>Experienced in State and Federal Courts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2"></div>
                        <span>Recognized local criminal law authority</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>

              {/* Call to Action Banner */}
              <FadeIn delay={0.4}>
                <div className="bg-neutral-950 border border-gold/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      Need Aggressive Defense Representation?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Speak directly with Robert Hickey today. Your initial case evaluation is 100% free and confidential.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Button asChild className="bg-gold text-dark-bg font-bold tracking-wider hover:bg-gold-hover rounded-none uppercase text-xs px-6 py-4">
                      <Link href="/contact">Request Consultation</Link>
                    </Button>
                    <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="flex items-center gap-2 border border-dark-border px-4 py-2 hover:border-gold hover:text-gold text-sm font-semibold transition-colors">
                      <Phone className="w-4 h-4 text-gold" />
                      <span>{PHONE}</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
