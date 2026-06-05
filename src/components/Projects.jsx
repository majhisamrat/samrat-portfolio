import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "💡 User Intent Detection & Drift Monitoring System",
    desc: "Built an end-to-end intent classification system using TF-IDF with SVM and implemented real-time confidence-based drift detection.",
    ss: "/drift.webp",
    tech: ["Scikit-learn, TF-IDF, LR, FastAPI, Streamlit, Docker"],
    live: "https://user-intent-api.onrender.com/docs",
    code: "https://github.com/majhisamrat/user-intent-drift-detection",
  },
  {
    title: "🗪  Multilingual, Multi agent health assistant for rural India",
    desc: " Users interact via WhatsApp (primary) or a Next.js web interface. Arogya AI uses 14 specialized agents, each with a distinct responsibility.",
    ss: "/argya.png",
    tech: ["LangGraph", "FastAPI", "Redis", "Mem0", "Twilio", "Docker + Nginx"],
    live: "https://arogya-ai-frontend-tau.vercel.app/",
    code: "https://github.com/majhisamrat/ArogyaAI",
  },
  {
    title: "🎭 Emotion-Based Music Recommendation System",
    desc: "Developed and deployed an AI-powered music recommendation system integrating NLP based emotion detection, facial emotion recognition, and rule-based intent analysis",
    ss: "/musicrm.jpg",
    tech: [" Scikit-learn", "TensorFlow", "Streamlit", "OpenCV","FastAPI", " Spotify API"],
    live: "https://emotion-based-music-recommendation-system-vjdxvgquxysycu5wetfz.streamlit.app/",
    code: "https://github.com/majhisamrat/Emotion-Based-Music-Recommendation-System",
  },
  {
    title: "💬 Sentiment Analysis using Natural Language Processing",
    desc: " Built a sentiment analysis model to classify text into positive, negative, or neutral categories ",
    ss: "/sen.png",
    tech: ["TF-IDF,", "Scikit-learn", "Streamlit"],
    live: "#",
    code: "https://github.com/majhisamrat/-Sentiment-Analysis",
  },
  {
    title: "🛣️ Road Lane Detection with OpenCV ",
    desc: "Developed a computer vision pipeline to detect lane lines using OpenCV.",
    ss: "/roadlane.webp",
    tech: ["OpenCV", "NumPy", "Matplotlib", "Streamlit"],
    live: "#",
    code: "https://github.com/majhisamrat/-Road-Lane-Detection-",
  },
  {
    title: "📑 Fake News Detection using ML",
    desc: "Built an ML model to classify fake vs real news using NLP techniques like TF-IDF, CountVectorizer, and models like XGBoost.",
    ss: "/fknews.jpg",
    tech: ["XGBoost", "Pandas", "Streamlit"],
    live: "#",
    code: "https://github.com/majhisamrat/Fake-News-Detection",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          👨🏻‍💻My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
