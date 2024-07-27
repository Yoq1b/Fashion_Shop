import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import TopsComponent from "../components/TopsComponent";
import Products from "../components/Products";
import TopsProduct from "../components/TopsProduct";

const Tops = () => {
  return (
    <>
      <div className="w-[100%] pt-[10px]">
        <Navbar />
        <Search />
        <TopsComponent />
        <Products />
      </div>
    </>
  );
};

export default Tops;
