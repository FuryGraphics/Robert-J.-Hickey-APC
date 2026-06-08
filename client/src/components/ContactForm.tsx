import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { EMAIL, PHONE } from "@/lib/site-data";

export default function ContactForm() {
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Free Case Consultation Request",
  )}&body=${encodeURIComponent(
    "Hello Robert,\n\nI would like to request a free, confidential case consultation.\n\nName:\nPhone:\nBrief description of my situation:\n",
  )}`;

  const telHref = `tel:${PHONE.replace(/[^\d+]/g, "")}`;

  return (
    <div className="space-y-6 bg-dark-card border border-dark-border p-8 md:p-10 shadow-2xl relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold"></div>

      <div className="space-y-2">
        <h3 className="font-serif text-2xl font-bold tracking-wide text-foreground">
          Request a Free Case Review
        </h3>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          Confidential & No Obligation
        </p>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        Reach out directly for a free, 100% confidential consultation. Click below to email Robert
        Hickey — describe your situation and he will respond promptly to discuss your defense.
      </p>

      {/* Email Button */}
      <Button
        asChild
        className="w-full bg-gold text-dark-bg font-bold uppercase tracking-widest hover:bg-gold-hover rounded-none py-6 transition-all active:scale-98 flex items-center justify-center gap-2"
      >
        <a href={mailtoHref}>
          <Mail className="w-4 h-4" />
          <span>Email Robert Hickey</span>
        </a>
      </Button>

      {/* Phone Button */}
      <Button
        asChild
        variant="outline"
        className="w-full border-gold text-gold bg-transparent font-bold uppercase tracking-widest hover:bg-gold hover:text-dark-bg rounded-none py-6 transition-all active:scale-98 flex items-center justify-center gap-2"
      >
        <a href={telHref}>
          <Phone className="w-4 h-4" />
          <span>Call {PHONE}</span>
        </a>
      </Button>

      <p className="text-[10px] text-center text-muted-foreground leading-relaxed">
        <strong>Privacy Guarantee:</strong> Your information is fully protected by attorney-client
        privilege and will never be shared with third parties.
      </p>
    </div>
  );
}
