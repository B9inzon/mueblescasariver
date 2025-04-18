import React from "react";
import { landingCategories } from "@/utils/landing-categories";
import { LandingCategorySection } from "./LandingCategorySection";
import ContactBanner from "./ContactBanner";
import { LandingAbout } from "./LandingAbout";

export const Landing = () => {
  return (
    <>
      <section className="flex flex-col gap-14 md:gap-0 lg:gap-0 xl:gap-0 lg:flex-row w-full text-[#3c3a36] min-h-screen bg-[#c9c2b7] ">
        <div className="flex items-center justify-center w-full pt-20 pb-10 lg:w-1/2 lg:py-0 lg:h-screen ">
          <h1 className="font-principal w-full max-w-2xl px-6 mt-20 md:mt-16 text-center lg:text-left lg:pl-10 xl:pl-20 text-5xl md:text-6xl  ">
            Diseño y calidad{" "}
            <span className="block mt-2 text-6xl md:text-7xl lg:text-8xl font-bold">
              en un solo lugar
            </span>
          </h1>
        </div>

        <div className="relative flex w-full h-[400px] md:h-[500px] lg:h-screen lg:w-1/2 items-center justify-center lg:justify-start  ">
          <div className="absolute z-10 lg:left-20 xl:left-30 ">
            <div className="h-[400px] w-[400px] md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] rounded-full bg-[#d3cec5]"></div>
          </div>

          <img
            className="z-20 relative h-[400px] w-[400px] md:h-[390px] md:w-[390px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px]  "
            style={{ filter: "drop-shadow(20px 10px 10px #282624)" }}
            src="/assets/sillasinfondo.png"
            alt="Imagen de un mueble"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
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
      <section className="flex justify-center mb-10  h-screen lg:h-[50vh] bg-[#eae6d2]">
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
