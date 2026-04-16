import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ProjectsData } from "../utils/helper";

// ─── Text scramble hook ───────────────────────────────────────────────────────
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*";

const useScramble = (text, isActive) => {
  const [output, setOutput] = useState(text);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (!isActive) {
      setOutput(text);
      return;
    }

    let iteration = 0;
    timerRef.current = setInterval(() => {
      setOutput(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("")
      );
      iteration += 0.8;
      if (iteration > text.length) clearInterval(timerRef.current);
    }, 28);

    return () => clearInterval(timerRef.current);
  }, [isActive, text]);

  return output;
};

// ─── Single project row ───────────────────────────────────────────────────────
const ProjectRow = ({ project, index, isHovered, isAnyHovered, onEnter, onLeave }) => {
  const scrambled = useScramble(project.name, isHovered);

  return (
    <motion.div
      className="relative flex items-start gap-5 py-6 border-b border-divider overflow-hidden"
      animate={{
        opacity: isAnyHovered && !isHovered ? 0.25 : 1,
        x: isHovered ? 10 : 0,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Left accent bar — grows top→bottom */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent origin-top"
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Background accent sweep from left */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(232,255,71,0.06) 0%, rgba(232,255,71,0.02) 40%, transparent 80%)",
          transformOrigin: "left center",
        }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Faded serif number */}
      <motion.span
        className="font-serif text-4xl leading-none flex-shrink-0 w-14 text-right pt-0.5 select-none"
        animate={{
          color: isHovered ? "rgba(232,255,71,0.6)" : "rgba(245,245,240,0.06)",
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      {/* Content */}
      <div className="flex-1 min-w-0 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5">
          {/* Scrambled project name */}
          <a
            href={project.gitURL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-medium flex-shrink-0 inline-flex items-center gap-1.5 transition-colors duration-200"
            style={{ color: isHovered ? "#E8FF47" : "#F5F5F0" }}
          >
            <span style={{ letterSpacing: isHovered ? "0.04em" : "0" }}>
              {scrambled}
            </span>
            <motion.span
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -4 }}
              transition={{ duration: 0.2 }}
              className="text-xs"
            >
              ↗
            </motion.span>
          </a>
          <span className="font-mono text-xs text-muted leading-relaxed sm:truncate">
            {project.description}
          </span>
        </div>

        {/* Tech tags animate on row hover */}
        {project.techStack?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.techStack.slice(0, 3).map((tech, ti) => (
              <motion.span
                key={ti}
                className="font-mono text-xs border px-2 py-0.5"
                animate={{
                  borderColor: isHovered ? "rgba(232,255,71,0.5)" : "#2A2A2A",
                  color: isHovered ? "#E8FF47" : "#6B6B6B",
                  y: isHovered ? 0 : 0,
                }}
                transition={{ delay: ti * 0.05, duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── Main section ─────────────────────────────────────────────────────────────
const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Spring-physics cursor tracker
  const rawX = useMotionValue(-600);
  const rawY = useMotionValue(-600);
  const springCfg = { damping: 22, stiffness: 180, mass: 0.7 };
  const smoothX = useSpring(rawX, springCfg);
  const smoothY = useSpring(rawY, springCfg);

  useEffect(() => {
    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <section id="projects" className="py-32 border-t border-divider">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-px bg-accent"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          />
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            04 — Projects
          </p>
        </motion.div>

        {/* Project rows */}
        <div>
          {ProjectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
            >
              <ProjectRow
                project={project}
                index={i}
                isHovered={hoveredIdx === i}
                isAnyHovered={hoveredIdx !== null}
                onEnter={() => setHoveredIdx(i)}
                onLeave={() => setHoveredIdx(null)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Cursor-following image preview (desktop only) ── */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            className="fixed pointer-events-none z-50 hidden lg:block"
            style={{
              left: smoothX,
              top: smoothY,
              translateX: "-50%",
              translateY: "-72%",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Image swaps with AnimatePresence when project changes */}
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIdx}
                className="relative overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.88, rotate: -3, y: 8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, rotate: 2, y: -4 }}
                transition={{
                  duration: 0.22,
                  ease: [0.23, 1, 0.32, 1],
                }}
                style={{ width: 288, height: 192 }}
              >
                <img
                  src={ProjectsData[hoveredIdx]?.imgSrc}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.05) brightness(0.9)" }}
                />

                {/* Accent border */}
                <div className="absolute inset-0 border border-accent/50" />

                {/* Bottom overlay with name */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.92) 0%, transparent 100%)",
                  }}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.2 }}
                >
                  <p className="font-mono text-xs text-accent tracking-wide">
                    {ProjectsData[hoveredIdx]?.name}
                  </p>
                  <p className="font-mono text-xs text-muted/70 mt-0.5 truncate">
                    {ProjectsData[hoveredIdx]?.techStack?.slice(0, 2).join(" · ")}
                  </p>
                </motion.div>

                {/* Top-right corner accent mark */}
                <div className="absolute top-0 right-0 w-4 h-4">
                  <div className="absolute top-0 right-0 w-full h-px bg-accent" />
                  <div className="absolute top-0 right-0 w-px h-full bg-accent" />
                </div>
                <div className="absolute bottom-0 left-0 w-4 h-4">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-accent" />
                  <div className="absolute bottom-0 left-0 w-px h-full bg-accent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
