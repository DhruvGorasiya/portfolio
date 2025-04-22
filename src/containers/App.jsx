import React from "react";
import {About, Contact, Header,Home, ParticlesContainer, Projects, Skills} from "./"
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-bgPrimary via-[#0a0a1a] to-bgPrimary opacity-90" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA4YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <ParticlesContainer/>
        
        {/* Glass Navigation */}
        <div className="glass-card fixed top-4 left-4 right-4 lg:left-8 lg:right-8 z-50 rounded-xl px-4 py-2 max-w-[1200px] mx-auto">
          <Header/>
        </div>
        
        <div className="pt-20 space-y-32">
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </div>

        {/* Footer with Glass Effect */}
        <div className="glass-card mt-32 mb-8 rounded-2xl p-8 text-center">
          <p className="text-gradient text-4xl tracking-wider font-bold">Dhruv Gorasiya</p>
          <div className="flex items-center justify-center gap-8 mt-8">
            <AnimatePresence>
              {Socials && Socials.map((item,index)=> (
                <HomeSocialLinks key={index} data={item} index={index}/>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


// https://my-portfolio-e5ea5.web.app