"use client"
import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import BurguerMenu from "./BurguerMenu";

export const Navigation = () => {
  return (
    <div className="flex flex-row max-w-screen h-20 lg:h-32 p-12 md:py-14 lg:py-8 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-opacity-50  backdrop-blur-md text-[#3C3A36] ">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="">
        <ul className="hidden lg:flex flex-row gap-10 text-lg font-medium">
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
        <div className="lg:hidden">
        <BurguerMenu />
      </div>
      </nav>
    </div>
  );
};
