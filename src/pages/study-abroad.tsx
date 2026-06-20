import { Link } from "react-router-dom";
import { SitePage, PageHero } from "@/components/site/SitePage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Clock, Plane } from "lucide-react";
import { useEffect } from "react";


const all = [
  { flag: "🇬🇧", name: "United Kingdom", unis: "130+ Universities", intake: "Sep / Jan", top: "Oxford • Cambridge • Imperial", visa: "PSW: 2–3 yrs" },
  { flag: "🇺🇸", name: "United States", unis: "4,000+ Universities", intake: "Aug / Jan", top: "MIT • Harvard • Stanford", visa: "OPT: 1–3 yrs" },
  { flag: "🇨🇦", name: "Canada", unis: "100+ Universities", intake: "Sep / Jan", top: "UofT • UBC • McGill", visa: "PGWP: up to 3 yrs" },
  { flag: "🇦🇺", name: "Australia", unis: "40+ Universities", intake: "Feb / Jul", top: "ANU • Melbourne • UNSW", visa: "PSW: 2–4 yrs" },
  { flag: "🇩🇪", name: "Germany", unis: "400+ Universities", intake: "Oct / Apr", top: "TU Munich • Heidelberg", visa: "Stay: 18 months" },
  { flag: "🇳🇿", name: "New Zealand", unis: "8 Universities", intake: "Feb / Jul", top: "Auckland • Otago", visa: "PSW: 3 yrs" },
  { flag: "🇮🇪", name: "Ireland", unis: "30+ Institutions", intake: "Sep / Jan", top: "UCD • Trinity", visa: "Stay: 2 yrs" },
  { flag: "🇫🇷", name: "France", unis: "250+ Universities", intake: "Sep / Feb", top: "Sorbonne • HEC Paris", visa: "PSW: 1–2 yrs" },
  { flag: "🇮🇹", name: "Italy", unis: "90+ Universities", intake: "Oct / Mar", top: "Bologna • Sapienza", visa: "Low tuition" },
  { flag: "🇳🇱", name: "Netherlands", unis: "55+ Institutions", intake: "Sep / Feb", top: "TU Delft • Amsterdam", visa: "Orientation Year" },
  { flag: "🇸🇬", name: "Singapore", unis: "Top Asia hub", intake: "Aug / Jan", top: "NUS • NTU", visa: "Work pass options" },
  { flag: "🇦🇪", name: "UAE", unis: "Regional hub", intake: "Sep / Jan", top: "NYU AD • Khalifa", visa: "Job opportunities" },
];

function StudyAbroad() {
  useEffect(() => { document.title = 'Study Abroad — UK, USA, Canada & 35+ Countries | Educapital'; }, []);
  useEffect(() => { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); } m.setAttribute("content", 'Expert admission and visa guidance for UK, USA, Canada, Australia, Germany, Ireland and 30+ more countries. 98% visa success.'); }, []);
  return (
    <SitePage>
      <PageHero eyebrow="Study Abroad" title="Your Global Education, Our Expertise" subtitle="35+ countries. 150+ partner universities. From application to airport pickup — we've got you." />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {all.map((d) => (
              <Card key={d.name} className="hover:shadow-elegant hover:-translate-y-1 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3"><span className="text-4xl">{d.flag}</span><div><h3 className="font-display font-bold text-primary">{d.name}</h3><div className="text-xs text-muted-foreground">{d.unis}</div></div></div>
                  <div className="mt-4 space-y-1.5 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-3.5 w-3.5" />Intake: {d.intake}</div>
                    <div className="flex items-center gap-2 text-muted-foreground"><Building2 className="h-3.5 w-3.5" />{d.top}</div>
                    <div className="flex items-center gap-2 text-muted-foreground"><Plane className="h-3.5 w-3.5" />{d.visa}</div>
                  </div>
                  <Button asChild size="sm" className="mt-4 w-full gradient-accent text-accent-foreground"><Link to="/contact">Apply Now</Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
export default StudyAbroad;
