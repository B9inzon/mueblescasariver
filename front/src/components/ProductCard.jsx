import React from "react";

export default function ProductCard({
  images,
  name,
  price,
  description,
  information,
}) {
  return (
    <div className="flex flex-col justify-between items-center px-1 md:px-2 pt-2.5 min-h-[400px] w-[46vw] h-[70vw] md:w-[31vw] md:h-[65vw] lg:w-[31.5vw] lg:h-[50vw] xl:w-[24.3vw] xl:h-[600px] border border-[#3c3a36] text-[#3c3a36]  ">
      <div className=" flex justify-center w-full h-[50%] md:h-[60%]    ">
        <img
          src={images}
          alt={name}
          className=" aspect-auto w-full h-full "
        />
      </div>
      <div className="flex flex-col w-full h-[50%] md:h-[40%] xl:h-[40%]  text-center text-sm md:text-lg lg:text-xl ">
        <h4 className="w-full h-[50%]  pt-8 ">{name}</h4>
        <h3 className="w-full h-[50%] text-lg font-bold 0">{`$ ${price}`}</h3>
      </div>
    </div>
  );
}
