import React from "react";
import { InstagramIcon } from "./icons/InstagramIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col h-auto lg:h-[70vh]  py-10 items-center justify-around text-[#3C3A36] leading-10  ">
      <div className="flex flex-col mb-12 h-[20vh] lg:h-[40%] justify-center border-[#3c3a36] border-t-2 border-b-2  items-center w-full sm:w-[80vw] lg:w-[60vw] ">
        <h1 className="flex font-bold text-md h-auto items-center justify-center mb-8 md:text-2xl w-[80%]  ">
          Siguenos en @mueblescasariver
        </h1>
        <InstagramIcon size={50} />

      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-[60vw] text-base leading-10 text-center lg:text-start items-center lg:items-start lg:justify-between">
        <ul className="mb-10">
          <li className=" font-semibold  text-base">
            Sobre nosotros
          </li>
          <li>
            <Link href="/about">Quienes somos</Link>
          </li>
          <li>
            <Link href="/contact">Contáctanos</Link>
          </li>
          <li>
            <Link href="/contact">Vende en Muebles Casa River</Link>
          </li>
        </ul>
        <ul className="mb-10">
          <li className=" font-semibold  text-base">Productos</li>
          <li>
            <Link href="/products/sala">Sala</Link>
          </li>
          <li>
            <Link href="/products/habitacion">Habitación</Link>
          </li>
          <li>
            <Link href="/products/decoracion">Decoración</Link>
          </li>
        </ul>
        <ul className="mb-10">
          <li className=" font-semibold  text-base">Información</li>
          <li>
            <Link href="">Términos y Condiciones</Link>
          </li>
          <li>
            <Link href="https://sedeelectronica.sic.gov.co/" target="_blank">
              Superintendencia de Industria y Comercio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
