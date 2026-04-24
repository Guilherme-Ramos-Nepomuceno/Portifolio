"use client";
import { motion } from "framer-motion";
import { courses } from "../data/courses";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CoursesSection() {
  return (
    <section id="courses" className="courses-section">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        02 — Educação
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Cursos & Certificados
      </motion.h2>

      <motion.div
        className="courses-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {courses.map((course) => (
          <motion.a
            key={course.id}
            href={course.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="course-card"
            style={{ "--platform-color": course.color, textDecoration: "none" }}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="course-platform">
              <span className="course-platform-icon">{course.icon}</span>
              <span className="course-platform-name">{course.platform}</span>
            </div>

            <h3 className="course-title">{course.title}</h3>

            <div className="course-meta">
              <span className="course-year">{course.year}</span>
              <span className="course-category">{course.category}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
