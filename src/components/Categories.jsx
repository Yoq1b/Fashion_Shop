import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import line from "/assets/lineicon.svg";
import filter from "/assets/filter.svg";
const Categories = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 degani avvalgi sahifaga qaytadi
  };

  return (
    <>
      <div className="w-[100%] px-[10px] my-[15px] flex items-center justify-between">
        <div className="flex items-center gap-[5px] mb-[15px]">
          <div
            onClick={handleBack}
            className="w-[20px] h-[20px] flex items-center justify-center"
          >
            <IoIosArrowBack className="text-[20px] text-white" />
          </div>
          <p className="text-[#fff] font-medium font-poppins text-[14px]">
            Categories
          </p>
        </div>
        <div className="flex items-center gap-[10px] mb-[15px]">
          <img src={line} alt="rasm" className="w-[20px] h-[20px]" />
          <img src={filter} alt="rasm" className="w-[20px] h-[20px]" />
        </div>
      </div>
    </>
  );
};

export default Categories;
