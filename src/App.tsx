import { Routes, Route, Link } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Events from "./pages/events";
import CareerCounseling from "./pages/career-counseling";
import MbbsAbroad from "./pages/mbbs-abroad";
import StudyAbroad from "./pages/study-abroad";
import StudyEurope from "./pages/study-europe";
import StudyIndia from "./pages/study-india";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/career-counseling" element={<CareerCounseling />} />
        <Route path="/mbbs-abroad" element={<MbbsAbroad />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/study-europe" element={<StudyEurope />} />
        <Route path="/study-india" element={<StudyIndia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}