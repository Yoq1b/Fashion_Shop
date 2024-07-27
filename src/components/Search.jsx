import React, { useState } from "react";
import search from "/assets/search.svg";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-[100%] px-[10px]">
      <div className="w-[100%] h-[36px] mt-[20px] rounded-[6px] flex items-center justify-center m-auto bg-[#140D2B]">
        <div className="flex items-center w-[335px]">
          <img src={search} alt="rasm" className="w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder="Search here"
            className="bg-[#140D2B] w-[225px] outline-none text-[#5E596E] text-[12px] ml-[10px]"
          />
          <select
            id="cars"
            className="outline-none pl-[5px] w-[79px] h-[22px] border-l-[2px] text-white bg-[#140D2B] text-[12px] border-l-[#231c3e]"
          >
            <option label="Women">Women</option>
            <option label="Men">Men</option>
            <option label="Kids">Kids</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
