import React from "react";
import {AnimatePresence, motion} from 'framer-motion'

const HomeSocialLinks = ({data,index}) => {
  return <motion.a key={index}>
    <AnimatePresence>
      <div className="w-full h-full rounded-full bg-bgPrimary flex items-center justify-center">
        <data.icon className={`text-texlight`}/>
      </div>
    </AnimatePresence>
  </motion.a>;
};

export default HomeSocialLinks;
