import React from "react";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

const Category = () => {
  return (
    <>
      <div className="w-[100%] pt-[10px] pb-[80px]">
        <Navbar />
        <Timer />
        <Trending />
        <Footer />
      </div>
    </>
  );
};

export default Category;
