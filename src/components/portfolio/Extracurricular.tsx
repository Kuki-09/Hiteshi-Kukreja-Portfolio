import { motion } from "framer-motion";
import { GitBranch, Rocket, HeartHandshake } from "lucide-react";
import Section from "./Section";

const ITEMS = [
  {
    icon: GitBranch,
    title: "Open Source Contributor",
    org: "GirlScript Summer of Code (GSSoC) 2026",
    desc: "Contributed to open-source projects, collaborated with developers, resolved issues and improved project functionality while working with the open-source community.",
  },
  {
    icon: Rocket,
    title: "Hackathon Participant",
    org: "Champions of Code Hackathon 2025",
    desc: "Independently designed and developed an innovative solution to address a real-world problem, demonstrating problem-solving, creativity, and technical implementation under competitive time constraints.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer",
    org: "Shasya Foundation",
    desc: "Actively volunteer in various community service drives, contributing to social initiatives and supporting programs that create a positive impact in the community.",
  },
];

export default function Extracurricular() {
  return (
    <Section
      id="extracurricular"
      eyebrow="Beyond code"
      title={<>Extracurricular <span className="text-gradient">Activities</span></>}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {ITEMS.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-shadow duration-500 hover:shadow-glow-violet"
            >
              <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-[var(--violet-glow)]/25 to-[var(--cyan-glow)]/25 blur-2xl" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--electric)] via-[var(--cyan-glow)] to-[var(--violet-glow)] text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold">{it.title}</h3>
              <p className="mt-1 text-xs font-medium text-[var(--cyan-glow)]">{it.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}