import { Link } from "react-router-dom";
import { SitePage, PageHero } from "@/components/site/SitePage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ShieldCheck, HeartHandshake, Users, Sparkles, Globe2 } from "lucide-react";
import { useEffect } from "react";


const values = [
  { icon: ShieldCheck, title: "Transparency", desc: "Legally bound consultations, invoiced payments, complete financial clarity." },
  { icon: HeartHandshake, title: "Student-First", desc: "Every recommendation centered on the student's goals, fit and well-being." },
  { icon: Award, title: "Excellence", desc: "Continuously updated through research, fairs and university partnerships." },
  { icon: Users, title: "Lifelong Support", desc: "Mentorship that continues long after admission and through your career." },
];

function AboutPage() {
  useEffect(() => { document.title = 'About Us — Educapital Consultancy'; }, []);
  useEffect(() => { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); } m.setAttribute("content", 'Educapital Consultancy Pvt Ltd — 9+ years of guiding students to top universities in India and abroad with transparency and care.'); }, []);
  return (
    <SitePage>
      <PageHero eyebrow="Our Story" title="9+ Years of Shaping Student Futures" subtitle="Educapital Consultancy Private Limited has helped over 12,000 students discover the right course, the right college and the right career — in India and overseas." />
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary">Who We Are</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2015, Educapital Consultancy is a registered private limited company built on a single belief — every student deserves clear, honest and expert guidance on their education journey. We combine deep insight into university criteria, career trends and global opportunities to help families make informed decisions with confidence.
            </p>
            <p className="mt-3 text-muted-foreground">
              From India's top institutions to universities across 35+ countries, our certified counselors stand by you from the first conversation to the day you set foot on campus — and well beyond.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild className="gradient-accent text-accent-foreground"><Link to="/contact">Talk to a Counselor</Link></Button>
              <Button asChild variant="outline"><Link to="/study-abroad">Explore Destinations</Link></Button>
            </div>
          </div>
          <Card className="shadow-elegant gradient-hero text-primary-foreground border-0">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3"><Sparkles className="h-6 w-6 text-accent-glow" /><div className="font-display text-xl font-bold">Quick Facts</div></div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-primary-foreground/10 pb-2"><span>Founded</span><span className="font-bold">2015</span></li>
                <li className="flex justify-between border-b border-primary-foreground/10 pb-2"><span>Students Helped</span><span className="font-bold">12,000+</span></li>
                <li className="flex justify-between border-b border-primary-foreground/10 pb-2"><span>Countries Covered</span><span className="font-bold">35+</span></li>
                <li className="flex justify-between border-b border-primary-foreground/10 pb-2"><span>Partner Universities</span><span className="font-bold">150+</span></li>
                <li className="flex justify-between border-b border-primary-foreground/10 pb-2"><span>Visa Approval Rate</span><span className="font-bold">98%</span></li>
                <li className="flex justify-between"><span>GSTIN</span><span className="font-mono text-xs">27AAJCE6530H1ZK</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <Card key={v.title} className="hover:shadow-elegant hover:-translate-y-1 transition-all">
                <CardContent className="p-6">
                  <div className="h-12 w-12 grid place-items-center rounded-xl gradient-accent text-accent-foreground mb-4"><v.icon className="h-6 w-6" /></div>
                  <h3 className="font-display font-bold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Globe2 className="h-12 w-12 mx-auto text-accent" />
          <h2 className="font-display text-3xl font-bold text-primary mt-4">Ready to begin your journey?</h2>
          <p className="mt-3 text-muted-foreground">Book a free counseling session — we'll get back within 24 hours.</p>
          <Button asChild size="lg" className="mt-6 gradient-accent text-accent-foreground"><Link to="/contact">Book Free Counseling</Link></Button>
        </div>
      </section>
    </SitePage>
  );
}
export default AboutPage;
