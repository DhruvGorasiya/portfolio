import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";

const About = () => {
  return (
    <section id="about" className="py-20">
      {/* Title Section */}
      <div className="w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center py-12"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-5 text-2xl">
            About
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden max-w-4xl mx-auto"
        >
          {/* Background Gradient Blobs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl -z-10" />
          
          {/* Content Paragraphs */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-texlight tracking-wide text-justify text-lg mb-8"
          >
            I'm a dedicated Software Developer with a Computer Science degree and diverse experience in software development, machine learning, and web development. I excel in cross-functional teamwork, fostering open communication for remarkable results.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-texlight tracking-wide text-justify text-lg mb-8"
          >
            My interests lie in Machine Learning, Artificial Intelligence, and algorithmic research. I am passionate about building intelligent systems that solve real-world problems, and my goal is to contribute to innovative AI-driven solutions in both research and industry.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-texlight tracking-wide text-justify text-lg mb-8"
          >
            Being a cooperative team member, my commitment lies in fostering open and effective communication while promoting synergy among cross-functional teams to drive the achievement of remarkable results. I am consistently open to exploring new prospects and would be genuinely delighted to connect with you for engaging discussions encompassing technology and more. Let's join forces to create something extraordinary together!
          </motion.p>

          {/* Skills Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            {['Machine Learning', 'Artificial Intelligence', 'Algorithmic Research', 'Web Development'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-white/80 text-sm border border-white/10 hover:from-primary/20 hover:to-secondary/20 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;