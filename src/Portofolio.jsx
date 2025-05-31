import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      title: "Sholeh Khalkhali Resume and Projects",
      subtitle1: "Detail-oriented Front-End Developer with a strong background in React, Redux",
      subtitle2: "With a keen eye for design and functionality.",
      download: "Download Resume",
      skills: "Skills",
      projects: "Projects",
      liveDemo: "Live Demo",
      github: "GitHub",
      designedBy: "Designed by Sholeh Khalkhali — All rights reserved."
    },
    de: {
      title: "Sholeh Khalkhali Lebenslauf und Projekte",
      subtitle1: "Detailorientierte Front-End-Entwicklerin mit fundierten Kenntnissen in React und Redux",
      subtitle2: "Mit einem ausgeprägten Gespür für Design und Funktionalität.",
      download: "Lebenslauf herunterladen",
      skills: "Fähigkeiten",
      projects: "Projekte",
      liveDemo: "Live-Demo",
      github: "GitHub",
      designedBy: "Entworfen von Sholeh Khalkhali – Alle Rechte vorbehalten."
    }
  };

  const projects = [
    {
      title: "E-commerce Website",
      description: {
        en: "A simple shopping cart system using Vite, demonstrating add/remove/display total prices.",
        de: "Ein einfaches Warenkorbsystem mit Vite, das das Hinzufügen/Entfernen/Anzeigen der Gesamtpreise demonstriert."
      },
      liveLink: "https://#",
      githubLink: "https://github.com/sholeh-khalkhali42/Shopping-Cart"
    },
    {
      title: "Blog with React & Redux Toolkit",
      description: {
        en: "Blog app with React, Redux Toolkit, and Tailwind CSS for managing blog posts.",
        de: "Blog-Anwendung mit React, Redux Toolkit und Tailwind CSS zur Verwaltung von Blog-Beiträgen."
      },
      liveLink: "https://#",
      githubLink: "https://github.com/sholeh-khalkhali42/Blog-with-React-Redux-toolkit"
    },
    {
      title: "Real-time Cryptocurrency Data",
      description: {
        en: "Cryptocurrency dashboard using CoinRanking API with charts and news.",
        de: "Kryptowährungs-Dashboard mit CoinRanking API, Diagrammen und Nachrichten."
      },
      liveLink: "https://crypto-dashboard-sholeh.netlify.app/",
      githubLink: "https://github.com/sholeh-khalkhali42/cryptocurrency"
    }
  ];

  const skills = ["React.js", "Bootstrap", "Tailwind CSS", "Redux", "SEO", "Redux Toolkit", "Next.js", "Git & GitHub", "REST API", "Figma"];

  const socialLinks = [
    { icon: <Github size={20} />, label: "GitHub", link: "https://github.com/sholeh-khalkhali42" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", link: "https://linkedin.com/in/sholeh-khalkhali" },
    { icon: <Mail size={20} />, label: "Email", link: "mailto:sholehkhalkhali42@gmail.com" }
  ];

  const t = translations[language];

  return (
    <div className="container py-5">
      <div className="text-end mb-3">
        <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => setLanguage("en")}>English</button>
        <button className="btn btn-sm btn-outline-secondary" onClick={() => setLanguage("de")}>Deutsch</button>
      </div>

      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3 text-primary">{t.title}</h1>
        <p className="lead text-muted">{t.subtitle1}</p>
        <p className="lead text-muted">{t.subtitle2}</p>
        <a href="https://github.com/sholeh-khalkhali42/My-Resume/raw/main/Sholeh_Khalkhali_CV_ATS.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-warning mt-3 text-dark">{t.download}</a>
        <div className="mt-4 d-flex justify-content-center gap-3">
          {socialLinks.map((item, idx) => (
            <button key={idx} className="btn btn-outline-primary d-flex align-items-center gap-2" onClick={() => window.open(item.link, "_blank")}>
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      </header>

      <section className="mb-5">
        <h2 className="h4 fw-semibold text-center mb-4 text-purple">{t.skills}</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="badge bg-light text-dark border shadow-sm px-3 py-2">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="h4 fw-semibold text-center mb-4 text-purple">{t.projects}</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0" style={{ transition: "transform 0.3s", cursor: "pointer" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary">{project.title}</h5>
                  <p className="card-text text-muted">{project.description[language]}</p>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary me-2">{t.liveDemo}</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark">{t.github}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-5 text-center text-muted small">
        © {new Date().getFullYear()} {t.designedBy}
      </footer>
    </div>
  );
}
