"use client";

import React from "react";
import { landingCategories } from "@/utils/landing-categories";
import { LandingCategorySection } from "./LandingCategorySection";
import ContactBanner from "./ContactBanner";
import { LandingAbout } from "./LandingAbout";
import MostSelling from "./MostSelling";
import { mostSelling } from "@/utils/mostSelling";
import Link from "next/link";
import HeroLanding from "./HeroLanding";

export const Landing = () => {
  return (
    <>
      <section className=" relative flex flex-col w-full items-center justify-center  h-screen ">
        <HeroLanding />
        <div className="absolute z-1  flex left-0 items-center justify-center w-full pb-10 lg:w-1/2 lg:py-0 lg:h-full">
          <h1 className="font-principal w-full max-w-2xl text-[[#eeece9] px-6 mt-20 md:mt-16 text-center lg:text-left lg:pl-10 xl:pl-20 text-4xl md:text-5xl lg:text-6xl  ">
            Diseño y calidad{" "}
            <span className="block  mt-2 text-6xl md:text-6xl lg:text-8xl font-bold">
              en un solo lugar
            </span>
          </h1>
        </div>
        <div className=" absolute z-0 inset-0  bg-black/60  "></div>
        <div className="absolute z-1 bottom-20 xl:right-60 flex w-full lg:w-auto h-auto items-center justify-center  ">
          <Link
            href="/products"
            rel="noopener noreferrer"
            className=" flex items-center justify-center bg-[#c9c2b7]/75 hover:bg-[#c9c2b7]   p-1 md:p-2 w-auto lg:w-auto rounded-lg   transition-all duration-600 ease-in-out "
            style={{ filter: "drop-shadow(10px 10px 6px #282624)" }}
          >
            <h3 className="text-[#3c3a36]  font-semibold text-xl md:text-2xl lg:text-4xl px-2  transition-all duration-900 ease-in-out ">
              Conoce nuestros productos &#10143;
            </h3>
          </Link>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 md:flex-wrap px-4 sm:px-10 md:px-14 xl:px-[15vw] w-full items-center justify-center gap-6 ">
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
      <h1 className="flex font-secondary items-center justify-center text-center font-semibold w-full h-[20vh] text-[10vw] md:text-[7vw] lg:text-[3vw] text-[#3c3a36] ">
        Lo más vendido
      </h1>
      <div className="grid grid-cols-2  lg:grid-cols-4  w-full items-center px-2 md:px-14 xl:px-[15vw] py-5 justify-center gap-4 ">
        {mostSelling.map((product, id) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <MostSelling
              key={id}
              name={product.name}
              text={product.text}
              image={product.images}
              price={product.price}
              discount={product.discount}
            />
          </Link>
        ))}
      </div>
      <section className="flex justify-center my-10 w-full h-auto lg:h-[50vh] bg-[#3c3a36]/20">
        <div className="flex h-full text-[#3c3a36] w-full lg:w-[80%] p-5 flex-col items-center justify-center ">
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
              <Link href="/TyC">Vease terminos y condiciones</Link>
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
