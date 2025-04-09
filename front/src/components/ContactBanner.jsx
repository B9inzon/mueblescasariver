import React from "react";
import { WhatsappIcon } from "./icons/WhatsappIcon";

export default function ContactBanner() {
  return (
    <div className="w-full mt-32">
      <div className="flex flex-col h-60 bg-[#c9c2b7] justify-center items-center">
        <h1 className="text-[#3c3a36] font-secondary font-bold text-3xl mb-10">
          Cotiza tu próximo mueble favotiro
        </h1>
        <div className="  flex w-1/6">
          <a
            href="https://wa.link/icnysi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center	bg-[#25d366] p-3 w-full rounded-4xl gap-4 hover:scale-105 transition-all duration-600 ease-in-out "
            style={{ filter: "drop-shadow(10px 10px 6px #282624)" }}
          >
            <WhatsappIcon  />
            <h3 className="text-[#3c3a36] font-semibold text-2xl ">
              Contáctanos
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}
