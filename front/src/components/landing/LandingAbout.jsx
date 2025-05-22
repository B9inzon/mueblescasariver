import React from "react";

export const LandingAbout = () => {
  return (
    <div className=" flex w-full h-screen lg:h-[60vh] p-0 justify-center items-center lg:p-8 ">
      <div className='relative  flex flex-col items-center justify-center w-full h-full lg:w-[90%] p-4  lg:rounded-lg lg:p-12 bg-[url("/assets/LivingRoom.jpg")] grayscale-75 bg-cover bg-center text-[#eeece9] '>
        <div className=" absolute inset-0  bg-black opacity-70 lg:rounded-lg "></div>
        <h2 className="z-10 text-4xl mb-6 lg:mb-10">Sobre nosotros</h2>
        <p className="relative z-10 font-secondary lg:leading-8 text-xl md:text-2xl w-[90%] lg:w-full text-center ">
          En Muebles Casa River, fabricamos y distribuimos muebles de excelente
          calidad y diseño a precios justos. Nuestra prioridad es la
          satisfacción de nuestros clientes, por lo que nos comprometemos a
          brindar una atención personalizada que les permita elegir, con total
          confianza, el mueble perfecto para su hogar. A través de este canal,
          garantizamos un servicio cercano y personalizado, sin importar dónde
          se encuentren, porque sabemos que tu próximo mueble favorito, lo
          encuentras con nosotros.
        </p>
      </div>
    </div>
  );
};
