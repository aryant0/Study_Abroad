import { Link } from "react-router-dom";
import { SitePage, PageHero } from "@/components/site/SitePage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import { useEffect } from "react";


const events = [
  { date: "15 Jul 2026", title: "UK & Ireland University Fair", venue: "Hyatt Regency, Mumbai" },
  { date: "29 Jul 2026", title: "Canada Spot Admissions Day", venue: "Educapital HQ, Thane" },
  { date: "10 Aug 2026", title: "Germany Free-Tuition Webinar", venue: "Online (Zoom)" },
  { date: "22 Aug 2026", title: "MBBS Abroad — Open House", venue: "Educapital HQ, Thane" },
  { date: "05 Sep 2026", title: "USA Fall Intake Q&A", venue: "Online (Zoom)" },
  { date: "20 Sep 2026", title: "Australia & NZ University Meet", venue: "JW Marriott, Pune" },
];

function EventsPage() {
  useEffect(() => { document.title = 'Events & Education Fairs — Educapital'; }, []);
  useEffect(() => { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); } m.setAttribute("content", 'Join upcoming education fairs, webinars and university spot-admission events with Educapital.'); }, []);
  return (
    <SitePage>
      <PageHero eyebrow="Upcoming" title="Events & Education Fairs" subtitle="Meet university reps, get on-spot offers and join expert-led webinars." />
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((e) => (
            <Card key={e.title} className="hover:shadow-elegant hover:-translate-y-1 transition-all">
              <CardContent className="p-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider"><CalendarDays className="h-4 w-4" />{e.date}</div>
                <h3 className="font-display text-lg font-bold text-primary mt-2">{e.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{e.venue}</div>
                <Button asChild size="sm" className="mt-4 w-full gradient-accent text-accent-foreground"><Link to="/contact">Register</Link></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </SitePage>
  );
}
export default EventsPage;
