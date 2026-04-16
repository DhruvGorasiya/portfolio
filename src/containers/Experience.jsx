import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExperiencesData } from "../utils/helper";

const Chevron = ({ isOpen, hovered }) => (
  <motion.svg
    width="12" height="12" viewBox="0 0 12 12" fill="none"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.25, ease: "easeInOut" }}
    className="flex-shrink-0"
  >
    <path
      d="M2 4L6 8L10 4"
      stroke={hovered ? "#080808" : "currentColor"}
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </motion.svg>
);

// Framer Motion variants — propagate from parent row to all children
const rowVariants = {
  rest: { backgroundColor: "transparent" },
  hover: { backgroundColor: "#E8FF47" },
};
const accentTextVariants = {
  rest: { color: "#E8FF47" },
  hover: { color: "#080808" },
};
const primaryTextVariants = {
  rest: { color: "rgba(245,245,240,0.88)" },
  hover: { color: "#080808" },
};
const mutedTextVariants = {
  rest: { color: "#6B6B6B" },
  hover: { color: "rgba(8,8,8,0.55)" },
};
const expandBtnVariants = {
  rest: { borderColor: "#2A2A2A", color: "#6B6B6B" },
  hover: { borderColor: "#080808", color: "#080808" },
};
const watermarkVariants = {
  rest: { opacity: 0.08 },
  hover: { opacity: 0 },
};

const ExperienceRow = ({ exp, isOpen, onToggle }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="border-b border-divider">
      {/* Row header with full invert on hover */}
      <motion.div
        className="relative overflow-hidden cursor-pointer"
        variants={rowVariants}
        initial="rest"
        whileHover="hover"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={onToggle}
        transition={{ duration: 0.15 }}
      >
        {/* Watermark company name */}
        <motion.div
          className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none"
          variants={watermarkVariants}
          transition={{ duration: 0.15 }}
          aria-hidden="true"
        >
          <span
            className="font-serif text-cream whitespace-nowrap leading-none"
            style={{ fontSize: "clamp(60px, 9vw, 130px)", letterSpacing: "-0.03em" }}
          >
            {exp.company}
          </span>
        </motion.div>

        {/* Row content — sits above watermark */}
        <div className="relative z-10 py-8 flex items-center justify-between gap-4 px-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 min-w-0">
            {/* Company */}
            <motion.span
              className="font-mono text-xs flex-shrink-0 inline-flex items-center gap-2"
              variants={accentTextVariants}
              transition={{ duration: 0.15 }}
            >
              {exp.company}
              {exp.companyUrl && (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center border px-1.5 py-0.5 rounded text-xs transition-colors duration-150"
                  style={{
                    borderColor: hovered ? "rgba(8,8,8,0.4)" : "rgba(232,255,71,0.4)",
                    color: hovered ? "#080808" : "#E8FF47",
                  }}
                >
                  ↗
                </a>
              )}
            </motion.span>

            {/* Role */}
            <motion.span
              className="font-serif truncate"
              style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
              variants={primaryTextVariants}
              transition={{ duration: 0.15 }}
            >
              {exp.role}
            </motion.span>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <motion.span
              className="font-mono text-xs hidden sm:block"
              variants={mutedTextVariants}
              transition={{ duration: 0.15 }}
            >
              {exp.location}
            </motion.span>
            <motion.span
              className="font-mono text-xs whitespace-nowrap"
              variants={mutedTextVariants}
              transition={{ duration: 0.15 }}
            >
              {exp.duration}
            </motion.span>

            {/* Expand button */}
            <motion.span
              className="w-6 h-6 border rounded-full flex items-center justify-center flex-shrink-0"
              variants={expandBtnVariants}
              transition={{ duration: 0.15 }}
              style={{ borderColor: isOpen && !hovered ? "#E8FF47" : undefined, color: isOpen && !hovered ? "#E8FF47" : undefined }}
            >
              <Chevron isOpen={isOpen} hovered={hovered} />
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Accordion — not inverted */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <ul className="pb-10 pt-2 space-y-3">
              {exp.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-accent font-mono text-xs flex-shrink-0 mt-0.5 select-none">—</span>
                  <span className="font-mono text-cream/70 leading-relaxed" style={{ fontSize: 14 }}>{h}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Experience = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="experience" className="py-32 border-t border-divider">
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
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            02 — Experience
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
          Experience
        </motion.h2>

        {/* Hint */}
        <motion.p
          className="font-mono text-xs text-muted/40 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Hover to preview · click to expand
        </motion.p>

        {/* Rows */}
        <div>
          {ExperiencesData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <ExperienceRow
                exp={exp}
                index={i}
                isOpen={openIdx === i}
                onToggle={() => toggle(i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
