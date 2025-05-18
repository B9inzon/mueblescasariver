"use client";

import React, { useState } from "react";
import { products } from "../../utils/products.js";
import Link from "next/link";
import ProductCard from "./ProductCard.jsx";
import ContactBanner from "../ContactBanner.jsx";
import { mostSelling } from "@/utils/mostSelling.js";
import MostSelling from "../MostSelling.jsx";
import BurguerFilter from "../BurguerFilter.jsx";

export default function ProductsList() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const uniqueCategories = [
    ...new Set(products.flatMap((product) => product.categories)),
  ].sort((a, b) => a.localeCompare(b));

  const categories = ["todos", ...uniqueCategories];

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((product) =>
          product.categories.includes(activeCategory)
        );

  const handleMenuToggle = (newState) => {
    setIsMenuOpen(newState);
  };

  return (
    <section className=" flex flex-col lg:flex-row w-full items-center lg:items-start justify-center gap-4 min-h-screen  ">
      {/* //!ESTE ES EL FILTRO DE CATEGORÍAS DE PRODUCTOS */}

      <div className="hidden lg:block  lg:h-screen pt-40   sticky top-0  ">
        <h4 className=" mb-4 px-4 font-bold text-[#3c3a36] ">Filtrar por:</h4>
        <div className="hidden lg:flex flex-col gap-2 ">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 text-left rounded-sm font-semibold transition-colors ${
                activeCategory === category
                  ? "bg-[#a9a8a3] text-[#fcfcfa] "
                  : " hover:bg-[#e0dfda] text-[#3c3a36]"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "todos"
                ? "Todos"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="flex w-full lg:w-[80%] flex-col min-h-screen items-center ">
        <h1 className="flex font-secondary items-center justify-center text-center  w-full h-[15vh] lg:h-[18vh] text-[6vw] font-semibold md:text-[5vw] lg:text-[4vw] text-[#3c3a36]   ">
          Conoce nuestros productos
        </h1>
        <div className="flex flex-row h-[6vh] w-full xl:w-[69.3vw] items-center  px-5 lg:px-0 gap-6 mb-5 lg:mb-0   ">
          <div className="lg:hidden ">
            <BurguerFilter
              isOpen={isMenuOpen}
              onToggle={handleMenuToggle}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
          <h4 className="flex ] text-base  text-[#3c3a36] capitalize  ">
            {`${activeCategory}`}
          </h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-1 md:gap-4 xl:gap-2  ">
          {filteredProducts.map((product) => {
            return (
              <Link key={product.id} href={`/products/${product.id}`} passHref>
                <ProductCard {...product} />
              </Link>
            );
          })}
        </div>
        <ContactBanner />
        <h1 className="flex font-secondary items-center justify-center text-center font-semibold w-full h-[20vh] text-[10vw] md:text-[7vw] lg:text-[3vw] text-[#3c3a36] ">
          Lo más vendido
        </h1>
        <div className="grid grid-cols-2  lg:grid-cols-4  w-full items-center px-2 md:px-8 xl:px-[10vw] py-5 justify-center gap-4  ">
          {mostSelling.map((product, id) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <MostSelling
                key={id}
                name={product.name}
                text={product.text}
                image={product.images}
                price={product.price}
                discount={product.discount}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
