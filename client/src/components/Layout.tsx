import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-foreground selection:bg-gold selection:text-dark-bg">
      <Header />
      <main className="flex-grow pt-[76px] lg:pt-[96px]">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
