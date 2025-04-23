import React from "react";
import { landingCategories } from "@/utils/landing-categories";
import { LandingCategorySection } from "./LandingCategorySection";
import ContactBanner from "./ContactBanner";
import { LandingAbout } from "./LandingAbout";

export const Landing = () => {
  return (
    <>
      <section className="flex flex-col gap-10 md:gap-0 lg:gap-0 xl:gap-0 w-full text-[#3c3a36] min-h-screen bg-[#c9c2b7] ">
        <div className="flex flex-col h-[30%] gap-0 md:gap-0 lg:gap-0 xl:gap-0 lg:h-[80vh] xl:h-[85vh] lg:flex-row w-full  ">
          <div className="flex items-center justify-center w-full pt-[8vh] pb-10 lg:w-1/2 lg:py-0 lg:h-full ">
            <h1 className="font-principal w-full max-w-2xl px-6 mt-20 md:mt-16 text-center lg:text-left lg:pl-10 xl:pl-20 text-2xl md:text-5xl lg:text-6xl  ">
              Diseño y calidad{" "}
              <span className="block mt-2 text-3xl md:text-6xl lg:text-8xl font-bold">
                en un solo lugar
              </span>
            </h1>
          </div>

          <div className="relative flex w-full h-[40%] md:h-[400px] lg:h-full lg:w-1/2 items-center justify-center lg:justify-start ">
            <div className="absolute z-10 lg:left-30 xl:left-40 ">
              <div className="h-[260px] w-[260px] md:h-[260px] md:w-[260px] lg:h-[300px] lg:w-[300px] xl:h-[370px] xl:w-[370px] rounded-full bg-[#d3cec5]"></div>
            </div>

            <img
              className="z-20 relative h-[300px] w-[300px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] xl:h-[450px] xl:w-[450px]  "
              style={{ filter: "drop-shadow(20px 10px 10px #282624)" }}
              src="/assets/sillasinfondo.png"
              alt="Imagen de un mueble"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="  flex w-full h-full items-start justify-center ">
          <a
            href="/products"
            rel="noopener noreferrer"
            className=" flex items-center justify-center bg-[#c6ad2e]	 p-1 md:p-3 w-[250px] md:w-[300px] lg:w-[350px]  rounded-4xl gap-4  hover:scale-105 transition-all duration-600 ease-in-out "
            style={{ filter: "drop-shadow(10px 10px 6px #282624)" }}
          >
            <h3 className="text-[#3c3a36]  font-semibold text-xl md:text-2xl lg:text-3xl  transition-all duration-900 ease-in-out ">
              Catálogo
            </h3>
          </a>
        </div>
      </section>
      <section className="flex flex-col h-full w-full items-center  text-[#3C3A36]">
        <div className="flex items-center justify-center w-full h-[50vh] md:h-[250px] lg:h-[10vh] mb-30 bg-[#463C2D]">
          <ul className="flex flex-col lg:flex-row gap-[8vh] lg:gap-20 xl:gap-50 font-secondary text-center text-lg lg:text-xl font-semibold xl:text-2xl text-[#eeece9] ">
            <li>Diseños personalizados</li>
            <li>Calidad sorprendente</li>
            <li>Satisfacción garantizada</li>
          </ul>
        </div>
        <h1 className="text-3xl lg:text-5xl mb-8 lg:mb-10 text-center  ">
          ¿Buscando tu nuevo <span className="font-bold">mueble favorito</span>?
        </h1>
        <h3 className="text-center text-2xl lg:text-3xl mb-16 lg:mb-20  ">
          Seguro que lo tenemos y si no, te lo fabricamos. <br />
          <span className="font-bold ">Revisa nuestras categorías.</span>
        </h3>
        <div className="flex flex-col md:flex-row md:flex-wrap w-full items-center justify-center gap-6 ">
          {landingCategories.map((category, index) => (
            <LandingCategorySection
              key={index}
              name={category.name}
              text={category.text}
              image={category.image}
              index={index}
            />
          ))}
        </div>
      </section>
      <ContactBanner className=" " />
      <section className="flex justify-center mb-10 w-full h-auto lg:h-[50vh] bg-[#eae6d2]">
        <div className="flex h-full text-[#3c3a36] w-full lg:w-[80%] p-1 flex-col items-center justify-center ">
          <h1 className="font-bold text-3xl lg:text-4xl mb-3 text-center ">
            Muebles Casa River catálogo online
          </h1>
          <h3 className="text-2xl mb-10 text-center">
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
            que desees en tu mueble.{" "}
            <span className="font-semibold">
              <a href="/TyC">Vease terminos y condiciones</a>
            </span>
            .
          </p>
          <ul className="flex flex-col text-center lg:flex-row font-principal font-semibold  gap-14 text-xl">
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
