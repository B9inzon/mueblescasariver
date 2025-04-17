"use client"

import { useState } from "react"
import { MenuIcon } from "./icons/MenuIcon"
import { CloseIcon } from "./icons/CloseIcon"

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const switchMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button onClick={switchMenu} className="lg:hidden flex items-center justify-center" aria-label="Toggle menu">
        <MenuIcon size={32} color="#3c3a36" strokeWidth={2} />
      </button>

      {isOpen && <div className="fixed inset-0 bg-[#19120c] opacity-80 lg:hidden z-50" onClick={switchMenu}></div>}

      <div
        className={`fixed top-0 right-0 min-h-screen w-2/3 md:w-1/2 bg-gradient-to-b from-[#b4aea4] via-[#a09b92] to-[#78746d] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-60`}
      >
        <div className="flex justify-end p-4">
          <button onClick={switchMenu} aria-label="Close menu">
            <CloseIcon size={32} color="#ffffff" strokeWidth={2} />
          </button>
        </div>
        <ul className="flex h-full flex-col font-medium items-center space-y-6 text-xl mt-10 text-[#3C3A36] transition">
          <li>
            <a href="#" onClick={switchMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="Salas" onClick={switchMenu}>
              Salas
            </a>
          </li>
          <li>
            <a href="Salas" onClick={switchMenu}>
              Sillas
            </a>
          </li>
          <li>
            <a href="Salas" onClick={switchMenu}>
              Comedores
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={switchMenu}>
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BurguerMenu
