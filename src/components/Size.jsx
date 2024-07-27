import React from "react";
import size from "/assets/size.png";

const Size = () => {
  return (
    <>
      <div>
        <p className="text-white my-[4px] mt-[10px] mb-[3px] font-medium font-poppins text-[14px] ">
          Select Size: XL
        </p>
        <div className="flex items-center gap-[10px] mb-[15px]">
          <div className="w-[30px] h-[30px] flex items-center gap-[10px] border rounded-[5px] ">
            <img src={size} alt="rasm" className="w-full h-full" />
            <img src={size} alt="rasm" className="w-full h-full" />
            <img src={size} alt="rasm" className="w-full h-full" />
          </div>
        </div>
        <p className="text-white my-[4px] mt-[10px] mb-[3px] font-medium font-poppins text-[14px] ">
          Select Color: Cherry Red
        </p>
        <div className="flex items-center gap-[10px] pb-[30px]">
          <div className="rounded-[50%] w-[12px] h-[12px] bg-[#FF0004]"></div>
          <div className="rounded-[50%] w-[12px] h-[12px] bg-[#0094FF]"></div>
          <div className="rounded-[50%] w-[12px] h-[12px] bg-[#FAFF00]"></div>
          <div className="rounded-[50%] w-[12px] h-[12px] bg-[#FF8A8A]"></div>
          <div className="rounded-[50%] w-[12px] h-[12px] bg-[#FFFFFF]"></div>
        </div>
      </div>
    </>
  );
};

export default Size;
