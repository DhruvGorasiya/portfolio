import React from "react";
import { motion } from "framer-motion";
import { SkillsData } from "../utils/helper";

const pillVariants = {
  rest: {
    backgroundColor: "transparent",
    borderColor: "#2A2A2A",
    color: "rgba(245,245,240,0.65)",
  },
  hover: {
    backgroundColor: "#E8FF47",
    borderColor: "#E8FF47",
    color: "#080808",
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 border-t border-divider">
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
            03 — Skills
          </p>
        </motion.div>

        {/* Large title */}
        <motion.h2
          className="font-serif text-cream leading-none tracking-tight mb-16"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Skills
        </motion.h2>

        {/* Dense pill wrap */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {SkillsData.map((skill, i) => (
            <motion.span
              key={i}
              className="font-mono text-xs border px-3 py-1.5 cursor-default select-none"
              variants={pillVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.13 }}
              style={{ display: "inline-block" }}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
