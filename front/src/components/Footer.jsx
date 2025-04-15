import React from 'react'

export const Footer = () => {
  return (
    <div className="flex flex-col h-[70%] lg:h-[60vh]  py-10 items-center justify-around text-[#3C3A36] leading-10  ">
        <h1 className='flex font-bold text-xl  h-50 items-center justify-center mb-8 md:text-2xl w-[80%] border-b-2 border-[#3c3836] '>Siguenos en @mueblescasariver</h1>
        <div className='flex flex-col lg:flex-row w-full text-base lg:text-lg  leading-10 text-center lg:text-start items-center lg:items-start lg:justify-evenly '>
            <ul className='mb-10'>
                <h3 className=' font-semibold  text-xl lg:text-2xl'>Sobre nosotros</h3>
                <li><a href="/about">Quienes somos</a></li>
                <li><a href="/contact">Contáctanos</a></li>
                <li><a href="/contact">Vende en Muebles Casa River</a></li>
            </ul>
            <ul className='mb-10'>
                <h3 className=' font-semibold  text-xl lg:text-2xl'>Productos</h3>
                <li><a href="/products/sala">Sala</a></li>
                <li><a href="/products/habitacion">Habitación</a></li>
                <li><a href="/products/decoracion">Decoración</a></li>
            </ul>
            <ul className='mb-10'>
                <h3 className=' font-semibold  text-xl lg:text-2xl'>Información</h3>
                <li><a href="">Términos y Condiciones</a></li>
                <li><a href="https://sedeelectronica.sic.gov.co/" target='_blank'>Superintendencia de Industria y Comercio</a></li>
            </ul>
        </div>
    </div>
  )
}

