import Image from "next/image";
import React from "react";

export const Landing = () => {
  return (
    <>
      <section className="flex lg:flex-row w-full text-[#3C3A36] h-screen bg-[#c9c2b7]">
        <div className="flex justify-center items-center w-[50%]">
          <h1 className="font-principal w-[65%] text-6xl">
            Diseño y calidad{" "}
            <span className="text-8xl font-bold">en un solo lugar</span>
          </h1>
        </div>
        <div className="flex flex-row justify-center relative items-center pl-20 w-[50%] lg:pr-[500px] ">
          <img
            className="z-40  absolute"
            src="/assets/sillasinfondo.png"
            alt="Imagen de un mueble"
          />
          <div className="z-30 absolute left-32 top-60">
            <div className="h-[480px] w-[480px]  rounded-full bg-[#d3cec5] "></div>
          </div>
        </div>
      </section>
      //! Sección de categorias
      <section className="flex flex-col h-full w-full items-center pt-36  text-[#3C3A36]">
        <h1 className="text-5xl mb-10">
          ¿Buscando tu nuevo <span className="font-bold">mueble favorito</span>?
        </h1>
        <h3 className="text-center text-3xl mb-12">
          Seguro que lo tenemos y si no, te lo fabricamos. <br />
          <span className="font-bold ">Echa un vistazo.</span>
        </h3>

        <div className="flex relative justify-between items-center overflow-visible">
          <div className="z-40 left-[-150] top-[-450] h-[1300px] absolute">
            <Image
              src="/assets/sala.png"
              alt="Imagen de sala Azul"
              width={400}
              height={500}
              priority
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="relative h-[500px] w-1/2   bg-[#c9c2b7]">
            <h2 className="text-[#3C3A36] font-bold text-4xl absolute left-190 bottom-15 z-40">
              Salas
            </h2>
          </div>

          <div className="relative z-10 flex w-1/2 items-center justify-center">
            <p className="font-secondary w-[80%] text-3xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              cupiditate quae quo minima veniam hic molestiae veritatis nobis
              blanditiis neque saepe, voluptatem enim atque nulla ex nostrum.
              Magnam, eveniet incidunt.
            </p>
          </div>
        </div>

        <div className="flex relative justify-between  items-center overflow-visible">
          <div className="relative z-20 flex w-1/2 items-center justify-center">
          <p className="font-secondary w-[80%] text-3xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            cupiditate quae quo minima veniam hic molestiae veritatis nobis
            blanditiis neque saepe, voluptatem enim atque nulla ex nostrum.
            Magnam, eveniet incidunt.
          </p>
          </div>
          <div className="z-40 right-30 top-[-70] h-[650px] absolute">
            <Image
              src="/assets/silla.png"
              alt="Imagen de sala Azul"
              width={400}
              height={500}
              priority
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="relative h-[500px] w-1/2  bg-[#c9c2b7]">
            <h2 className="text-[#3C3A36] font-bold text-4xl absolute right-190 bottom-15 z-40">
              Sillas
            </h2>
          </div>
        </div>
        <div className="flex relative justify-between items-center overflow-visible">
          <div className="z-40 left-20 top-[-50] h-[600px] absolute">
            <Image
              src="/assets/sofa-L.png"
              alt="Imagen de sala Azul"
              width={400}
              height={500}
              priority
              className="h-full w-auto object-contain"
            />
          </div>

          <div className="relative h-[500px] w-1/2   bg-[#c9c2b7]">
            <h2 className="text-[#3C3A36] font-bold text-4xl absolute left-60 bottom-15 z-40">
              Sofás
            </h2>
          </div>

          <div className="relative z-10 flex w-1/2 items-center justify-center">
            <p className="font-secondary w-[80%] text-3xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              cupiditate quae quo minima veniam hic molestiae veritatis nobis
              blanditiis neque saepe, voluptatem enim atque nulla ex nostrum.
              Magnam, eveniet incidunt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
