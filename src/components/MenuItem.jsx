import React from "react";

const MenuItem = ({ menu, index }) => {
  return (
    <a 
      href={menu.uri} 
      className="flex items-center gap-1.5 text-texlight hover:text-white transition-colors duration-300 text-sm"
    >
      <menu.Icon className="text-lg" />
      <span className="font-medium">{menu?.name}</span>
    </a>
  );
};

export default MenuItem;
