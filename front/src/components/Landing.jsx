import React from "react";
import { landingCategories } from "@/utils/landing-categories";
import { LandingCategorySection } from "./LandingCategorySection";
import ContactBanner from "./ContactBanner";
import { LandingAbout } from "./LandingAbout";

export const Landing = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row xl:flex-row w-full text-[#3c3a36] h-screen bg-[#c9c2b7] ">
        <div className="flex h-1/2  items-center pt-36 lg:p-0 xl:p-0 justify-center lg:w-[50%] xl:w-[50%] lg:h-full xl:h-full ">
          <h1 className="font-principal w-full text-center xl:pl-64 text-6xl  ">
            Diseño y calidad{" "}
            <span className="text-7xl lg:text-8xl font-bold">
              en un solo lugar
            </span>
          </h1>
        </div>
        <div className="relative flex h-1/2 w-full lg:flex-row xl:flex-row justify-center items-center lg:h-full lg:w-[50%] xl:w-[50%]">
          <img
            className="z-20  absolute lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] lg:left-5 xl:left-15   "
            style={{ filter: "drop-shadow(20px 10px 10px #282624)" }}
            src="/assets/sillasinfondo.png"
            alt="Imagen de un mueble"
          />
          <div className="z-10 absolute lg:left-25
           xl:left-32  ">
            <div className=" lg:h-[350px] lg:w-[350px] xl:h-[500px] xl:w-[500px]  rounded-full bg-[#d3cec5] "></div>
          </div>
        </div>
      </section>
      <section className="flex flex-col h-full w-full items-center  text-[#3C3A36]">
        <div className="flex items-center justify-center w-full h-[50vh] lg:h-24 mb-30 bg-[#463C2D]">
          <ul className="flex flex-col lg:flex-row gap-[10vh] lg:gap-56 font-principal text-xl lg:text-2xl text-[#eeece9]">
            <li>Diseños personalizados</li>
            <li>Calidad sorprendente</li>
            <li>Satisfacción garantizada</li>
          </ul>
        </div>
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
      <ContactBanner />
      <section className="flex justify-center   h-[50vh] ">
        <div className="flex h-full text-[#3c3a36] w-[65%] flex-col items-center justify-center ">
          <h1 className="font-bold lg:text-4xl mb-3 ">
            Muebles Casa River catálogo online
          </h1>
          <h3 className="text-2xl mb-10">
            Fabricación de muebles bajo cotización
          </h3>
          <p className="text-center mb-4">
            Somos fabricantes y distribuidores de una gran variedad de muebles
            para el hogar. Conoce nuestra excelente calidad y diseño que te
            ayudaran a personalizar y crear tus espacios favoritos.
          </p>
          <p className="text-center mb-10">
            Fabricamos muebles bajo previa cotización, lo que significa que las
            imágenes aquí presentadas son de referencia. Puedes contactarnos
            para consultar el color, los materiales y los detalles adicionales
            que desees en tu mueble. Vease terminos y condiciones.
          </p>
          <ul className="flex flex-row font-principal font-semibold  gap-14 text-xl">
            <li>HABITACIÓN</li>
            <li>SALA</li>
            <li>DECORACIÓN</li>
          </ul>
        </div>
      </section>
      <LandingAbout />
    </>
  );
};
