import React from "react";
import Image from "next/image";
import { VisionIcon } from "@/components/icons/VisionIcon";

export default function About() {
  return (
    <div className="flex flex-col w-full py- justify-center  items-center text-[#3c3a36] ">

      <div className=" relative flex flex-col items-center justify-center w-full h-[100vh]  p-4 mb-30   lg:p-12 overflow-hidden ">
        <Image
        src="/assets/Living3000.jpg"
        alt="Muebles Casa River - Sala de estar"
        fill
        priority
        className=" object-cover object-bottom grayscale-75 "
        sizes="100vw"
        />
        
        <div className=" absolute inset-0 z-10   bg-black opacity-60  "></div>

        <h1 className="relative z-20 text-[10vw] sm:text-5xl xl:text-8xl text-[#f9f8f7] font-principal ">
          Muebles Casa River
        </h1>
      </div>
      
      <h1 className="font-semibold text-center w-full lg:w-[60vw] text-[6vw] sm:text-4xl mb-5 lg:mb-10 ">
        Sobre Muebles Casa River
      </h1>
      <p className="w-[80vw] lg:w-[60vw] text-justify font-medium text-base">
        <span className="font-bold">Muebles Casa River</span> es un catálogo en
        línea donde puedes ver nuestros productos, solicitar una cotización o
        simplemente contactarnos para recibir atención personalizada e
        información sobre el producto de tu interés. Somos una iniciativa que
        busca crear un canal de comunicación efectivo entre el cliente y los
        diferentes almacenes y fabricantes asociados, para acercarte información
        de primera mano y brindarte la posibilidad de cotizar o comprar desde el
        lugar en el que te encuentres.
      </p>
      <br />
      <p className="w-[80vw] lg:w-[60vw] text-justify font-medium text-base mb-10">
        Con más de 25 años de experiencia fabricando, diseñando y distribuyendo
        muebles de excelente calidad y diseño a precios justos, en{" "}
        <span className="font-bold">Muebles Casa River</span> tenemos como
        prioridad la satisfacción de nuestros clientes. Por ello, nos
        comprometemos a brindar una atención personalizada que los haga sentir
        como si estuvieran en uno de nuestros almacenes físicos, y que les
        permita elegir con total confianza el mueble perfecto para su hogar. A
        través de este canal, garantizamos un servicio cercano y personalizado,
        sin importar dónde se encuentren, porque sabemos que tu próximo mueble
        favorito lo encuentras con nosotros.
      </p>
      <div className="flex justify-around p-2 items-center sm:border-2 sm:rounded-lg mb-20 w-full sm:w-[80vw]  lg:w-[40vw] ">
        <VisionIcon />
        <p className="text-justify font-semibold w-[60%] ">
          Nuestro objetivo es ofrecer a nuestros clientes, en un solo lugar y de
          manera cómoda e innovadora, un amplio catálogo de productos de
          diferentes almacenes y fabricantes asociados, facilitando así el
          acceso a opciones de calidad que se adapten a sus gustos y
          necesidades.
        </p>
      </div>
    </div>
  );
}
