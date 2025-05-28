import React, {useRef} from "react";

import emailjs from '@emailjs/browser'
import { WhatsappIcon } from "./icons/WhatsappIcon";
import { MailIcon } from "./icons/MailIcon";
import Link from "next/link";
import { PhoneIcon } from "./icons/PhoneIcon";

export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('','', form.current, {})
  }

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center pt-28 lg:pt-36 px-8 md:px-[9vw] lg:px-[6vw] xl:px-[14vw]  min-h-screen  ">
      <div className=" flex flex-col gap-4 py-4 lg:pr-12  justify-center w-full h-auto lg:w-1/2 items-center   ">
        <h1 className="text-3xl w-full lg:text-4xl mb-2 lg:mb-6 font-semibold text-[#3c3a36]  ">
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
      <div className="h-auto w-full lg:w-1/2  ">
        <form
          action="submit"
          className="flex flex-col justify-center items-center gap-8 py-4 lg:px-10 xl:px-14 w-full h-full text-[#3c3a36]  "
        >
          <fieldset className="flex items-center justify-center  h-12 w-full">
            <input
              type="text"
              name="username"
              placeholder="Nombre completo o empresa *"
              required
              className="w-full h-10 pl-4 border rounded"
            />
          </fieldset>
          <fieldset className="flex flex-col items-center gap-4 justify-center  h-auto w-full">
            <input
              type=" email "
              name="email"
              placeholder="Email *"
              required
              className="w-full h-10 pl-4 border rounded"
            />
          </fieldset>
          <fieldset className="flex flex-col items-center gap-4 justify-center  h-auto w-full">
            <input
              type=" number "
              name="number"
              placeholder="Celular*"
              required
              className="w-full h-10 pl-4 border rounded"
            />
          </fieldset>
          <fieldset className="flex flex-col items-center gap-4 justify-center  h-auto w-full">
            <textarea
              type=" text "
              name="message"
              cols="50"
              rows="5"
              maxLength="500"
              placeholder="Mensaje*"
              required
              className=" w-full pl-4 pt-2 border rounded"
            />
          </fieldset>
          <button
            type="submit"
            className="w-[30%] h-[40px] text-[#eeece9] font-semibold bg- rounded-lg cursor-pointer bg-[#3c3a36]/80 hover:bg-[#3c3a36]/60 "
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
