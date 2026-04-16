import React from "react";
import { motion } from "framer-motion";
import { Resume } from "../assets";
import { Socials } from "../utils/helper";

const name = "Dhruv Gorasiya";
const CURSOR_DELAY = (name.length - 1) * 0.04 + 0.5;
const LINE_DELAY = CURSOR_DELAY + 0.15;

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-14 relative overflow-hidden">

      {/* Large background "//" symbol */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden leading-none"
        aria-hidden="true"
        style={{ opacity: 0.045 }}
      >
        <motion.span
          className="font-mono text-cream block"
          style={{ fontSize: "clamp(180px, 28vw, 400px)", lineHeight: 0.9, letterSpacing: "-0.06em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          //
        </motion.span>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full relative z-10">

        {/* Name — letter by letter */}
        <div className="relative pb-6">
          <h1
            className="font-serif leading-none tracking-tight text-cream"
            style={{ fontSize: "clamp(72px, 11vw, 160px)" }}
            aria-label={name}
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
                style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
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

          {/* Full-viewport lime line drawn beneath the name */}
          <motion.div
            className="absolute left-0 bottom-0 h-0.5 bg-accent"
            style={{
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              transformOrigin: "left center",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: LINE_DELAY, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          />
        </div>

        {/* Title */}
        <motion.p
          className="font-mono text-muted mt-8 mb-6"
          style={{ fontSize: 15 }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          Software Engineering Intern, Weaviate
        </motion.p>

        {/* Statement */}
        <motion.p
          className="font-mono text-cream/65 max-w-xl leading-relaxed mb-12"
          style={{ fontSize: 15 }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
        >
          I build production systems at the intersection of machine learning and
          scalable infrastructure. Currently scaling vector search pipelines at Weaviate.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
        >
          {/* Resume CTAs */}
          <motion.a
            href={Resume}
            download
            className="font-mono text-sm border border-divider text-cream/80 px-5 py-2.5 inline-flex items-center gap-2.5 transition-all duration-150"
            whileHover={{ backgroundColor: "#E8FF47", borderColor: "#E8FF47", color: "#080808" }}
            transition={{ duration: 0.12 }}
          >
            Download Resume
            <span>↓</span>
          </motion.a>

          <motion.a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border border-divider text-cream/80 px-5 py-2.5 inline-flex items-center gap-2.5 transition-all duration-150"
            whileHover={{ backgroundColor: "#E8FF47", borderColor: "#E8FF47", color: "#080808" }}
            transition={{ duration: 0.12 }}
          >
            View Resume
            <span>↗</span>
          </motion.a>

          <span className="font-mono text-xs text-divider select-none hidden sm:block">—</span>

          {/* Social links */}
          {Socials.map((s) => (
            <motion.a
              key={s.id}
              href={s.uri}
              target={s.uri.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-mono text-muted inline-flex items-center gap-1.5 group link-visible"
              style={{ fontSize: 14 }}
              whileHover={{ color: "#E8FF47" }}
              transition={{ duration: 0.12 }}
            >
              {s.label}
              <span className="opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150">↗</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-20 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="w-px bg-divider origin-top"
            style={{ height: 40 }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
          <span className="font-mono text-muted/40" style={{ fontSize: 11 }}>scroll</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
