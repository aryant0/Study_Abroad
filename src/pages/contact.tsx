
import { SitePage, PageHero } from "@/components/site/SitePage";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";


function ContactPage() {
  useEffect(() => { document.title = 'Contact — Educapital Consultancy'; }, []);
  useEffect(() => { let m = document.querySelector('meta[name="description"]'); if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); } m.setAttribute("content", 'Book a free counseling session. Email info@educapitalconsultancy.com or WhatsApp +91 91425 43546.'); }, []);
  const [sending, setSending] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! We'll contact you within 24 hours.");
    }, 700);
  };
  return (
    <SitePage>
      <PageHero eyebrow="Get in Touch" title="Start Your Journey Today" subtitle="Free counseling. Honest guidance. End-to-end support — from application to arrival." />
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-elegant">
            <CardContent className="p-6 md:p-8">
              <form className="grid md:grid-cols-2 gap-4" onSubmit={submit}>
                <div className="grid gap-1.5"><Label htmlFor="cn">Full Name *</Label><Input id="cn" required maxLength={80} /></div>
                <div className="grid gap-1.5"><Label htmlFor="cp">Phone *</Label><Input id="cp" type="tel" required maxLength={15} /></div>
                <div className="grid gap-1.5 md:col-span-2"><Label htmlFor="ce">Email *</Label><Input id="ce" type="email" required maxLength={120} /></div>
                <div className="grid gap-1.5">
                  <Label>Service</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      {["Study in India","Study Abroad","MBBS Abroad","Study in Europe","Career Counseling"].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-1.5"><Label htmlFor="cd">Preferred Destination</Label><Input id="cd" placeholder="e.g. Canada" maxLength={120} /></div>
                <div className="grid gap-1.5 md:col-span-2"><Label htmlFor="cm">Message</Label><Textarea id="cm" rows={5} maxLength={1000} /></div>
                <div className="md:col-span-2">
                  <Button type="submit" size="lg" disabled={sending} className="w-full gradient-accent text-accent-foreground">{sending ? "Sending..." : "Send Enquiry"}</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card className="gradient-hero text-primary-foreground border-0 shadow-elegant">
              <CardContent className="p-6 space-y-4">
                <div><div className="text-xs uppercase tracking-widest opacity-70">Phone / WhatsApp</div>
                  <a href="tel:+919142543546" className="flex items-center gap-2 mt-1 font-bold"><Phone className="h-5 w-5 text-accent-glow" />+91 91425 43546</a></div>
                <div><div className="text-xs uppercase tracking-widest opacity-70">Email</div>
                  <a href="mailto:info@educapitalconsultancy.com" className="flex items-center gap-2 mt-1 break-all"><Mail className="h-5 w-5 text-accent-glow shrink-0" />info@educapitalconsultancy.com</a></div>
                <div><div className="text-xs uppercase tracking-widest opacity-70">Address</div>
                  <div className="flex items-start gap-2 mt-1 text-sm"><MapPin className="h-5 w-5 text-accent-glow mt-0.5 shrink-0" />G6 1st Floor, Rohini Sector 16, Delhi – 110089</div></div>
                <div><div className="text-xs uppercase tracking-widest opacity-70">Hours</div>
                  <div className="flex items-center gap-2 mt-1 text-sm"><Clock className="h-5 w-5 text-accent-glow" />Mon–Sat, 9 AM – 7 PM</div></div>
              </CardContent>
            </Card>
            <div className="rounded-2xl overflow-hidden shadow-card border aspect-video">
              <iframe title="Map" src="https://www.google.com/maps?q=Rohini+Sector+16+Delhi+110089&output=embed" className="w-full h-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
export default ContactPage;
