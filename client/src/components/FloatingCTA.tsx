import { Phone } from "lucide-react";
import { PHONE } from "@/lib/site-data";

export default function FloatingCTA() {
  const cleanPhone = PHONE.replace(/\D/g, "");

  return (
    <a
      href={`tel:${cleanPhone}`}
      className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gold text-dark-bg font-bold px-5 py-4 rounded-full shadow-2xl hover:bg-gold-hover transition-all active:scale-95 duration-150 animate-bounce"
      style={{ animationDuration: "3s" }}
    >
      <Phone className="w-5 h-5 fill-dark-bg" />
      <span className="text-sm tracking-wide uppercase">Call Now</span>
    </a>
  );
}
