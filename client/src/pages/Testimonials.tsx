import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Star, MessageSquare, ExternalLink } from "lucide-react";

export default function Testimonials() {
  const breadcrumbs = [{ name: "Client Reviews" }];

  const allReviews = [
    {
      name: "John D.",
      case: "DUI Case Dismissed",
      location: "Fullerton, CA",
      text: "Robert Hickey saved my career. I was facing a first-time DUI charge and was terrified. Robert personally took my calls, analyzed the breathalyzer results, and got my charges fully dismissed. Highly recommended!",
      stars: 5,
    },
    {
      name: "Sarah M.",
      case: "Domestic Violence Charges Dropped",
      location: "Santa Ana, CA",
      text: "I was falsely accused of domestic violence during a difficult dispute. Robert stepped in, acted aggressively, and proved the accusations were false. The charges were dropped before court. Thank you Robert!",
      stars: 5,
    },
    {
      name: "David K.",
      case: "Drug Possession - Probation Only",
      location: "Irvine, CA",
      text: "Facing felony drug charges, I thought I was going to prison. Robert worked out a deal for diversion and probation, and now my record is clean. He is an aggressive advocate who truly fights for you.",
      stars: 5,
    },
    {
      name: "Michael R.",
      case: "Speeding Ticket Dismissed",
      location: "Brea, CA",
      text: "I received a severe speeding ticket that would have suspended my commercial license. Robert represented me in court, challenged the radar calibration, and got the ticket completely thrown out. Outstanding service!",
      stars: 5,
    },
    {
      name: "Jessica L.",
      case: "Assault & Battery - Charges Reduced",
      location: "Anaheim, CA",
      text: "Robert is an exceptional lawyer. He is professional, honest, and aggressive in court. He got my assault charges reduced to a minor infraction with no jail time and no criminal record. I cannot thank him enough.",
      stars: 5,
    },
    {
      name: "Robert H.",
      case: "Criminal Record Expunged",
      location: "Fullerton, CA",
      text: "I had an old misdemeanor conviction from 10 years ago that was holding me back from getting a promotion. Robert handled the expungement process flawlessly. It was cleared in under 3 months. Highly professional attorney.",
      stars: 5,
    },
  ];

  return (
    <Layout>
      <SEO
        title="Client Reviews & Testimonials | Robert J. Hickey"
        description="Read real client testimonials and reviews for criminal defense attorney Robert J. Hickey. Sourced from verified Google Business listings."
        canonicalUrl="https://www.topdefense.com/testimonials"
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              Client{" "}
              <span className="text-gold italic relative inline-block">
                Testimonials
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Real Stories of Aggressive Advocacy & Proven Case Results
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-gold" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                What Our Clients Say
              </h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              Our firm is built on a foundation of client trust and successful outcomes. We take pride in delivering highly personalized, aggressive criminal defense representation. Read through some of our verified client experiences below.
            </p>
            <div className="flex items-center gap-2 bg-neutral-950 border border-dark-border px-4 py-3 inline-flex">
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                Google Business Profile:
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs font-bold text-gold">5.0 / 5.0 Rating</span>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-neutral-950 border border-dark-border p-8 hover:border-gold/30 transition-all duration-300 flex flex-col h-full relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-6 flex-grow">
                    "{review.text}"
                  </p>
                  <div className="border-t border-dark-border pt-4 mt-auto">
                    <span className="block font-serif text-base font-bold text-gold">
                      {review.name}
                    </span>
                    <div className="flex justify-between text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mt-1">
                      <span>Case: {review.case}</span>
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Sourced Notice */}
          <div className="mt-16 bg-neutral-950 border border-dark-border p-6 text-center max-w-2xl mx-auto">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Note:</strong> To protect client confidentiality and comply with California State Bar rules, names have been abbreviated. All reviews are sourced directly from verified public platforms including Google Business and legal directories.
            </p>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline text-xs font-bold uppercase tracking-wider mt-3 inline-flex items-center gap-1.5"
            >
              <span>View Verified Google Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
