import { React, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
// import './index.scss'
import { ProjectsData } from "../utils/helper";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects"
      className="flex items-center justify-center flex-col gap-12 my-12">
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex item-center justify-center py-24">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-5 text-2xl">Projects</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* w-full flex items-center justify-center px-8
      w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br
       */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {ProjectsData && ProjectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHoverred, setisHoverred] = useState(false)
  return (


    <motion.div key={project.id} className="overflow-hidden cursor-pointer relative rounded-md"
      onMouseEnter={() => setisHoverred(true)}
      onMouseLeave={() => setisHoverred(false)}>
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-full h-96 overflow-hidden rounded py-12" src={project.imgSrc}
      />
      {isHoverred && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col duration-300 gap-2">
          <p className="text-xl text-primary">{project?.name}</p>
          <p className="text-white px-2">{project?.description}</p>
          <a href={project?.gitURL} className="">
            <FaGithub className="text-3xl text-white hover:text-primary " />
          </a>

        </motion.div>
      )}
    </motion.div>
  )
}

export default Projects;
