import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEO, { getLegalServiceSchema } from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Phone, Mail, Clock, ShieldAlert } from "lucide-react";
import { PHONE, EMAIL, ADDRESS, GOOGLE_MAPS_EMBED } from "@/lib/site-data";

export default function Contact() {
  const breadcrumbs = [{ name: "Contact & Consultation" }];

  // Load the LeadConnector form embed script once on mount.
  useEffect(() => {
    const SRC = "https://link.msgsndr.com/js/form_embed.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <SEO
        title="Contact & Free Consultation | Robert J. Hickey"
        description="Get in touch with Fullerton criminal defense lawyer Robert Hickey. Request a 100% free, confidential case review. Available 24/7 for emergencies."
        canonicalUrl="https://www.topdefense.com/contact"
        schema={getLegalServiceSchema()}
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              Free Case{" "}
              <span className="text-gold italic relative inline-block">
                Consultation
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Get Immediate, Aggressive Representation &bull; Available 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 bg-dark-bg border-b border-dark-border">
        <div className="container">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-3">
                Request Your Free Consultation
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Complete the form below and Robert J. Hickey's office will respond promptly. All inquiries are 100% confidential.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-3xl mx-auto bg-neutral-950 border border-dark-border p-2 sm:p-4">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/n7w3hl9Z8VYubQm8PKG4"
                style={{ width: "100%", height: "640px", border: "none", borderRadius: "10px" }}
                id="inline-n7w3hl9Z8VYubQm8PKG4"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form (Law Office of Robert J. Hickey, APC.)"
                data-height="503"
                data-layout-iframe-id="inline-n7w3hl9Z8VYubQm8PKG4"
                data-form-id="n7w3hl9Z8VYubQm8PKG4"
                title="Website Form (Law Office of Robert J. Hickey, APC.)"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Details & Emergency */}
            <div className="space-y-8">
              <FadeIn>
                <div className="bg-neutral-950 border border-dark-border p-8 space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Office Headquarters
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our primary office is located in Fullerton, California, conveniently accessible from the 57 and 91 freeways. We represent clients in courthouses throughout Southern California.
                  </p>

                  <div className="space-y-4 text-sm border-t border-dark-border/50 pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-semibold text-foreground uppercase tracking-wider text-xs mb-1">Fullerton Office</span>
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
                        <span className="text-muted-foreground">Available 24/7 for urgent legal emergencies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Emergency Alert Box */}
              <FadeIn delay={0.1}>
                <div className="bg-neutral-950 border border-red-900/30 p-6 flex items-start gap-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
                  <ShieldAlert className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">
                      Urgent Arrest?
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      If you or a loved one is currently detained or has just been arrested, call us immediately at <strong>{PHONE}</strong>. We can provide guidance and arrange immediate defense representation.
                    </p>
                  </div>
                </div>
              </FadeIn>

            </div>

            {/* Right Column: Map */}
            <div>
              <FadeIn delay={0.2}>
                <div className="border border-dark-border overflow-hidden h-[400px] lg:h-[560px] relative">
                  <iframe
                    src={GOOGLE_MAPS_EMBED}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Law Office of Robert J. Hickey Office Location Map"
                  ></iframe>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
