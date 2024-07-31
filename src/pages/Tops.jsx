import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/SearchComp";
import TopsComponent from "../components/TopsComponent";
import Products from "../components/Products";
import TopsProduct from "../components/TopsProduct";

const Tops = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
