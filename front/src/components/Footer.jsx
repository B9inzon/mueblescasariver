import React from 'react'

export const Footer = () => {
  return (
    <div className="flex flex-col h-96 pt-10 items-center justify-around text-[#3C3A36] leading-10 ">
        <div className='font-bold text-2xl'>Siguenos en @mueblescasariver</div>
        <div className='flex flex-row w-full items-start justify-evenly '>
            <ul>
                <h3 className='mb-10'>Sobre nosotros</h3>
                <li><a href="/about">Quienes somos</a></li>
                <li><a href="/contact">Contáctanos</a></li>
                <li><a href="/contact">Vende en Muebles Casa River</a></li>
            </ul>
            <ul>
                <h3 className='mb-10'>Productos</h3>
                <li><a href="/products/sala">Sala</a></li>
                <li><a href="/products/habitacion">Habitación</a></li>
                <li><a href="/products/decoracion">Decoración</a></li>
            </ul>
            <ul>
                <h3 className='mb-10'>Información</h3>
                <li><a href="">Términos y Condiciones</a></li>
                <li><a href="">Superintendencia de Industria y Comercio</a></li>
            </ul>
        </div>
    </div>
  )
}
