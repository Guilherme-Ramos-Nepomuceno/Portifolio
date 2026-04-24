"use client";
import { motion } from "framer-motion";

const techStack = [
  { name: "TypeScript", icon: "🔷", color: "#3178C6" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "PHP", icon: "🐘", color: "#777BB4" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: "🎨", color: "#38BDF8" },
  { name: "Laravel", icon: "🔥", color: "#FF2D20" },
  { name: "Prisma", icon: "◆", color: "#5A67D8" },
  { name: "Knex.js", icon: "🛠️", color: "#E16439" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "Firebird", icon: "🔥", color: "#D72828" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "Git", icon: "🔀", color: "#F05032" }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TechSection() {
  return (
    <section id="tech" className="courses-section">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        03 — Habilidades
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Stack Tecnológica
      </motion.h2>

      <div style={{ marginTop: "3rem" }}>
        <motion.div
          className="stack-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="stack-card"
              style={{ "--stack-color": tech.color }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="stack-icon">{tech.icon}</span>
              <span className="stack-name">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
