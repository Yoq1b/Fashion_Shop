import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import confirmation from "/assets/confirmation.png";
import { SiSimplelogin } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { South } from "@mui/icons-material";

const Confirmation = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 degani avvalgi sahifaga qaytadi
  };
  const [confirmationCode, setConfirmationCode] = useState(null);

  const handleConfirmation = (e) => {
    e.preventDefault();
    setConfirmationCode(e.target.value);
  };

  const handleSubmit = () => {
    const baseUrl =
      "http://ec2-51-20-131-105.eu-north-1.compute.amazonaws.com:8080";
    axios
      .post(
        baseUrl + "/api/auth/confirmation",
        {
          code: confirmationCode,
        },
        {
          headers: {
            Confirmation: localStorage.getItem("confirmation-token"),
          },
        }
      )
      .then((resp) => {
        if (resp.status === 201) {
          console.log(resp.data);
           navigate("/profile");
        }
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  return (
    <>
      <div className="w-[100%] h-[100%] bg-[#080020] fixed z-50 top-0 left-0 ">
        {/* ----- */}
        <div className="flex items-center mt-[10px] gap-[5px] mb-[15px]">
          <div
            onClick={handleBack}
            className="w-[20px] h-[20px] flex items-center justify-center"
          >
            <IoIosArrowBack className="text-[20px] text-white" />
          </div>
          <p className="text-[#fff] font-medium font-poppins text-[14px]">
            Checkout
          </p>
        </div>
        {/* ------ */}
        <div className="w-[100%] h-[100%] px-[10px] relative flex-col flex items-center justify-center ">
          <div className="flex flex-col items-center mb-[250px] w-full justify-center">
            <img src={confirmation} alt="rasm" className="ml-[40px]" />
            <p className="text-[#fff] text-[20px] mb-[10px] font-medium font-poppins leading-[17px] text-center">
              Check your email
            </p>
            <p className="text-[#918e8e] text-[14px] mb-[20px] font-medium font-poppins leading-[17px] text-center">
              a verification code has been sent to you
            </p>
            <input
              type="password"
              onChange={(e) => handleConfirmation(e)}
              placeholder="Confirmation*"
              className="rounded-[10px] pl-[15px] w-full h-[40px] text-[#7A7687] text-[14px] outline-none border"
            />
            <button
              onClick={handleSubmit}
              className="w-full h-[45px] active:bg-black mt-[15px] gap-[5px] rounded-[36px] bg-white flex items-center justify-center"
            >
              <SiSimplelogin className="text-[22px] mt-[5px]" />
              <p className="text-[16px] font-medium">Confirmation</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
