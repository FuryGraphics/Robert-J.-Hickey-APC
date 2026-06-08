import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "wouter";
import { Shield, HelpCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SUB_DUI_PAGES } from "@/lib/site-data";

export default function DUIDefense() {
  const breadcrumbs = [
    { name: "Criminal Defense", url: "/criminal-defense" },
    { name: "DUI Defense" },
  ];

  const duiBullets = [
    "First Offense DUI",
    "Felony DUI",
    "Underage DUI (Under 21)",
    "DUI with Injury",
    "Commercial Driver (CDL) DUI",
    "Breathalyzer & Blood Test Challenges",
    "DMV License Suspension Defense",
  ];

  const duiFaqs = [
    {
      q: "What are the penalties for a first-offense DUI in California?",
      a: "A first-offense DUI is typically a misdemeanor. Penalties can include up to 6 months in county jail, fines and assessments up to $2,000, a 6-to-10 month driver's license suspension, mandatory DUI school (3 to 9 months), and informal probation for 3 to 5 years.",
    },
    {
      q: "Can I refuse a breathalyzer or blood test in California?",
      a: "Under California's 'implied consent' law, if you are lawfully arrested for DUI, you must submit to a chemical test (breath or blood). Refusing carries an automatic 1-year license suspension with no option for a restricted license, and prosecutors can use your refusal against you in court.",
    },
    {
      q: "Will I lose my driver's license after a DUI arrest?",
      a: "Your license is not suspended immediately, but the police will confiscate it and issue a pink temporary license valid for 30 days. You have exactly 10 days from the date of your arrest to request an Administrative Per Se (APS) hearing from the DMV to halt the suspension.",
    },
    {
      q: "What is the difference between the DMV hearing and court case?",
      a: "They are completely separate. The DMV hearing deals solely with your driving privileges (suspension). The court case deals with criminal guilt, fines, probation, or jail. Winning the DMV hearing protects your license, but you must still defend against the court charges.",
    },
    {
      q: "When does a DUI become a felony in California?",
      a: "A DUI becomes a felony if: 1) it is your 4th DUI offense within 10 years, 2) you have a prior felony DUI conviction, or 3) the DUI caused injury or death to another person.",
    },
    {
      q: "How can an attorney fight a California DUI charge?",
      a: "We challenge DUI charges on multiple fronts: challenging the legality of the traffic stop, exposing errors in Field Sobriety Tests (FSTs), challenging the calibration and accuracy of breathalyzers, investigating blood sample contamination, and proving officer protocol violations.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="DUI Defense Attorney Fullerton CA"
        description="Arrested for DUI in Southern California? Robert Hickey is an experienced DUI defense attorney in Fullerton. Fight your charges — free consultation (714) 525-4457."
        canonicalUrl="https://www.topdefense.com/criminal-defense/dui"
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              DUI Defense Attorney Serving{" "}
              <span className="text-gold italic relative inline-block">
                Fullerton & Southern CA
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Protecting Your Driver's License, Career, and Freedom From Severe DUI Penalties
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Overview Narrative */}
            <div className="lg:col-span-7 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Do Not Plead Guilty. Challenge the State's Evidence.
              </h2>
              <p>
                In California, a DUI is not a simple traffic ticket—it is a serious criminal offense. Whether you were stopped in Fullerton, Anaheim, or elsewhere in Southern California, prosecutors use highly technical chemical evidence to secure convictions. However, these tests are far from infallible.
              </p>
              <p>
                Robert J. Hickey has spent over 20 years dismantling DUI prosecutions. He knows that breathalyzers must be calibrated meticulously, blood samples must be stored properly to prevent fermentation, and officers must follow rigid procedures during traffic stops and field sobriety testing.
              </p>
              <p>
                We aggressively challenge every element of the arrest. Did the officer have reasonable suspicion to pull you over? Was the breath testing device operating correctly? Were your constitutional rights violated? By raising these critical questions, we work to have charges dismissed or reduced to lesser offenses such as 'wet reckless.'
              </p>

              {/* Sub-DUI Navigation Links */}
              <div className="bg-neutral-950 border border-dark-border p-6 mt-8">
                <h3 className="font-serif text-base font-bold text-gold uppercase tracking-wider mb-4">
                  Specific DUI Case Pages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs uppercase tracking-wider font-semibold">
                  {SUB_DUI_PAGES.map((sub) => (
                    <Link key={sub.slug} href={`/criminal-defense/${sub.slug}`}>
                      <span className="flex items-center gap-1.5 text-foreground hover:text-gold cursor-pointer transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-gold" />
                        <span>{sub.name}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* DUI Cases We Handle */}
            <div className="lg:col-span-5 bg-neutral-950 border border-dark-border p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold"></div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-6 uppercase tracking-wider">
                DUI Matters We Handle
              </h3>
              <ul className="space-y-4">
                {duiBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground font-semibold">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="border-t border-dark-border pt-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                DUI Defense Frequently Asked Questions
              </h3>
              <p className="text-sm text-muted-foreground">
                Crucial legal insights to help you understand your options after a California DUI arrest.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {duiFaqs.map((faq, index) => (
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
