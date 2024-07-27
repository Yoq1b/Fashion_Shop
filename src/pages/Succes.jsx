import React from "react";
import done from "/assets/done.svg";
import { NavLink } from "react-router-dom";
import bbasket from "/assets/bbasket.svg";

const Succes = () => {
  return (
    <>
      <div className="w-[100%] h-[100%] bg-[#080020] fixed z-50 top-0 left-0 ">
        <div className="w-[100%] h-[100%] relative flex items-center justify-center border">
          <div className="flex flex-col items-center mb-[100px] gap-[40px]">
            <img src={done} alt="rasm" className="w-[200px] h-[200px]" />
            <div>
              <p className="text-[#05F300] text-[24px] font-semibold font-poppins mb-[5px]">
                Payment Successful
              </p>
              <p className="text-[#fff] text-[14px] font-medium font-poppins leading-[17px] text-center">
                Satisfied conveying dependent
                <br /> contented he gentleman
              </p>
            </div>
          </div>
          <NavLink to="/" className="w-[100%] px-[10px] fixed bottom-[15px]">
            <div className="w-full h-[56px] bg-white rounded-[36px] flex items-center justify-center gap-[5px]">
              <img src={bbasket} alt="" />
              <p className="text-black font-medium font-poppins text-[16px]">
                Continue Shopping
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Succes;
