import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";


const ROLES = [
  "Computer Engineer",
  "Problem Solver",
  "AI & ML Enthusiast",
  "Tech Explorer",
];

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[wi];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setWi((i) => (i + 1) % words.length);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, wi, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);
  useEffect(() => {
  const canvas = document.getElementById(
    "networkCanvas"
  ) as HTMLCanvasElement;

  if (!canvas) return;

  const ctx = canvas.getContext("2d")!;
  if (!ctx) return;

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  resize();

  window.addEventListener("resize", resize);

  const particles = Array.from({ length: 80 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;

        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${
            (120 - d) / 120 * 0.25
          })`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  return () => window.removeEventListener("resize", resize);

}, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center pt-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4rem]">
            Hi, I'm{" "}
            <span className="text-gradient animate-gradient bg-clip-text">
              Hiteshi Kukreja
            </span>
          </h1>

          <div className="mt-4 flex min-h-[2.5rem] items-center text-xl font-medium text-muted-foreground sm:text-2xl">
            <span className="mr-2 text-foreground/80">I am a</span>
            <span className="text-gradient font-semibold">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] bg-[var(--cyan-glow)] caret-blink" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Computer Engineering graduate with a passion for building innovative software solutions. Currently seeking opportunities where I can learn, contribute, and grow as a Software Engineer while leveraging my knowledge of AI, Machine Learning, and Data Science.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--electric)] via-[var(--cyan-glow)] to-[var(--violet-glow)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="https://drive.google.com/file/d/1fTd4fmLsj7uTqNPda__ujiGmKj_JEbcd/view?usp=sharing"
              download
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:shadow-glow"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </div>

        </motion.div>

        {/* Right: illustration */}
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto h-[520px] w-full max-w-xl overflow-hidden rounded-3xl"
        >

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 rounded-3xl blur-3xl" />

        {/* Network animation */}
        <canvas
            id="networkCanvas"
            className="absolute inset-0 h-full w-full rounded-3xl"
        />

        </motion.div>



      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="h-10 w-6 rounded-full border border-white/20 p-1">
          <div className="h-2 w-full animate-bounce rounded-full bg-gradient-to-b from-[var(--cyan-glow)] to-[var(--electric)]" />
        </div>
      </div>
    </section>
  );
}

