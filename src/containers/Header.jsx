import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menus } from "../utils/helper";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-base/90 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "border-b border-divider" : ""
      }`}
    >
      {/* Accent scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
        {/* Logo with pulsing accent dot */}
        <motion.a
          href="#home"
          className="font-mono text-sm text-cream flex items-center gap-2"
          whileHover={{ color: "#E8FF47" }}
          transition={{ duration: 0.15 }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-accent block flex-shrink-0"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          DG
        </motion.a>

        {/* Desktop nav — full invert on hover */}
        <nav className="hidden md:flex items-center gap-8">
          {Menus.map((item) => (
            <motion.a
              key={item.id}
              href={item.uri}
              className="font-mono text-xs text-muted relative px-2 py-1"
              whileHover={{
                backgroundColor: "#E8FF47",
                color: "#080808",
              }}
              transition={{ duration: 0.12 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-xs text-muted hover:text-cream transition-colors duration-200"
          onClick={() => setMenuOpen(p => !p)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <motion.div
          className="md:hidden border-t border-divider bg-base"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {Menus.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.uri}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm text-muted px-3 py-2"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ backgroundColor: "#E8FF47", color: "#080808" }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
