import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Section from "./Section";

const CERTS = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    org: "Microsoft",
    year: "2025",
    tag: "AZ",
    link:"https://drive.google.com/file/d/1SQumszGrMZhAsfvNwDH7qgdriMaL6dbs/view?usp=sharing",
  },
  {
    title: "AWS Academy Generative AI Foundations",
    org: "AWS",
    year: "2025",
    tag: "AWS",
    link:"https://drive.google.com/file/d/1pHP0LSZGWRuVIBbGU9d1IDOjjSMByFAe/view?usp=sharing",
  },
 {
    title: "HackerRank SQL (Advanced) Certificate",
    org: "HackerRank",
    year: "2026",
    tag: "SQL",
    link:"https://www.hackerrank.com/certificates/7d10e9b090a1",
  },
  {
    title: "AWS Academy Machine Learning Foundations",
    org: "AWS",
    year: "2024",
    tag: "AWS",
    link:"https://drive.google.com/file/d/1VbZzM-FUGDg--hmmjT5Isk72ctmhA8J9/view?usp=sharing",
  },

  {
    title: "AWS Academy Cloud Foundations",
    org: "AWS",
    year: "2024",
    tag: "AWS",
     link:"https://drive.google.com/file/d/1iAhzslL81BCjID6116PL3hb9x3DHlhz7/view?usp=sharing",
  }

];

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title={<>Certifications & <span className="text-gradient">Credentials</span></>}
      subtitle="Continuous learning across AI, ML and cloud."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl [background:linear-gradient(120deg,transparent_40%,var(--electric)/0.15,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--electric)] via-[var(--cyan-glow)] to-[var(--violet-glow)] text-primary-foreground shadow-glow">
                <span className="text-xs font-bold">{c.tag}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-sm font-semibold leading-snug">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground">
                    <Award className="h-3 w-3" /> {c.year}
                  </span>
                    <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[var(--cyan-glow)] hover:text-foreground"
                    >
                    View <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
