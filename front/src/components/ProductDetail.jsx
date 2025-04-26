import React from "react";

export default function ProductDetail({ images, name, price, description }) {
  return (
    <div className="flex flex-col items-center pt-20 lg:pt-36 min-h-screen bg-pink-400">
      <div className="flex flex-col w-full lg:h-[80vh] lg:w-[80%]  lg:flex-row bg-red-500">
        <div className="flex flex-col justify-between items-center w-full h-[60vh] lg:h-full lg:w-full p-1 lg:p-4 bg-green-500">
          <div className="flex w-full h-[40vh] justify-center lg:h-[60%] bg-amber-300 ">
            <div
              className=" flex max-w-full max-h-full w-full h-full
                 md:w-full md:h-full aspect-auto bg-cover bg-center  "
              style={{ backgroundImage: `url(${images})` }}
            ></div>
          </div>
            <>AQUI VAN LAS IMÁGENES DEL CARRUSEL</>
        </div>
        <div className="flex  flex-col w-full h-[40vh] lg:h-full lg:w-[40%] gap-5 pl-5 pt-2 lg:py-10 bg-cyan-400">
          <h2 className="text-2xl lg:text-5xl font-semibold">{name}</h2>
          <p className="text-sm lg:text-xl">{description}</p>
          <>AQUI VAN LOS BADGES DE CARACTERÍSTICAS</>
          <h3 className="text-xl lg:text-2xl font-bold">Precio: ${price}</h3>
        </div>
      </div>
    </div>
  );
}
