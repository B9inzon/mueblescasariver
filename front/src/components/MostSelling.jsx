import React from "react";
import discountedPrice from "@/utils/discountedPrices";

export default function MostSelling({ name, image, price, discount }) {
  const finalPrice = discountedPrice(price, discount);
  const percentageOff = discount * 100;
  return (
    <div className=" relative flex w-full h-[50vh] md:w-full lg:w-full xl:w-full flex-col overflow-hidden justify-center  items-center rounded ">
        <div className={`flex absolute items-center justify-center top-2 left-2 h-14 w-14 text-xl bg-green-500 font-bold z-20 rounded-full text-white ${percentageOff <= 0 ? "hidden": ""}`}>{percentageOff}%</div>
      <div className="h-[70%] w-full overflow-hidden rounded">
        <div
          className=" flex w-full h-full   items-center lg:items-end  justify-center lg:pb-20 scale-125   lg:grayscale-50 hover:grayscale-0 bg-cover bg-center hover:scale-105 transition-all duration-600 ease-in-out "
          style={{ backgroundImage: `url(${image})` }}
        >
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[30%] gap-2">
        <h3 className="text-center font-semibold  xl:text-lg text-[#3c3a36]  ">
          {name}
        </h3>
        <h4>
          <span className={`line-through text-[#3c3a36]/50 mr-2 ${percentageOff <=0 ? "hidden": ""}`}>${price}</span>
          <span className="text-green-500 font-bold">${finalPrice}</span>
        </h4>
      </div>
    </div>
  );
}
