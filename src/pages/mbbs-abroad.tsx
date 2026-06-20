import { Link } from "react-router-dom";
import { SitePage, PageHero } from "@/components/site/SitePage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Stethoscope } from "lucide-react";
import { useEffect } from "react";


const list = [
  { country: "Russia", flag: "🇷🇺", duration: "6 Years", tuition: "₹17–40 L", overall: "₹25–50 L", highlights: "25 NMC-approved universities, English medium, large Indian community." },
  { country: "Georgia", flag: "🇬🇪", badge: "Best Value", duration: "6 Years", tuition: "₹25 L+", overall: "₹30–45 L", highlights: "European standard, safe, no donation, WHO approved." },
  { country: "Kazakhstan", flag: "🇰🇿", duration: "6 Years", tuition: "₹20–30 L", overall: "₹30–40 L", highlights: "9 partner universities, strong clinical exposure, modern infra." },
  { country: "Kyrgyzstan", flag: "🇰🇬", duration: "6 Years", tuition: "₹17–18 L", overall: "₹25–30 L", highlights: "Lowest cost, NMC recognized, large Indian student community." },
  { country: "Uzbekistan", flag: "🇺🇿", duration: "6 Years", tuition: "₹17–20 L", overall: "₹28–30 L", highlights: "Emerging destination, excellent clinical training, WHO recognized." },
  { country: "Philippines", flag: "🇵🇭", duration: "5.5 Years", tuition: "₹25–35 L", overall: "₹35–45 L", highlights: "US-pattern MD program, English medium, strong USMLE pathway." },
];

function MbbsPage() {
  useEffect(() => { document.title = 'MBBS Abroad — NMC & WHO Approved Universities | Educapital'; }, []);
  useEffect(() => { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); } m.setAttribute("content", 'Affordable, quality MBBS abroad in Russia, Georgia, Kazakhstan, Kyrgyzstan, Uzbekistan and more — FMGE prep & visa support.'); }, []);
  return (
    <SitePage>
      <PageHero eyebrow="MBBS Abroad" title="NMC & WHO Approved Universities" subtitle="Affordable, quality medical education with end-to-end support: admission, visa, FMGE prep, airport pickup." />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["NMC & WHO Approved","FMGE Preparation","USMLE Guidance","Indian Mess","Visa Assistance","Airport Pickup"].map((c) => (
              <span key={c} className="text-xs bg-muted border rounded-full px-3 py-1.5 font-medium text-primary"><Check className="inline h-3 w-3 mr-1 text-accent" />{c}</span>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((m) => (
              <Card key={m.country} className="relative hover:shadow-elegant transition">
                {m.badge && <span className="absolute -top-2 right-4 gradient-accent text-accent-foreground text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">{m.badge}</span>}
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2"><span className="text-2xl">{m.flag}</span>{m.country}</h3>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-muted rounded-lg p-2"><div className="font-bold text-primary">{m.duration}</div><div className="text-muted-foreground">Duration</div></div>
                    <div className="bg-muted rounded-lg p-2"><div className="font-bold text-primary">{m.tuition}</div><div className="text-muted-foreground">Tuition</div></div>
                    <div className="bg-muted rounded-lg p-2"><div className="font-bold text-primary">{m.overall}</div><div className="text-muted-foreground">Total</div></div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{m.highlights}</p>
                  <Button asChild size="sm" className="mt-4 w-full gradient-accent text-accent-foreground"><Link to="/contact">Apply Now</Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Stethoscope className="h-12 w-12 mx-auto text-accent" />
          <h2 className="font-display text-3xl font-bold text-primary mt-4">Talk to an MBBS Counselor</h2>
          <p className="mt-3 text-muted-foreground">Free counseling — university shortlist, fee breakup, visa timeline.</p>
          <Button asChild size="lg" className="mt-6 gradient-accent text-accent-foreground"><Link to="/contact">Book Free Session</Link></Button>
        </div>
      </section>
    </SitePage>
  );
}
export default MbbsPage;
