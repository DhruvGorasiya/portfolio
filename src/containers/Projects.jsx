import { React, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
// import './index.scss'
import { ProjectsData } from "../utils/helper";
import { FaGithub, FaLink } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      {/* Original Project Tag with Leaves */}
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
            Projects
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* Projects Grid Container */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {ProjectsData && ProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image Container */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.imgSrc}
          alt={project.name}
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Info */}
      <div className="p-6 relative">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gradient mb-3">
          {project.name}
        </h3>

        {/* Project Description */}
        <p className="text-texlight text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        {/* Project Links */}
        <div className="flex items-center gap-4 mt-4">
          <a
            href={project.gitURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 text-white text-sm"
          >
            <FaGithub className="text-lg" />
            <span>View Code</span>
          </a>
          {project.liveURL && (
            <a
              href={project.liveURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 text-white text-sm"
            >
              <FaLink className="text-lg" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack?.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-white/5 text-texlight"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay with Full Description */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/95 backdrop-blur-sm p-6 flex flex-col justify-center"
          >
            <p className="text-white text-sm leading-relaxed overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
              {project.description}
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href={project.gitURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                <span>Repository</span>
              </a>
              {project.liveURL && (
                <a
                  href={project.liveURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all duration-300"
                >
                  <FaLink className="text-xl" />
                  <span>Visit Site</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
