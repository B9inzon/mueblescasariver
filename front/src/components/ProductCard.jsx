import React from "react";
import discountedPrice from "@/utils/discountedPrices";

export default function ProductCard({ images, name, price, discount }) {
  const finalPrice = discountedPrice(price, discount);
  const percentageOff = discount * 100

  return (
    <div className="relative flex flex-col justify-between items-center px-1 md:px-2 pt-2.5 min-h-[400px] w-[48vw] h-[70vw] md:w-[31vw] md:h-[65vw] lg:w-[31.5vw] lg:h-[50vw] xl:w-[17vw] xl:h-[500px] border border-[#3c3a36] text-[#3c3a36] ">
      <div className="flex absolute items-center justify-center top-4 left-4 h-14 w-14 bg-green-500 text-xl font-bold z-20 rounded-full text-white ">{percentageOff}%</div>
      <div className="group flex w-full h-[50%] md:h-[60%] overflow-hidden">
        <div
          className=" flex justify-center  w-full h-full scale-115 grayscale-0 lg:grayscale-75  hover:grayscale-0 bg-cover bg-center hover:scale-100 transition-all duration-600 ease-in-out  "
          style={{ backgroundImage: `url(${images})` }}
        ></div>
      </div>
      <div className="flex flex-col w-full h-[50%] md:h-[40%] xl:h-[40%]  text-center text-sm md:text-lg lg:text-xl ">
        <h4 className="w-full h-[50%]  pt-8 ">{name}</h4>
        <h4>
          <span className="line-through text-[#3c3a36]/50 mr-2">${price}</span> 
          <span className="text-green-500 font-bold">${finalPrice}</span>
        </h4>{" "}
      </div>
    </div>
  );
}
