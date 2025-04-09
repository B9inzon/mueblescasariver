import Image from "next/image";
import React from "react";

export const LandingCategorySection = ({ name, text, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col-reverse lg:flex-row ${
        isEven ? "" : "lg:flex-row-reverse"
      } items-center justify-between w-full  `}
    >
      <div className=" relative w-full lg:w-1/2 flex justify-center items-center ">
        <div className=" relative h-[400px] w-[500px] ">
          <Image
            src={image}
            alt={`Imagen de ${name}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className=" relative w-full  lg:w-1/2 ">
        <div className={`bg-[#c9c2b7] p-10  shadow-2xl h-[500px] flex flex-col justify-center ${isEven ? "rounded-l-4xl" : "rounded-r-4xl"} `}>
          <h2 className={` text-[#3c3a36] font-bold text-4xl mb-8 ${isEven ? "" : "text-end" } `}>{name}</h2>
          <p className={` font-secondary text-2xl ${isEven ? "" : "text-end" }`}> {text} </p>
        </div>
      </div>
    </div>  
  );
};
