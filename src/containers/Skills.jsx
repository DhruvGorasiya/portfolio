import React from "react";
import {AnimatePresence ,motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import './index.scss';
import { SkillCard } from "../components";


const Skills = () => {
  return(
    <section id="skills"
      className="flex items-center justify-center flex-col gap-12 my-12">
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex item-center justify-center py-24">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-5">Skills</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* w-full flex items-center justify-center px-8
      w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br
       */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* img section */}
        
        {/* content section */}

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-5">Skills and Experience</p>
          <p className="text-texlight text-base tracking-wide text-justify mt-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, voluptatem! Aperiam omnis nihil illum, impedit voluptatibus debitis eaque ipsa expedita molestias, dolore est laborum. In consectetur tempora explicabo labore saepe.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, voluptatem! Aperiam omnis nihil illum, impedit voluptatibus debitis eaque ipsa expedita molestias, dolore est laborum. In consectetur tempora explicabo labore saepe.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, voluptatem! Aperiam omnis nihil illum, impedit voluptatibus debitis eaque ipsa expedita molestias, dolore est laborum. In consectetur tempora explicabo labore saepe.
          </p>
        </div>
        <div className="w-full flex items-center justify-center px-8">
          <SkillCard skill={"Python"} percentage={"95%"} color={"#FF3F3F"} />
        </div>

      </div>
    </section>
  );
};

export default Skills;
