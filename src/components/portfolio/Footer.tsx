import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-display text-lg font-semibold">
            Hiteshi <span className="text-gradient">Kukreja</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            © 2026 All Rights Reserved · Made with{" "}
            <span className="text-[var(--violet-glow)]">♥</span> 
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FooterIcon href="https://github.com/Kuki-09" label="GitHub">
            <Github className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href="https://linkedin.com/in/hiteshi-kukreja" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href="mailto:hiteshi724@gmail.com" label="Email">
            <Mail className="h-4 w-4" />
          </FooterIcon>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href, children, label,
}: { href: string; children: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:text-[var(--cyan-glow)] hover:shadow-glow"
    >
      {children}
    </a>
  );
}