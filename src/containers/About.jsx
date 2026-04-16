import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Counts from 0 to a target value when scrolled into view
const StatNumber = ({ display, target, decimals = 0, suffix = "", label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (step >= steps) {
        setValue(target);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="font-mono text-4xl lg:text-5xl text-cream font-medium tabular-nums">
        {formatted}{suffix}
      </p>
      <p className="font-mono text-xs text-muted mt-2">{label}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 border-t border-divider">
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
            01 — About
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Editorial bio */}
          <div className="lg:col-span-2 space-y-8">
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="font-mono text-sm text-cream/80 leading-relaxed"
            >
              I'm a software developer with a Computer Science degree from California
              State University, Long Beach. My work lives at the boundary between
              applied machine learning and production engineering — writing systems
              that have to be both intelligent and fast.
            </motion.p>

            {/* Blockquote with animated left border */}
            <motion.blockquote
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="relative pl-6 my-8"
            >
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent block origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              />
              <p className="font-serif italic text-xl lg:text-2xl text-cream leading-snug">
                I build intelligent systems at the intersection of rigorous
                engineering and applied AI.
              </p>
            </motion.blockquote>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="font-mono text-sm text-cream/80 leading-relaxed"
            >
              My interests are in large-scale retrieval, RAG pipelines, and
              algorithmic research. I care about systems that perform under pressure
              — not just in demos. I thrive in cross-functional teams and believe
              the best engineering work happens when communication is as sharp as
              the code.
            </motion.p>
          </div>

          {/* Animated stats */}
          <div className="flex flex-row lg:flex-col gap-10 lg:gap-12 justify-start">
            <StatNumber target={50} suffix="K+" label="daily requests handled" />
            <StatNumber target={3.89} decimals={2} label="GPA" />
            <StatNumber target={4} label="years building" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
