import { Link } from "wouter";
import { Shield, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { PRACTICE_AREAS, LOCATIONS, PHONE, EMAIL, ADDRESS } from "@/lib/site-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-dark-border text-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-gold" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider">
                  ROBERT J. HICKEY
                </span>
                <span className="text-[9px] tracking-widest text-gold font-semibold uppercase">
                  Law Office of Robert J. Hickey, APC
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              Aggressive criminal defense representation in Fullerton and across Southern California. Protecting your freedom, rights, and future for over 30 years.
            </p>
            <div className="flex flex-col gap-2 mt-4 text-sm">
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="flex items-center gap-2 hover:text-gold transition-colors text-muted-foreground"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{PHONE}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-gold transition-colors text-muted-foreground"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{EMAIL}</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h3 className="font-serif text-base font-semibold tracking-wide uppercase text-gold mb-6 border-b border-dark-border pb-2">
              Practice Areas
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link href="/criminal-defense" className="hover:text-gold transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Criminal Defense Overview</span>
                </Link>
              </li>
              {PRACTICE_AREAS.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/criminal-defense/${area.slug}`}
                    className="hover:text-gold transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{area.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/practice-areas" className="text-gold hover:underline font-semibold mt-1 inline-block">
                  View All Specialties &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Areas Served */}
          <div>
            <h3 className="font-serif text-base font-semibold tracking-wide uppercase text-gold mb-6 border-b border-dark-border pb-2">
              Areas Served
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              {LOCATIONS.slice(0, 6).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/${loc.slug}`}
                    className="hover:text-gold transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{loc.name} Office</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/orange-county" className="text-gold hover:underline font-semibold mt-1 inline-block">
                  View All Counties &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold tracking-wide uppercase text-gold mb-6 border-b border-dark-border pb-2">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link href="/attorney" className="hover:text-gold transition-colors">
                  Meet Robert Hickey
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gold transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Legal Blog & Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Free Case Consultation
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-gold transition-colors">
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="border-t border-dark-border pt-8 mt-8 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl text-center md:text-left">
            <p>
              &copy; {currentYear} Law Office of Robert J. Hickey, APC. All Rights Reserved.
            </p>
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute legal advice. Reading the content of this site, submitting a contact form, or sending an email does not create an attorney-client relationship. Past results do not guarantee future outcomes.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-dark-border">|</span>
            <Link href="/disclaimer" className="hover:text-gold transition-colors">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
