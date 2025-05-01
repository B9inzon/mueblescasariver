import React from "react";
import { products } from "../utils/products.js";
import Link from "next/link";
import ProductCard from "./ProductCard";
import ContactBanner from "./ContactBanner.jsx";
import { mostSelling } from "@/utils/mostSelling.js";
import MostSelling from "./MostSelling.jsx";


export default function ProductsList() {
  
  return (
    <section className="flex w-full flex-col min-h-screen  items-center  ">
      <h1 className="flex font-secondary items-center justify-center text-center  w-full h-[25vh] text-[10vw] md:text-[7vw] lg:text-[4vw] text-[#3c3a36] ">
        Conoce nuestros productos
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-1 md:gap-4 xl:gap-2 ">
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/products/${product.id}`}>
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
    </section>
  );
}
