import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Data } from "../db/data";
import Footer from "../components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { LikeContext, ShopContext } from "../App";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import EmptyLike from "../components/EmptyLike";
import bbasket from "/assets/bbasket.svg";

const Like = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 degani avvalgi sahifaga qaytadi
  };

  const { likedd, setLikedd } = useContext(LikeContext);
  const { shop, setShop } = useContext(ShopContext);

  const toggleLike = (itemId) => {
    setLikedd((prevLikedd) =>
      prevLikedd.includes(itemId)
        ? prevLikedd.filter((id) => id !== itemId)
        : [...prevLikedd, itemId]
    );
  };

  const handleCardClick = (itemId) => {
    setShop([itemId]);
    window.scrollTo(0, 0); // Bu yerda ekranni yuqoriga ko'taramiz
  };

  return (
    <>
      <div className="w-[100%] px-[10px] pt-[10px] pb-[80px]">
        {/* --------- */}
        <div className="flex items-center gap-[5px] mb-[15px]">
          <div
            onClick={handleBack}
            className="w-[20px] h-[20px] flex items-center justify-center"
          >
            <IoIosArrowBack className="text-[20px] text-white" />
          </div>
          <p className="text-[#fff] font-medium font-poppins text-[14px]">
            Wishlist
          </p>
        </div>
        {/* --------- */}
        <div className="w-full flex flex-col items-center gap-[15px]">
          {likedd.length === 0 && <EmptyLike />}
          {likedd.length > 0 &&
            Data.map((item) => {
              return likedd.includes(item.id) ? (
                <div
                  key={item.id}
                  className="w-full h-[130px] rounded-[12px] bg-[#140D2B] flex items-center justify-between px-[15px]"
                >
                  <div
                    onClick={() => handleCardClick(item.id)}
                    className="w-[100px] h-[100px] rounded-[10px] bg-white border cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt="rasm"
                      className="w-full h-full object-fill rounded-[10px]"
                    />
                  </div>

                  <div>
                    <p
                      onClick={() => handleCardClick(item.id)}
                      className="text-[#fff] font-medium font-poppins text-[18px] leading-[27px] cursor-pointer"
                    >
                      {item.name} {/* O'zgartirdim, item.name ni qo'shdim */}
                    </p>
                    <p
                      onClick={() => handleCardClick(item.id)}
                      className="text-[#fff] mb-[26px] font-medium font-poppins text-[14px] leading-[17px] cursor-pointer"
                    >
                      ${item.price.toFixed(2)}{" "}
                      {/* O'zgartirdim, item.price ni qo'shdim */}
                    </p>
                    <div className="w-[210px] flex items-end justify-between">
                      <div>
                        <p className="text-[#fff] mb-[5px] font-medium font-poppins text-[12px] leading-[9.6px]">
                          Size: {item.size}{" "}
                          {/* O'zgartirdim, item.size ni qo'shdim */}
                        </p>
                        <p className="text-[#fff] mb-[5px] font-medium font-poppins text-[12px] leading-[9.6px]">
                          Color: {item.color}{" "}
                          {/* O'zgartirdim, item.color ni qo'shdim */}
                        </p>
                      </div>
                      <MdOutlineRemoveCircleOutline
                        onClick={() => toggleLike(item.id)}
                        className="text-[#DF2323] text-[20px] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          {likedd.length > 0 && (
            <NavLink
              to="/basket"
              className="w-full px-[10px] fixed bottom-[70px]"
            >
              <div className="w-full border h-[56px] bg-white rounded-[36px] flex items-center justify-center gap-[5px]">
                <img src={bbasket} alt="" />
                <p className="text-black font-medium font-poppins text-[16px]">
                  Add to cart
                </p>
              </div>
            </NavLink>
          )}
        </div>
        {/* --------- */}
        <Footer />
      </div>
    </>
  );
};

export default Like;
