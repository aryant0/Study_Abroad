import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        
        {/* Company Info */}
        <div className="lg:col-span-2">
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-bold text-xl"
          >
            <img
              src="/logo.png"
              alt="Educapital logo"
              className="h-10 w-10 rounded-full object-contain"
            />

            Educapital Consultancy
          </Link>

          <p className="mt-4 text-sm opacity-80 max-w-sm">
            Premier education consultancy guiding students toward success in
            India and abroad — from career counseling to admissions and visas.
          </p>

          <div className="mt-5 text-xs opacity-70 space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>
                2705-W/38, Lodha Amara, Thane, Maharashtra – 400607, India
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 91425 43546</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@educapitalconsultancy.com</span>
            </div>

            <div className="pt-2">
              GSTIN:{" "}
              <span className="font-mono">27AAJCE6530H1ZK</span>
            </div>
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/study-india">Study in India</Link>
            </li>

            <li>
              <Link to="/study-abroad">Study Abroad</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </div>


        {/* Services */}
        <div>
          <h4 className="font-display font-semibold mb-4">
            Services
          </h4>

          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link to="/career-counseling">
                Career Counseling
              </Link>
            </li>

            <li>
              <Link to="/study-india">
                Admission Assistance
              </Link>
            </li>

            <li>
              <Link to="/mbbs-abroad">
                MBBS Abroad
              </Link>
            </li>

            <li>
              <Link to="/study-europe">
                Study in Europe
              </Link>
            </li>

            <li>
              <Link to="/study-abroad">
                Visa Guidance
              </Link>
            </li>
          </ul>
        </div>


        {/* Newsletter */}
        <div>
          <h4 className="font-display font-semibold mb-4">
            Newsletter
          </h4>

          <p className="text-sm opacity-80 mb-3">
            Get latest scholarships, intakes & visa updates.
          </p>

          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Your email"
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />

            <Button
              type="submit"
              className="gradient-accent text-accent-foreground"
            >
              Join
            </Button>
          </form>


          {/* Social Links */}
          <div className="flex items-center gap-3 mt-5">

            <a
              href="https://www.facebook.com/profile.php?id=61591201490391"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
            >
              <Facebook className="h-4 w-4" />
            </a>


            <a
              href="https://www.instagram.com/educapitalconsultancy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
            >
              <Instagram className="h-4 w-4" />
            </a>


            <a
              href="https://www.youtube.com/channel/UCoYIH3FtUJg1x8rQRLoOqJg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-9 w-9 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
            >
              <Youtube className="h-4 w-4" />
            </a>


            <a
              href="https://wa.me/919142543546"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="h-9 w-9 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
            >
              <MessageCircle className="h-4 w-4" />
            </a>

          </div>
        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-4 py-5 text-xs opacity-70 text-center">
          © 2026 Educapital Consultancy Private Limited. All rights reserved.
        </div>
      </div>

    </footer>
  );
}