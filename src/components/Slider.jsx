import React from "react";
import a from "/assets/a.png";
import b from "/assets/b.png";
import c from "/assets/c.png";
import d from "/assets/d.png";
import e from "/assets/e.png";
import f from "/assets/f.png";
import g from "/assets/g.png";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <div className="w-[100%] h-[115px] px-[10px]  absolute top-0  flex items-center gap-[15px] overflow-x-scroll scrollbar-hide">
        <div className="w-[90px] h-full flex flex-col items-center justify-between">
          <div className="w-[90px] h-[90px]">
            <NavLink to="/tops">
              <img
                src={a}
                alt="rasm"
                className="rounded-[13px] w-full h-full"
              />
            </NavLink>
          </div>
          <p className="text-[12px] text-white font-medium font-poppins">
            Tops
          </p>
        </div>
        <div className="w-[90px] h-full flex flex-col items-center justify-between">
          <div className="w-[90px] h-[90px]">
            <img src={b} alt="rasm" className="rounded-[13px] w-full h-full" />
          </div>
          <p className="text-[12px] text-white font-medium font-poppins">
            Dress
          </p>
        </div>
        <div className="w-[90px] h-full flex flex-col items-center justify-between">
          <div className="w-[90px] h-[90px]">
            <img src={c} alt="rasm" className="rounded-[13px] w-full h-full" />
          </div>
          <p className="text-[12px] text-white font-medium font-poppins">
            Skirts
          </p>
        </div>
        <div className="w-[90px] h-full flex flex-col items-center justify-between">
          <div className="w-[90px] h-[90px]">
            <img src={d} alt="rasm" className="rounded-[13px] w-full h-full" />
          </div>
          <p className="text-[12px] text-white font-medium font-poppins">
            Jeans
          </p>
        </div>
        <div className="w-[90px] h-full flex flex-col items-center justify-between">
          <div className="w-[90px] h-[90px]">
            <img src={e} alt="rasm" className="rounded-[13px] w-full h-full" />
          </div>
          <p className="text-[12px] text-white font-medium font-poppins">
            Brand
          </p>
        </div>
        <div className="w-[90px] h-full flex flex-col items-center justify-between">
          <div className="w-[90px] h-[90px]">
            <img src={f} alt="rasm" className="rounded-[13px] w-full h-full" />
          </div>
          <p className="text-[12px] text-white font-medium font-poppins">
            Clothes
          </p>
        </div>
        <div className="w-[90px] h-full flex flex-col items-center justify-between">
          <div className="w-[90px] h-[90px]">
            <img src={g} alt="rasm" className="rounded-[13px] w-full h-full" />
          </div>
          <p className="text-[12px] text-white font-medium font-poppins">
            Trending
          </p>
        </div>
      </div>
    </>
  );
};

export default Slider;
