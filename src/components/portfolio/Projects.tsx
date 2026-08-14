import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, X } from "lucide-react";
import Section from "./Section";
import docint from "@/assets/project-docint.jpg";
import rag from "@/assets/project-rag.jpg";
import ml from "@/assets/project-ml.jpg";

interface Project {
  title: string;
  image: string;
  short: string;
  overview: string;
  features: string[];
  stack: string[];
  challenges: string;
  github: string;
  demo: string;
}

const PROJECTS: Project[] = [
  {
    title: "AI-Powered Document Question Answering System",
    image: rag,
    short:
     "A Retrieval-Augmented Generation (RAG) system that answers questions from PDF, DOCX, and web documents using semantic search and LLMs.",
    overview:
      "Developed a full-stack Retrieval-Augmented Generation (RAG) application that enables users to interact with documents through natural language. The system processes PDF, DOCX, and web content, retrieves the most relevant information using semantic search, and generates context-aware responses using LLaMA 3.2. A FastAPI backend manages document processing, chat history, and voice-enabled interaction.",
    features: [
        "Upload and query PDF, DOCX, and web documents",
        "Context-aware document retrieval using vector search",
        "Context-aware answers powered by LLaMA 3.2",
        "Improved retrieval using intelligent chunking and reranking",
        "Voice-based query support",
        "Persistent conversation history using SQLite",
    ],
    stack: ["Python",
      "FastAPI",
      "LangChain",
      "LLaMA 3.2",
      "FAISS",
      "Hugging Face",
      "SQLite"],
    challenges:
      "Retrieving only the most relevant document chunks for accurate responses. \nManaging documents of different formats within a single pipeline. \nReducing irrelevant context while maintaining response quality. \nMaintaining conversation history across multiple user interactions.",
    github: "https://github.com/Kuki-09/rag-ai-assistant",
    demo: "",
  },
    {
    title: "SkillConnect",
    image: docint,
    short:
      "AI-powered internship recommendation system that matches students with relevant opportunities and generates personalized learning roadmaps based on skill gaps.",
    overview:
      "SkillConnect is an AI-based recommendation system that matches students with suitable internship opportunities by analyzing their resumes and skill profiles. Resume content is extracted using Azure Document Intelligence, and relevant skills are identified using Azure Text Analytics NER and LLM-based parsing. The extracted student skills are compared with internship-required skills using semantic similarity search to generate internship match scores. Based on the user's selected career domain, the system identifies missing skills and generates a personalized learning roadmap by retrieving relevant learning resources from an embedding-based knowledge base.",
    features: [
        "Extracts structured resume information from resume using Azure Document Intelligence.",
        "Identifies candidate skills using NER and LLM-based extraction.",
        "Matches student skills with internship requirements using semantic similarity.",
        "Displays only relevant opportunities above a defined matching threshold.",
        "Identifies missing skills for selected career domains.",
        "Generates personalized learning roadmaps with relevant resources using embedding-based search.",
    ],
    stack: ["Python", "Azure Document Intelligence", "Azure Text Analytics","LLama3.2"],
    challenges:
      "Ensuring consistent skill extraction from resumes where LLM outputs varied across multiple runs.\nAvoiding unreliable resource recommendations caused by LLM hallucinations.\nHandling different representations of the same skill (e.g., \"ML\" and \"Machine Learning\") during matching.",
    github: "https://github.com/Kuki-09/SkillConnect",
    demo: "",
  },
  {
    title: "Student Performance Predictor",
    image: ml,
    short:
      "Machine learning application that predicts student academic performance using the best-performing regression model, with Linear Regression achieving the highest R² score of 0.88.",
    overview:
      "An end-to-end machine learning application that predicts student Math Scores using demographic, academic, and test-preparation features. The project includes exploratory data analysis, data preprocessing, multiple regression models, 5-fold cross-validation, hyperparameter tuning, model selection, and deployment through a FastAPI backend and Streamlit frontend.",
    features: [
        "Performed exploratory data analysis to understand feature distributions, missing values, and relationships with the target variable",
        "Built a modular ML pipeline for data ingestion, preprocessing, model training, and prediction",
        "Applied missing-value imputation, One-Hot Encoding, and feature scaling using Scikit-learn pipelines",
        "Compared 7 regression algorithms using 5-fold cross-validation", 
        "Performed hyperparameter tuning using GridSearchCV and selected the best model based on cross-validation performance", 
        "Linear Regression achieved the highest CV R² of 0.87 and a final test R² of 0.88", 
        "Built a FastAPI backend for model inference and REST API-based predictions",
        "Developed an interactive Streamlit frontend for user input and predictions", 
        "Deployed the Streamlit frontend on Streamlit Community Cloud and FastAPI backend on Render",
    ],
    stack: ["Python", "Regression models", "Pandas", "Numpy", "Scikit-learn", "Docker", "Streamlit"],
    challenges:
      "Handling missing and inconsistent values in the dataset during preprocessing.\nImproving model performance through feature engineering and parameter tuning.\nDeploying the trained model while ensuring consistent preprocessing between training and prediction phases.",
    github: "https://github.com/Kuki-09/MLproject",
    demo: "https://student-performance-indicator-ml.streamlit.app/",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={<>Featured <span className="text-gradient">Projects</span></>}
      subtitle="A curated look at AI applications I've designed and built."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-shadow duration-500 hover:shadow-glow"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 pt-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                {p.demo && (
                <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                </a>
                )}
                <button
                  onClick={() => setOpen(p)}
                  className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--electric)] to-[var(--violet-glow)] px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  View Details <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </Section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-background/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="glass-strong relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-0 shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="relative aspect-[16/8] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="space-y-6 p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            {project.title}
          </h3>
          <ModalBlock title="Overview">{project.overview}</ModalBlock>
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--cyan-glow)]">
              Key Features
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[var(--electric)] to-[var(--violet-glow)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--cyan-glow)]">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <ModalBlock title="Challenges Solved">{project.challenges}</ModalBlock>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub Repository
            </a>
            {project.demo && (
            <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--electric)] to-[var(--violet-glow)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
            >
                <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ModalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--cyan-glow)]">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
