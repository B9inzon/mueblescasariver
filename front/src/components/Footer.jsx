import React from "react";
import { InstagramIcon } from "./icons/InstagramIcon";

export const Footer = () => {
  return (
    <div className="flex flex-col h-auto lg:h-[70vh]  py-10 items-center justify-around text-[#3C3A36] leading-10  ">
      <div className="flex flex-col mb-12 h-[30%] justify-center items-center w-full ">
        <div className="h-2 border-b-2 w-[70vw] mb-10"></div>
        <h1 className="flex font-bold text-md   h-auto items-center justify-center mb-8 md:text-2xl w-[80%]  ">
          Siguenos en @mueblescasariver
        </h1>
        <InstagramIcon />

      </div>
        <div className="h-2 border-b-2 w-[70vw] mb-10"></div>
      <div className="flex flex-col lg:flex-row w-full text-base lg:text-lg  leading-10 text-center lg:text-start items-center lg:items-start lg:justify-evenly ">
        <ul className="mb-10">
          <li className=" font-semibold  text-xl lg:text-2xl">
            Sobre nosotros
          </li>
          <li>
            <a href="/about">Quienes somos</a>
          </li>
          <li>
            <a href="/contact">Contáctanos</a>
          </li>
          <li>
            <a href="/contact">Vende en Muebles Casa River</a>
          </li>
        </ul>
        <ul className="mb-10">
          <li className=" font-semibold  text-xl lg:text-2xl">Productos</li>
          <li>
            <a href="/products/sala">Sala</a>
          </li>
          <li>
            <a href="/products/habitacion">Habitación</a>
          </li>
          <li>
            <a href="/products/decoracion">Decoración</a>
          </li>
        </ul>
        <ul className="mb-10">
          <li className=" font-semibold  text-xl lg:text-2xl">Información</li>
          <li>
            <a href="">Términos y Condiciones</a>
          </li>
          <li>
            <a href="https://sedeelectronica.sic.gov.co/" target="_blank">
              Superintendencia de Industria y Comercio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
