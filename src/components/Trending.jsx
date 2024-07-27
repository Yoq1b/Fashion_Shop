import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";
import g from "/assets/g.png";
import f from "/assets/f.png";
import e from "/assets/e.png";
import black from "/assets/blackwear.png";

const Trending = () => {
  return (
    <>
      <div className="w-full px-[10px] mt-[15px] flex flex-col items-center gap-[15px]">
        <div className="w-full h-[130px] rounded-[12px] bg-[#140D2B] flex items-center px-[15px]">
          <div className="w-[100px] h-[100px] rounded-[10px] bg-white border">
            <img
              src={g}
              alt="rasm"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="ml-[15px] h-[65px] flex flex-col items-start justify-between">
            <p className="text-[20px] font-medium font-poppins leading-[30px] text-white">
              Trending
            </p>
            <NavLink to="/shopbycategory">
              <div className="w-[71px] h-[30px] bg-white rounded-[4px] flex items-center justify-center">
                <p className="text-[12px] ml-[6px] font-semibold font-poppins leading-[12px] text-black">
                  Explore
                </p>
                <MdOutlineNavigateNext className="text-[15px]" />
              </div>
            </NavLink>
          </div>
        </div>
        <div className="w-full h-[130px] rounded-[12px] bg-[#140D2B] flex items-center px-[15px]">
          <div className="w-[100px] h-[100px] rounded-[10px] bg-white border">
            <img src={f} alt="rasm" className="w-full h-full rounded-[10px]" />
          </div>
          <div className="ml-[15px] h-[65px] flex flex-col items-start justify-between">
            <p className="text-[20px] font-medium font-poppins leading-[30px] text-white">
              Clothes
            </p>
            <NavLink to="/shopbycategory">
              <div className="w-[71px] h-[30px] bg-white rounded-[4px] flex items-center justify-center">
                <p className="text-[12px] ml-[6px] font-semibold font-poppins leading-[12px] text-black">
                  Explore
                </p>
                <MdOutlineNavigateNext className="text-[15px]" />
              </div>
            </NavLink>
          </div>
        </div>
        <div className="w-full h-[130px] rounded-[12px] bg-[#140D2B] flex items-center px-[15px]">
          <div className="w-[100px] h-[100px] rounded-[10px] bg-white border">
            <img src={e} alt="rasm" className="w-full h-full rounded-[10px]" />
          </div>
          <div className="ml-[15px] h-[65px] flex flex-col items-start justify-between">
            <p className="text-[20px] font-medium font-poppins leading-[30px] text-white">
              Brand Sale
            </p>
            <NavLink to="/shopbycategory">
              <div className="w-[71px] h-[30px] bg-white rounded-[4px] flex items-center justify-center">
                <p className="text-[12px] ml-[6px] font-semibold font-poppins leading-[12px] text-black">
                  Explore
                </p>
                <MdOutlineNavigateNext className="text-[15px]" />
              </div>
            </NavLink>
          </div>
        </div>
        <div className="w-full h-[130px] rounded-[12px] bg-[#140D2B] flex items-center px-[15px]">
          <div className="w-[100px] h-[100px] rounded-[10px] bg-white border">
            <img src={black} alt="rasm" className="w-full h-full rounded-[10px]" />
          </div>
          <div className="ml-[15px] h-[65px] flex flex-col items-start justify-between">
            <p className="text-[20px] font-medium font-poppins leading-[30px] text-white">
              Black Wears
            </p>
            <NavLink to="/shopbycategory">
              <div className="w-[71px] h-[30px] bg-white rounded-[4px] flex items-center justify-center">
                <p className="text-[12px] ml-[6px] font-semibold font-poppins leading-[12px] text-black">
                  Explore
                </p>
                <MdOutlineNavigateNext className="text-[15px]" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
