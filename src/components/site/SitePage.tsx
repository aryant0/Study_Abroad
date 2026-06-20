import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SitePage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-20 md:py-28 text-center">
        {eyebrow && <div className="inline-block text-xs tracking-widest uppercase text-accent-glow font-semibold mb-4">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-5xl font-bold max-w-3xl mx-auto">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto opacity-85">{subtitle}</p>}
      </div>
    </section>
  );
}