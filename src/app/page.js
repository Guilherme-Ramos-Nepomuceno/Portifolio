import "./globals.css";
import HeroGrid from "./components/HeroGrid";
import ProjectSection from "./components/ProjectSection";
import CoursesSection from "./components/CoursesSection";
import TechSection from "./components/TechSection";

export default function Home() {
  return (
    <>
      {/* Noise texture overlay for depth */}
      <div className="noise-overlay" aria-hidden="true" />


      {/* ── HERO SECTION ── */}
      <section className="hero-section">
        <HeroGrid />
      </section>

      {/* ── DIVIDER ── */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "var(--color-border)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      />

      {/* ── PROJECTS ── */}
      <ProjectSection />

      {/* ── DIVIDER ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="divider" />
      </div>

      {/* ── COURSES ── */}
      <CoursesSection />

      {/* ── DIVIDER ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="divider" />
      </div>

      {/* ── TECH & SKILLS ── */}
      <TechSection />

      {/* ── FOOTER ── */}
      <footer className="portfolio-footer">
        <p className="footer-text">
          Feito com dedicação por{" "}
          <span>Guilherme Ramos Nepomuceno</span>
          {" "}—{" "}
          <a
            href="https://github.com/Guilherme-Ramos-Nepomuceno"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text-muted)", textDecoration: "none" }}
          >
            @Guilherme-Ramos-Nepomuceno
          </a>
        </p>
      </footer>
    </>
  );
}
