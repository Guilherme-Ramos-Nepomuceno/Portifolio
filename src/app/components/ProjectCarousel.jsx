"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ── Slide 0: Project showcase (image + description)
function ProjectShowSlide({ project }) {
  return (
    <div className="carousel-slide">
      <div className="carousel-image-side flex items-center justify-center bg-[#080808] p-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "contain", padding: "16px" }}
          unoptimized
        />
      </div>
      <div className="carousel-info-side">
        <h3 className="project-carousel-title">{project.title}</h3>
        <p className="project-carousel-desc">{project.description}</p>
        <div className="project-links">
          <a
            href={project.liveUrl}
            className="project-link primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Demo →
          </a>
          <a
            href={project.githubUrl}
            className="project-link secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Slide 1: Stack cards
function StackSlide({ project }) {
  return (
    <div className="stack-slide">
      <p className="stack-slide-title">Stack técnica — {project.title}</p>
      <div className="stack-grid">
        {project.stack.map((tech, i) => (
          <motion.div
            key={tech.name}
            className="stack-card"
            style={{ "--stack-color": tech.color }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <span className="stack-icon">{tech.icon}</span>
            <span className="stack-name">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const slideVariants = {
  enter: (direction) => ({
    x: direction === 1 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction) => ({
    x: direction === 1 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.77, 0, 0.175, 1] },
  }),
};

export default function ProjectCarousel({ project }) {
  const [slide, setSlide] = useState(0); // 0 = showcase, 1 = stack
  const [direction, setDirection] = useState(1);

  const goTo = (next) => {
    setDirection(next > slide ? 1 : -1);
    setSlide(next);
  };

  return (
    <div>
      <div className="carousel-container">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ height: "100%" }}
          >
            {slide === 0 ? (
              <ProjectShowSlide project={project} />
            ) : (
              <StackSlide project={project} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-nav-btn"
          onClick={() => goTo(0)}
          aria-label="Ver showcase"
          disabled={slide === 0}
          style={{ opacity: slide === 0 ? 0.3 : 1 }}
        >
          ←
        </button>

        <div className="carousel-dots">
          {[0, 1].map((i) => (
            <button
              key={i}
              className={`carousel-dot ${slide === i ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={i === 0 ? "Slide showcase" : "Slide stack"}
            />
          ))}
        </div>

        <button
          className="carousel-nav-btn"
          onClick={() => goTo(1)}
          aria-label="Ver stack"
          disabled={slide === 1}
          style={{ opacity: slide === 1 ? 0.3 : 1 }}
        >
          →
        </button>
      </div>
    </div>
  );
}
