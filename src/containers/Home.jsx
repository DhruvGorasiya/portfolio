import React from "react";
import { motion } from "framer-motion";
import { Resume } from "../assets";
import { Socials } from "../utils/helper";

const name = "Dhruv Gorasiya";
// Cursor appears after last letter: (chars-1) * 0.04 + 0.4 ≈ 1.0s
const CURSOR_DELAY = (name.length - 1) * 0.04 + 0.5;

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-14">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full">

        {/* Large name — letter by letter + blinking cursor */}
        <h1
          className="font-serif leading-none tracking-tight text-cream mb-6"
          style={{ fontSize: "clamp(56px, 10vw, 120px)" }}
          aria-label={name}
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
          {/* Blinking cursor */}
          <motion.span
            className="text-accent cursor-blink inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: CURSOR_DELAY, duration: 0.1 }}
            aria-hidden="true"
          >
            _
          </motion.span>
        </h1>

        {/* Current title */}
        <motion.p
          className="font-mono text-sm text-muted mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        >
          Software Engineering Intern, Weaviate
        </motion.p>

        {/* Statement */}
        <motion.p
          className="font-mono text-sm text-cream/70 max-w-xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
        >
          I build production systems at the intersection of machine learning and
          scalable infrastructure. Currently scaling vector search pipelines at Weaviate.
        </motion.p>

        {/* CTAs + social links */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
        >
          {/* Resume — outlined button so it reads as primary CTA */}
          <motion.a
            href={Resume}
            download
            className="font-mono text-xs border border-divider text-cream/80 px-4 py-2 inline-flex items-center gap-2 transition-colors duration-200"
            whileHover={{ borderColor: "#E8FF47", color: "#E8FF47" }}
            transition={{ duration: 0.15 }}
          >
            Download Resume
            <motion.span
              initial={{ y: 0 }}
              whileHover={{ y: 2 }}
              transition={{ duration: 0.15 }}
            >
              ↓
            </motion.span>
          </motion.a>

          {/* Divider */}
          <span className="font-mono text-xs text-divider select-none hidden sm:block">—</span>

          {/* Social links */}
          {Socials.map((s) => (
            <motion.a
              key={s.id}
              href={s.uri}
              target={s.uri.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted inline-flex items-center gap-1.5 group link-visible"
              whileHover={{ color: "#F5F5F0" }}
              transition={{ duration: 0.15 }}
            >
              {s.label}
              <span className="opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                ↗
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-24 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-10 bg-divider origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
          />
          <motion.span
            className="font-mono text-xs text-muted/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.4 }}
          >
            scroll
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
