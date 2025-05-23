import React from "react";
import { WhatsappIcon } from "./icons/WhatsappIcon";
import { MailIcon } from "./icons/MailIcon";
import Link from "next/link";
import { PhoneIcon } from "./icons/PhoneIcon";

export const ContactUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center pt-28 lg:pt-36 px-8 md:px-[9vw] lg:px-[6vw] xl:px-[14vw]  h-screen  ">
      <div className=" flex flex-col gap-4 py-4 pr-12  justify-center w-full h-auto lg:w-1/2 items-start  ">
        <h1 className="text-3xl w-full lg:text-5xl mb-2 lg:mb-6 font-semibold text-[#3c3a36]  ">
          Contáctanos
        </h1>
        <p className=" w-full text-justify mb-4 text-[#3c3a36]  ">
          Nuestra prioridad es la satisfacción de nuestros clientes, por lo que
          nos comprometemos a brindar una atención personalizada que les permita
          elegir, con total confianza, el mueble perfecto para su hogar. Si
          tienes preguntas o quieres información más detallada, no dudes en
          contactarnos por estos medios.
        </p>
        <Link
          href="https://wa.link/0nego0"
          target="_blank"
          rel=" noopener noreferrer "
          aria-label=" Escríbenos al WhatsApp "
          className="flex items-center w-full lg:text-xl gap-2  "
        >
          <WhatsappIcon width={30} height={30} />
          <span className="text-[#3c3a36]">+57 301 315 1460</span>
        </Link>
        <p className="flex items-center w-full lg:text-xl gap-4 text-[#3c3a36]  ">
          <PhoneIcon height={30} width={30} /> +57 301 315 1460
        </p>
        <p className="flex items-center w-full lg:text-xl gap-4 text-[#3c3a36]   ">
          <MailIcon height={30} width={30} /> mueblescasariver@gmail.com
        </p>
      </div>
      <div className="h-[50vh] w-full lg:w-1/2 bg-amber-400 p-1">
        <form
          action="submit"
          className="flex flex-col justify-center items-center w-full h-full text-[#3c3a36]  "
        >
            <fieldset>
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder="Ej: Jhon Doe" />
            </fieldset>
            <fieldset>
                <label htmlFor="">Email</label>
                <input type=" email " placeholder="Ej: jhondoe@gmail.com" />
            </fieldset>
        </form>
      </div>
    </section>
  );
};
