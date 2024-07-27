import React, { useContext, useState } from "react";
import { ProductContext } from "../App";
import { Data } from "../db/data";
import Succes from "../pages/Succes";

const Total = () => {
  const { product, setProduct } = useContext(ProductContext);
  const [counts, setCounts] = useState({});
  const [isDone, setIsDone] = useState(false); // Nomini o'zgartirdik

  const handlePayment = () => {
    setIsDone(true);
    setProduct([]);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    Data.forEach((item) => {
      if (product.includes(item.id)) {
        const quantity = counts[item.id] || 1;
        totalPrice += item.price * quantity;
      }
    });
    return totalPrice.toFixed(2);
  };

  const getTotalPriceWithAdditionalCharge = () => {
    const totalPrice = parseFloat(getTotalPrice()) || 0; // `getTotalPrice` 0 bo'lsa, xatolik bo'lmaydi
    return (totalPrice + 2).toFixed(2);
  };

  return (
    <>
      {product.length > 0 && (
        <div className="w-full mt-[15px] rounded-[12px] bg-[#140D2B] flex flex-col items-center px-[15px] p-[15px]">
          <div className="flex items-center mb-[10px] justify-between w-full">
            <p className="text-[#fff] font-medium font-poppins text-[14px] leading-[17px]">
              Order
            </p>
            <p className="text-[#fff] font-medium font-poppins text-[14px] leading-[17px]">
              $ {getTotalPrice()}
            </p>
          </div>
          <div className="flex items-center mb-[10px] justify-between w-full">
            <p className="text-[#fff] font-medium font-poppins text-[14px] leading-[17px]">
              Delivery Charge
            </p>
            <p className="text-[#fff] font-medium font-poppins text-[14px] leading-[17px]">
              $ 2.00
            </p>
          </div>
          <div className="flex border-y border-y-[#5E596E] py-[10px] items-center mb-[10px] justify-between w-full">
            <p className="text-[#fff] font-medium font-poppins text-[16px] leading-[17px]">
              Total Amount
            </p>
            <p className="text-[#fff] font-medium font-poppins text-[14px] leading-[17px]">
              $ {getTotalPriceWithAdditionalCharge()}
            </p>
          </div>
          {/* ------------- */}
        </div>
      )}
      <div className="w-full mt-[44px] px-[10px]">
        <button
          onClick={handlePayment}
          className="w-full h-[56px] active:bg-[#140D2B] active:border active:text-white bottom-[90px] text-black font-medium font-poppins text-[16px] bg-white rounded-[36px] flex items-center justify-center gap-[5px]"
        >
          Pay
        </button>
      </div>
      {isDone && <Succes />}
    </>
  );
};

export default Total;
