import { Link } from "wouter";
import { Phone, Shield, ArrowRight, Star, ChevronLeft, ChevronRight, HelpCircle, MapPin, Mail, Clock } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import SEO, { getLegalServiceSchema } from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PRACTICE_AREAS, LOCATIONS, PHONE, EMAIL, ADDRESS, GOOGLE_MAPS_EMBED, TOP_CITIES } from "@/lib/site-data";

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "John D.",
      case: "DUI Dismissed",
      text: "Robert Hickey saved my career. I was facing a first-time DUI charge and was terrified. Robert personally took my calls, analyzed the breathalyzer results, and got my charges fully dismissed. Highly recommended!",
      stars: 5,
    },
    {
      name: "Sarah M.",
      case: "Domestic Violence Charges Dropped",
      text: "I was falsely accused of domestic violence during a difficult dispute. Robert stepped in, acted aggressively, and proved the accusations were false. The charges were dropped before court. Thank you Robert!",
      stars: 5,
    },
    {
      name: "David K.",
      case: "Drug Possession Probation Only",
      text: "Facing felony drug charges, I thought I was going to prison. Robert worked out a deal for diversion and probation, and now my record is clean. He is an aggressive advocate who truly fights for you.",
      stars: 5,
    },
  ];

  const faqs = [
    {
      q: "What should I do if I am arrested in California?",
      a: "First, stay calm and do not resist arrest physically. Second, exercise your constitutional right to remain silent—do not answer questions about the incident without an attorney present. Third, ask for an attorney immediately. Call the Law Office of Robert J. Hickey at (714) 525-4457.",
    },
    {
      q: "Do I need a lawyer if I am innocent?",
      a: "Yes. Innocent people are wrongfully charged and convicted every day. The police and prosecutors build cases based on evidence that may be misleading or obtained unlawfully. An experienced defense attorney is crucial to present your innocence and protect your rights.",
    },
    {
      q: "How soon should I hire an attorney after an arrest?",
      a: "Immediately. The critical hours following an arrest are when prosecutors decide what charges to file, and when crucial evidence must be preserved. Hiring Robert Hickey early allows him to contact prosecutors before formal charges are filed, sometimes preventing them altogether.",
    },
    {
      q: "What is the difference between a misdemeanor and a felony in California?",
      a: "Misdemeanors are less serious crimes, carrying a maximum penalty of up to one year in county jail and fines up to $1,000. Felonies are severe offenses carrying substantial prison sentences, significant fines, and long-term loss of civil rights, such as voting and gun ownership.",
    },
    {
      q: "Will my criminal defense case go to trial?",
      a: "Not necessarily. Most criminal cases are resolved through plea negotiations, dismissals, or diversion programs. Robert Hickey prepares every case as if it is going to trial, which gives him maximum leverage to secure a favorable pre-trial settlement or dismissal.",
    },
    {
      q: "Can my criminal charges be dismissed?",
      a: "Yes. Charges can be dismissed if police violated your constitutional rights (e.g., unlawful search), if the evidence is insufficient, if witnesses are unreliable, or if chemical tests (in DUI cases) were administered incorrectly. We examine every angle to fight for a dismissal.",
    },
    {
      q: "What is bail and how does it work in California?",
      a: "Bail is a financial guarantee that a defendant will return to court. If you pay the full bail amount to the court, it is returned when the case ends. Alternatively, you can use a bail bondsman, paying a non-refundable fee (usually 8-10%) to secure your release.",
    },
    {
      q: "What if the police violated my constitutional rights?",
      a: "If the police conducted an illegal search, failed to read your Miranda rights, or coerced a confession, we can file a Motion to Suppress Evidence (Penal Code 1538.5). If successful, the illegally obtained evidence is excluded, which often leads to a complete dismissal of charges.",
    },
    {
      q: "Can my criminal charges be reduced?",
      a: "Yes. Through aggressive negotiations, we can often secure 'plea bargains' where felony charges are reduced to misdemeanors, or serious charges are reduced to lesser offenses with minimal penalties, avoiding jail time.",
    },
    {
      q: "Can I expunge my criminal record in California?",
      a: "Yes, under California Penal Code 1203.4. If you successfully completed probation, paid all fines, and are not currently facing charges, you likely qualify. An expungement officially dismisses the conviction, opening up employment and housing opportunities.",
    },
  ];

  const handleNextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <Layout>
      <SEO
        title="Criminal Defense Attorney Fullerton CA"
        description="Charged with a crime in Southern California? Robert Hickey is an aggressive criminal defense attorney in Fullerton, CA. Free consultation — call (714) 525-4457."
        canonicalUrl="https://www.topdefense.com/"
        schema={getLegalServiceSchema()}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-dark-bg overflow-hidden py-20 border-b border-dark-border">
        {/* Subtle radial glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-widest text-gold mb-4 block">
                Law Office of Robert J. Hickey, APC
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-wide mb-6">
                Aggressive Criminal <br />
                <span className="relative inline-block text-gold italic">
                  Defense
                  <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gold"></span>
                </span>{" "}
                Serving Southern California
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                When your freedom is on the line, you need an experienced attorney who fights relentlessly for your rights. Robert Hickey personally handles your case from start to finish.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <Button className="bg-gold text-dark-bg font-bold tracking-wider hover:bg-gold-hover rounded-none uppercase text-xs px-8 py-6 border-none w-full sm:w-auto">
                    Free Consultation
                  </Button>
                </Link>
                <a href={`tel:${PHONE.replace(/\D/g, "")}`}>
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-dark-bg font-bold tracking-wider rounded-none uppercase text-xs px-8 py-6 w-full sm:w-auto transition-colors"
                  >
                    Call {PHONE}
                  </Button>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-dark-border pt-8 mt-4">
                <div>
                  <span className="block font-serif text-2xl md:text-3xl font-bold text-gold">20+</span>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Years Exp</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl md:text-3xl font-bold text-gold">Hundreds</span>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Cases Handled</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl md:text-3xl font-bold text-gold">100%</span>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Confidential</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl md:text-3xl font-bold text-gold">4</span>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Counties</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Hero Right: Photo Inset */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn delay={0.2}>
              <div className="relative w-[320px] h-[450px] shadow-2xl max-w-full overflow-hidden border border-dark-border">
                <img
                  src="/robert-hickey.jpg"
                  alt="Robert J. Hickey, Criminal Defense Attorney"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Practice Specialties Section */}
      <section className="py-24 bg-neutral-950 border-b border-dark-border">
        <div className="container">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Areas of Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Criminal Defense Across Southern California
            </h2>
            <div className="w-20 h-[2px] bg-gold mx-auto"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.slice(0, 6).map((area, index) => (
              <FadeIn key={area.slug} delay={index * 0.1}>
                <div className="group bg-dark-card border border-dark-border p-8 hover:border-gold/50 transition-all duration-300 flex flex-col h-full relative">
                  <span className="absolute top-6 right-8 font-serif text-4xl font-bold text-neutral-800 group-hover:text-gold/20 transition-colors">
                    0{index + 1}
                  </span>
                  <Shield className="w-8 h-8 text-gold mb-6" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {area.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {area.shortDesc}
                  </p>
                  <Link href={`/criminal-defense/${area.slug}`} className="text-gold font-semibold text-xs uppercase tracking-wider hover:underline flex items-center gap-1">
                    <span>Explore Defense Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/practice-areas">
              <Button className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark-bg font-bold tracking-wider rounded-none uppercase text-xs px-8 py-5 transition-colors">
                View All Practice Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="py-16 bg-dark-bg border-b border-dark-border relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <FadeIn>
                <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">
                  Service Coverage
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Serving Orange, Los Angeles, Riverside & San Bernardino Counties
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We represent clients in courthouses across all four Southern California counties. Click below for local city insights.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  {LOCATIONS.map((loc) => (
                    <Link key={loc.slug} href={`/${loc.slug}`}>
                      <span className="bg-neutral-900 border border-dark-border hover:border-gold hover:text-gold text-xs font-semibold px-4 py-2.5 uppercase tracking-wider transition-colors cursor-pointer block">
                        {loc.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Attorney Section */}
      <section className="py-24 bg-neutral-950 border-b border-dark-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Attorney Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <FadeIn>
                <div className="relative w-[300px] h-[420px] shadow-2xl overflow-hidden border border-dark-border">
                  <img
                    src="/robert-hickey.jpg"
                    alt="Robert J. Hickey, Founder"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right: Bio & Bullets */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
                  About the Founder
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Robert J. Hickey <br />
                  <span className="text-gold text-lg md:text-xl font-sans uppercase tracking-wider font-semibold block mt-1">
                    Aggressive Criminal Defense Advocate
                  </span>
                </h2>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Robert J. Hickey is an aggressive criminal defense attorney based in Fullerton, California. Over his distinguished career of more than 20 years, he has successfully defended hundreds of clients facing both misdemeanor and felony charges.
                  </p>
                  <p>
                    Unlike larger law firms where cases are passed down to paralegals or junior associates, Robert personally answers his client calls and constructs each defense strategy himself. He is a fierce litigator who believes in immediate, proactive intervention.
                  </p>
                  <p>
                    Serving Orange, Los Angeles, Riverside, and San Bernardino counties, Robert has built a formidable reputation among judges and prosecutors as a defense attorney who will not back down and leaves no stone unturned in court.
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "20+ years of California defense experience",
                    "All misdemeanors and felonies handled",
                    "Serving Orange, LA, Riverside & San Bernardino",
                    "Free initial consultations",
                    "Flexible payment plans available",
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></div>
                      <span className="text-xs font-semibold text-foreground tracking-wide uppercase">{bullet}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <Button className="bg-gold text-dark-bg font-bold tracking-wider hover:bg-gold-hover rounded-none uppercase text-xs px-8 py-5 border-none">
                    Schedule a Consultation
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-dark-bg border-b border-dark-border relative">
        <div className="container">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Reviews sourced from Google &bull; Claimed & Verified Profile
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-neutral-950 border border-dark-border p-8 md:p-12 shadow-2xl relative">
                {/* Quote marks icon */}
                <span className="absolute top-6 left-8 font-serif text-8xl font-bold text-neutral-900 pointer-events-none select-none">
                  “
                </span>

                <div className="relative z-10">
                  <p className="text-base md:text-lg text-foreground italic leading-relaxed mb-8 text-center md:text-left">
                    "{reviews[activeReview].text}"
                  </p>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-dark-border pt-6">
                    <div>
                      <span className="block font-serif text-lg font-bold text-gold">
                        {reviews[activeReview].name}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                        Case: {reviews[activeReview].case}
                      </span>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={handlePrevReview}
                        className="p-3 bg-neutral-900 border border-dark-border hover:border-gold hover:text-gold transition-colors text-foreground"
                        aria-label="Previous review"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextReview}
                        className="p-3 bg-neutral-900 border border-dark-border hover:border-gold hover:text-gold transition-colors text-foreground"
                        aria-label="Next review"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <span className="text-gold hover:underline font-semibold tracking-wide uppercase text-xs cursor-pointer">
                Read All Client Testimonials &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-neutral-950 border-b border-dark-border">
        <div className="container">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Legal Guidance
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-[2px] bg-gold mx-auto"></div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-dark-border bg-dark-card px-6 py-1"
                  >
                    <AccordionTrigger className="hover:no-underline hover:text-gold font-serif text-base font-bold text-foreground text-left py-4">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span>{faq.q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2 pb-6 pl-8 border-t border-dark-border/50 mt-2">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-dark-bg" id="contact-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn>
                <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
                  Get In Touch
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Get Your Free Consultation
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  Facing charges can be overwhelming, but you do not have to walk through this alone. Reach out to Robert Hickey today for an aggressive, confidential, and completely free case evaluation.
                </p>

                <div className="space-y-4 text-sm mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-foreground uppercase tracking-wider text-xs mb-1">Office Location</span>
                      <span className="text-muted-foreground">{ADDRESS}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-foreground uppercase tracking-wider text-xs mb-1">Direct Line</span>
                      <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-muted-foreground hover:text-gold transition-colors">
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-foreground uppercase tracking-wider text-xs mb-1">Email Address</span>
                      <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-gold transition-colors">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-foreground uppercase tracking-wider text-xs mb-1">Office Hours</span>
                      <span className="text-muted-foreground">Available 24/7 for emergencies</span>
                    </div>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="border border-dark-border overflow-hidden h-[250px] relative">
                  <iframe
                    src={GOOGLE_MAPS_EMBED}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Law Office of Robert J. Hickey Office Location Map"
                  ></iframe>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
