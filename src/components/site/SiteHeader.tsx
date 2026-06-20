import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/study-india", label: "Study in India" },
  { to: "/study-abroad", label: "Study Abroad" },
  { to: "/mbbs-abroad", label: "MBBS Abroad" },
  { to: "/study-europe", label: "Study in Europe" },
  { to: "/career-counseling", label: "Career Counseling" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2">

          <div className="flex items-center gap-4">

            <a
              href="mailto:info@educapitalconsultancy.com"
              className="flex items-center gap-1.5 opacity-90 hover:opacity-100"
            >
              <Mail className="h-3.5 w-3.5" />
              info@educapitalconsultancy.com
            </a>

            <a
              href="tel:+919142543546"
              className="hidden sm:flex items-center gap-1.5 opacity-90 hover:opacity-100"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 91425 43546
            </a>

          </div>

          <div className="opacity-90">
            Mon–Sat: 9 AM – 7 PM
          </div>

        </div>
      </div>


      {/* Main Header */}
      <div className="bg-background/95 backdrop-blur border-b">

        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-bold text-lg text-primary"
          >

            <img
              src="/logo.png"
              alt="Educapital logo"
              className="h-10 w-10 rounded-full object-contain"
            />

            <span className="leading-tight">
              Educapital

              <span className="block text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                Consultancy
              </span>

            </span>

          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => (

              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>

            ))}

          </nav>


          {/* Button + Mobile Menu */}
          <div className="flex items-center gap-2">

            <Button
              asChild
              className="hidden md:inline-flex gradient-accent text-accent-foreground hover:opacity-90 shadow-card"
            >
              <Link to="/contact">
                Book Free Consultation
              </Link>
            </Button>


            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
            >

              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}

            </button>

          </div>

        </div>


        {/* Mobile Menu */}
        {open && (

          <div className="lg:hidden border-t bg-background">

            <div className="container mx-auto px-4 py-3 flex flex-col">

              {navLinks.map((link) => (

                <Link
                  key={link.to}
                  to={link.to}
                  className="py-2 text-sm font-medium text-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>

              ))}


              <Button
                asChild
                className="mt-3 gradient-accent text-accent-foreground"
              >

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                >
                  Book Free Consultation
                </Link>

              </Button>


            </div>

          </div>

        )}

      </div>

    </header>
  );
}