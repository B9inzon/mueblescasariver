import React, { useEffect, useRef, useState } from "react";
import { hero } from "@/utils/hero.js";
import Image from "next/image";

export default function HeroLanding() {
  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const tiemoutRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return
    const scrollPosition = currentIndex * slider.offsetWidth 
    slider.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    })
  }, [currentIndex]);


  useEffect(() => {
    if (tiemoutRef.current) {
      clearTimeout(tiemoutRef.current);
    }
    tiemoutRef.current = setTimeout(() => {
      const isLastSlide = currentIndex === hero.length - 1;
      if (isLastSlide) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((current) => current + 1);
      }
    }, 3000);
    return () => {
      if (tiemoutRef.current) {
        clearTimeout(tiemoutRef.current);
      }
    };
  }, [currentIndex]);
  

  return (
    <div className="w-full h-full my-0 mx-auto ">
      <div className="relative h-full ">
        <div className="w-full h-full overflow-hidden ">
          <ul 
          ref={sliderRef} 
          className="flex h-full w-full overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {hero.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex-shrink-0 w-full h-full bg-fixed"
                >
                  <Image
                    src={item.imgUrl}
                    alt="Imagen de referencia"
                    className="w-full h-full object-cover grayscale-75 "
                    width={500}
                    height={500}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
