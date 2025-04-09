import React from "react";
import { landingCategories } from "@/utils/landing-categories";
import { LandingCategorySection } from "./LandingCategorySection";
import ContactBanner from "./ContactBanner";

export const Landing = () => {
  return (
    <>
      <section className="flex lg:flex-row w-full text-[#3C3A36] h-screen bg-[#c9c2b7]">
        <div className="flex justify-center items-center w-[50%]">
          <h1 className="font-principal w-[65%] text-6xl">
            Diseño y calidad{" "}
            <span className="text-8xl font-bold">en un solo lugar</span>
          </h1>
        </div>
        <div className="flex flex-row justify-center relative items-center pl-20 w-[50%] lg:pr-[500px] ">
          <img
            className="z-40  absolute"
            src="/assets/sillasinfondo.png"
            alt="Imagen de un mueble"
          />
          <div className="z-30 absolute left-32 top-60">
            <div className="h-[480px] w-[480px]  rounded-full bg-[#d3cec5] "></div>
          </div>
        </div>
      </section>
      <section className="flex flex-col h-full w-full items-center pt-36  text-[#3C3A36]">
        <h1 className="text-5xl mb-10">
          ¿Buscando tu nuevo <span className="font-bold">mueble favorito</span>?
        </h1>
        <h3 className="text-center text-3xl mb-20">
          Seguro que lo tenemos y si no, te lo fabricamos. <br />
          <span className="font-bold ">Echa un vistazo.</span>
        </h3>

        {landingCategories.map((category, index) => (
          <LandingCategorySection
            key={index}
            name={category.name}
            text={category.text}
            image={category.image}
            index={index}
          />
        ))}
      </section>
      <ContactBanner/>
    </>
  );
};
