"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "../data/projects";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("front_end");

  const filtered = projects.filter((p) => p.category === activeCategory);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setActiveProjectIdx(0);
  };

  const currentProject = filtered[activeProjectIdx] || filtered[0];

  return (
    <section id="projects" className="projects-section">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        01 — Projetos
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Produtos e Ecossistemas
      </motion.h2>

      {/* Category Tabs */}
      <motion.div
        className="project-tabs"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`project-tab ${activeCategory === cat.key ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Project Navigator (if multiple projects per category) */}
      {filtered.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {filtered.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProjectIdx(i)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                padding: "4px 12px",
                borderRadius: "4px",
                border: "1px solid",
                borderColor: i === activeProjectIdx ? "var(--color-accent)" : "var(--color-border)",
                background: i === activeProjectIdx ? "var(--color-accent-dim)" : "transparent",
                color: i === activeProjectIdx ? "var(--color-accent)" : "var(--color-text-muted)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {p.title}
            </button>
          ))}
        </div>
      )}

      {/* Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${activeProjectIdx}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {currentProject && <ProjectCarousel project={currentProject} />}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
