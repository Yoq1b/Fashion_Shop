import React, { useState, useContext, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { RiEditLine } from "react-icons/ri";
import Login_modal from "../components/Login_modal";
import Telefon_modal from "../components/Telefon_modal";
import Email_modal from "../components/Email_modal";
import Exit_modal from "../components/Exit_modal";
import Name_modal from "../components/Name_modal";
import { LoginContext } from "../App";
import human from "/assets/human.svg";
import mail from "/assets/mail.svg";
import tel from "/assets/phone.svg";
import men from "/assets/mengender.svg";
import date from "/assets/calendar.svg";
import day from "/assets/days.svg";
import { FaChevronDown } from "react-icons/fa";
import Data_modal from "../components/Data_modal";
import { IoExitOutline } from "react-icons/io5";

const Account = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // -1 degani avvalgi sahifaga qaytadi
  };

  const [showDetails, setShowDetails] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(
    localStorage.getItem("uploadedImage") || null
  );

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
      // localStorage ga tasvirni saqlash
      localStorage.setItem("uploadedImage", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setUploadedImage(null); // Rasmni o'chiramiz
    localStorage.removeItem("uploadedImage"); // localStorage dan tasvirni o'chiramiz
  };

  const { userInfo } = useContext(LoginContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [istel, setIstel] = useState(false);
  const [isemail, setIemail] = useState(false);
  const [isexit, setIsexit] = useState(false);
  const [isname, setIsname] = useState(false);
  const [isdata, setIsdata] = useState(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const { name, surname, phone, email, data } = JSON.parse(storedUserInfo);
      setName(name);
      setSurname(surname);
      setPhone(phone);
      setEmail(email);
      setData(data);
    }
  }, [userInfo]); // userInfo ni kuzatamiz, agar o'zgarsa, ma'lumotlarni yangilaymiz

  const handleLoginEdit = () => {
    setIslogin(true);
  };

  const closeModal = () => {
    setIslogin(false);
  };

  const handleTelEdit = () => {
    setIstel(true);
  };
  const handleDataEdit = () => {
    setIsdata(true);
  };
  const closeTel = () => {
    setIstel(false);
  };

  const handleEmailEdit = () => {
    setIemail(true);
  };

  const closeEmail = () => {
    setIemail(false);
  };
  const handleExitopen = () => {
    setIsexit(true);
  };

  const closeExit = () => {
    setIsexit(false);
  };

  const handleNameEdit = () => {
    setIsname(true);
  };

  const closeName = () => {
    setIsname(false);
  };
  const closedata = () => {
    setIsdata(false);
  };

  return (
    <>
      <div className="w-[100%] pt-[10px] pb-[80px] px-[10px]">
        {/* --------- */}
        <div className="flex items-center gap-[5px] mb-[30px]">
          <div
            onClick={handleBack}
            className="w-[20px] h-[20px] flex items-center justify-center"
          >
            <IoIosArrowBack className="text-[20px] text-white" />
          </div>
          <p className="text-[#fff] font-medium font-poppins text-[14px]">
            User account
          </p>
        </div>
        {/* --------- */}
        <div className="w-full">
          <p className="text-[20px] mb-[12px] font-medium font-poppins text-white">
            My Profile
          </p>
          <div className="flex items-center gap-[15px]">
            <div
              onClick={toggleDetails}
              className="group relative w-[60px] bg-[#E1EFE6] h-[60px] rounded-[50%] flex items-center justify-center"
            >
              {uploadedImage && (
                <div
                  className="absolute rounded-[50%] inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${uploadedImage})` }}
                ></div>
              )}
              <p className="text-[30px] capitalize text-[#23473B] font-medium">
                {name?.charAt(0)}
              </p>
              <div
                className={`${
                  showDetails ? "block" : "hidden"
                } absolute bottom-[-65px] left-[-10px] w-[100px] z-50 h-[62px] bg-[#080020] rounded-[5px]`}
              >
                <div className="relative bg-slate-500 z-50 py-[7px] rounded-tl-[5px] rounded-tr-[5px] cursor-pointer">
                  <p className="text-[#fff] hover:cursor-pointer capitalize text-[12px] font-normal text-center">
                    Upload photo
                  </p>
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 hover:cursor-pointer"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="w-full bg-[#080020]">
                  <p
                    className="text-[#C13515] hover:cursor-pointer mt-[5px] capitalize text-[12px] font-normal text-center"
                    onClick={handleDeletePhoto}
                  >
                    Delete photo
                  </p>
                </div>
              </div>
            </div>
            {/* ------ */}
            <div>
              <p className="text-[#fff] capitalize text-[18px] font-medium">
                {name} {surname}
              </p>
              <p
                onClick={handleEmailEdit}
                className="text-[#fff]  text-[14px] opacity-50 font-medium"
              >
                {email}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-[30px]">
          <div className="w-full mb-[15px]">
            <p className="text-white mb-[5px] opacity-50 text-[12px] font-medium font-poppins">
              Name
            </p>
            <div
              onClick={handleNameEdit}
              className="w-full bg-[#140D2B] h-[50px] rounded-[6px] flex items-center gap-[10px] pl-[15px]"
            >
              <img src={human} alt="rasm" className="w-[24px] h-[24px]" />
              <p className="text-[#fff] font-inter  capitalize text-[14px] font-medium">
                {name} {surname}
              </p>
            </div>
          </div>
          <div className="w-full mb-[15px]">
            <p className="text-white mb-[5px] opacity-50 text-[12px] font-medium font-poppins">
              Email
            </p>
            <div
              onClick={handleEmailEdit}
              className="w-full bg-[#140D2B] h-[50px] rounded-[6px] flex items-center gap-[10px] pl-[15px]"
            >
              <img src={mail} alt="rasm" className="w-[24px] h-[24px]" />
              <p className="text-[#fff] font-inter  text-[14px] font-medium">
                {email}
              </p>
            </div>
          </div>
          <div className="w-full mb-[15px]">
            <p className="text-white mb-[5px] opacity-50 text-[12px] font-medium font-poppins">
              Contact
            </p>
            <div
              onClick={handleTelEdit}
              className="w-full bg-[#140D2B] h-[50px] rounded-[6px] flex items-center gap-[10px] pl-[15px]"
            >
              <img src={tel} alt="rasm" className="w-[24px] h-[24px]" />
              <p className="text-[#fff] font-inter capitalize text-[14px] font-medium">
                +998 {phone}
              </p>
            </div>
          </div>
          <div className="w-full mb-[15px]">
            <p className="text-white mb-[5px] opacity-50 text-[12px] font-medium font-poppins">
              Gender
            </p>
            <div className="w-full h-[50px] relative">
              <img
                src={men}
                alt="rasm"
                className="absolute left-[15px] top-[14px] w-[24px] h-[24px]"
              />
              <select
                id="cars"
                className="outline-none w-full pl-[49px] rounded-[6px] h-[50px] text-white bg-[#140D2B] text-[14px] appearance-none pr-[45px]"
              >
                <option label="Male">Male</option>
                <option label="Female">Female</option>
                <option label="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <FaChevronDown className="text-[12px] mr-[10px]" />
              </div>
            </div>
          </div>
          <div className="w-full mb-[15px]">
            <p className="text-white mb-[5px] opacity-50 text-[12px] font-medium font-poppins">
              Date of birth
            </p>
            <div
              onClick={handleDataEdit}
              className="w-full bg-[#140D2B] h-[50px] rounded-[6px] flex items-center justify-between gap-[10px] pl-[15px]"
            >
              <div className="flex items-center gap-[10px]">
                <img src={date} alt="rasm" className="w-[24px] h-[24px]" />
                <p className="text-[#fff] font-inter capitalize text-[14px] font-medium">
                  {data}
                </p>
              </div>
              <img
                src={day}
                alt="rasm"
                className="w-[16px] h-[16px] mr-[15px]"
              />
            </div>
          </div>
          <div className="w-full mb-[15px]">
            <p className="text-white mb-[5px] opacity-50 text-[12px] font-medium font-poppins">
              Log out
            </p>
            <div
              onClick={handleExitopen}
              className="w-full bg-[#140D2B] h-[50px] rounded-[6px] flex items-center gap-[10px] pl-[15px]"
            >
              <IoExitOutline className="text-white text-[25px] opacity-50" />
              <p className="text-[#fff] font-inter capitalize text-[16px] font-medium">
                Leave
              </p>
            </div>
          </div>
        </div>

        {/* ----------- */}
        <Footer />
      </div>
      {islogin && <Login_modal handlevoyti={closeModal} />}
      {istel && <Telefon_modal handlevoyti={closeTel} />}
      {isemail && <Email_modal handlevoyti={closeEmail} />}
      {isexit && <Exit_modal handlevoyti={closeExit} />}
      {isname && <Name_modal handlevoyti={closeName} />}
      {isdata && <Data_modal handlevoyti={closedata} />}
    </>
  );
};

export default Account;
