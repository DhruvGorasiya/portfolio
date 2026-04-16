import React from "react";
import { motion } from "framer-motion";
import { Socials } from "../utils/helper";

const Contact = () => {
  const githubSocial = Socials.find((s) => s.label === "GitHub");
  const linkedinSocial = Socials.find((s) => s.label === "LinkedIn");

  return (
    <section id="contact" className="py-32 border-t border-divider">
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
            05 — Contact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        >
          {/* Headline prompt */}
          <p className="font-serif italic text-lg text-muted mb-6">
            Have something to build?
          </p>

          {/* Large email link */}
          <motion.p
            className="font-mono text-xl lg:text-4xl text-cream block mb-10"
          >
            Get in touch
          </motion.p>

          {/* Secondary links */}
          <div className="flex gap-8">
            {githubSocial && (
              <motion.a
                href={githubSocial.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted link-visible inline-flex items-center gap-1.5 group"
                whileHover={{ color: "#F5F5F0" }}
                transition={{ duration: 0.15 }}
              >
                GitHub
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
              </motion.a>
            )}
            {linkedinSocial && (
              <motion.a
                href={linkedinSocial.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted link-visible inline-flex items-center gap-1.5 group"
                whileHover={{ color: "#F5F5F0" }}
                transition={{ duration: 0.15 }}
              >
                LinkedIn
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
