import Image from "next/image";
import React from "react";

export const LandingCategorySection = ({ name, text, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className=" group relative w-full md:w-[40%] lg:w-[30%] xl:w-[20%] flex flex-col justify-center py-5 items-center md:rounded-xl bg-[#d3cec5] hover:scale-103 transition-all duration-600 ease-in-out">
      <h2 className=" text-[#3c3a36] font-bold text-xl xl:text-3xl  text-center">
        {name}
      </h2>
      <div className=" relative h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] group-hover:scale-125 transition-all duration-600 ease-in-out">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Imagen de ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          style={{ filter: "drop-shadow(20px 20px 20px #282624)" }}
          priority
        />
      </div>
      <p className=" font-secondary text-lg xl:text-xl  text-center "> {text} </p>
    </div>
  );
};
