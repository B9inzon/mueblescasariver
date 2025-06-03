import Link from "next/link";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import { MailIcon } from "../icons/MailIcon";
import { PhoneIcon } from "../icons/PhoneIcon";

const CONTACT_DATA = {
  phone: "+57 301 315 1460",
  email: "mueblescasariver@gmail.com",
  whatsappLink: "https://wa.link/0nego0",
};

export const ContactInfo = () => {
  return (
    <div className=" flex flex-col gap-4 py-4 lg:pr-12  justify-center w-full h-auto lg:w-1/2 items-center   ">
      <h1 className="text-3xl w-full lg:text-4xl mb-2 lg:mb-6 font-semibold text-[#3c3a36]  ">
        Contáctanos
      </h1>
      <p className=" w-full text-justify mb-4 text-[#3c3a36]  ">
        Nuestra prioridad es la satisfacción de nuestros clientes, por lo que
        nos comprometemos a brindar una atención personalizada que les permita
        elegir, con total confianza, el mueble perfecto para su hogar. Si tienes
        preguntas o quieres información más detallada, no dudes en contactarnos
        por estos medios.
      </p>
      <Link
        href={CONTACT_DATA.whatsappLink}
        target="_blank"
        rel=" noopener noreferrer "
        aria-label=" Escríbenos al WhatsApp "
        className="flex items-center w-full lg:text-xl gap-2  "
      >
        <WhatsappIcon width={30} height={30} />
        <span className="text-[#3c3a36]">{CONTACT_DATA.phone}</span>
      </Link>
      <p className="flex items-center w-full lg:text-xl gap-4 text-[#3c3a36]  ">
        <PhoneIcon height={30} width={30} /> {CONTACT_DATA.phone}
      </p>
      <p className="flex items-center w-full lg:text-xl gap-4 text-[#3c3a36]   ">
        <MailIcon height={30} width={30} /> {CONTACT_DATA.email}
      </p>
    </div>
  );
};
