"use client";

import React, { useState } from "react";
import { products } from "../utils/products.js";
import Link from "next/link";
import ProductCard from "./ProductCard";
import ContactBanner from "./ContactBanner.jsx";
import { mostSelling } from "@/utils/mostSelling.js";
import MostSelling from "./MostSelling.jsx";

export default function ProductsList() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const uniqueCategories = [
    ...new Set(products.flatMap((product) => product.categories)),
  ];
  const categories = ["todos", ...uniqueCategories];
  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((product) =>
          product.categories.includes(activeCategory)
        );

  return (
    <section className=" flex w-full justify-center gap-4 min-h-screen ">
      <div className=" w-auto h-screen pt-40 bg-amber-500 ">
        <div className="flex flex-col gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                activeCategory === category
                  ? "bg-[#a9a8a3] text-[#fcfcfa] "
                  : "bg-[#e9e6e2] hover:bg-[#d9d8d1] text-[#3c3a36]"
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
      <div className="flex w-[80%] flex-col min-h-screen items-center bg-red-400">
        <h1 className="flex font-secondary items-center justify-center text-center  w-full h-[25vh] text-[10vw] md:text-[7vw] lg:text-[4vw] text-[#3c3a36] ">
          Conoce nuestros productos
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-1 md:gap-4 xl:gap-2 ">
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
        <div className="grid grid-cols-2  lg:grid-cols-4  w-full items-center px-2 md:px-14 xl:px-[15vw] py-5 justify-center gap-4 ">
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
