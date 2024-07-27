import React from "react";
import { NavLink } from "react-router-dom";
import bbasket from "/assets/bbasket.svg";
import { RiHeartAdd2Line } from "react-icons/ri";
import { TbShoppingBagPlus } from "react-icons/tb";

const EmptyBasket = () => {
  return (
    <>
      <div className="w-[100%] h-[500px] bg-[#080020]  flex flex-col items-center justify-center">
        <TbShoppingBagPlus className="text-[200px] text-white" />
        <div className="text-center">
          <p className="text-[24px] font-medium text-[#05F300] font-poppins">
            Basket is empty
          </p>
          <p className="text-[14px] font-medium font-poppins text-white mb-[5px]">
            Please add product first
          </p>
        </div>
        <NavLink to="/" className="w-[100%]">
          <div className="w-[355px] ml-[3px] h-[56px] fixed bottom-[90px] bg-white rounded-[36px]  flex items-center justify-center gap-[5px]">
            <img src={bbasket} alt="" />
            <p className="text-black  font-medium font-poppins text-[16px] ">
              Continue Shopping
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default EmptyBasket;
