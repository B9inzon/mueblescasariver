import React from "react";
import { WhatsappIcon } from "./icons/WhatsappIcon";

export default function ProductDetail({ images, name, price, description }) {
  return (
    <div className="flex flex-col items-center pt-24 lg:pt-38 min-h-screen ">
      <div className="flex flex-col w-full lg:h-[80vh] lg:w-full  lg:flex-row md:px-10 lg:px-14 xl:px-30 gap-5 lg:gap-20  ">
        <div className="flex flex-col justify-between items-center w-full h-[70vh] lg:h-full lg:w-[60%] gap-4  ">
          <div className="flex w-full h-full sm:w-[90vw] sm:h-[70vw] lg:w-full justify-center lg:h-full  ">
            <div
              className=" flex max-w-full max-h-full w-full h-full
                 md:w-full md:h-full bg-cover bg-center border border-[#3c3a36] "
              style={{ backgroundImage: `url(${images})` }}
            ></div>
          </div>
          <div className="flex bg-slate-500 w-full items-center justify-center h-[40%] lg:h-[30%] text-3xl font-bold">
            AQUI VAN LAS IMÁGENES DEL CARRUSEL
          </div>
        </div>
        <div className="flex  flex-col w-full text-[#3c3a36] h-[40vh] lg:h-full lg:w-[40%] gap-5 pl-5 lg:pt-2">
          <h2 className="text-2xl lg:text-5xl font-semibold">{name}</h2>
          <p className="text-sm lg:text-xl">{description}</p>
          <>AQUI VAN LOS BADGES DE CARACTERÍSTICAS</>
          <h3 className="text-xl lg:text-2xl font-bold">Precio: ${price}</h3>
          <div className=" flex w-full  justify-center ">
            <a
              href="https://wa.link/icnysi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center	bg-[#25d366] p-1 md:p-3 w-[300px] md:w-[350px] lg:w-[400px]  rounded-4xl gap-4  hover:scale-105 transition-all duration-600 ease-in-out "
              style={{ filter: "drop-shadow(8px 8px 6px #282624)" }}
            >
              <WhatsappIcon />
              <h3 className="text-[#3c3a36] font-semibold text-xl md:text-2xl lg:text-3xl ">
                ¡Cotiza ahora!
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
