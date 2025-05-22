"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import BurguerMenu from "./BurguerMenu";

export const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setShowNavbar(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  const handleMenuToggle = (newState) => {
    setIsMenuOpen(newState);
  };

  return (
    <div
      className={`flex flex-row w-full h-20 lg:h-32 px-10 md:px-[10vw] lg:px-[14vw] xl:px-[18vw]  py-5 md:py-6 lg:py-0 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-[#3c3a36]/80 backdrop-blur-lg text-[#eeece9] transition duration-500 ${
        showNavbar ? "translate-y-0 " : "-translate-y-full "
      } `}
    >
      <Link href="/">
        <Logo />
      </Link>
      <nav className="   h-full  ">
        <ul className="hidden lg:flex flex-row gap-12 text-lg h-full items-end font-semibold ">

          <li className="group relative flex flex-col items-center h-3/5 cursor-pointer ">
            <Link href="/" >Inicio</Link>
            <span className="absolute bottom-0 w-0 group-hover:w-full h-1 rounded group-hover:bg-[#eeece9] transition-all duration-500"></span>
          </li>

          <li className="group relative flex flex-col items-center h-3/5 cursor-pointer ">
            <Link href="/products" >Catálogo</Link>
            <span className="absolute bottom-0 w-0 group-hover:w-full h-1 rounded group-hover:bg-[#eeece9] transition-all duration-500"></span>
          </li>

          <li className="group relative flex flex-col items-center h-3/5 cursor-pointer ">
            <Link href="/contact" >Contacto</Link>
            <span className="absolute bottom-0 w-0 group-hover:w-full h-1 rounded group-hover:bg-[#eeece9] transition-all duration-500"></span>
          </li>

          <li className="group relative flex flex-col items-center  h-3/5 cursor-pointer ">
            <Link href="/about" >Acerca de nosotros</Link>
            <span className="absolute bottom-0 w-0 group-hover:w-full h-1 rounded group-hover:bg-[#eeece9] transition-all duration-500"></span>
          </li>

        </ul>
        <div className="lg:hidden">
          <BurguerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />
        </div>
      </nav>
    </div>
  );
};
