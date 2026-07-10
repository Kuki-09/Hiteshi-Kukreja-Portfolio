import { motion } from "framer-motion";
import {
  Code2, Brain, Boxes, Cloud, Wrench, Database,
} from "lucide-react";
import Section from "./Section";

const GROUPS = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL"],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    skills: [
      "Machine Learning",
      "NLP",
      "LLMs",
      "RAG",
      "LangChain",
      "Prompt Engineering",
      "Vector Databases",
    ],
  },
  {
    icon: Boxes,
    title: "Frameworks",
    skills: ["FastAPI"],
  },
  {
    icon: Cloud,
    title: "Cloud & AI Services",
    skills: [
      "Azure Document Intelligence",
      "Azure Text Analytics",
    ],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Docker"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "SQLite", "Vector Databases"],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title={<>Skills & <span className="text-gradient">Technologies</span></>}
      subtitle="Languages, frameworks and platforms I use to design and ship systems."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g, i) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--electric)]/20 to-[var(--violet-glow)]/20 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--electric)]/25 to-[var(--violet-glow)]/25 text-[var(--cyan-glow)] ring-1 ring-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-[var(--electric)]/50 hover:text-foreground hover:shadow-[0_0_18px_-4px_var(--electric)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}