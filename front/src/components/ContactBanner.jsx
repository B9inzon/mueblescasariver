import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function ContactBanner() {
  return (
    <div className='w-full mt-32'>
        <div className='flex flex-col h-40 bg-[#c9c2b7] justify-center items-center'>
            <h1 className='text-[#3c3a36] font-bold text-4xl mb-8'>Cotiza tu próximo mueble favotiro</h1>
            <a href='https://wa.link/icnysi' target='_blank'>
            <FaWhatsapp />
            Contáctanos
            </a>
        </div>
    </div>
  )
}
