"use client";
import { motion } from "framer-motion";

export default function ScrollArrow({ targetId }) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="scroll-arrow-wrapper"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Scroll para projetos"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <span className="scroll-arrow-label">Ver projetos</span>
      <motion.div
        className="scroll-arrow-icon"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 3v10M3 8l5 5 5-5" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
