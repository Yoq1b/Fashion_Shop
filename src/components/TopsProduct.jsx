import React from "react";
import { NavLink } from "react-router-dom";
import t1 from "/assets/t1.png";
import t2 from "/assets/t2.png";
import t3 from "/assets/t3.png";
import t4 from "/assets/t4.png";
import t5 from "/assets/t5.png";
import t6 from "/assets/t6.png";

const products = [
  { id: 1, image: t1, name: "Tops", items: 5 },
  { id: 2, image: t2, name: "T-shirts", items: 10 },
  { id: 3, image: t3, name: "Jeans", items: 15 },
  { id: 4, image: t4, name: "Dress", items: 20 },
  { id: 5, image: t5, name: "Sweater", items: 25 },
  { id: 6, image: t6, name: "Shorts", items: 30 },
];

const TopsProduct = () => {
  return (
    <div className="w-[100%] px-[15px] flex flex-wrap items-center justify-between">
      {products.map((product) => (
        <div key={product.id} className="w-[170px] h-[234px] mb-[13px]">
          <div className="relative w-[100%] h-[200px] bg-[#fff] rounded-[6px]">
            <NavLink to="/singleproduct">
              <img
                src={product.image}
                alt="rasm"
                className="w-full z-10 h-full object-contain"
              />
            </NavLink>
          </div>
          <div className="flex mt-[5px] items-center gap-[10px]">
            <p className="my-[5px] text-white font-medium text-[16px] leading-[14.4px] font-poppins">
              {product.name}
            </p>
            <p className="text-white opacity-50 font-medium text-[12px] leading-[9.6px] font-poppins">
              ({product.items} items)
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopsProduct;
