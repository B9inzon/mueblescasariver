import React from "react";
import { WhatsappIcon } from "./icons/WhatsappIcon";

export default function ContactBanner() {
  return (
    <div className="w-full mt-32">
      <div className="flex flex-col h-60 bg-[#c9c2b7] justify-center items-center">
        <h1 className="text-[#3c3a36] font-bold text-3xl mb-10">
          Cotiza tu próximo mueble favotiro
        </h1>
        <a
          href="https://wa.link/icnysi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center shadow-2xl	 bg-[#b2a55f] p-4 w-1/5 rounded-4xl gap-4 text-2xl "
        >
          <WhatsappIcon />
          <h3 className="text-[#3c3a36] font-semibold">Contáctanos</h3>
        </a>
      </div>
    </div>
  );
}
