import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>About <span className="text-gradient">Me</span></>}
    >
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl space-y-5 text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
        <p>
            I'm a{" "}
            <span className="text-foreground font-medium">
            Computer Engineering
            </span>{" "}
            graduate passionate about{" "}
            <span className="text-foreground font-medium">
            Software Development and Artificial Intelligence, with hands-on experience in Machine Learning, NLP, and Generative AI
            </span>
            .
        </p>

        <p>
            I enjoy learning new technologies, solving challenging problems, and
            continuously improving my technical and analytical skills. 
        </p>

        <p>
            I'm always eager to explore emerging technologies, collaborate with diverse teams, and contribute to building meaningful solutions while continuing to grow professionally.
        </p>
        </motion.div>
    </Section>
  );
}