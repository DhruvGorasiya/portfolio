import React from "react";
import { motion } from "framer-motion";
import { SkillsData } from "../utils/helper";

const DOT = {
  expert: "●",
  advanced: "◐",
  intermediate: "○",
};

const DOT_COLOR = {
  expert: "#F5F5F0",
  advanced: "#9A9A95",
  intermediate: "#4A4A46",
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 border-t border-divider">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Section label with animated accent line */}
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
            03 — Skills
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="flex gap-6 mb-10"
        >
          {[
            { dot: "●", label: "Expert", color: DOT_COLOR.expert },
            { dot: "◐", label: "Advanced", color: DOT_COLOR.advanced },
            { dot: "○", label: "Intermediate", color: DOT_COLOR.intermediate },
          ].map(({ dot, label, color }) => (
            <span key={label} className="font-mono text-xs text-muted flex items-center gap-2">
              <span style={{ color }}>{dot}</span>
              {label}
            </span>
          ))}
        </motion.div>

        {/* Two-column skill list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16">
          {SkillsData.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-4 py-3 border-b border-divider group"
            >
              <motion.span
                className="font-mono text-sm flex-shrink-0"
                style={{ color: DOT_COLOR[skill.proficiency] }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.15 }}
              >
                {DOT[skill.proficiency] || "○"}
              </motion.span>
              <span className="font-mono text-xs text-cream/75 group-hover:text-cream transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
