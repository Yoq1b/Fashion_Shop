import React, { useState, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { LoginContext } from "../App";

const Telefon_modal = ({ handlevoyti }) => {
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const { setUserInfo } = useContext(LoginContext);

  const handleOpenModal = () => {
    const newErrors = {};

    if (!phone) newErrors.phone = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Avvalgi ma'lumotlarni localStorage dan olish
      const storedUserInfo = localStorage.getItem("userInfo");
      const currentUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};

      // Yangi ma'lumotlar bilan birlashtirish
      const updatedUserInfo = { ...currentUserInfo, phone };

      // Ma'lumotlarni localStorage ga saqlash
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

      // setUserInfo ni o'zgartirish
      setUserInfo(updatedUserInfo);

      handlevoyti();
    }
  };

  const formatPhoneNumber = (value) => {
    // Raqamlarni faqat raqamli qismini olish
    const onlyNums = value.replace(/\D/g, "");

    // Raqamlarni formatlash
    if (onlyNums.length <= 10) {
      const formatted = onlyNums
        .replace(/(\d{2})(\d{0,3})(\d{0,2})(\d{0,2})/, "$1-$2-$3-$4")
        .replace(/-$/, ""); // Oxirida - bo'lsa olib tashlash
      return formatted;
    }

    // Agar raqamlar soni 10 dan ortsa, qisqartirish
    return onlyNums
      .slice(0, 10)
      .replace(/(\d{2})(\d{0,3})(\d{0,2})(\d{0,2})/, "$1-$2-$3-$4")
      .replace(/-$/, ""); // Oxirida - bo'lsa olib tashlash
  };

  const handleChange = (e) => {
    const { value } = e.target;
    // Boshidan yangi qiymatni olish
    setPhone((prevPhone) => {
      // Raqamlarni faqat raqamli qismini olish
      const onlyNums = value.replace(/\D/g, "");

      // Raqamlarni formatlash
      if (onlyNums.length <= 9) {
        const formatted = onlyNums
          .replace(/(\d{2})(\d{0,3})(\d{0,2})(\d{0,2})/, "$1-$2-$3-$4")
          .replace(/-$/, ""); // Oxirida - bo'lsa olib tashlash
        return formatted;
      }

      // Agar raqamlar soni 10 dan ortsa, qisqartirish
      return onlyNums
        .slice(0, 9)
        .replace(/(\d{2})(\d{0,3})(\d{0,2})(\d{0,2})/, "$1-$2-$3-$4")
        .replace(/-$/, ""); // Oxirida - bo'lsa olib tashlash
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[500px] relative h-[220px] rounded-[10px] bg-white px-[25px]">
        <div className="flex mt-[20px] items-center justify-between">
          <p className="text-[#202020] text-[18px] font-semibold">Telephone</p>
          <IoClose
            onClick={handlevoyti} // handleClose funksiyasini chaqiring
            className="text-[22px] hover:cursor-pointer hover:scale-125 hover:text-red-500 hover:rotate-90 duration-300"
          />
        </div>
        <input
          type="text"
          placeholder="Your number*"
          className={`w-full h-[31px] mt-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.phone ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={phone}
          onChange={handleChange}
        />
        <p className="text-[14px] mt-[5px] text-center font-medium text-red-600">
          The country code will be entered automatically (+998).
        </p>
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

export default Telefon_modal;
