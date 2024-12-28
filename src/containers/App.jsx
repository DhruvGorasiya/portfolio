import React from "react";
import {About, Contact, Header,Home, ParticlesContainer, Projects, Skills} from "./"
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="w-full xl:w-[1500px] py-32px px-4 lg:px-12 pr-4 lg:pr-32 mt-12">
      
      <ParticlesContainer/>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <div className="w-full flex flex-col items-center justify-start">
        <p className="text-3xl tracking-wider text-texlight"> Dhruv Gorasiya</p>
        <div className="flex items-center justify-center gap-16 mt-16 mb-10">
        <AnimatePresence>
            {Socials && Socials.map((item,index)=> (
              <HomeSocialLinks key ={index} data={item} index={index}/>
            ))}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
};

export default App;


// https://my-portfolio-e5ea5.web.app