import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero, Resume, about } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section id="home" className="py-12">
      {/* Background Blobs */}
      <div className="absolute left-0 right-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h2 className="text-3xl lg:text-4xl text-texlight">
              Hello! I'm
              <span className="text-gradient text-4xl lg:text-6xl font-bold ml-2">
                Dhruv
              </span>
            </h2>

            <h2 className="text-2xl lg:text-3xl text-texlight mt-4">
              And I'm a {" "}
              <span className="text-gradient">
                <HeroTypeWritter words={["Machine Learning/Artificial Intelligence Engineer"]} speed={100}/>
              </span>
            </h2>

            <p className="text-base text-texlight mt-6 leading-relaxed">
              Transforming concepts into reality through the development of software that seamlessly merges technology and artistic innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
              <a 
                href={Resume} 
                className="w-full sm:w-auto px-6 py-2 rounded-xl text-white font-medium hover:shadow-glow transition-all duration-300 hover:scale-105 text-center bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 hover:border-primary/50"
              >
                View Resume
              </a>
              <a 
                href={Resume} 
                download={true}
                className="w-full sm:w-auto px-6 py-2 rounded-xl text-white font-medium hover:shadow-glow transition-all duration-300 hover:scale-105 text-center bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 hover:border-primary/50"
              >
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8">
              <AnimatePresence>
                {Socials && Socials.map((item,index)=> (
                  <HomeSocialLinks key={index} data={item} index={index}/>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          {/* <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
              <motion.img 
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
                src={Hero} 
                className="w-full h-auto object-contain" 
                alt="Hero"
              />
            </div>
          </motion.div> */}

          <div className="w-full flex items-center justify-center px-8">
            <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br relative">
              <img src={about}
                className="w-full rounded-md h-auto object-contain"
                alt="" />
              <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
