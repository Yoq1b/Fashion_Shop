import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Data } from "../db/data";
import Footer from "../components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { LikeContext, ShopContext, ProductContext } from "../App";
import bbasket from "/assets/bbasket.svg";
import del from "/assets/delicon.svg";
import EmptyBasket from "../components/EmptyBasket";

const Basket = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 degani avvalgi sahifaga qaytadi
  };

  const { shop, setShop } = useContext(ShopContext);
  const { product, setProduct } = useContext(ProductContext);
  const [counts, setCounts] = useState({});

  const handleCardClick = (itemId) => {
    setShop([itemId]);
    window.scrollTo(0, 0); // Bu yerda ekranni yuqoriga ko'taramiz
  };

  const deleteItem = (itemId) => {
    setProduct((prevProduct) => prevProduct.filter((id) => id !== itemId));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[itemId];
      return newCounts;
    });
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
            Cart
          </p>
        </div>
        {/* --------- */}
        <div className="w-full flex flex-col items-center gap-[15px]">
          {product.length === 0 && <EmptyBasket />}
          {product.length > 0 &&
            Data.map((item) => {
              if (product.includes(item.id)) {
                return (
                  <div
                    key={item.id}
                    className="w-full h-[130px] rounded-[12px] bg-[#140D2B] flex items-center justify-between px-[15px]"
                  >
                    <NavLink to="/singleproduct">
                      <div
                        onClick={() => handleCardClick(item.id)}
                        className="w-[100px] h-[100px] rounded-[10px] bg-white border"
                      >
                        <img
                          src={item.image}
                          alt="rasm"
                          className="w-full h-full object-fill rounded-[10px]"
                        />
                      </div>
                    </NavLink>

                    <div>
                      <NavLink to="/singleproduct">
                        <p
                          onClick={() => handleCardClick(item.id)}
                          className="text-[#fff] font-medium font-poppins text-[18px] leading-[27px]"
                        >
                          {item.name}
                        </p>
                        <p
                          onClick={() => handleCardClick(item.id)}
                          className="text-[#fff] mb-[21px] mt-[5px] font-medium font-poppins text-[15px] leading-[17px]"
                        >
                          ${item.price}.00
                        </p>
                      </NavLink>
                      <div className="w-[210px] flex items-end justify-between">
                        <div className="opacity-0">
                          <p className="text-[#fff] mb-[5px] font-medium font-poppins text-[12px] leading-[9.6px]">
                            Size: {item.size}
                          </p>
                          <p className="text-[#fff] mb-[5px] font-medium font-poppins text-[12px] leading-[9.6px]">
                            Color: {item.color}
                          </p>
                        </div>
                        <img
                          onClick={() => deleteItem(item.id)}
                          src={del}
                          alt="rasm"
                          className="w-[35px] h-[35px]"
                        />
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          {product.length > 0 && (
            <div className="w-full rounded-[12px] bg-[#140D2B] flex flex-col items-center px-[15px] p-[15px]">
              {Data.map((item) => {
                if (product.includes(item.id)) {
                  return (
                    <div key={item.id} className="w-full">
                      <div className="flex items-center mb-[10px] justify-between w-full">
                        <p className="text-[#fff] font-medium font-poppins text-[14px] leading-[17px]">
                          {item.name}
                        </p>
                        <p className="text-[#fff] font-medium font-poppins text-[14px] leading-[17px]">
                          ${item.price}.00
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
              <div className="flex border-y border-y-[#5E596E] py-[10px] items-center mb-[10px] justify-between w-full">
                <p className="text-[#fff] font-medium font-poppins text-[14px] leading-[17px]">
                  Total Amount
                </p>
                <p className="text-[#fff] font-medium font-poppins text-[14px] leading-[17px]">
                  $ {getTotalPrice()}
                </p>
              </div>
            </div>
          )}
          {product.length > 0 && (
            <NavLink to="/checkout" className="w-[100%]">
              <div className=" h-[56px] bottom-[90px] bg-white rounded-[36px] flex items-center justify-center gap-[5px]">
                <img src={bbasket} alt="" />
                <p className="text-black font-medium font-poppins text-[16px]">
                  Checkout
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

export default Basket;
