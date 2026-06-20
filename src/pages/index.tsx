import { Link } from "react-router-dom";
import { SitePage } from "@/components/site/SitePage";
import { RegisterModal } from "@/components/site/RegisterModal";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  GraduationCap, Globe2, Scale, Palette, Stethoscope, Briefcase, Building2,
  Compass, Award, FileCheck2, Plane, HeartHandshake, ShieldCheck, Sparkles,
  Users, MapPin, Phone, Mail, Star, Clock, BookOpen, Banknote, ArrowRight, Check,
} from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import aboutImg from "@/assets/about-counseling.jpg";


const countryChips = ["🇬🇧 UK", "🇺🇸 USA", "🇨🇦 Canada", "🇦🇺 Australia", "🇩🇪 Germany", "🇳🇿 New Zealand", "🇮🇪 Ireland", "🇫🇷 France"];

const stats = [
  { value: 92, suffix: "%", label: "Placement Success Rate" },
  { value: 95, suffix: "%", label: "Student Satisfaction" },
  { value: 98, suffix: "%", label: "Visa Approval Rate" },
  { value: 9000, suffix: "+", label: "Overseas Success Stories" },
  { value: 12000, suffix: "+", label: "Total Admissions" },
  { value: 150, suffix: "+", label: "Partner Universities" },
  { value: 35, suffix: "+", label: "Countries Covered" },
];

const highlights = [
  { icon: Compass, title: "Expert Career Guidance", desc: "Tailored counseling with certified advisors who know your goals." },
  { icon: Building2, title: "University Selection", desc: "Match with 150+ partner universities across India and abroad." },
  { icon: Award, title: "Scholarship Guidance", desc: "Exclusive scholarships and funding support up to 100%." },
  { icon: FileCheck2, title: "Visa Documentation", desc: "Complete visa support with a proven 98% approval rate." },
];

const mvv = [
  { icon: HeartHandshake, title: "Mission", desc: "Student-centric and supportive — empowering students to make informed academic decisions with both guidance and opportunity." },
  { icon: Sparkles, title: "Vision", desc: "To be a trusted global partner for students — transforming ambitions into success stories with care and expertise." },
  { icon: ShieldCheck, title: "Values", desc: "Transparency, integrity and a relentless commitment to student success at every step of the journey." },
];

const services = [
  { icon: Compass, title: "Career Counseling & Course Selection", desc: "Personalized guidance based on interests, goals, academic profile and budget." },
  { icon: GraduationCap, title: "Admission Assistance", desc: "MBBS, MD, MS, B.Tech, BA LLB, BBA, B.Arch, BCA, MBA/PGDM, MCA, PhD, Pharmacy & more." },
  { icon: Banknote, title: "College Analysis & Scholarships", desc: "Detailed evaluation to choose the right institution and maximize financial aid." },
  { icon: FileCheck2, title: "Hassle-Free Documentation", desc: "Applications, SOP, LOR, essays and complete admission paperwork." },
  { icon: Plane, title: "Study Abroad & Visa Guidance", desc: "End-to-end international admissions, visa and pre-departure prep. 98% visa success." },
  { icon: BookOpen, title: "Ongoing Career Mentorship", desc: "Continuous guidance during and after the course for long-term success." },
];

const categories = [
  { icon: GraduationCap, title: "Engineering", desc: "Top universities blending innovation, research and real-world tech learning." },
  { icon: Scale, title: "Law", desc: "Premier law universities emphasizing critical thinking, ethics and global awareness." },
  { icon: Briefcase, title: "BBA / BCA", desc: "Programs blending management principles with digital innovation." },
  { icon: Palette, title: "Design", desc: "Premier design institutes nurturing creativity and technical skill." },
  { icon: Stethoscope, title: "Medical (NEET / MBBS)", desc: "Govt, Private, Deemed & AIIMS-JIPMER — excellence and compassion." },
  { icon: Building2, title: "MBA / PGDM", desc: "Globally recognized business schools building leadership and strategy." },
];

const destinations = [
  { flag: "🇬🇧", name: "United Kingdom", unis: "130+ Universities", intake: "Sep / Jan", top: "Oxford • Cambridge • Imperial • UCL", visa: "PSW: 2–3 yrs" },
  { flag: "🇺🇸", name: "United States", unis: "4,000+ Universities", intake: "Aug / Jan", top: "MIT • Harvard • Stanford • Columbia", visa: "OPT: 1–3 yrs" },
  { flag: "🇨🇦", name: "Canada", unis: "100+ Universities", intake: "Sep / Jan", top: "UofT • UBC • McGill • McMaster", visa: "PGWP: up to 3 yrs" },
  { flag: "🇦🇺", name: "Australia", unis: "40+ Universities", intake: "Feb / Jul", top: "ANU • Melbourne • Sydney • UNSW", visa: "PSW: 2–4 yrs" },
  { flag: "🇩🇪", name: "Germany", unis: "400+ Universities", intake: "Oct / Apr", top: "TU Munich • Heidelberg • Humboldt", visa: "Stay: 18 months" },
  { flag: "🇳🇿", name: "New Zealand", unis: "8 Universities", intake: "Feb / Jul", top: "Auckland • Otago • Victoria", visa: "PSW: 3 yrs" },
  { flag: "🇮🇪", name: "Ireland", unis: "30+ Institutions", intake: "Sep / Jan", top: "UCD • Trinity • UCC • DCU", visa: "Stay: up to 2 yrs" },
  { flag: "🇫🇷", name: "France", unis: "250+ Universities", intake: "Sep / Feb", top: "Sorbonne • Sciences Po • HEC Paris", visa: "PSW: 1–2 yrs" },
  { flag: "🇮🇹", name: "Italy", unis: "90+ Universities", intake: "Oct / Mar", top: "Bologna • Milan • Sapienza Rome", visa: "Low tuition" },
];

const mbbs = [
  { country: "Russia", duration: "6 Years", tuition: "₹17–40 L", overall: "₹25–50 L", highlights: "25 NMC-approved universities, large Indian community, high FMGE pass rate." },
  { country: "Georgia", badge: "Best Value", duration: "6 Years", tuition: "₹25 L+", overall: "₹30–45 L", highlights: "European standard, safe & student-friendly, no donation, WHO approved." },
  { country: "Kazakhstan", duration: "6 Years", tuition: "₹20–30 L", overall: "₹30–40 L", highlights: "9 partner universities, good clinical exposure, modern infrastructure." },
  { country: "Kyrgyzstan", duration: "6 Years", tuition: "₹17–18 L", overall: "₹25–30 L", highlights: "Lowest cost, NMC recognized, large Indian student community." },
  { country: "Uzbekistan", duration: "6 Years", tuition: "₹17–20 L", overall: "₹28–30 L", highlights: "Emerging destination, excellent clinical training, WHO recognized." },
];

const whyUs = [
  { icon: Users, title: "Expert & Personalized", desc: "Skilled counselors updated through research, global education fairs and institutional partnerships." },
  { icon: ShieldCheck, title: "Reliable & Transparent", desc: "Legally bound consultations, invoiced payments and complete financial clarity." },
  { icon: HeartHandshake, title: "Lifelong Mentorship", desc: "Support continues beyond admission, throughout your academic and career journey." },
  { icon: Award, title: "Certified & Trustworthy", desc: "Registered Pvt Ltd (GSTIN: 27AAJCE6530H1ZK), ethical practices, full transparency." },
];

const journey = [
  { step: "01", title: "Free Counseling", desc: "Book a free session to discuss profile, interests and goals." },
  { step: "02", title: "University Selection", desc: "Shortlist best-fit institutions based on budget, scores and goals." },
  { step: "03", title: "Applications & Docs", desc: "Full support with applications, SOPs, LORs, essays and forms." },
  { step: "04", title: "Visa & Departure", desc: "End-to-end visa guidance, pre-departure briefing and arrival support." },
];

const testimonials = [
  { name: "Ananya Sharma", course: "B.Tech CSE, PES University Bangalore", quote: "Educapital made the whole admission process effortless. The counselors knew exactly which colleges suited my JEE rank.", date: "Aug 2025" },
  { name: "Rohan Mehta", course: "MBA, ISB Hyderabad", quote: "From shortlisting to interview prep — they were with me at every step. Got my dream B-school admit!", date: "Jun 2025" },
  { name: "Dr. Priya Iyer", course: "MBBS, Tbilisi State Medical University, Georgia", quote: "Their MBBS abroad team handled everything — admission, visa, even airport pickup. Truly stress-free.", date: "Sep 2024" },
  { name: "Kabir Singh", course: "MS in Data Science, University of Toronto", quote: "Got admits from 4 Canadian universities and a partial scholarship. The SOP help was outstanding.", date: "Jan 2025" },
  { name: "Meera Joshi", course: "MS Mechanical, TU Munich (Free Tuition)", quote: "I never thought I could study at a top German university for free. Educapital made it real.", date: "Oct 2024" },
  { name: "Aarav Patil", course: "BA LLB, ILS Law College Pune", quote: "The team's knowledge of CLAT colleges and counseling rounds saved me so much time and stress.", date: "Jul 2025" },
];

const faqs = [
  { q: "Do I need IELTS or TOEFL to study abroad?", a: "Most universities in UK, Canada, Australia and USA require IELTS/TOEFL. We offer test prep guidance and also list MOI/waiver-based universities where you can apply without IELTS." },
  { q: "Are scholarships really available?", a: "Yes — Chevening (UK), DAAD (Germany), Canada-India scholarships, Australia Awards, and many university-specific merit & need-based awards. We help you target and apply." },
  { q: "What is the student visa process and how long does it take?", a: "It varies by country (2–8 weeks typically). We prepare your financial docs, SOP, interview practice and application end-to-end, with a 98% approval track record." },
  { q: "Is MBBS abroad valid in India?", a: "Yes — degrees from NMC & WHO recognized universities are valid. You'll need to clear the FMGE / NExT exam, for which we provide preparation support." },
  { q: "When should I start the application process?", a: "Ideally 12–18 months before your intended intake. Earlier start = better universities, scholarships and visa slots." },
  { q: "What documents are needed for the first counseling session?", a: "Just your academic transcripts (10th, 12th, degree if any), test scores if available, and a rough idea of your goal. Counseling is free." },
  { q: "Should I study in India or abroad?", a: "Depends on your career goals, budget and target industry. Our counselors help you evaluate ROI, lifestyle, immigration pathways and academic fit." },
  { q: "Do you help with education loans and financial planning?", a: "Yes — we partner with leading banks and NBFCs and guide you on collateral / non-collateral loans, forex and tuition payment timelines." },
];

function HomePage() {
  useEffect(() => { document.title = 'Educapital Consultancy — Study in India & Abroad | Admissions, MBBS, Visa'; }, []);
  useEffect(() => { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); } m.setAttribute("content", 'Educapital Consultancy Pvt Ltd — Expert career counseling, admissions in India & overseas, MBBS abroad, visa & scholarship guidance. 98% visa success.'); }, []);
  return (
    <SitePage>
      <Hero />
      <About />
      <MVV />
      <Services />
      <Categories />
      <Destinations />
      <EuropeBanner />
      <MBBS />
      <WhyUs />
      <Journey />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <RegisterModal />
    </SitePage>
  );
}

function Hero() {
  return (
    <section className="relative gradient-hero text-primary-foreground overflow-hidden">
      <img src={heroImg} alt="Graduating students" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="relative container mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-accent-glow" /> 9+ years • 12,000+ admissions
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mt-5">
            Shaping Futures,<br />
            <span className="text-gradient-accent">One Student</span> at a Time
          </h1>
          <p className="mt-5 text-lg opacity-85 max-w-xl">
            Whether in India or overseas, we help students find the right course, the right college and the right career — from counseling to admissions and visas.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gradient-accent text-accent-foreground hover:opacity-90 shadow-elegant">
              <Link to="/contact">Book Free Counseling <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="#destinations">Explore Destinations</a>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm opacity-90">
            <Star className="h-4 w-4 text-accent-glow fill-accent-glow" />
            <span>Trusted by <strong>5,000+ students</strong> worldwide</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {countryChips.map((c) => (
              <span key={c} className="text-xs bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5">{c}</span>
            ))}
            <span className="text-xs bg-accent/90 text-accent-foreground rounded-full px-3 py-1.5 font-semibold">+ 12 more</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur p-4 lg:p-5 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-accent-glow">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[11px] md:text-xs mt-1 opacity-85">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && <div className="text-xs tracking-widest uppercase font-semibold text-accent mb-3">{eyebrow}</div>}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-widest uppercase font-semibold text-accent mb-3">Who We Are</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">About Educapital Consultancy</h2>
          <p className="mt-5 text-muted-foreground">
            Educapital Consultancy Private Limited is a premier education consultancy guiding students toward success in India and abroad. From career counseling and course selection to end-to-end admission and visa support, we ensure a smooth, transparent and well-informed higher education journey.
          </p>
          <p className="mt-3 text-muted-foreground">
            As a registered private limited company, we stand for transparency, reliability and quality — combining years of expertise with deep insight into university criteria, career trends and global opportunities.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-lg gradient-accent text-accent-foreground shrink-0">
                  <h.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-primary">{h.title}</div>
                  <div className="text-sm text-muted-foreground">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <Button asChild className="mt-8 bg-primary hover:bg-primary-glow">
            <Link to="/about">Know More About Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="relative">
          <img src={aboutImg} alt="Student counseling" width={1200} height={896} loading="lazy" className="rounded-3xl shadow-elegant" />
          <div className="absolute -bottom-6 -left-4 bg-background border rounded-2xl shadow-card p-4 hidden md:flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl gradient-accent grid place-items-center text-accent-foreground">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display font-bold text-primary text-lg">Since 2015</div>
              <div className="text-xs text-muted-foreground">9+ years of excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MVV() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        {mvv.map((m) => (
          <Card key={m.title} className="border-0 shadow-card hover:-translate-y-1 transition-transform">
            <CardContent className="p-7">
              <div className="h-12 w-12 grid place-items-center rounded-xl gradient-accent text-accent-foreground mb-4">
                <m.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="What We Do" title="Our Services" sub="A complete suite of services for your higher-education journey — in India and overseas." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.title} className="group border hover:border-accent hover:shadow-elegant transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary text-primary-foreground group-hover:gradient-accent group-hover:text-accent-foreground transition mb-4">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="india" className="py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Study in India" title="Explore Course Categories" sub="Top universities across Engineering, Law, Design, Medical, MBA and more — state-wise lists available." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Card key={c.title} className="overflow-hidden group hover:shadow-elegant transition">
              <div className="h-32 gradient-hero relative">
                <div className="absolute inset-0 grid place-items-center">
                  <c.icon className="h-14 w-14 text-accent-glow" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <Link to="/study-india" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Study Abroad" title="Explore Your Dream Destination" sub="35+ countries supported. Expert admission, scholarship and visa guidance." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((d) => (
            <Card key={d.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{d.flag}</span>
                  <div>
                    <h3 className="font-display font-bold text-primary">{d.name}</h3>
                    <div className="text-xs text-muted-foreground">{d.unis}</div>
                  </div>
                </div>
                <div className="mt-4 space-y-1.5 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-3.5 w-3.5" /> Intake: {d.intake}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Building2 className="h-3.5 w-3.5" /> {d.top}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Plane className="h-3.5 w-3.5" /> {d.visa}</div>
                </div>
                <Button asChild size="sm" className="mt-4 w-full gradient-accent text-accent-foreground">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
          <Card className="gradient-hero text-primary-foreground hover:-translate-y-1 transition-all">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <Globe2 className="h-12 w-12 text-accent-glow" />
              <h3 className="font-display font-bold text-xl mt-3">+20 More Countries</h3>
              <p className="text-sm opacity-85 mt-1">Europe, Asia, Middle East & beyond.</p>
              <Button asChild className="mt-4 bg-accent text-accent-foreground hover:opacity-90">
                <Link to="/study-abroad">View All</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function EuropeBanner() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-hero text-primary-foreground p-8 md:p-12 shadow-elegant">
          <div className="absolute -top-12 -right-12 text-[200px] opacity-10">🇪🇺</div>
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="text-xs tracking-widest uppercase font-semibold text-accent-glow">Spotlight</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                Study in Europe — <span className="text-gradient-accent">FREE Tuition</span> at German Public Universities
              </h2>
              <p className="mt-3 opacity-85 max-w-2xl">
                18+ countries: Germany, France, Italy, Ireland, Netherlands, Austria, Hungary, Finland & more. Post-study work visas, PR pathways and scholarships up to 100%.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Free Tuition", "PR Pathways", "100% Scholarships", "PSW Visa", "Safe & Affordable"].map((t) => (
                  <span key={t} className="text-xs bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <Check className="h-3 w-3" /> {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <Button asChild size="lg" className="w-full gradient-accent text-accent-foreground hover:opacity-90 shadow-elegant">
                <Link to="/study-europe">Explore Europe Programs <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MBBS() {
  return (
    <section id="mbbs" className="py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="MBBS Abroad" title="NMC & WHO Approved Universities" sub="Affordable, quality medical education with end-to-end student support." />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["NMC & WHO Approved", "FMGE Preparation", "USMLE Guidance", "Indian Mess Facility", "Visa Assistance", "Airport Pickup"].map((c) => (
            <span key={c} className="text-xs bg-background border rounded-full px-3 py-1.5 font-medium text-primary shadow-card">
              <Check className="inline h-3 w-3 mr-1 text-accent" /> {c}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mbbs.map((m) => (
            <Card key={m.country} className="relative hover:shadow-elegant transition">
              {m.badge && (
                <span className="absolute -top-2 right-4 gradient-accent text-accent-foreground text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-card">
                  {m.badge}
                </span>
              )}
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-accent" /> {m.country}
                </h3>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-muted rounded-lg p-2">
                    <div className="font-bold text-primary">{m.duration}</div>
                    <div className="text-muted-foreground">Duration</div>
                  </div>
                  <div className="bg-muted rounded-lg p-2">
                    <div className="font-bold text-primary">{m.tuition}</div>
                    <div className="text-muted-foreground">Tuition</div>
                  </div>
                  <div className="bg-muted rounded-lg p-2">
                    <div className="font-bold text-primary">{m.overall}</div>
                    <div className="text-muted-foreground">Total</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{m.highlights}</p>
                <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                  <Link to="/mbbs-abroad">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg" className="gradient-accent text-accent-foreground">
            <Link to="/mbbs-abroad">View All MBBS Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Why Educapital" title="Why Students Choose Us" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((w) => (
            <Card key={w.title} className="text-center hover:shadow-elegant hover:-translate-y-1 transition-all">
              <CardContent className="p-6">
                <div className="mx-auto h-14 w-14 grid place-items-center rounded-2xl gradient-hero text-primary-foreground mb-4">
                  <w.icon className="h-7 w-7 text-accent-glow" />
                </div>
                <h3 className="font-display font-bold text-primary">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="py-20 md:py-24 gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs tracking-widest uppercase font-semibold text-accent-glow mb-3">Your Journey</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">4 Simple Steps to Your Dream University</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          {journey.map((j, i) => (
            <div key={j.step} className="relative">
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur rounded-2xl p-6 h-full">
                <div className="font-display text-5xl font-bold text-accent-glow opacity-50">{j.step}</div>
                <h3 className="font-display text-xl font-bold mt-2">{j.title}</h3>
                <p className="text-sm opacity-85 mt-2">{j.desc}</p>
              </div>
              {i < journey.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-accent-glow" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Success Stories" title="What Our Students Say" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card key={t.name} className="hover:shadow-elegant transition">
              <CardContent className="p-6">
                <div className="flex gap-0.5 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent" />)}
                </div>
                <p className="mt-3 text-sm text-foreground italic">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t">
                  <div className="h-11 w-11 rounded-full gradient-accent text-accent-foreground grid place-items-center font-display font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-primary text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.course}</div>
                  </div>
                  <div className="text-[10px] text-muted-foreground">{t.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = Array.from({ length: 12 }).map((_, i) => `https://images.unsplash.com/photo-${[
    "1517486808906-6ca8b3f04846","1541339907198-e08756dedf3f","1517048676732-d65bc937f952",
    "1571260899304-425eee4c7efc","1523240795612-9a054b0db644","1607799279861-4dd421887fb3",
    "1523240795612-9a054b0db644","1556761175-5973dc0f32e7","1503676260728-1c00da094a0b",
    "1543269865-cbf427effbad","1581726690015-c9861fa5057f","1517245386807-bb43f82c33c4",
  ][i]}?w=600&h=400&fit=crop`);
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Gallery" title="Events & Student Highlights" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl shadow-card group">
              <img src={src} alt={`Gallery ${i+1}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle eyebrow="FAQs" title="Questions, Answered" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! We'll contact you within 24 hours.");
    }, 700);
  };
  return (
    <section id="contact" className="py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Get in Touch" title="Start Your Journey Today" sub="Book a free counseling session — our advisors respond within 24 hours." />
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-elegant">
            <CardContent className="p-6 md:p-8">
              <form className="grid md:grid-cols-2 gap-4" onSubmit={onSubmit}>
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required maxLength={80} />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" required maxLength={15} />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required maxLength={120} />
                </div>
                <div className="grid gap-1.5">
                  <Label>Gender</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-1.5">
                  <Label>Service Interested In</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                    <SelectContent>
                      {["Study in India","Study Abroad","MBBS Abroad","Study in Europe","Career Counseling","Global Programs","Online Programs"].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-1.5">
                  <Label>Course Interested In</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select course" /></SelectTrigger>
                    <SelectContent>
                      {["Engineering","Law","BBA/BCA","Design","Medical","MBA/PGDM","B.Arch","Hotel Management","PhD"].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-1.5 md:col-span-2">
                  <Label htmlFor="dest">Preferred Destination / State</Label>
                  <Input id="dest" placeholder="e.g. Canada, or Maharashtra" maxLength={120} />
                </div>
                <div className="grid gap-1.5 md:col-span-2">
                  <Label htmlFor="msg">Message / Query</Label>
                  <Textarea id="msg" rows={4} maxLength={1000} />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" size="lg" disabled={submitting} className="w-full gradient-accent text-accent-foreground hover:opacity-90 shadow-card">
                    {submitting ? "Sending..." : "Send Enquiry"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card className="gradient-hero text-primary-foreground border-0 shadow-elegant">
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-70">Phone / WhatsApp</div>
                  <a href="tel:+919142543546" className="flex items-center gap-2 mt-1 font-display text-lg font-bold">
                    <Phone className="h-5 w-5 text-accent-glow" /> +91 91425 43546
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-70">Email</div>
                  <a href="mailto:info@educapitalconsultancy.com" className="flex items-center gap-2 mt-1 font-medium break-all">
                    <Mail className="h-5 w-5 text-accent-glow shrink-0" /> info@educapitalconsultancy.com
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-70">Office</div>
                  <div className="flex items-start gap-2 mt-1 text-sm opacity-90">
                    <MapPin className="h-5 w-5 text-accent-glow mt-0.5 shrink-0" />
                    2705-W/38, Lodha Amara, Thane, Maharashtra – 400607, India
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-70">Office Hours</div>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <Clock className="h-5 w-5 text-accent-glow" /> Mon–Sat, 9 AM – 7 PM
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="rounded-2xl overflow-hidden shadow-card border aspect-video">
              <iframe
                title="Educapital office map"
                src="https://www.google.com/maps?q=Lodha+Amara+Thane+Maharashtra+400607&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
