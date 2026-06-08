import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HelpCircle, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Expungements() {
  const breadcrumbs = [
    { name: "Criminal Defense", url: "/criminal-defense" },
    { name: "Expungements" },
  ];

  const benefits = [
    "State your criminal record is clean on private job applications",
    "Qualify for professional state licensing and certifications",
    "Pass housing and apartment lease background checks with ease",
    "Rebuild your reputation and move past previous mistakes",
    "Fully restore peace of mind regarding background checks",
  ];

  const expungementFaqs = [
    {
      q: "Who qualifies for an expungement in California?",
      a: "Under Penal Code 1203.4, you qualify if: 1) you were convicted of a misdemeanor or felony, 2) you successfully completed probation, 3) you paid all court-ordered fines and restitution, and 4) you are not currently facing criminal charges or serving a sentence.",
    },
    {
      q: "How long does the expungement process take?",
      a: "In Southern California (Orange County, LA County, Riverside, San Bernardino), the process typically takes between 60 to 120 days from the date of filing the petition, depending on court backlogs and the complexity of the case.",
    },
    {
      q: "Does an expungement completely clear my record from background checks?",
      a: "An expungement changes your plea from 'guilty' or 'no contest' to 'not guilty' and officially dismisses the case. On private employment background checks, the conviction will no longer appear as an active conviction, allowing you to legally state you have not been convicted.",
    },
    {
      q: "What convictions cannot be expunged in California?",
      a: "Certain severe convictions cannot be expunged under PC 1203.4, including serious sex offenses against minors, certain severe vehicle code violations, and federal crimes. Most other misdemeanors and felonies can be expunged.",
    },
    {
      q: "How much does a California expungement cost?",
      a: "The total cost includes court filing fees (which vary by county) and attorney representation fees. At the Law Office of Robert J. Hickey, APC, we offer affordable flat-rate fees for expungements, making it a highly cost-effective investment in your career.",
    },
    {
      q: "Do I need an attorney to file for an expungement?",
      a: "While you can technically file on your own, having an experienced attorney like Robert Hickey ensures the petition is drafted correctly, filed in the correct courthouse, and argued persuasively before the judge, particularly if the prosecutor opposes the petition.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Criminal Record Expungement Attorney California"
        description="Clear your criminal record in California. Robert Hickey helps clients with expungements in Orange County, LA County, and Riverside County. Free consultation."
        canonicalUrl="https://www.topdefense.com/criminal-defense/expungements"
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              California Criminal Record{" "}
              <span className="text-gold italic relative inline-block">
                Expungement
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>{" "}
              Lawyer
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Clean Your Past, Open Professional Doors, and Reclaim Your Future
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
                Under Penal Code 1203.4, You Can Dismiss Your Past.
              </h2>
              <p>
                A past criminal conviction should not be a lifetime sentence of limited employment, housing restrictions, and professional licensing hurdles. Under California Penal Code 1203.4, you have the legal right to petition the court to reopen your case, set aside your conviction, and dismiss the charges.
              </p>
              <p>
                Robert J. Hickey helps clients navigate the expungement process across Southern California. He handles all necessary paperwork, files petitions in the original sentencing courts, and represents clients at hearings to advocate for a clean slate.
              </p>
              <p>
                Once your expungement is granted, you can legally and truthfully state on almost all private job applications that you have no criminal convictions. It is the most powerful tool available under California law to restore your reputation and secure your family's future.
              </p>
            </div>

            {/* Benefits of Expungement */}
            <div className="lg:col-span-5 bg-neutral-950 border border-dark-border p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold"></div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-6 uppercase tracking-wider">
                Benefits of Expungement
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground font-semibold">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="border-t border-dark-border pt-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Expungement Frequently Asked Questions
              </h3>
              <p className="text-sm text-muted-foreground">
                Understand how California's clean slate laws can clear your background check.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {expungementFaqs.map((faq, index) => (
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
