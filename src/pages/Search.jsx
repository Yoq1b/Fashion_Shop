import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
import Trending from "../components/Trending";
import SearchComp from "../components/SearchComp";

const Search = () => {
  return (
    <>
      <div className="w-[100%] pt-[10px] pb-[80px]">
        <Navbar />
        <SearchComp />
        <Timer />
        <Trending />
        <Footer />
      </div>
    </>
  );
};

export default Search;
