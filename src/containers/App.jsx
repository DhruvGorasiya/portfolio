import React from "react";
import { About, Header, Home, Projects, Skills, Experience } from "./";

const App = () => {
  return (
    <div className="w-full min-h-screen relative bg-base">
      {/* Dot-matrix background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1C1C1C 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      {/* Fixed header */}
      <Header />

      {/* Page content */}
      <main className="relative z-10">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-divider">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-8 flex items-center justify-between">
          <span className="font-mono text-xs text-muted">© 2025 Dhruv Gorasiya</span>
          <span className="font-mono text-xs text-muted">Boston, MA</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
