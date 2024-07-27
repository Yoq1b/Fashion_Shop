import React from "react";
import { NavLink } from "react-router-dom";

const Latest = () => {
  return (
    <>
      <div className="w-[100%] px-[10px] h-[30px] m-auto mt-[30px] flex items-center justify-between">
        <p className="text-white text-[20px] font-poppins font-medium">
          Latest
        </p>
        <NavLink to="/category">
          <p className="text-[#5E596E] text-[12px] font-poppins font-medium">
            View all
          </p>
        </NavLink>
      </div>
    </>
  );
};

export default Latest;
