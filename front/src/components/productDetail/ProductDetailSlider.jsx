"use client"

import React from "react";

import { LeftArrowIcon } from "../icons/LeftArrowIcon";
import { RighArrowIcon } from "../icons/RighArrowIcon";

export default function ProductDetailSlider({ images, name,  }) {

  const handleNext = () => {
    console.log("Next");
  };
  const handlePrev = () => {
    console.log("Prev");
  };

  return (
    <div className="flex flex-col w-full md:h-full lg:w-[42%] gap-4 items-center justify-center pt-20 md:pt-24 lg:pt-0 md:mb-8 lg:mb-0 xl:pl-4  ">
      <div className="relative w-full md:w-[80%] lg:w-full max-w-[670px]  overflow-hidden bg-red-400 ">
        <img src={images.at(0)} alt={name} className="max-h-full w-full " />

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
            <img
              src={images.at()}
              alt={name}
              className="w-[18%] lg:w-[20%]  rounded-md "
            />
            <img
              src={images.at(1)}
              alt={name}
              className="w-[18%] lg:w-[20%] rounded-md"
            />
            <img
              src={images.at(2)}
              alt={name}
              className="w-[18%] lg:w-[20%]  rounded-md"
            />
            <img
              src={images.at(3)}
              alt={name}
              className="w-[18%] lg:w-[20%]  rounded-md"
            />
          </div>
    </div>
  );
}
