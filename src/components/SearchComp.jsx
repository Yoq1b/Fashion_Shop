import React, { useState, useContext } from "react";
import search from "/assets/search.svg";
import { Data } from "../db/data";
import { ShopContext } from "../App";
import { NavLink } from "react-router-dom";

const SearchComp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { shop, setShop } = useContext(ShopContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = Data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeModal = () => {
    setSearchTerm(""); // Reset search term to close the dropdown
  };
  return (
    <div className="w-[100%] px-[10px]">
      <div className="w-[100%] h-[36px] relative mt-[20px] rounded-[6px] flex items-center justify-center m-auto bg-[#140D2B]">
        <div className="flex items-center w-[335px]">
          <img src={search} alt="rasm" className="w-[20px] h-[20px]" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
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
          {/* -------- */}
          {searchTerm && (
            <div className="absolute left-0 z-50 top-[40px] w-full border bg-[#140D2B] rounded-[10px] shadow-lg max-h-[100px] overflow-y-auto">
              {filteredData.map((item) => (
                <NavLink to="/singleproduct" key={item.id}>
                  <div
                    onClick={() => {
                      setShop([item.id]);
                      closeModal();
                    }}
                    className="flex items-center my-[1px]  rounded-[8px] justify-start gap-[30px] p-2 bg-[#5E596E] "
                  >
                    <p className="text-start font-medium text-white">
                      {item.name}
                    </p>
                  </div>
                </NavLink>
              ))}
              {filteredData.length === 0 && (
                <div className="p-2 text-white">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchComp;
