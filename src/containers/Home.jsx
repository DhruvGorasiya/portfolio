import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero, Resume } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
  <section id="home" className="flex items-center justify-center flex-col gap-12 relative mt-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">

        <h2 className="text-3xl lg:text-4xl text-texlight">
          Hello! Its me
          <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
            Dhruv
          </span>
        </h2>

        <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
          And I am a {" "}
          <HeroTypeWritter words={["Full Stack Developer"]} speed={100}/>
        </h2>
        <p className="text-base text-texlight mt-6 text-center">
        Transforming concepts into reality through the development of software that seamlessly merges technology and artistic innovation.
        </p>
        <div className="flex item-center justify-center gap-16 mt-16 mb-5">
          <AnimatePresence>
            {Socials && Socials.map((item,index)=> (
              <HomeSocialLinks key ={index} data={item} index={index}/>
            ))}
          </AnimatePresence>
        </div>

        <div>

          <a href={Resume} 
          className="text-white border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
          >Resume</a>
          <br />
          <br />
          <br />
          <a href={Resume} 
          className="text-white border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
          download={true}
          >Download Resume</a>
        </div>

      </div>
      <div className="w-full h-full flex items-center justify-center lg:items-center">
        <motion.img initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear"
          }}
          src={Hero} className="w-auto h-auto object-contain" />
      </div>
    </div>
  </section>
  );
};

export default Home;
