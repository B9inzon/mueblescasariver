"use client";

import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";

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
        <MenuIcon size={32} color="#3c3a36" strokeWidth={2} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#141312] opacity-90 lg:hidden z-50 h-screen"
          onClick={switchMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 min-h-screen w-2/3 md:w-1/2 bg-gradient-to-b from-[#eae6d2] via-[#a09b92] to-[#78746d] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-60`}
      >
        <div className="flex justify-end p-4">
          <button onClick={switchMenu} aria-label="Close menu">
            <CloseIcon size={32} color="#3c3a36" />
          </button>
        </div>
        <ul className="flex h-full flex-col font-medium items-center space-y-6 text-xl mt-10 text-[#3C3A36] transition">
          <li>
            <a href="/" onClick={switchMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="/products" onClick={switchMenu}>
              Catálogo
            </a>
          </li>
          <li>
            <a href="/contact" onClick={switchMenu}>
              Contacto
            </a>
          </li>
          <li>
            <a href="/about" onClick={switchMenu}>
              Acerca de nosotros
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurguerMenu;
