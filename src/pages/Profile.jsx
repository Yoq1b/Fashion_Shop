import React, { useState, useContext, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import { FaChevronDown } from "react-icons/fa";
import orders from "/assets/order.svg";
import like from "/assets/like.svg";
import loc from "/assets/location.svg";
import card from "/assets/card.svg";
import star from "/assets/starr.svg";
import help from "/assets/help.svg";
import about from "/assets/about.svg";
import settings from "/assets/settings.svg";
import Footer from "../components/Footer";

const Profile = () => {
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

  const handleEmailEdit = () => {
    setIemail(true);
  };

  return (
    <>
      <div className="w-[100%] px-[10px] pt-[10px] pb-[80px]">
        {/* --------- */}
        <div className="flex items-center gap-[5px] mb-[30px]">
          <div
            onClick={handleBack}
            className="w-[20px] h-[20px] flex items-center justify-center"
          >
            <IoIosArrowBack className="text-[20px] text-white" />
          </div>
          <p className="text-[#fff] font-medium font-poppins text-[14px]">
            User profile
          </p>
        </div>
        {/* --------- */}
        <NavLink to="/account">
          <div className="w-full mb-[30px]">
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
        </NavLink>
        {/* --------- */}
        <NavLink to="/basket">
          <div className="w-full h-[50px] mb-[15px] rounded-[6px] bg-[#140D2B] flex items-center justify-between px-[15px]">
            <div className="flex items-center gap-[10px]">
              <img src={orders} alt="rasm" className=" w-[24px] h-[24px]" />
              <p className="text-white  text-[14px] ">My Orders</p>
            </div>
            <FaChevronDown className="text-[12px] text-[#5E596E]" />
          </div>
        </NavLink>
        <NavLink to="/like">
          <div className="w-full h-[50px] mb-[15px] rounded-[6px] bg-[#140D2B] flex items-center justify-between px-[15px]">
            <div className="flex items-center gap-[10px]">
              <img src={like} alt="rasm" className=" w-[24px] h-[24px]" />
              <p className="text-white  text-[14px] ">My Wishlist</p>
            </div>
            <FaChevronDown className="text-[12px] text-[#5E596E]" />
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="w-full h-[50px] mb-[15px] rounded-[6px] bg-[#140D2B] flex items-center justify-between px-[15px]">
            <div className="flex items-center gap-[10px]">
              <img src={loc} alt="rasm" className=" w-[24px] h-[24px]" />
              <p className="text-white text-[14px] ">Shipping Address</p>
            </div>
            <FaChevronDown className="text-[12px] text-[#5E596E]" />
          </div>
        </NavLink>
        <div className="w-full h-[50px] mb-[15px] relative">
          <img
            src={card}
            alt="rasm"
            className="absolute left-[15px] top-[14px] w-[20px] h-[18px]"
          />

          <select
            id="cars"
            className="outline-none w-full pl-[49px] rounded-[6px] h-[50px] text-white bg-[#140D2B] text-[14px] appearance-none pr-[45px]"
          >
            <option label="Payment Method">Payment Method</option>
            <option label="Cash on delivery">Cash on delivery</option>
            <option label="Payment by card">Payment by card</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5E596E]">
            <FaChevronDown className="text-[12px] mr-[10px]" />
          </div>
        </div>
        <NavLink to="/">
          <div className="w-full h-[50px] mb-[15px] rounded-[6px] bg-[#140D2B] flex items-center justify-between px-[15px]">
            <div className="flex items-center gap-[10px]">
              <img src={star} alt="rasm" className=" w-[20px] h-[20px]" />
              <p className="text-white text-[14px] ">Reviews</p>
            </div>
            <FaChevronDown className="text-[12px] text-[#5E596E]" />
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="w-full h-[50px] mb-[15px] rounded-[6px] bg-[#140D2B] flex items-center justify-between px-[15px]">
            <div className="flex items-center gap-[10px]">
              <img src={help} alt="rasm" className=" w-[22px] h-[24px]" />
              <p className="text-white text-[14px] ">Help</p>
            </div>
            <FaChevronDown className="text-[12px] text-[#5E596E]" />
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="w-full h-[50px] mb-[15px] rounded-[6px] bg-[#140D2B] flex items-center justify-between px-[15px]">
            <div className="flex items-center gap-[10px]">
              <img src={about} alt="rasm" className=" w-[22px] h-[24px]" />
              <p className="text-white text-[14px] ">About</p>
            </div>
            <FaChevronDown className="text-[12px] text-[#5E596E]" />
          </div>
        </NavLink>
        <NavLink to="/account">
          <div className="w-full h-[50px] mb-[15px] rounded-[6px] bg-[#140D2B] flex items-center justify-between px-[15px]">
            <div className="flex items-center gap-[10px]">
              <img src={settings} alt="rasm" className=" w-[22px] h-[24px]" />
              <p className="text-white text-[14px] ">Settings</p>
            </div>
            <FaChevronDown className="text-[12px] text-[#5E596E]" />
          </div>
        </NavLink>

        {/* ---------- */}
        <Footer />
      </div>
    </>
  );
};

export default Profile;
