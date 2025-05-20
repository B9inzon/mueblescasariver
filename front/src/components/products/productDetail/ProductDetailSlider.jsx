"use client";

import React, { useState } from "react";

import { LeftArrowIcon } from "../../icons/LeftArrowIcon";
import { RighArrowIcon } from "../../icons/RighArrowIcon";

export default function ProductDetailSlider({ images, name }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handlePrev = () => {
    index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
  };

  return (
    <div className="flex flex-col w-full md:h-full lg:w-[42%] gap-4 items-center justify-center pt-20 md:pt-24 lg:pt-0 md:mb-8 lg:mb-0 xl:pl-4 bg  ">
      <div className="relative w-full md:w-[80%] lg:w-full max-w-[670px] rounded-sm overflow-hidden  ">
        <img
          src={images.at(index)}
          alt={name}
          className="max-h-full w-full min-h-[430px] "
        />

        <button
          onClick={handlePrev}
          className="absolute rounded-full pr-1 left-8 flex md:hidden justify-center top-1/2 -translate-y-1/2 items-center w-12 h-12  bg-[#fdfdfc]"
        >
          <LeftArrowIcon />
        </button>

        <button
          onClick={handleNext}
          className="absolute rounded-full pl-1 right-8 flex md:hidden justify-center top-1/2 -translate-y-1/2 items-center w-12 h-12  bg-[#fdfdfc]"
        >
          <RighArrowIcon />
        </button>
      </div>

      <div className="hidden w-full max-w-[670px] md:flex justify-between md:px-4 lg:px-0 ">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={name}
            className="w-[18%] lg:w-[20%]  rounded-md "
          />
        ))}
      </div>
    </div>
  );
}
