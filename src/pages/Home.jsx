import React from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/CarouselComponent";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Latest from "../components/Latest";
import Products from "../components/Products";
import Timer from "../components/Timer";
import Discount from "../components/Discount";
import SearchComp from "../components/SearchComp";

const Home = () => {
  return (
    <>
      <div className="pb-[80px]">
        <div className="w-[100%] m-auto pt-[10px]">
          <Navbar />
          <SearchComp />
          <CarouselComponent />
        </div>
        <div className="relative w-[100%] h-[105px] mt-[30px]">
          <Slider />
        </div>
        <Latest />
        <Products />
        <Timer />
        <Discount />
        <Footer />
      </div>
    </>
  );
};

export default Home;
