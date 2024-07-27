import React from "react";
import Logo from "/assets/Fosn_logo.svg";
import Logicon from "/assets/logoicon.svg";
import bell from "/assets/bell.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[100%] px-[10px] m-auto flex items-center justify-between">
      <NavLink to="/">
        <div className="relative">
          <img src={Logo} alt="rasm" />
          <img
            src={Logicon}
            alt="rasm"
            className="absolute top-0 left-[10px]"
          />
        </div>
      </NavLink>
      <img src={bell} alt="rasm" className="w-[22px] h-[22px]" />
    </div>
  );
};

export default Navbar;
