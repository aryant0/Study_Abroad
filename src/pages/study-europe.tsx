import { Link } from "react-router-dom";
import { SitePage, PageHero } from "@/components/site/SitePage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useEffect } from "react";


const countries = [
  { flag: "🇩🇪", name: "Germany", note: "FREE tuition at public universities" },
  { flag: "🇫🇷", name: "France", note: "Low tuition + cultural diversity" },
  { flag: "🇮🇹", name: "Italy", note: "Affordable, English-taught programs" },
  { flag: "🇮🇪", name: "Ireland", note: "Tech & pharma hub, 2-yr stay back" },
  { flag: "🇳🇱", name: "Netherlands", note: "English-friendly, top tech programs" },
  { flag: "🇦🇹", name: "Austria", note: "Low fees, central Europe location" },
  { flag: "🇭🇺", name: "Hungary", note: "Affordable medical + engineering" },
  { flag: "🇫🇮", name: "Finland", note: "World-class STEM programs" },
  { flag: "🇪🇸", name: "Spain", note: "Vibrant student life, global MBA" },
  { flag: "🇸🇪", name: "Sweden", note: "Innovation & sustainability focus" },
  { flag: "🇩🇰", name: "Denmark", note: "Top design and engineering" },
  { flag: "🇨🇭", name: "Switzerland", note: "Hospitality & finance leader" },
];

function EuropePage() {
  useEffect(() => { document.title = 'Study in Europe — Free Tuition Options | Educapital'; }, []);
  useEffect(() => { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); } m.setAttribute("content", 'Free tuition at German public universities. 18+ European countries with post-study work visas and PR pathways.'); }, []);
  return (
    <SitePage>
      <PageHero eyebrow="Study in Europe" title="Free Tuition & PR Pathways" subtitle="18+ European countries — Germany, France, Italy, Ireland, Netherlands and more. Scholarships up to 100%." />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["Free Tuition","Post-Study Work Visa","PR Pathways","100% Scholarships","Low Cost of Living","English-taught Programs"].map((t) => (
              <span key={t} className="text-xs bg-muted border rounded-full px-3 py-1.5 font-medium text-primary"><Check className="inline h-3 w-3 mr-1 text-accent" />{t}</span>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map((c) => (
              <Card key={c.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <span className="text-4xl">{c.flag}</span>
                  <div>
                    <h3 className="font-display font-bold text-primary">{c.name}</h3>
                    <p className="text-sm text-muted-foreground">{c.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-accent text-accent-foreground"><Link to="/contact">Explore Programs</Link></Button>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
export default EuropePage;
