import React from "react";
import {AnimatePresence ,motion } from "framer-motion";
import { Leaf1, Leaf2, django, MongoDb ,cpp, vscode, nodejs} from "../assets";
import './index.scss';
import { SkillCard } from "../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
// import './src/assets/img/Projects/mongodb.png'


const Skills = () => {
  return(
    <section id="skills"
      className="flex items-center justify-center flex-col gap-12 my-12">
      <div className="w-full flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex item-center justify-center py-24">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-5 text-2xl">Skills</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* w-full flex items-center justify-center px-8
      w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br
      
       */}
       
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* img section */}
        
        {/* content section */}
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-96 p-[2px]">
          <div className="stage-cube-cont">
                <div className="cubespinner w-full rounded-md h-auto object-contain">
                  <div className="face1">
                    <img src={django} alt="" />
                  </div>
                  <div className="face2">
                  <img src={MongoDb} alt="" />
                  </div>
                  <div className="face3">
                  <img src={cpp} alt="" />
                  </div>
                  <div className="face4">
                  <img src={vscode} alt="" />
                  </div>
                  <div className="face5">
                  <img src={nodejs} alt="" />
                  </div>
                  <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                  </div>
                </div>
              </div>
          </div>
        </div>
        {/* <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
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
        </div> */}
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard skill={`python`} percentage={"95%"} color={"#008FFF"} move={true} />
          <SkillCard skill={"Java"} percentage={"80%"} color={"yellow"} />
          <SkillCard skill={"JavaScript"} percentage={"80%"} color={"#FF3F3F"} move={true}/>
          <SkillCard skill={"HTML & CSS"} percentage={"95%"} color={"lightgreen"} />
          <SkillCard skill={"MongoDb"} percentage={"90%"} color={"white"} move={true}/>
          <SkillCard skill={"React Native"} percentage={"90%"} color={"orange"} />
        </div>

      </div>

      <p className="text-texlight text-base tracking-wide text-justify text-xl">
       Passionate software engineer with expertise in Java, Python, C++, and JavaScript (including HTML, CSS, React) for web development. Proficient in backend technologies like Node.js for server-side programming. Skilled in databases, with strengths in SQL and MongoDB. Experienced with version control using Git and GitHub for collaborative development.
       </p>

    </section>
  );
};

export default Skills;
