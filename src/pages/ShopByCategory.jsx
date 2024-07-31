import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import Search from "../components/SearchComp";
import Categories from "../components/Categories";
import TopsProduct from "../components/TopsProduct";
import Footer from "../components/Footer";

const ShopByCategory = () => {
   useEffect(() => {
     window.scroll(0, 0);
   }, []);
   
  return (
    <>
      <div className="w-[100%] pt-[10px] pb-[80px]">
        <Navbar />
        <Search />
        <Categories />
        <TopsProduct />
        <Footer />
      </div>
    </>
  );
};

export default ShopByCategory;
