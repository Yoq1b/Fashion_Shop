import React, { useState } from "react";
import home from "/assets/home.svg";
import search from "/assets/search.svg";
import basket from "/assets/basket.svg";
import like from "/assets/like.svg";
import user from "/assets/user.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Login_modal from "./Login_modal";

const Footer = () => {
  const [islogin, setIslogin] = useState(false);

  const navigate = useNavigate();
  const handleLoginEnter = () => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      // localStorage da ma'lumot mavjud bo'lsa, login sahifasiga yo'naltirish
      navigate("/account");
    } else {
      // localStorage bo'sh bo'lsa setIslogin(true)
      setIslogin(true);
    }
  };

  const closeModal = () => {
    setIslogin(false);
  };

  return (
    <>
      <div className="fixed bottom-0 left-1/2 transform bg-[#080020] z-30 -translate-x-1/2 w-[100%] px-[10px]">
        <div className="w-[100%] h-[60px] bg-[#080020] flex items-center justify-between px-[18px]">
          <NavLink to="/">
            <img src={home} alt="rasm" className="w-[24px] h-[24px]" />
          </NavLink>
          <NavLink to="/">
            <img src={search} alt="rasm" className="w-[24px] h-[24px]" />
          </NavLink>
          <NavLink to="/basket">
            <img src={basket} alt="rasm" className="w-[24px] h-[24px]" />
          </NavLink>
          <NavLink to="/like">
            <img src={like} alt="rasm" className="w-[24px] h-[24px]" />
          </NavLink>
          <div onClick={handleLoginEnter} className=" w-[24px] h-[24px]">
            <img src={user} alt="rasm" className="w-full h-full" />
          </div>
        </div>
      </div>
      {islogin && <Login_modal handlevoyti={closeModal} />}
    </>
  );
};

export default Footer;
