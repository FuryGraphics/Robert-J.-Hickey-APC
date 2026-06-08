import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRACTICE_AREAS, LOCATIONS, PHONE } from "@/lib/site-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPracticeDropdownOpen(false);
    setIsLocationDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/95 border-b border-dark-border backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Shield className="w-8 h-8 text-gold transition-transform duration-300 group-hover:scale-105 shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-base md:text-lg font-bold tracking-wider text-foreground whitespace-nowrap">
              ROBERT J. HICKEY
            </span>
            <span className="text-[9px] tracking-widest text-gold font-semibold uppercase whitespace-nowrap">
              Law Office of Robert J. Hickey, APC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location === "/" ? "text-gold" : "text-foreground"
            }`}
          >
            Home
          </Link>

          {/* Practice Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPracticeDropdownOpen(true)}
            onMouseLeave={() => setIsPracticeDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                location.startsWith("/criminal-defense") ? "text-gold" : "text-foreground"
              }`}
            >
              Practice Areas <ChevronDown className="w-4 h-4" />
            </button>
            {isPracticeDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-dark-card border border-dark-border py-2 shadow-2xl rounded-sm">
                <Link
                  href="/practice-areas"
                  className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold hover:bg-white/5 border-b border-dark-border mb-1"
                >
                  All Practice Areas
                </Link>
                <Link
                  href="/criminal-defense"
                  className="block px-4 py-2 text-sm font-semibold text-foreground hover:bg-white/5 hover:text-gold"
                >
                  Criminal Defense Overview
                </Link>
                {PRACTICE_AREAS.slice(0, 6).map((area) => (
                  <Link
                    key={area.slug}
                    href={`/criminal-defense/${area.slug}`}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-gold"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsLocationDropdownOpen(true)}
            onMouseLeave={() => setIsLocationDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                LOCATIONS.some((loc) => location === `/${loc.slug}`) ? "text-gold" : "text-foreground"
              }`}
            >
              Areas Served <ChevronDown className="w-4 h-4" />
            </button>
            {isLocationDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-dark-card border border-dark-border py-2 shadow-2xl rounded-sm">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/${loc.slug}`}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-gold"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/attorney"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location === "/attorney" ? "text-gold" : "text-foreground"
            }`}
          >
            About Robert
          </Link>

          <Link
            href="/testimonials"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location === "/testimonials" ? "text-gold" : "text-foreground"
            }`}
          >
            Reviews
          </Link>

          <Link
            href="/blog"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location.startsWith("/blog") ? "text-gold" : "text-foreground"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location === "/contact" ? "text-gold" : "text-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Section */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-foreground hover:text-gold font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>{PHONE}</span>
          </a>
          <Link href="/contact">
            <Button className="bg-gold text-dark-bg font-bold tracking-wide hover:bg-gold-hover rounded-none uppercase text-xs px-6 py-5 border-none transition-all active:scale-95">
              Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground hover:text-gold p-2 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-dark-bg/98 border-t border-dark-border z-40 overflow-y-auto px-6 py-8 flex flex-col gap-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium border-b border-dark-border/50 pb-2 text-foreground hover:text-gold"
            >
              Home
            </Link>

            {/* Practice Areas Accordion */}
            <div className="border-b border-dark-border/50 pb-2">
              <button
                onClick={() => setIsPracticeDropdownOpen(!isPracticeDropdownOpen)}
                className="w-full flex items-center justify-between text-lg font-medium text-foreground hover:text-gold"
              >
                <span>Practice Areas</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isPracticeDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isPracticeDropdownOpen && (
                <div className="mt-3 pl-4 flex flex-col gap-2 border-l border-gold/30">
                  <Link href="/practice-areas" className="text-sm text-gold">
                    All Practice Areas
                  </Link>
                  <Link href="/criminal-defense" className="text-sm text-foreground">
                    Criminal Defense Overview
                  </Link>
                  {PRACTICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/criminal-defense/${area.slug}`}
                      className="text-sm text-muted-foreground hover:text-gold"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Accordion */}
            <div className="border-b border-dark-border/50 pb-2">
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="w-full flex items-center justify-between text-lg font-medium text-foreground hover:text-gold"
              >
                <span>Areas Served</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isLocationDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isLocationDropdownOpen && (
                <div className="mt-3 pl-4 flex flex-col gap-2 border-l border-gold/30">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/${loc.slug}`}
                      className="text-sm text-muted-foreground hover:text-gold"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/attorney"
              className="text-lg font-medium border-b border-dark-border/50 pb-2 text-foreground hover:text-gold"
            >
              About Robert
            </Link>

            <Link
              href="/testimonials"
              className="text-lg font-medium border-b border-dark-border/50 pb-2 text-foreground hover:text-gold"
            >
              Reviews
            </Link>

            <Link
              href="/blog"
              className="text-lg font-medium border-b border-dark-border/50 pb-2 text-foreground hover:text-gold"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-lg font-medium border-b border-dark-border/50 pb-2 text-foreground hover:text-gold"
            >
              Contact
            </Link>
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="flex items-center justify-center gap-3 py-3 border border-dark-border rounded-none text-foreground hover:text-gold font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 text-gold" />
              <span>{PHONE}</span>
            </a>
            <Link href="/contact">
              <Button className="w-full bg-gold text-dark-bg font-bold tracking-wide hover:bg-gold-hover rounded-none uppercase py-6 border-none">
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
