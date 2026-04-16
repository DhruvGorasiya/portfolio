import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExperiencesData } from "../utils/helper";

const Chevron = ({ isOpen }) => (
  <motion.svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.25, ease: "easeInOut" }}
    className="flex-shrink-0"
  >
    <path
      d="M2 4L6 8L10 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

const ExperienceRow = ({ exp, index, isOpen, onToggle }) => {
  return (
    <div className="border-b border-divider">
      {/* Clickable row header */}
      <motion.button
        className="w-full py-5 flex items-start sm:items-center justify-between gap-4 text-left group cursor-pointer rounded"
        onClick={onToggle}
        aria-expanded={isOpen}
        whileHover={{ backgroundColor: "rgba(245,245,240,0.025)" }}
        transition={{ duration: 0.15 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 min-w-0">
          <span className="font-mono text-xs text-accent flex-shrink-0 inline-flex items-center gap-2">
            {exp.company}
            {exp.companyUrl && (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 border border-accent/40 hover:border-accent hover:bg-accent/10 text-accent px-1.5 py-0.5 rounded transition-colors duration-150 text-xs"
                title={`Visit ${exp.company}`}
              >
                ↗
              </a>
            )}
          </span>
          <span className="font-serif text-base lg:text-lg text-cream/90 group-hover:text-cream transition-colors duration-200 truncate">
            {exp.role}
          </span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="font-mono text-xs text-muted hidden sm:block">{exp.location}</span>
          <span className="font-mono text-xs text-muted whitespace-nowrap">{exp.duration}</span>
          {/* Visible expand/collapse button */}
          <span
            className={`w-6 h-6 border rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0 ${
              isOpen
                ? "border-accent text-accent"
                : "border-divider text-muted group-hover:border-cream/40 group-hover:text-cream/60"
            }`}
          >
            <Chevron isOpen={isOpen} />
          </span>
        </div>
      </motion.button>

      {/* Accordion content */}
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
            <ul className="pb-8 space-y-3 pl-0">
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-accent font-mono text-xs flex-shrink-0 mt-0.5 select-none">—</span>
                  <span className="font-mono text-xs text-cream/75 leading-relaxed">
                    {highlight}
                  </span>
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

        {/* Section label with animated accent line */}
        <motion.div
          className="flex items-center gap-4 mb-4"
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
            02 — Experience
          </p>
        </motion.div>

        {/* Hint text */}
        <motion.p
          className="font-mono text-xs text-muted/50 mb-12 pl-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Click any row to expand details
        </motion.p>

        {/* Table column labels */}
        <div className="hidden sm:flex items-center justify-between pb-4 border-b border-divider mb-0">
          <span className="font-mono text-xs text-muted/50">Company · Role</span>
          <span className="font-mono text-xs text-muted/50 mr-10">Period</span>
        </div>

        {/* Experience rows */}
        <div>
          {ExperiencesData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
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
