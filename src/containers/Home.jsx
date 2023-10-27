import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return <section id="home" className="flex items-center justify-center flex-col gap-12 relative">
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum distinctio amet architecto cupiditate numquam, fugit, eligendi ad magni laborum neque animi itaque repellat facilis ducimus. Culpa accusamus odit laboriosam.
        </p>
        <div className="flex item-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials && Socials.map((item,index)=> (
              <HomeSocialLinks key ={index} data={item} index={index}/>
            ))}
          </AnimatePresence>
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
  </section>;
};

export default Home;
