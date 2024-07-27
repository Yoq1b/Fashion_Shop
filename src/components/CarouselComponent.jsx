import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/assets/banner1.png";
import "../css/carousel.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="w-[100%] px-[10px]">
      <Slider {...settings} className="mt-[15px] font-poppins">
        <div className="w-[100%]  h-[194px]  relative rounded-[12px]">
          <img src={img1} alt="Slide 1" className="w-full" />
          <p className="absolute bottom-[23px] w-[214px]  left-[50%] font-semibold text-[28px] leading-[33.6px] text-white text-center transform -translate-x-1/2">
            Wear the real <br />
            Fashion
          </p>
        </div>
        <div className="w-[100%] h-[194px]  relative rounded-[12px]">
          <img src={img1} alt="Slide 1" className="w-full" />
          <p className="absolute bottom-[23px] w-[214px]  left-[50%] font-semibold text-[28px] leading-[33.6px] text-white text-center transform -translate-x-1/2">
            Wear the real <br />
            Fashion
          </p>
        </div>
        <div className="w-[100%] h-[194px]  relative rounded-[12px]">
          <img src={img1} alt="Slide 1" className="w-full" />
          <p className="absolute bottom-[23px] w-[214px]  left-[50%] font-semibold text-[28px] leading-[33.6px] text-white text-center transform -translate-x-1/2">
            Wear the real <br />
            Fashion
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
