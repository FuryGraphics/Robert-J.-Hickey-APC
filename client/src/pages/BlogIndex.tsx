import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "wouter";
import { BookOpen, Calendar, ArrowRight, User } from "lucide-react";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "What to Do If You're Arrested in California",
    slug: "what-to-do-if-arrested-in-california",
    excerpt: "Knowing your rights during an arrest can make or break your criminal defense case. Learn the critical steps to protect yourself immediately.",
    date: "May 15, 2026",
    author: "Robert J. Hickey",
    category: "Criminal Defense Rights"
  },
  {
    title: "First DUI in California: Penalties, Hearings, and What to Expect",
    slug: "first-dui-california-penalties",
    excerpt: "Facing a first-offense DUI in Southern California? Here is a breakdown of potential jail time, fines, license suspension, and the crucial 10-day DMV rule.",
    date: "April 28, 2026",
    author: "Robert J. Hickey",
    category: "DUI Defense"
  },
  {
    title: "How to Get a Criminal Record Expunged in California",
    slug: "how-to-get-criminal-record-expunged-california",
    excerpt: "Clear your past under Penal Code 1203.4. Discover if you qualify for a California expungement and how it can restore your professional opportunities.",
    date: "March 12, 2026",
    author: "Robert J. Hickey",
    category: "Expungements"
  }
];

export default function BlogIndex() {
  const breadcrumbs = [{ name: "Legal Blog" }];

  return (
    <Layout>
      <SEO
        title="California Criminal Defense Blog | Robert J. Hickey"
        description="Stay informed on California criminal laws, DUI procedures, defense strategies, and rights with articles from experienced defense attorney Robert J. Hickey."
        canonicalUrl="https://www.topdefense.com/blog"
      />

      {/* Hero Section */}
      <section className="bg-neutral-950 py-12 border-b border-dark-border">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
              Legal Blog &{" "}
              <span className="text-gold italic relative inline-block">
                Defense Resources
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gold"></span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
              Practical Advice, Law Updates, and Rights Education from Robert Hickey
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Blog Posts Column */}
            <div className="lg:col-span-8 space-y-12">
              {BLOG_POSTS.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.1}>
                  <article className="bg-neutral-950 border border-dark-border p-8 hover:border-gold/30 transition-all duration-300 relative group">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-dark-border group-hover:bg-gold transition-colors"></div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
                      <span className="text-gold">{post.category}</span>
                      <span className="text-dark-border">|</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="text-dark-border">|</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        By {post.author}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gold font-bold text-xs uppercase tracking-widest hover:underline flex items-center gap-1.5"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </article>
                </FadeIn>
              ))}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              <FadeIn delay={0.2}>
                <div className="bg-neutral-950 border border-dark-border p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-gold border-b border-dark-border pb-2">
                    About the Author
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Robert J. Hickey is the founder of the Law Office of Robert J. Hickey, APC. With over 30 years of criminal defense experience, he publishes resources to help Californians understand their constitutional rights and navigate the criminal justice system.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-neutral-950 border border-dark-border p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-gold border-b border-dark-border pb-2">
                    Urgent Legal Help
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    If you or a loved one has been arrested, do not wait. Immediate legal intervention is vital.
                  </p>
                  <Link href="/contact">
                    <span className="bg-gold text-dark-bg font-bold text-center block py-3 uppercase tracking-wider text-xs hover:bg-gold-hover transition-colors cursor-pointer">
                      Request Free Consultation
                    </span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
