import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import star from "/assets/star.svg";
import basket from "/assets/basket.svg";
import bag from "/assets/bag.svg";
import Slider from "react-slick";
import { LikeContext, ProductContext } from "../App";
import { ShopContext } from "../../src/App";
import { Data } from "../db/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel.css";
import { IoIosArrowBack, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { PiShareNetworkBold } from "react-icons/pi";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import Size from "../components/Size";
import ControlledAccordions from "../components/ControlledAccordions";
import Similiar_products from "../components/Similiar_products";

const Single_product = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // -1 degani avvalgi sahifaga qaytadi
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const [liked, setLiked] = useState([]);
  const [counts, setCounts] = useState({});

  const { likedd, setLikedd } = useContext(LikeContext);
  const { shop, setShop } = useContext(ShopContext);
  const { product, setProduct } = useContext(ProductContext);

  const toggleLike = (itemId) => {
    setLiked((prevLiked) =>
      prevLiked.includes(itemId)
        ? prevLiked.filter((id) => id !== itemId)
        : [...prevLiked, itemId]
    );

    if (!likedd.includes(itemId)) {
      setLikedd([...likedd, itemId]); // likedd o'zgaruvchisini setLikedd orqali yangilash
    } else {
      setLikedd(likedd.filter((id) => id !== itemId));
    }
  };

  const increment = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };

  const decrement = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] > 1 ? prevCounts[itemId] - 1 : 1,
    }));
  };

  const handleProductClick = (item) => {
    if (!product.includes(item.id)) {
      setProduct([...product, item.id]);
    } else {
      // setProduct(product.filter((id) => id !== item.id));
    }
  };

  return (
    <>
      <div className="w-[100%] m-auto">
        {Data.map(
          (item) =>
            item.id === shop[0] && (
              <div
                key={item.id}
                className="w-[100%] m-auto border border-black  h-[445px] relative"
              >
                <button
                  onClick={handleBack}
                  className="w-[30px] h-[30px] rounded-[50px] absolute top-[30px] left-[30px] z-20 flex items-center justify-center [box-shadow:0px_2px_10px_0px_#0000001A]"
                >
                  <IoIosArrowBack className="text-[20px]" />
                </button>
                <button className="w-[30px] h-[30px] rounded-[50px] absolute top-[30px] right-[30px] z-20 flex items-center justify-center [box-shadow:0px_2px_10px_0px_#0000001A]">
                  <PiShareNetworkBold className="text-[18px]" />
                </button>
                <div className="w-[30px] h-[30px] bg-white border rounded-[50px] absolute bottom-[30px] right-[30px] z-20 flex items-center justify-center [box-shadow:0px_2px_10px_0px_#0000001A]">
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
                <Slider
                  {...settings}
                  className=" w-full  h-[445px] relative font-poppins"
                >
                  <div className="w-[100%] h-[445x] m-auto bg-white ">
                    <img
                      src={item.image}
                      alt="Slide 1"
                      className=" w-full h-[445px] m-auto object-fill"
                    />
                  </div>
                  <div className="w-[100%] h-[445x] m-auto bg-white ">
                    <img
                      src={item.image}
                      alt="Slide 1"
                      className=" w-full h-[445px] m-auto object-fill"
                    />
                  </div>
                  <div className="w-[100%] h-[445x] m-auto bg-white ">
                    <img
                      src={item.image}
                      alt="Slide 1"
                      className=" w-full h-[445px] m-auto object-fill"
                    />
                  </div>
                </Slider>
                {/* ---------------------------- */}
                <div className="w-[100%] px-[10px]">
                  <p className="text-white font-medium font-poppins text-[20px] mt-[10px]">
                    {item.name}
                  </p>
                  <p className="text-[#5E596E] font-medium font-poppins text-[12px] mt-[3px]">
                    Women Shirt
                  </p>
                  <div className="flex mt-[8px] items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <p className="text-white font-medium font-poppins text-[16px] ">
                        ${item.price}.00
                      </p>
                      <p className="text-[#5E596E] line-through font-medium font-poppins text-[16px] ">
                        $15.00
                      </p>
                      <p className="text-[#FF0004] font-medium font-poppins text-[14px] ">
                        20% OFF
                      </p>
                    </div>
                    <div>
                      <p className="text-white font-medium font-poppins text-[16px] ">
                        16hrs : 32mins
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-[8px] items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img
                        src={star}
                        alt="rasm"
                        className="w-[90px] h-[18px]"
                      />
                      <p className="text-white font-medium font-poppins text-[14px] ">
                        (10)
                      </p>
                      <p className="text-white font-medium font-poppins text-[14px] ">
                        See Reviews
                      </p>
                    </div>
                  </div>
                  <p className="text-white my-[4px] mt-[10px] font-medium font-poppins text-[14px] ">
                    Select Quantity
                  </p>
                  <div className="w-[76px] h-[28px] bg-[#EAEAEA] rounded-[5px] flex items-center justify-center">
                    <button
                      onClick={() => decrement(item.id)}
                      className="increment"
                    >
                      <HiMinusSm className="" />
                    </button>
                    <div className="w-[20px] h-[20px] mx-[6px] rounded-[2px] bg-[#fff] flex items-center justify-center">
                      <p className="font-semibold font-poppins text-center leading-[19px] text-[12px] w-[20px]">
                        {counts[item.id] || 1}
                      </p>
                    </div>
                    <button
                      onClick={() => increment(item.id)}
                      className="increment"
                    >
                      <HiPlusSm className="" />
                    </button>
                  </div>
                  <Size />
                  <div className="w-full mb-[24px] flex items-center justify-between">
                    <div
                      onClick={() => handleProductClick(item)}
                      className="w-[172px] h-[44px] rounded-[36px] border-[2px] flex items-center justify-center gap-[5px] border-[#fff]"
                    >
                      <img
                        src={basket}
                        alt="rasm"
                        className="w-[24px] h-[24px]"
                      />
                      <p className="text-white  font-medium font-poppins text-[16px] ">
                        Add to cart
                      </p>
                    </div>
                    <NavLink to="/basket">
                      <div
                        onClick={() => handleProductClick(item)}
                        className="w-[172px] h-[44px] bg-white rounded-[36px] border-[2px] flex items-center justify-center gap-[5px] border-[#fff]"
                      >
                        <img
                          src={bag}
                          alt="rasm"
                          className="w-[24px] h-[24px]"
                        />
                        <p className="text-black  font-medium font-poppins text-[16px] ">
                          Buy now
                        </p>
                      </div>
                    </NavLink>
                  </div>
                  {/* ------------------------ */}
                  <ControlledAccordions />
                  <Similiar_products />
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Single_product;
