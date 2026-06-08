import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Disclaimer() {
  const breadcrumbs = [{ name: "Legal Disclaimer" }];

  return (
    <Layout>
      <SEO
        title="Legal Disclaimer | Robert J. Hickey, APC"
        description="Read the official legal disclaimer for the Law Office of Robert J. Hickey, APC website. Learn about attorney-client privilege, outcomes, and legal advice."
        canonicalUrl="https://www.topdefense.com/disclaimer"
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              Legal{" "}
              <span className="text-gold italic relative inline-block">
                Disclaimer
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Terms of Use and Information Disclosure for Topdefense.com
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container max-w-4xl">
          <FadeIn>
            <div className="bg-neutral-950 border border-dark-border p-8 md:p-12 space-y-6 text-muted-foreground text-sm leading-relaxed">
              <h2 className="font-serif text-xl font-bold text-foreground border-b border-dark-border pb-2">
                No Attorney-Client Relationship
              </h2>
              <p>
                The materials on this website have been prepared by the Law Office of Robert J. Hickey, APC for informational purposes only and do not constitute legal advice. This information is not intended to create, and receipt of it does not constitute, an attorney-client relationship. Internet subscribers and online readers should not act upon this information without seeking professional counsel.
              </p>
              <p>
                Do not send us confidential information until you speak with us and receive authorization to send that information to us. Submitting a contact form, sending an email, or making a phone call does not establish an attorney-client relationship.
              </p>

              <h2 className="font-serif text-xl font-bold text-foreground border-b border-dark-border pb-2 pt-4">
                No Guarantee of Case Outcomes
              </h2>
              <p>
                Any testimonials, reviews, or endorsements contained on this website do not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter. Every case is unique and the results obtained depend entirely on the specific facts and laws applicable to each situation. Prior successful outcomes do not guarantee similar results in future cases.
              </p>

              <h2 className="font-serif text-xl font-bold text-foreground border-b border-dark-border pb-2 pt-4">
                Information Accuracy
              </h2>
              <p>
                While we strive to keep the information on this website accurate and up-to-date, California laws change frequently. We do not guarantee that all information provided on this website is complete, correct, or fully current. You should consult directly with Robert Hickey to discuss the specific legal statutes affecting your case.
              </p>

              <h2 className="font-serif text-xl font-bold text-foreground border-b border-dark-border pb-2 pt-4">
                Jurisdiction and Bar Admissions
              </h2>
              <p>
                Robert J. Hickey is licensed to practice law exclusively within the State of California. This website is intended for individuals seeking legal representation within California, particularly Orange County, Los Angeles County, Riverside County, and San Bernardino County. We do not seek to represent anyone in any state where this website fails to comply with all laws and ethical rules of that state.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
