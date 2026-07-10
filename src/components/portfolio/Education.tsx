import { motion } from "framer-motion";
import { GraduationCap, Calendar, Trophy } from "lucide-react";
import Section from "./Section";

const COURSES = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
];

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academics"
      title={<><span className="text-gradient">Education</span></>}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4 }}
        className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl glass-strong p-8 shadow-glow transition-all duration-500 sm:p-10"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-[var(--electric)]/25 to-[var(--violet-glow)]/25 blur-3xl" />

        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--electric)] via-[var(--cyan-glow)] to-[var(--violet-glow)] text-primary-foreground shadow-glow">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-bold sm:text-2xl">
                Bachelor of Engineering, Computer Engineering
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Bharati Vidyapeeth's College of Engineering for Women, Pune
              </p>
            </div>
          </div>
          <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-center">
            <div className="flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Trophy className="h-3.5 w-3.5" /> CGPA
            </div>
            <div className="text-2xl font-bold text-gradient">8.66</div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-[var(--cyan-glow)]" />
          2022 &nbsp;–&nbsp; 2026
        </div>

        <div className="mt-8">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--cyan-glow)]">
            Relevant Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {COURSES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:scale-105 hover:border-[var(--electric)]/50 hover:text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}