import React from "react";
import { InstagramIcon } from "./icons/InstagramIcon";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="  py-12  text-[#3C3A36]   ">
      <div className=" container mx-auto px-4  ">
        <div className="flex flex-col items-center justify-center py-10 border-y-2 border-[#3c3a36] mb-12 ">
          <h2 className="font-bold text-lg md:text-2xl mb-6 text-center  ">
            Siguenos en @mueblescasariver
          </h2>
          <Link
            href="https://instagram.com/mueblescasariver"
            target="_blank"
            rel=" noopener noreferrer "
            aria-label=" Siguenos en Instagram "
            className=" hover:opacity-80 transition-opacity "
          >
            <InstagramIcon size={48} />
          </Link>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left  ">
          <nav aria-label="Sobre nosotros">
            <h3 className=" font-semibold text-base mb-4 ">Sobre nosotros</h3>
            <ul className=" space-y-2 ">
              <li className=" hover:underline focus:underline focus:outline-none ">
                <Link href="/about">Quienes somos</Link>
              </li>
              <li className=" hover:underline focus:underline focus:outline-none ">
                <Link href="/contact">Contáctanos</Link>
              </li>
              <li className=" hover:underline focus:underline focus:outline-none ">
                <Link href="/contact">Vende en Muebles Casa River</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Catálogo">
            <h3 className=" font-semibold text-base mb-4 ">
              Nuestros Productos
            </h3>
            <ul className=" space-y-2 ">
              <li className=" hover:underline focus:underline focus:outline-none ">
                <Link href="/products">Catálogo de productos</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Sobre nosotros">
            <h3 className=" font-semibold text-base mb-4 ">Información</h3>
            <ul className=" space-y-2 ">
              <li className=" hover:underline focus:underline focus:outline-none ">
                <Link href="/terms">Términos y Condiciones</Link>
              </li>
              <li className=" hover:underline focus:underline focus:outline-none ">
                <Link href="https://sedeelectronica.sic.gov.co/"
                target="_blank"
                >
                  Superintendencia de Industria y Comercio
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className=" mt-12 text-center text-sm text-[#3c3a36]/70 ">
          <p>
            © {currentYear} Muebles Casa River. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
