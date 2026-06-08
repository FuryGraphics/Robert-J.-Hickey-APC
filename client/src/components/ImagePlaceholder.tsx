import { Image } from "lucide-react";

interface ImagePlaceholderProps {
  width: string;
  height: string;
  label: string;
  className?: string;
}

export default function ImagePlaceholder({
  width,
  height,
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative bg-neutral-900 border border-dark-border flex flex-col items-center justify-center p-6 text-center group overflow-hidden ${className}`}
      style={{ minWidth: width, minHeight: height }}
    >
      {/* Gold accent corner borders */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/40 group-hover:border-gold group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/40 group-hover:border-gold group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold/40 group-hover:border-gold group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/40 group-hover:border-gold group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>

      <Image className="w-10 h-10 text-gold/40 mb-3 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">
        {label}
      </span>
      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
        Dimensions: {width} x {height}
      </span>
      <p className="text-[10px] text-gold/60 mt-3 max-w-[200px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click here to replace with your own professional photo.
      </p>
    </div>
  );
}
