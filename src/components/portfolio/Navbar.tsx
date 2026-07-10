import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "extracurricular", label: "Extracurricular" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 120);
      lastY = y;

      // active section
      for (const s of [...SECTIONS].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-glow" : "bg-transparent"
        }`}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="group flex items-center gap-2 text-left"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--electric)] via-[var(--cyan-glow)] to-[var(--violet-glow)] text-sm font-bold text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
            HK
          </span>
          <span className="hidden font-display text-base font-semibold sm:block">
            Hiteshi <span className="text-gradient">Kukreja</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === s.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === s.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--electric)]/20 via-[var(--cyan-glow)]/20 to-[var(--violet-glow)]/20 ring-1 ring-inset ring-white/10" />
              )}
              {s.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl glass lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden px-3 transition-all duration-300 lg:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-strong rounded-2xl p-3">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`block w-full rounded-xl px-4 py-2.5 text-left text-sm transition-colors ${
                active === s.id
                  ? "bg-white/5 text-foreground"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}