import React from "react";
import discountedPrice from "@/utils/discountedPrices";

export default function MostSelling({ name, image, price, discount }) {
  const finalPrice = discountedPrice(price, discount);
  const percentageOff = discount * 100;

  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  })

  return (
    <div className=" relative flex w-full h-[50vh] md:w-full lg:w-full xl:w-full flex-col overflow-hidden justify-center  items-center md:rounded-sm p-1  ">
        <div className={`flex absolute items-center justify-center top-2 left-2 h-14 w-14 text-xl bg-green-500 font-bold z-20 rounded-full text-white ${percentageOff <= 0 ? "hidden": ""}`}>{percentageOff}%</div>
      <div className="h-[70%] w-full overflow-hidden md:rounded-sm">
        <div
          className=" flex w-full h-full   items-center lg:items-end  justify-center lg:pb-20 scale-125   lg:grayscale-50 hover:grayscale-0 bg-cover bg-center hover:scale-105 transition-all duration-600 ease-in-out "
          style={{ backgroundImage: `url(${image.at()})` }}
        >
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-4 gap-5 w-full h-[30%]   ">
        <h3 className="text-center font-semibold text-[#3c3a36]  ">
          {name}
        </h3>
        <h4 className="flex flex-col justify-center xl:flex-row">
          <span className="text-green-500 font-bold mr-2">{formatter.format(finalPrice)}</span>
          <span className={`line-through text-[#3c3a36]/50  ${percentageOff <=0 ? "hidden": ""}`}>{formatter.format(price)}</span>
        </h4>
      </div>
    </div>
  );
}
