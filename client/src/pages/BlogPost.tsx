import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "wouter";
import { Calendar, User, ArrowLeft, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/lib/site-data";

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  // Hardcoded post details based on spec
  let title = "";
  let date = "";
  let author = "Robert J. Hickey";
  let category = "";
  let contentHtml = null;

  if (slug === "what-to-do-if-arrested-in-california") {
    title = "What to Do If You're Arrested in California";
    date = "May 15, 2026";
    category = "Criminal Defense Rights";
    contentHtml = (
      <div className="space-y-6">
        <p>
          Being arrested can be a terrifying and overwhelming experience. In the heat of the moment, it is easy to make critical mistakes that can severely damage your future criminal defense case. Knowing your constitutional rights and how to handle yourself can make a massive difference in your case outcome.
        </p>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          1. Stay Calm and Don't Resist
        </h2>
        <p>
          The most important rule during an arrest is to remain calm. Do not attempt to run, physically resist, or argue with the police officers. Even if you believe the arrest is completely unlawful, physically resisting can lead to additional charges under California Penal Code 148 (resisting arrest) and may escalate the situation dangerously.
        </p>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          2. Invoke Your Right to Remain Silent
        </h2>
        <p>
          Under the Fifth Amendment, you have the absolute right to remain silent. You are required to provide your basic identifying information (name and address), but you do not have to answer any questions about the incident, where you were going, or what you were doing. Simply state clearly: <strong>"I am invoking my right to remain silent and I want to speak with my attorney."</strong>
        </p>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          3. Ask for an Attorney Immediately
        </h2>
        <p>
          Once you request an attorney, police officers are legally required to stop questioning you. Do not attempt to explain your side of the story or negotiate with officers. Anything you say can and will be used against you by prosecutors. Wait until you have an experienced criminal defense lawyer by your side.
        </p>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          4. What Happens After Arrest
        </h2>
        <p>
          Following your arrest, you will be taken to a local police station or county jail for booking, which includes fingerprinting and photographing. You will be allowed to make phone calls. Use this opportunity to contact a family member or the Law Office of Robert J. Hickey directly.
        </p>
      </div>
    );
  } else if (slug === "first-dui-california-penalties") {
    title = "First DUI in California: Penalties, Hearings, and What to Expect";
    date = "April 28, 2026";
    category = "DUI Defense";
    contentHtml = (
      <div className="space-y-6">
        <p>
          An arrest for a first-offense DUI in California is a serious criminal charge that carries severe consequences. Many individuals assume that because it is their first offense, they will receive a simple warning or fine. However, California has some of the strictest DUI laws in the nation.
        </p>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          The 10-Day DMV Hearing Rule
        </h2>
        <p>
          Following a DUI arrest, the police will confiscate your driver's license and issue a pink temporary license. You have exactly <strong>10 days from the date of your arrest</strong> to contact the DMV and request an Administrative Per Se (APS) hearing. If you fail to do so, your license will be automatically suspended after 30 days.
        </p>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          Potential Criminal Penalties
        </h2>
        <p>
          A first-time DUI is typically prosecuted as a misdemeanor. If convicted, potential penalties include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Up to 6 months in county jail</li>
          <li>Fines and court assessments totaling up to $2,000</li>
          <li>A 6-to-10 month driver's license suspension</li>
          <li>Mandatory enrollment in a 3-month or 9-month DUI education school</li>
          <li>Informal probation for 3 to 5 years</li>
          <li>Installation of an Ignition Interlock Device (IID) in your vehicle</li>
        </ul>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          How a Defense Lawyer Can Help
        </h2>
        <p>
          A DUI arrest does not guarantee a conviction. Robert Hickey routinely challenges DUI charges by exposing breathalyzer calibration errors, blood sample storage violations, and unlawful police stops.
        </p>
      </div>
    );
  } else if (slug === "how-to-get-criminal-record-expunged-california") {
    title = "How to Get a Criminal Record Expunged in California";
    date = "March 12, 2026";
    category = "Expungements";
    contentHtml = (
      <div className="space-y-6">
        <p>
          A past criminal record can act as a permanent barrier, holding you back from career advancement, professional licensing, and securing quality housing. Fortunately, California law provides a mechanism to clear your record and secure a clean slate.
        </p>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          What is an Expungement?
        </h2>
        <p>
          Under California Penal Code Section 1203.4, an expungement is a legal process where you petition the court to reopen your criminal case, withdraw your guilty or no-contest plea, and officially dismiss the charges.
        </p>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          Do You Qualify?
        </h2>
        <p>
          Most misdemeanor and felony convictions can be expunged, provided you meet the following requirements:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You have successfully completed probation for the offense</li>
          <li>You paid all court-ordered fines, fees, and restitution</li>
          <li>You are not currently facing active criminal charges or serving a sentence</li>
          <li>You did not serve time in state prison (though some exceptions apply under realignment laws)</li>
        </ul>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4 border-b border-dark-border pb-2">
          The Expungement Process
        </h2>
        <p>
          The process involves filing a formal petition with the court where you were sentenced. The prosecution may oppose the petition, leading to a court hearing where a judge will make the final decision. The entire process typically takes 2 to 4 months.
        </p>
      </div>
    );
  } else {
    return null;
  }

  const breadcrumbs = [
    { name: "Legal Blog", url: "/blog" },
    { name: title },
  ];

  return (
    <Layout>
      <SEO
        title={`${title} | Law Office of Robert J. Hickey`}
        description={`Read our article: ${title}. Learn about criminal defense strategies and rights from Fullerton attorney Robert Hickey.`}
        canonicalUrl={`https://www.topdefense.com/blog/${slug}`}
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-xs text-gold uppercase tracking-wider mb-4 font-semibold">
              <span>{category}</span>
              <span className="text-dark-border">|</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              {title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-gold" />
              <span>By {author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-dark-bg text-sm md:text-base">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Article */}
            <div className="lg:col-span-8 bg-neutral-950 border border-dark-border p-8 md:p-12 text-muted-foreground leading-relaxed">
              {contentHtml}

              {/* Internal Link CTA */}
              <div className="border-t border-dark-border/50 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                    Facing Criminal Charges?
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Get a free, 100% confidential case evaluation with Robert Hickey.
                  </p>
                </div>
                <Button asChild className="bg-gold text-dark-bg font-bold uppercase tracking-wider text-xs rounded-none px-6 py-4">
                  <Link href="/contact">Request Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8 h-fit">
              {/* Emergency Box */}
              <div className="bg-neutral-950 border border-dark-border p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-base font-bold text-foreground uppercase tracking-wider">
                    Immediate Defense
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Do not wait to speak with an attorney. Early legal intervention is critical to protecting your record.
                </p>
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="flex items-center justify-center gap-2 bg-gold text-dark-bg font-bold py-3 uppercase tracking-wider text-xs hover:bg-gold-hover transition-colors">
                  <Phone className="w-4 h-4 fill-dark-bg" />
                  <span>Call {PHONE}</span>
                </a>
              </div>

              {/* Back to Blog Index */}
              <div>
                <Link href="/blog" className="text-gold hover:underline font-semibold text-sm flex items-center gap-1.5">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog Index</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
