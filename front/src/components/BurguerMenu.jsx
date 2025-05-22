"use client";

import { MenuIcon } from "@/components/icons/MenuIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import Link from "next/link";

const BurguerMenu = ({ isOpen, onToggle }) => {
  const switchMenu = () => {
    onToggle(!isOpen);
  };

  return (
    <div className="relative ">
      <button
        onClick={switchMenu}
        className="lg:hidden flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <MenuIcon size={32}  strokeWidth={2} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#141312] opacity-90 lg:hidden z-50 h-screen"
          onClick={switchMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 min-h-screen w-4/5 md:w-1/2 bg-[#fdfdfc] shadow-lg transform pl-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-60`}
      >
        <div className="flex justify-end p-4">
          <button onClick={switchMenu} aria-label="Close menu">
            <CloseIcon size={32} color="#3c3a36" />
          </button>
        </div>
        <ul className="flex h-full flex-col font-medium items-left space-y-6 text-xl mt-10 text-[#3C3A36] transition">
          <li>
            <Link href="/" onClick={switchMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={switchMenu}>
              Catálogo
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={switchMenu}>
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={switchMenu}>
              Acerca de nosotros
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurguerMenu;
