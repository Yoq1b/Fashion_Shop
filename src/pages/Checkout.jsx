import React, {useEffect} from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import Deliver from "../components/Deliver";
import Payment from "../components/Payment";
import Total from "../components/Total";
import Footer from "../components/Footer";

const Checkout = () => {
 useEffect(() => {
   window.scroll(0, 0);
 }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 degani avvalgi sahifaga qaytadi
  };

  return (
    <>
      <div className="w-[100%] pt-[10px] pb-[100px] px-[10px]">
        {/* --------- */}
        <div className="flex items-center gap-[5px] mb-[15px]">
          <div
            onClick={handleBack}
            className="w-[20px] h-[20px] flex items-center justify-center"
          >
            <IoIosArrowBack className="text-[20px] text-white" />
          </div>
          <p className="text-[#fff] font-medium font-poppins text-[14px]">
            Checkout
          </p>
        </div>
        {/* --------- */}
        <Deliver />
        <Payment />
        <Total />
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
