import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
  const breadcrumbs = [{ name: "Privacy Policy" }];

  return (
    <Layout>
      <SEO
        title="Privacy Policy | Robert J. Hickey, APC"
        description="Read our privacy policy. Learn how the Law Office of Robert J. Hickey protects your personal data and confidential contact information."
        canonicalUrl="https://www.topdefense.com/privacy-policy"
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              Privacy{" "}
              <span className="text-gold italic relative inline-block">
                Policy
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Data Protection and Privacy Standards for Topdefense.com
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
                Our Commitment to Your Privacy
              </h2>
              <p>
                At the Law Office of Robert J. Hickey, APC, we respect your privacy and are committed to protecting any personally identifiable information you may provide us through this website. This Privacy Policy explains what information may be collected, how we use it, and under what circumstances we may disclose it.
              </p>

              <h2 className="font-serif text-xl font-bold text-foreground border-b border-dark-border pb-2 pt-4">
                Information We Collect
              </h2>
              <p>
                We collect personal information that you voluntarily submit to us via our contact forms, email links, or phone calls. This information may include your name, phone number, email address, and any details you choose to share regarding your legal situation.
              </p>
              <p>
                We also collect non-personally identifying information that web browsers and servers typically make available, such as browser type, language preference, referring site, and the date and time of each visitor request. This helps us understand how visitors use our website and improve the user experience.
              </p>

              <h2 className="font-serif text-xl font-bold text-foreground border-b border-dark-border pb-2 pt-4">
                How We Use Your Information
              </h2>
              <p>
                Any information you provide is used solely to respond to your inquiry, evaluate your legal case, and establish contact with you. We do not sell, rent, or trade your personal information to third parties under any circumstances.
              </p>

              <h2 className="font-serif text-xl font-bold text-foreground border-b border-dark-border pb-2 pt-4">
                Attorney-Client Privilege & Security
              </h2>
              <p>
                We implement robust security measures to maintain the safety of your personal information. Please be aware that while we make every effort to protect your data, no transmission of data over the internet can be guaranteed to be 100% secure. However, once received, all communications regarding your legal matter are treated with the highest degree of confidentiality and are protected by attorney-client privilege.
              </p>

              <h2 className="font-serif text-xl font-bold text-foreground border-b border-dark-border pb-2 pt-4">
                Cookies
              </h2>
              <p>
                To enrich and perfect your online experience, we use cookies to display personalized content, appropriate advertising, and store your preferences on your computer. A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using our website.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
