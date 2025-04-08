import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="flex flex-row h-36 pt-8 items-center justify-around fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md text-[#3C3A36]">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="">
        <ul className="flex flex-row gap-10 text-lg font-medium">
          <li>
            <a href="/landing">Inicio</a>
          </li>
          <li>
            <a href="/products">Catálogo</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
          <li>
            <a href="/about">Acerca de nosotros</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
