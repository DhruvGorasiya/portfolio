import React from "react";
import { motion } from "framer-motion";
import { About, Header, Home, Projects, Skills, Experience } from "./";
import { Socials } from "../utils/helper";

const App = () => {
  return (
    <div className="w-full min-h-screen relative bg-base">

      {/* Animated grid background */}
      <div className="grid-bg fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />

      <Header />

      <main className="relative z-10">
        {/* Alternating section backgrounds */}
        <div style={{ background: "#080808" }}><Home /></div>
        <div style={{ background: "#0D0D0D" }}><About /></div>
        <div style={{ background: "#080808" }}><Experience /></div>
        <div style={{ background: "#0D0D0D" }}><Skills /></div>
        <div style={{ background: "#080808" }}><Projects /></div>
      </main>

      {/* Bold accent footer */}
      <footer className="relative z-10 w-full" style={{ background: "#E8FF47" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

            {/* Name */}
            <motion.p
              className="font-serif leading-none tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "#080808" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Dhruv Gorasiya
            </motion.p>

            {/* Right side: social links */}
            <motion.div
              className="flex flex-col items-start lg:items-end gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex gap-6">
                {Socials.map(s => (
                  <a
                    key={s.id}
                    href={s.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm underline-draw"
                    style={{ color: "rgba(8,8,8,0.6)" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom line */}
          <div className="mt-12 pt-6 border-t flex items-center justify-between" style={{ borderColor: "rgba(8,8,8,0.15)" }}>
            <span className="font-mono text-xs" style={{ color: "rgba(8,8,8,0.45)" }}>© 2025</span>
            <span className="font-mono text-xs" style={{ color: "rgba(8,8,8,0.45)" }}>Boston, MA</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
