import React from "react";
import {Menus} from "../utils/helper"
import {MenuItem} from "../components"

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-gradient font-bold text-lg">Dhruv Gorasiya</span>
      </div>
      <div className="flex items-center gap-4">
        {Menus && Menus.map((item,index) => (
          <MenuItem key={index} menu={item} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default Header;
