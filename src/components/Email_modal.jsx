import React, { useState, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

const Email_modal = ({ handlevoyti }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const { setUserInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    const newErrors = {};

    if (!email) newErrors.email = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Avvalgi ma'lumotlarni localStorage dan olish
      const storedUserInfo = localStorage.getItem("userInfo");
      const currentUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};

      // Yangi ma'lumotlar bilan birlashtirish
      const updatedUserInfo = { ...currentUserInfo, email };

      // Ma'lumotlarni localStorage ga saqlash
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

      // setUserInfo ni o'zgartirish
      setUserInfo(updatedUserInfo);

      handlevoyti();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[500px] relative h-[180px] rounded-[10px] bg-white px-[25px]">
        <div className="flex mt-[20px] items-center justify-between">
          <p className="text-[#202020] capitalize text-[18px] font-semibold">
            email
          </p>
          <IoClose
            onClick={handlevoyti} // handleClose funksiyasini chaqiring
            className="text-[22px] hover:cursor-pointer hover:scale-125 hover:text-red-500 hover:rotate-90 duration-300"
          />
        </div>

        <input
          type="email"
          placeholder="Your email*"
          className={`w-full h-[31px] mt-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.email ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex items-center mt-[15px] gap-[15px]">
          <button
            onClick={handleOpenModal}
            className="w-[274px] capitalize m-auto h-[41px] rounded-[50px] bg-[#140D2B] text-[#F8F7F3] text-[16px] font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email_modal;
