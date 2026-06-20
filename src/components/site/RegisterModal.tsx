import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const courses = [
  "Engineering",
  "Law",
  "BBA/BCA",
  "Design",
  "Medical",
  "MBA/PGDM",
  "Global Programs",
  "B.Arch",
  "Hotel Management",
  "PhD",
];

export function RegisterModal() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem("educap_modal_shown")) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("educap_modal_shown", "1");
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const toggle = (course: string) => {
    setSelected((prev) =>
      prev.includes(course)
        ? prev.filter((item) => item !== course)
        : [...prev, course]
    );
  };

  const waHref = `https://wa.me/919142543546?text=${encodeURIComponent(
    `Hi Educapital! I'm ${name || "[Name]"} (${
      phone || "[Phone]"
    }) and I'm interested in: ${
      selected.join(", ") || "career counseling"
    }.`
  )}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="Educapital logo"
            className="h-16 w-16 rounded-full object-contain"
          />
        </div>


        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Get Free Career Counseling
          </DialogTitle>

          <DialogDescription>
            Quick registration — our advisors will reach out within 24 hours.
          </DialogDescription>
        </DialogHeader>


        <div className="grid gap-3">

          {/* Name */}
          <div className="grid gap-1.5">
            <Label htmlFor="rm-name">
              Full Name
            </Label>

            <Input
              id="rm-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
            />
          </div>


          {/* Phone + Email */}
          <div className="grid grid-cols-2 gap-3">

            <div className="grid gap-1.5">
              <Label htmlFor="rm-phone">
                Phone
              </Label>

              <Input
                id="rm-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={15}
              />
            </div>


            <div className="grid gap-1.5">
              <Label htmlFor="rm-email">
                Email
              </Label>

              <Input
                id="rm-email"
                type="email"
                maxLength={120}
              />
            </div>

          </div>


          {/* Courses */}
          <div>
            <Label className="block mb-2">
              Courses Interested In
            </Label>

            <div className="flex flex-wrap gap-2">

              {courses.map((course) => (

                <button
                  key={course}
                  type="button"
                  onClick={() => toggle(course)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition ${
                    selected.includes(course)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted hover:bg-muted/70"
                  }`}
                >
                  {course}
                </button>

              ))}

            </div>
          </div>


          {/* WhatsApp Button */}
          <Button
            asChild
            className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white"
          >
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register on WhatsApp
            </a>
          </Button>


        </div>

      </DialogContent>
    </Dialog>
  );
}