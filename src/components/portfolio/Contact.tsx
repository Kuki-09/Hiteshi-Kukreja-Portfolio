import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import Section from "./Section";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const INFO = [
  { icon: Mail, label: "Email", value: "hiteshi724@gmail.com", href: "mailto:hiteshi724@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hiteshi-kukreja", href: "https://linkedin.com/in/hiteshi-kukreja" },
  { icon: Github, label: "GitHub", value: "github.com/Kuki-09", href: "https://github.com/Kuki-09" },
  { icon: MapPin, label: "Location", value: "Pune, India" },
];


export default function Contact() {
  const [sent, setSent] = useState(false);

const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const data = new FormData(form);

  const parsed = schema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    subject: data.get("subject"),
    message: data.get("message"),
  });

  if (!parsed.success) {
    toast.error(parsed.error.issues[0]?.message ?? "Please check your inputs");
    return;
  }

  try {
    await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
        name: parsed.data.name,
        email: parsed.data.email,
        subject: parsed.data.subject,
        message: parsed.data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.success("Message sent successfully!");

    form.reset();

    setSent(true);

    setTimeout(() => setSent(false), 3000);
  } catch (error) {
    toast.error("Failed to send message.");
    console.error(error);
  }
};

  return (
    <Section
      id="contact"
      eyebrow="Let's build together"
      title={<>Get in <span className="text-gradient">Touch</span></>}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-base text-muted-foreground">
            Feel free to reach out if you'd like to collaborate or discuss
            exciting projects. I'll respond within a day or two.
          </p>

          <div className="space-y-3">
            {INFO.map((it) => {
              const Icon = it.icon;
              const inner = (
                <div className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--electric)]/25 to-[var(--violet-glow)]/25 text-[var(--cyan-glow)] ring-1 ring-white/10 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {it.label}
                    </div>
                    <div className="truncate text-sm font-medium">{it.value}</div>
                  </div>
                </div>
              );
              return it.href ? (
                <a key={it.label} href={it.href} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={it.label}>{inner}</div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong space-y-4 rounded-3xl p-6 shadow-glow-violet sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" placeholder="Your name" />
            <Field name="email" type="email" label="Email" placeholder="you@email.com" />
          </div>
          <Field name="subject" label="Subject" placeholder="What's this about?" />
          <Field
            name="message"
            label="Message"
            placeholder="Tell me about your project or opportunity…"
            textarea
          />
          <button
            type="submit"
            disabled={sent}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--electric)] via-[var(--cyan-glow)] to-[var(--violet-glow)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Message Sent
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  name, label, placeholder, type = "text", textarea,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-transparent outline-none transition-all focus:border-[var(--electric)] focus:bg-white/[0.07] focus:ring-2 focus:ring-[var(--electric)]/40";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          placeholder={label}
          className={base + " resize-none"}
          maxLength={2000}
          required
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder ?? label}
          className={base}
          maxLength={255}
          required
        />
      )}
      <span className="pointer-events-none absolute left-3 top-0 -translate-y-1/2 rounded-full bg-background px-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </label>
    
  );
}