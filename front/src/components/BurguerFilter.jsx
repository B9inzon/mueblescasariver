"use client";

import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { products } from "../utils/products.js";

const BurguerFilter = ({ isOpen, onToggle, activeCategory, setActiveCategory }) => {
  const uniqueCategories = [
    ...new Set(products.flatMap((product) => product.categories)),
  ].sort((a, b) => a.localeCompare(b));

  const categories = ["todos", ...uniqueCategories];

  
  const switchMenu = () => {
    onToggle(!isOpen);
  };

  return (
    <div className="relative ">
      <button
        onClick={switchMenu}
        className="lg:hidden flex items-center font-semibold text-base border-b-2 justify-center text-[#3c3a36]"
        aria-label="Toggle menu"
      >
       Filtrar
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#141312] opacity-90 lg:hidden z-50 h-screen"
          onClick={switchMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 min-h-screen pl-4 w-4/5 md:w-4/5 bg-[#fdfdfc] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-60`}
      >
        <div className="flex justify-end p-4">
          <button onClick={switchMenu} aria-label="Close menu">
            <CloseIcon size={32} color="#3c3a36" />
          </button>
        </div>
        {categories.map((category) => (
          <button
            key={category}
            className={`flex flex-col w-full text-left pl-2 xxs:py-1.5 xs:py-3  font-semibold transition-colors border-[#cccbcb] border-b  ${
              activeCategory === category
                ? "bg-[#a9a8a3] text-[#fcfcfa] "
                : "  text-[#3c3a36]"
            }`}
            onClick={() => {
                setActiveCategory(category);
                switchMenu()
            } }
          >
            {category === "todos"
              ? "Todos"
              : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BurguerFilter;
