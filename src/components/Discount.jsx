import React from "react";
import banner from "/assets/banner.png";
import { NavLink } from "react-router-dom";

const Discount = () => {
  return (
    <>
      <div className="w-[100%] px-[10px] h-[160px] m-auto mt-[30px]  rounded-[6px] flex items-center justify-between">
        <div className="h-full w-[50%] rounded-tl-[6px] rounded-bl-[6px] bg-white flex flex-col items-center justify-between py-[20px]">
          <p className="text-[#001C7E] font-semibold leading-[24px] font-poppins text-[24px] text-center">
            30%
            <br /> Discount
          </p>
          <p className="text-[#001C7E] font-medium leading-[11.76px] font-poppins text-[12px] text-center">
            Started several mistake
            <br /> joy painful reached
          </p>
          <NavLink to="/tops">
            <button className="w-[70px] h-[28px] rounded-[4px] bg-[#001C7E] text-[10px] text-white font-poppins font-mediu">
              Shop now
            </button>
          </NavLink>
        </div>
        <div className="h-full w-[50%]">
          <img
            src={banner}
            alt="rasm"
            className="w-full h-full rounded-tr-[7px] rounded-br-[7px]"
          />
        </div>
      </div>
    </>
  );
};

export default Discount;
