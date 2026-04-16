import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menus } from "../utils/helper";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-base/90 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "border-b border-divider" : ""
      }`}
    >
      {/* Scroll progress — accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="font-mono text-sm text-cream"
          whileHover={{ color: "#E8FF47" }}
          transition={{ duration: 0.15 }}
        >
          DG
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {Menus.map((item) => (
            <motion.a
              key={item.id}
              href={item.uri}
              className="font-mono text-xs text-muted underline-draw"
              whileHover={{ color: "#F5F5F0" }}
              transition={{ duration: 0.15 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden font-mono text-xs text-muted hover:text-cream transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
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
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {Menus.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.uri}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm text-muted hover:text-cream transition-colors duration-200"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
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
