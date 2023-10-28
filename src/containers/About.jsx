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
      className="flex items-center justify-center flex-col gap-12 my-12">
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex item-center justify-center py-24">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-5">About</p>
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
            {/* <img src={about}
              className = "w-full rounded-md h-auto object-contain"
              alt="" />
              <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur -z-10"></div> */}
            <div className="w-full py-6 flex items-center justify-center flex-wrap">
              <div className="stage-cube-cont">
                <div className="cubespinner w-full rounded-md h-auto object-contain">
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
              </div>
            </div>
          </div>
        </div>
        {/* content section */}

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
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