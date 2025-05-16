import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill, color, move, proficiency = "advanced" }) => {
  // Define fill amounts based on proficiency level
  const fillAmount = {
    expert: "95%",
    advanced: "85%",
    intermediate: "75%",
    learning: "60%"
  };

  return (
    <div 
      className={`border border-[rgba(255,255,255,0.3)] rounded-md px-8 py-3 cursor-pointer group w-full flex flex-col gap-2 relative`}
      style={{ 
        boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)",
        marginLeft: move ? -30 : 20
      }}
    >
      <div className="flex-1 flex-col items-start justify-start flex gap-2">
        <p className="text-base text-white">{skill}</p>
        <div className="w-full h-1 rounded-md overflow-hidden bg-[rgba(255,255,255,0.3)] relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: fillAmount[proficiency] }}
            transition={{ duration: 1.5 }}
            className="h-full absolute top-0 left-0"
            style={{ background: color }}
          >
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
