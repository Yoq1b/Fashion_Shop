import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const DeliverModal = ({
  name: initialName,
  address: initialAddress,
  phone: initialPhone,
  onSave,
}) => {
  const [name, setName] = useState(initialName);
  const [address, setAddress] = useState(initialAddress);
  const [phone, setPhone] = useState(initialPhone);
  const [errors, setErrors] = useState({});

  const handleSave = () => {
    const newErrors = {};

    if (!name) newErrors.name = true;
    if (!address) newErrors.address = true;
    if (!phone) newErrors.phone = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSave(name, address, phone);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[100%] mx-[20px] relative pb-[10px] rounded-[10px] bg-white px-[25px]">
        <div className="flex mt-[20px] items-center justify-between">
          <p className="text-[#202020] capitalize text-[18px] font-semibold">
            Change Address
          </p>
          <IoClose
            onClick={() => onSave(initialName, initialAddress, initialPhone)}
            className="text-[22px] hover:cursor-pointer hover:scale-125 text-[#BC0000]"
          />
        </div>

        <input
          type="text"
          placeholder="Your name*"
          className={`w-full h-[31px] capitalize mt-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.name ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your full address*"
          className={`w-full h-[31px] capitalize mt-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.address ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your phone number*"
          className={`w-full h-[31px] capitalize mt-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.phone ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="flex items-center mt-[20px] gap-[15px]">
          <button
            onClick={handleSave}
            className="w-[274px] capitalize m-auto h-[41px] rounded-[50px] bg-[#140D2B] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliverModal;
