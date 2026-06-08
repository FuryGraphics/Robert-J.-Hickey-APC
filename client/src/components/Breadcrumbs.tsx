import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-6 overflow-x-auto whitespace-nowrap py-1">
      <Link href="/" className="hover:text-gold flex items-center gap-1 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-dark-border" />
            {isLast || !item.url ? (
              <span className="text-gold font-semibold max-w-[200px] truncate">{item.name}</span>
            ) : (
              <Link href={item.url} className="hover:text-gold transition-colors">
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
