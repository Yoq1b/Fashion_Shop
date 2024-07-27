import React, { useContext } from "react";
import { Data } from "../db/data";
import { LikeContext, ShopContext } from "../App";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Products = () => {
  const { likedd, setLikedd } = useContext(LikeContext);
  const { shop, setShop } = useContext(ShopContext);

  const toggleLike = (itemId) => {
    setLikedd((prevLiked) =>
      prevLiked.includes(itemId)
        ? prevLiked.filter((id) => id !== itemId)
        : [...prevLiked, itemId]
    );
  };

  const handleCardClick = (itemId) => {
    setShop([itemId]);
    window.scrollTo(0, 0); // Bu yerda ekranni yuqoriga ko'taramiz
  };

  return (
    <>
      <div className="w-[100%] px-[15px] m-auto mt-[6px] flex flex-wrap items-center justify-between">
        {Data.slice(0, 1).map((item) => (
          <div key={item.id} className="w-[170px] h-[234px]  mb-[28px]">
            <div className="relative w-[100%] h-[200px] bg-[#fff] rounded-[6px] ">
              <NavLink to="/singleproduct">
                <img
                  onClick={() => handleCardClick(item.id)}
                  src={item.image}
                  alt="rasm"
                  className="w-full z-10 h-full"
                />
              </NavLink>
              <div className="w-[52px] h-[22px] rounded-[15px] absolute top-[10px] left-[10px] bg-[#080020] z-20 flex items-center justify-center">
                <p className=" text-white font-medium text-[10px] leading-[7.5px] font-poppins">
                  20% Off
                </p>
              </div>
              <div className="w-[30px] h-[30px] rounded-[50px] absolute top-[5px] right-[10px] z-20 flex items-center justify-center [box-shadow:0px_2px_10px_0px_#0000001A]">
                <div
                  className={`w-[35px] h-[35px] hover:cursor-pointer rounded-[4px] duration-75 flex items-center justify-center ${
                    likedd.includes(item.id) ? "text-black" : ""
                  }`}
                  onClick={() => toggleLike(item.id)}
                >
                  {likedd.includes(item.id) ? (
                    <IoIosHeart className="text-[18px] h-[35px] text-[#FF0000]" />
                  ) : (
                    <IoIosHeartEmpty className="text-[18px] hover:text-[#FF0000] text-black" />
                  )}
                </div>
              </div>
            </div>
            <p className="my-[5px] text-white font-medium text-[16px] leading-[14.4px] font-poppins">
              {item.name}
            </p>
            <p className=" text-white font-medium text-[12px] leading-[9.6px] font-poppins">
              ${item.price}.00
            </p>
          </div>
        ))}
        {Data.slice(1, 6).map((item) => (
          <div key={item.id} className="w-[170px] h-[234px]  mb-[28px]">
            <div className="relative w-[100%] h-[200px] bg-[#fff] rounded-[6px] ">
              <NavLink to="/singleproduct">
                <img
                  onClick={() => handleCardClick(item.id)}
                  src={item.image}
                  alt="rasm"
                  className="w-full z-10 h-full"
                />
              </NavLink>
              <div className="w-[30px] h-[30px] rounded-[50px] absolute top-[5px] right-[10px] z-20 flex items-center justify-center [box-shadow:0px_2px_10px_0px_#0000001A]">
                <div
                  className={`w-[35px] h-[35px] hover:cursor-pointer rounded-[4px] duration-75 flex items-center justify-center ${
                    likedd.includes(item.id) ? "text-black" : ""
                  }`}
                  onClick={() => toggleLike(item.id)}
                >
                  {likedd.includes(item.id) ? (
                    <IoIosHeart className="text-[18px] h-[35px] text-[#FF0000]" />
                  ) : (
                    <IoIosHeartEmpty className="text-[18px] hover:text-[#FF0000] text-black" />
                  )}
                </div>
              </div>
            </div>
            <p className="my-[5px] text-white font-medium text-[16px] leading-[14.4px] font-poppins">
              {item.name}
            </p>
            <p className=" text-white font-medium text-[12px] leading-[9.6px] font-poppins">
              ${item.price}.00
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
