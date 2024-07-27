import React, { useState } from "react";
import card from "/assets/card.svg";
import visa from "/assets/visa.svg";
import PaymentModal from "./PaymentModal";

const Payment = () => {
  const [name, setName] = useState("1234567890123456");
  const [isNameEdit, setIsNameEdit] = useState(false);

  const handleNameEdit = () => {
    setIsNameEdit(true);
  };

  const closeNameEdit = (newName) => {
    setName(newName);
    setIsNameEdit(false);
  };

  const formatCardNumber = (number) => {
    const cleaned = number.replace(/\D/g, "");
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || "";
    return formatted;
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full p-[15px] mt-[27px] bg-[#140D2B] rounded-[12px]">
          <div className="w-full flex items-center mb-[15px] justify-between">
            <div className="flex items-center gap-[10px]">
              <img src={card} alt="rasm" className="w-[18px] h-[16px]" />
              <p className="text-[#fff] font-medium font-poppins text-[16px]">
                Payment Method
              </p>
            </div>
            <button
              onClick={handleNameEdit}
              className="text-[#BC0000] text-[12px] font-semibold font-poppins"
            >
              Change
            </button>
          </div>
          <div className="flex items-center gap-[15px]">
            <img
              src={visa}
              alt="rasm"
              className="w-[40px] h-[40px] rounded-[50%]"
            />
            <p className="text-[#fff] my-[7px] w-[85%] font-medium font-poppins text-[14px]">
              {formatCardNumber(name)}
            </p>
          </div>
        </div>
      </div>
      {isNameEdit && <PaymentModal name={name} onSave={closeNameEdit} />}
    </>
  );
};

export default Payment;
