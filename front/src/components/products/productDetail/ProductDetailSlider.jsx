"use client";

import React, { useCallback, useState } from "react";

import { LeftArrowIcon } from "../../icons/LeftArrowIcon";
import { RightArrowIcon } from "@/components/icons/RightArrowIcon";
import Image from "next/image";

export default function ProductDetailSlider({ images, name }) {
  const [index, setIndex] = useState(0);

  const handleNext = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  return (
    <div className="flex flex-col w-full md:h-full lg:w-[42%] gap-4 items-center justify-center pt-20 md:pt-24 lg:pt-0 md:mb-8 lg:mb-0 xl:pl-4 bg ">
      <div className="relative aspect-[16/12] w-full md:w-[70%] lg:w-full  max-w-[650px] rounded-sm md:rounded-none  overflow-hidden ">
        <div className="relative w-full h-full min-h-[430px]">
          <Image
            src={images[index]}
            alt={`${name} - imagen ${index + 1} de ${images.length}`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 650px"
          />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
          {images.map((_, i) => (
            <span
              key={`indocator-${i}`}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute rounded-full pr-1 left-8 flex md:hidden justify-center top-1/2 -translate-y-1/2 items-center w-12 h-12  bg-[#fdfdfc]  "
        >
          <LeftArrowIcon />
        </button>

        <button
          onClick={handleNext}
          className="absolute rounded-full pl-1 right-8 flex md:hidden justify-center top-1/2 -translate-y-1/2 items-center w-12 h-12  bg-[#fdfdfc]"
        >
          <RightArrowIcon />
        </button>
      </div>

      <div
        className={`hidden w-full  max-w-[670px] md:flex justify-between md:px-4 lg:px-0  gap-2 `}
      >
        {images.map((img, i) => (
          <button
            onClick={() => setIndex(i)}
            key={`thumbnail-${i}`}
            aria-label={`Ver imágen ${i + 1} de ${images.length}`}
            aria-current={i === index ? "true" : "false"}
            className={`relative w-[18%] rounded-md overflow-hidden cursor-pointer transition-all ${
              i === index
                ? "ring-2 ring-[#3c3a36]/80"
                : "hover:ring-1 hover:ring-[#3c3a36]/40"
            } `}
          >
            <div className="relative aspect-[16/12]">
              <Image
                src={img || "/assets/imagen-placeholder.webp"}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 120px, 150px"
              />
              <span className={`absolute inset-0 ${i === index ? "bg-[#f9f8f7]/60" : "hover:bg-[#f9f8f7]/30"}`}></span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
