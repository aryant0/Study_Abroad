import { Link } from "react-router-dom";
import { SitePage, PageHero } from "@/components/site/SitePage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Scale, Briefcase, Palette, Stethoscope, Building2, ArrowRight, MapPin } from "lucide-react";
import { useEffect } from "react";


const cats = [
  { icon: GraduationCap, name: "Engineering", desc: "B.Tech, M.Tech across IITs, NITs, BITS, top private universities." },
  { icon: Scale, name: "Law", desc: "BA LLB, LLM at NLUs and premier law colleges via CLAT, AILET." },
  { icon: Briefcase, name: "BBA / BCA", desc: "Management and computer applications at India's top institutes." },
  { icon: Palette, name: "Design", desc: "NID, NIFT, Pearl, Srishti — UI/UX, fashion, product, communication." },
  { icon: Stethoscope, name: "Medical (NEET)", desc: "Govt, Private, Deemed and AIIMS-JIPMER admissions." },
  { icon: Building2, name: "MBA / PGDM", desc: "IIMs, ISB, XLRI, FMS — through CAT, XAT, GMAT and direct admissions." },
];

const states = ["Maharashtra","Karnataka","Tamil Nadu","Delhi NCR","Telangana","Uttar Pradesh","West Bengal","Gujarat","Rajasthan","Punjab","Kerala","Madhya Pradesh"];
const other = ["NEET PG","Global Programs (BBA / MBA / Tech)","Online Programs","Executive MBA","PhD Program","Events"];

function StudyIndia() {
  useEffect(() => { document.title = 'Study in India — Top Universities | Educapital'; }, []);
  useEffect(() => { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); } m.setAttribute("content", "Admission guidance for Engineering, Law, BBA/BCA, Design, Medical (NEET), MBA/PGDM across India's top universities."); }, []);
  return (
    <SitePage>
      <PageHero eyebrow="Study in India" title="Top Universities Across Every Stream" subtitle="From IITs to NLUs, IIMs to AIIMS — we match you with the best-fit Indian institution for your goals." />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">Course Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.map((c) => (
              <Card key={c.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all">
                <CardContent className="p-6">
                  <div className="h-12 w-12 grid place-items-center rounded-xl gradient-accent text-accent-foreground mb-4"><c.icon className="h-6 w-6" /></div>
                  <h3 className="font-display text-lg font-bold text-primary">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">Explore <ArrowRight className="h-4 w-4" /></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center">State-Wise Listings</h2>
          <p className="text-center text-muted-foreground mt-2">Explore top colleges in each state across every category.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {states.map((s) => (
              <Link key={s} to="/contact" className="bg-background border hover:border-accent rounded-xl p-4 flex items-center gap-2 shadow-card hover:shadow-elegant transition">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-medium text-primary text-sm">{s}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">More Programs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {other.map((o) => (
              <Link key={o} to="/contact" className="rounded-xl border p-5 hover:border-accent hover:shadow-card transition flex items-center justify-between">
                <span className="font-semibold text-primary">{o}</span>
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="gradient-accent text-accent-foreground"><Link to="/contact">Talk to a Counselor</Link></Button>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
export default StudyIndia;
