import React, { useState } from "react";
import car from "/assets/car.svg";
import DeliverModal from "./DeliverModal";

const Deliver = () => {
  const [name, setName] = useState("Samuel Bishop");
  const [address, setAddress] = useState(
    "Montego Bay Bermuda Dunes Cir Indio, California(CA), 92203"
  );
  const [phone, setPhone] = useState("(760) 895-4146 78985");
  const [isNameEdit, setIsNameEdit] = useState(false);

  const handleNameEdit = () => {
    setIsNameEdit(true);
  };

  const closeNameEdit = (newName, newAddress, newPhone) => {
    setName(newName);
    setAddress(newAddress);
    setPhone(newPhone);
    setIsNameEdit(false);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full p-[15px] bg-[#140D2B] rounded-[12px]">
          <div className="w-full flex items-center mb-[15px] justify-between">
            <div className="flex items-center gap-[10px]">
              <img src={car} alt="rasm" className="w-[24px] h-[24px]" />
              <p className="text-[#fff] font-medium font-poppins text-[16px]">
                Deliver To
              </p>
            </div>
            <button
              onClick={handleNameEdit}
              className="text-[#BC0000] text-[12px] font-semibold font-poppins"
            >
              Change
            </button>
          </div>
          <p className="text-[#fff] font-medium font-poppins text-[14px]">
            {name}
          </p>
          <p className="text-[#fff] my-[7px] w-[85%] font-medium font-poppins text-[14px]">
            {address}
          </p>
          <p className="text-[#fff] my-[7px] w-[85%] font-medium font-poppins text-[14px]">
            {phone}
          </p>
        </div>
      </div>
      {isNameEdit && (
        <DeliverModal
          name={name}
          address={address}
          phone={phone}
          onSave={closeNameEdit}
        />
      )}
    </>
  );
};

export default Deliver;
