import React from "react";
import { landingCategories } from "@/utils/landing-categories";
import { LandingCategorySection } from "./LandingCategorySection";
import ContactBanner from "./ContactBanner";
import { LandingAbout } from "./LandingAbout";

export const Landing = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row w-full text-[#3c3a36] h-screen bg-[#c9c2b7]">
        <div className="flex justify-center items-center w-[50%] ">
          <h1 className="font-principal w-[90%] text-end pl-64 text-xl lg:text-6xl ">
            Diseño y calidad{" "}
            <span className="text-2xl lg:text-8xl font-bold">en un solo lugar</span>
          </h1>
        </div>
        <div className="flex flex-row justify-center relative items-center pl-20 lg:w-[50%] lg:pr-[500px] ">
          <img
            className="z-40  absolute "
            style={{ filter: 'drop-shadow(20px 10px 10px #282624)' }}
            src="/assets/sillasinfondo.png"
            alt="Imagen de un mueble"
          />
          <div className="z-30 absolute left-32 top-60">
            <div className=" lg:h-[480px] lg:w-[480px]  rounded-full bg-[#d3cec5] "></div>
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
      <section className="flex justify-center   h-[50vh] ">
        <div className="flex h-full text-[#3c3a36] w-[65%] flex-col items-center justify-center ">
        <h1 className="font-bold lg:text-4xl mb-3 ">Muebles Casa River catálogo online</h1>
        <h3 className="text-2xl mb-10">Fabricación de muebles bajo cotización</h3>
        <p className="text-center mb-4">Somos fabricantes y distribuidores de una gran variedad de muebles para el hogar. Conoce nuestra excelente calidad y diseño que te ayudaran a personalizar y crear tus espacios favoritos.</p>
        <p className="text-center mb-10">Fabricamos muebles bajo previa cotización, lo que significa que las imágenes aquí presentadas son de referencia. Puedes contactarnos para consultar el color, los materiales y los detalles adicionales que desees en tu mueble. Vease terminos y condiciones.</p>
        <ul className="flex flex-row font-principal font-semibold  gap-14 text-xl">
          <li>HABITACIÓN</li>
          <li>SALA</li>
          <li>DECORACIÓN</li>
        </ul>
        </div>
      </section>
      <LandingAbout/>
    </>
  );
};
