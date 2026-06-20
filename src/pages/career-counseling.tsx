import { Link } from "react-router-dom";
import { SitePage, PageHero } from "@/components/site/SitePage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, BookOpen, Target, TrendingUp } from "lucide-react";
import { useEffect } from "react";


const pillars = [
  { icon: Compass, title: "Interest & Aptitude", desc: "Discover the streams and roles that suit your personality and strengths." },
  { icon: Target, title: "Course & College Fit", desc: "Shortlist programs by ROI, ranking, location, scholarships and outcomes." },
  { icon: BookOpen, title: "Test & Application Plan", desc: "Personalized prep roadmap — SAT / IELTS / NEET / CAT etc." },
  { icon: TrendingUp, title: "Long-Term Mentorship", desc: "Ongoing guidance through college and into your first career steps." },
];

function CareerPage() {
  useEffect(() => { document.title = 'Career Counseling — Educapital Consultancy'; }, []);
  useEffect(() => { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); } m.setAttribute("content", 'Personalized career counseling — interests, aptitude, course and country fit. Free first session.'); }, []);
  return (
    <SitePage>
      <PageHero eyebrow="Career Counseling" title="The Right Course. The Right Career." subtitle="Certified advisors. Honest guidance. A clear path forward — start with a free session." />
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <Card key={p.title} className="text-center hover:shadow-elegant hover:-translate-y-1 transition-all">
              <CardContent className="p-6">
                <div className="mx-auto h-14 w-14 grid place-items-center rounded-2xl gradient-accent text-accent-foreground mb-4"><p.icon className="h-7 w-7" /></div>
                <h3 className="font-display font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="gradient-accent text-accent-foreground"><Link to="/contact">Book Free Session</Link></Button>
        </div>
      </section>
    </SitePage>
  );
}
export default CareerPage;
