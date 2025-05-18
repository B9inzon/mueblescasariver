import React from "react";

import { WhatsappIcon } from "../../icons/WhatsappIcon";
import discountedPrice from "@/utils/discountedPrices";

export default function ProductDetailInfo({
  name,
  price,
  discount,
  description,
  categories,
}) {
  const finalPrice = discountedPrice(price, discount);
  const percentageOff = discount * 100;
  const showCategories = categories
    .filter((category) => category !== "-")
    .map((category) => category.trim());

  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex  flex-col w-full  lg:w-[28%] text-[#3c3a36] justify-center xxs:h-[60vh] xs:h-[45vh] md:h-full px-4 md:px-[14vw] lg:px-4  xl:pl-0  gap-2  ">
      <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-4">{name}</h2>
      <p className=" mb-4">{description}</p>
      <h2 className="font-semibold">Precio de venta:</h2>
      <h3 className="flex flex-wrap h-auto font-bold  items-baseline ">
        <span className="text-xl lg:text-2xl mr-2 ">
          {formatter.format(finalPrice)}
        </span>
        <span
          className={`line-through text-[#3c3a36]/50 mr-4 0 ${
            percentageOff <= 0 ? "hidden" : ""
          } `}
        >
          {formatter.format(price)}
        </span>
        <span
          className={`  text-green-500 font-bold  ${
            percentageOff <= 0 ? "hidden" : ""
          } `}
        >
          ({percentageOff}%)
        </span>
      </h3>
      <h4 className="mb-6">
        Ahórrate{" "}
        <span className="font-semibold text-red-500">
          {formatter.format(price - finalPrice)}
        </span>
      </h4>
      <div className="flex flex-wrap items-center mb-6 gap-2 ">
        {showCategories.map((category, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-[#f2f1e9] text-[#3c3a36] font-semibold rounded-sm"
          >
            {category}
          </span>
        ))}
      </div>
      <div className=" flex w-full ">
        <a
          href="https://wa.link/icnysi"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center	bg-[#25d366] p-1 md:p-2 w-full md:w-[370px]  rounded lg:rounded-lg gap-4  hover:scale-105 transition-all duration-600 ease-in-out "
          style={{ filter: "drop-shadow(5px 5px 4px #282624)" }}
        >
          <WhatsappIcon />
          <h3 className="text-[#3c3a36] font-semibold text-xl md:text-xl lg:text-2xl ">
            ¡Cotiza ahora!
          </h3>
        </a>
      </div>
    </div>
  );
}
