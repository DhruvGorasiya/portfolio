import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const About = () => {
  return (
    <section id="about"
      className="flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex item-center justify-center py-12">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-5 text-2xl">About</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* w-full flex items-center justify-center px-8
      w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br
       */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* img section */}
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br relative">
            <img src={about}
              className = "w-full rounded-md h-auto object-contain"
              alt="" />
              <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur -z-10"></div>
          </div>
        </div>
        {/* content section */}

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start ">
          <p className="text-texlight  tracking-wide text-justify text-xl">
          I'm a dedicated Software Developer with a Computer Science degree and diverse experience in software development, machine learning, and web development. I excel in cross-functional teamwork, fostering open communication for remarkable results. 
          </p>
          <p className="text-texlight text-base tracking-wide text-justify text-xl">
          My interests lie in Machine learning, AI convergence and studying algorithms, and I'm also passionate about web development. My goal is to secure a Full Stack Developer position, further advancing my programming skills.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify text-xl">
          Being a cooperative team member, my commitment lies in fostering open and effective communication while promoting synergy among cross-functional teams to drive the achievement of remarkable results. I am consistently open to exploring new prospects and would be genuinely delighted to connect with you for engaging discussions encompassing technology and more. Let's join forces to create something extraordinary together!
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;

// {/* This is from other file */}
{/* <div className="stage-cube-cont">
<div className="cubespinner">
  <div className="face1">
    <FontAwesomeIcon icon={faPython} />
  </div>
  <div className="face2">
    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
  </div>
  <div className="face3">
    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
  </div>
  <div className="face4">
    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
  </div>
  <div className="face5">
    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
  </div>
  <div className="face6">
    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
  </div>
</div>
</div>  */}
// {/* Till here */}