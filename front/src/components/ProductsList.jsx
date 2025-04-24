import React from "react";
import { products } from "../utils/products.js";
import Link from "next/link";
import ProductCard from "./ProductCard";
import ContactBanner from "./ContactBanner.jsx";
import { mostSelling } from "@/utils/mostSelling.js";
import MostSelling from "./MostSelling.jsx";


export default function ProductsList() {
  return (
    <section className="flex w-full flex-col min-h-screen  items-center ">
      <h1 className="flex font-secondary items-center justify-center text-center  w-full h-[40vh] text-[10vw] md:text-[7vw] lg:text-[5vw] text-[#3c3a36] ">
        Conoce nuestros productos
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-1 md:gap-4 xl:gap-2 ">
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/products/id${product.id}`}>
              <ProductCard {...product} />
            </Link>
          );
        })}
      </div>
      <ContactBanner />
      <h1 className="flex font-secondary items-center justify-center text-center font-semibold w-full h-[20vh] text-[10vw] md:text-[7vw] lg:text-[3vw] text-[#3c3a36] ">
        Lo más vendido
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap w-full items-center justify-center gap-6 ">
        {mostSelling.map((category, index) => (
          <MostSelling
            key={index}
            name={category.name}
            text={category.text}
            image={category.images}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
