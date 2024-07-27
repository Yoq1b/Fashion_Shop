import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const PaymentModal = ({ name: initialName, onSave }) => {
  const [name, setName] = useState(initialName);
  const [errors, setErrors] = useState({});

  const handleSave = () => {
    const newErrors = {};

    if (!name) newErrors.name = true;
    else if (name.replace(/\D/g, "").length !== 16)
      newErrors.name = "Invalid length";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSave(name); // Save the card number
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[100%] mx-[20px] relative pb-[10px] rounded-[10px] bg-white px-[25px]">
        <div className="flex mt-[20px] items-center justify-between">
          <p className="text-[#202020] capitalize text-[18px] font-semibold">
            Change Payment Method
          </p>
          <IoClose
            onClick={() => onSave(initialName)} // Close modal without saving changes
            className="text-[22px] hover:cursor-pointer hover:scale-125 text-[#BC0000]"
          />
        </div>

        <input
          type="tel"
          placeholder="Your card number*"
          className={`w-full h-[31px] mt-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.name ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={16} // Allow for spaces in formatted card numbers
        />
        {errors.name === "Invalid length" && (
          <p className="text-red-500 text-[12px]">
            Card number must be 16 digits
          </p>
        )}

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

export default PaymentModal;
