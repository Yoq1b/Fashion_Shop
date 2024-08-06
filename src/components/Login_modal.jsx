import React, { useState, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import axios from "axios";

const Login_modal = ({ handlevoyti }) => {
  const [activeTab, setActiveTab] = useState("login");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});

  const { setUserInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    const newErrors = {};
    if (!password) newErrors.password = true;
    if (!email) newErrors.email = true;
    if (!age) newErrors.age = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const baseUrl =
        "http://ec2-51-20-131-105.eu-north-1.compute.amazonaws.com:8080";
      axios
        .post(baseUrl + "/api/auth/register", {
          email: email,
          password: password,
          age: age,
        })
        .then((resp) => {
          if (resp.status === 200) {
            localStorage.setItem("confirmation-token", resp.data);
            // navigate("/confirmation");
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });

      handlevoyti();
    }
  };

  const handleLogin = () => {
    const newErrors = {};
    if (!password) newErrors.password = true;
    if (!email) newErrors.email = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const baseUrl =
        "http://ec2-51-20-131-105.eu-north-1.compute.amazonaws.com:8080";
      axios
        .post(baseUrl + "/api/auth/login", {
          email: email,
          password: password,
        })
        .then((resp) => {
          if (resp.status === 200) {
            setUserInfo({ password, email });
            localStorage.setItem(
              "userInfo",
              JSON.stringify({ password, email })
            );
            localStorage.setItem("token", resp.data.token);
            localStorage.setItem("refresh-token", resp.data.token);

            navigate("/profile");
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });
      // Ma'lumotlarni localStorage ga saqlash

      // setUserInfo ni o'zgartirish

      handlevoyti();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="mmodal [background-size:100%_100%] bg-no-repeat w-[100%] p-5 h-[400px] bg-opacity-75  rounded-[15px] shadow-lg">
        <div className="flex items-center justify-end">
          <IoClose
            onClick={handlevoyti} // handleClose funksiyasini chaqiring
            className="text-[22px] text-white hover:cursor-pointer hover:scale-125 hover:text-red-500 hover:rotate-90 duration-300"
          />
        </div>
        <div className="tabs flex justify-around mb-6">
          <button
            className={`tab-button text-white ${
              activeTab === "login" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => openTab("login")}
          >
            Login
          </button>
          <button
            className={`tab-button text-white ${
              activeTab === "register" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => openTab("register")}
          >
            Register
          </button>
        </div>
        <div
          id="login"
          className={`tab-content ${
            activeTab === "login" ? "block" : "hidden"
          }`}
        >
          <form>
            <h2 className="text-white text-xl mb-4 border-b border-white">
              Login
            </h2>
            {/* <p>{e.response.data}</p> */}
            <div className="form-group mb-4">
              <input
                type="email"
                placeholder="Your email*"
                className={`w-full p-2 rounded-[10px] pb-[11px] text-[#7A7687] text-[14px] outline-none ${
                  errors.email ? "border-red-500 border" : "border-b-[#E5E2EE]"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="password"
                placeholder="Your password*"
                className={`p-2 rounded-[10px] w-full pb-[11px] text-[#7A7687] text-[14px] outline-none ${
                  errors.pasword
                    ? "border-red-500 border"
                    : "border-b-[#E5E2EE]"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button
                onClick={handleLogin}
                type="submit"
                className="w-full py-2 bg-white text-black rounded-[10px] font-semibold hover:bg-black hover:text-white transition-all"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div
          id="register"
          className={`tab-content ${
            activeTab === "register" ? "block" : "hidden"
          }`}
        >
          <form>
            <h2 className="text-white text-xl mb-4 border-b border-white">
              Register
            </h2>
            <div className="form-group mb-4">
              <input
                type="email"
                placeholder="Your email*"
                className={`w-full p-2 rounded-[10px] pb-[11px] text-[#7A7687] text-[14px] outline-none ${
                  errors.email ? "border-red-500 border" : "border-b-[#E5E2EE]"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="password"
                placeholder="Your password*"
                className={`p-2 rounded-[10px] w-full pb-[11px] text-[#7A7687] text-[14px] outline-none ${
                  errors.pasword
                    ? "border-red-500 border"
                    : "border-b-[#E5E2EE]"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="number"
                placeholder="Your age*"
                className={`p-2 rounded-[10px] w-full pb-[11px] text-[#7A7687] text-[14px] outline-none ${
                  errors.age ? "border-red-500 border" : "border-b-[#E5E2EE]"
                }`}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <NavLink to="/confirmation">
                <button
                  onClick={handleRegister}
                  type="submit"
                  className="w-full py-2 bg-white text-black rounded-md font-semibold hover:bg-black hover:text-white transition-all"
                >
                  Register
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_modal;
