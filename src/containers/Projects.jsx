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

// ─── Framer Motion variants ───────────────────────────────────────────────────
const rowVariants = {
  rest: { backgroundColor: "transparent" },
  hover: { backgroundColor: "#E8FF47" },
};
const numVariants = {
  rest: { color: "rgba(245,245,240,0.08)" },
  hover: { color: "rgba(8,8,8,0.10)" },
};
const nameVariants = {
  rest: { color: "#F5F5F0" },
  hover: { color: "#080808" },
};
const mutedVariants = {
  rest: { color: "#6B6B6B" },
  hover: { color: "rgba(8,8,8,0.5)" },
};
const tagVariants = {
  rest: { borderColor: "#2A2A2A", color: "#6B6B6B" },
  hover: { borderColor: "rgba(8,8,8,0.25)", color: "#080808" },
};
const arrowVariants = {
  rest: { opacity: 0, x: -4 },
  hover: { opacity: 1, x: 0 },
};

// ─── Single project row ───────────────────────────────────────────────────────
const ProjectRow = ({ project, index, isHovered, isAnyHovered, onEnter, onLeave }) => {
  const scrambled = useScramble(project.name, isHovered);

  return (
    <motion.div
      className="relative border-b border-divider overflow-hidden cursor-pointer"
      variants={rowVariants}
      initial="rest"
      whileHover="hover"
      onHoverStart={onEnter}
      onHoverEnd={onLeave}
      onClick={() => window.open(project.gitURL, "_blank", "noopener,noreferrer")}
      animate={{ opacity: isAnyHovered && !isHovered ? 0.3 : 1 }}
      transition={{ duration: 0.18 }}
    >
      {/* Giant faded number — absolute watermark */}
      <motion.span
        className="absolute right-0 top-1/2 font-serif leading-none pointer-events-none select-none"
        style={{
          fontSize: "clamp(120px, 18vw, 220px)",
          letterSpacing: "-0.04em",
          transform: "translateY(-50%)",
          lineHeight: 1,
        }}
        variants={numVariants}
        transition={{ duration: 0.18 }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      {/* Row content — above watermark */}
      <div className="relative z-10 py-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">

        {/* Project name (scrambled) + arrow */}
        <motion.a
          href={project.gitURL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif flex-shrink-0 inline-flex items-center gap-2"
          style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}
          variants={nameVariants}
          transition={{ duration: 0.18 }}
        >
          {scrambled}
          <motion.span
            className="font-mono text-sm"
            variants={arrowVariants}
            transition={{ duration: 0.18 }}
          >
            ↗
          </motion.span>
        </motion.a>

        {/* Description */}
        <motion.span
          className="font-mono text-xs leading-relaxed flex-1 min-w-0"
          variants={mutedVariants}
          transition={{ duration: 0.18 }}
        >
          {project.description}
        </motion.span>

        {/* Tech tags */}
        {project.techStack?.length > 0 && (
          <div className="flex flex-wrap gap-2 flex-shrink-0">
            {project.techStack.slice(0, 3).map((tech, ti) => (
              <motion.span
                key={ti}
                className="font-mono text-xs border px-2 py-0.5"
                variants={tagVariants}
                transition={{ delay: ti * 0.03, duration: 0.18 }}
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

        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-6"
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

        {/* Large title */}
        <motion.h2
          className="font-serif text-cream leading-none tracking-tight mb-4"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Projects
        </motion.h2>

        {/* Hint */}
        <motion.p
          className="font-mono text-xs text-muted/40 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Hover to preview · click to open
        </motion.p>

        {/* Project rows */}
        <div>
          {ProjectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: "easeOut" }}
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
              translateX: "24px",
              translateY: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIdx}
                className="relative overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.88, rotate: -3, y: 8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, rotate: 2, y: -4 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                style={{ width: 288, height: 192 }}
              >
                <img
                  src={ProjectsData[hoveredIdx]?.imgSrc}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.05) brightness(0.9)" }}
                />
                <div className="absolute inset-0 border border-accent/50" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2"
                  style={{ background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, transparent 100%)" }}
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
