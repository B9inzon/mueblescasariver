import React from "react";
import { WhatsappIcon } from "./icons/WhatsappIcon";
import discountedPrice from "@/utils/discountedPrices";
import Link from "next/link";
import MostSelling from "./MostSelling";
import { mostSelling } from "@/utils/mostSelling";


export default function ProductDetail({
  images,
  name,
  price,
  discount,
  description,
  information,
  categories  
}) {
  const finalPrice = discountedPrice(price, discount);
  const percentageOff = discount * 100;
  const showCategories = categories.filter(category => category !== "-").map(category => category.trim())

  return (
    <div className="flex flex-col items-center pt-24 lg:pt-38 min-h-screen ">
      <div className="flex flex-col w-full lg:h-[80vh] lg:w-full  lg:flex-row md:px-10 lg:px-14 xl:px-[15vw] gap-5 lg:gap-20  ">
        <div className="flex flex-col justify-between items-center w-full h-[70vh] lg:h-full lg:w-[60%] gap-4  ">
          <div className="flex w-full h-full sm:w-[90vw] sm:h-[70vw] lg:w-full justify-center lg:h-full  ">
            <div
              className=" flex max-w-full max-h-full w-full h-full
                 md:w-full md:h-full bg-cover bg-center border border-[#3c3a36] "
              style={{ backgroundImage: `url(${images})` }}
            ></div>
          </div>
          <div className="flex bg-slate-500 w-full items-center justify-center h-[40%] lg:h-[30%] text-3xl font-bold">
            AQUI VAN LAS IMÁGENES DEL CARRUSEL
          </div>
        </div>
        <div className="flex  flex-col w-full text-[#3c3a36] h-[40vh] lg:h-full lg:w-[40%] gap-2 px-4 lg:pl-5 lg:pt-2 ">
          <h2 className="text-2xl lg:text-5xl font-semibold mb-10">{name}</h2>
          <p className="text-sm lg:text-xl mb-8">{description}</p>
          <h2 className="font-semibold">Precio de venta:</h2>
          <h3 className=" font-bold mb-10">
            <span className="line-through text-[#3c3a36]/50 mr-5">
              ${price}
            </span>
            <span className="text-xl lg:text-3xl mr-2">${finalPrice}</span>
          <span className="   h-14 w-14 text-green-500 text-2xl font-bold   ">
            ({percentageOff}%)
          </span>
          </h3>
          <div className="flex flex-wrap items-center mb-10 gap-2 ">
            {showCategories.map((category, index) =>(
              <span key={index}
              className="px-2 py-1 bg-[#f2f1e9] text-[#3c3a36] font-semibold rounded-sm"
              >
                {category}
              </span>
            ))}
          </div>
          <div className=" flex w-full ">
            <a
              href="https://wa.link/icnysi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center	bg-[#25d366] p-1 md:p-2 w-full md:w-[250px] lg:w-[300px]  rounded lg:rounded-lg gap-4  hover:scale-105 transition-all duration-600 ease-in-out "
              style={{ filter: "drop-shadow(5px 5px 4px #282624)" }}
            >
              <WhatsappIcon />
              <h3 className="text-[#3c3a36] font-semibold text-xl md:text-2xl lg:text-3xl ">
                ¡Cotiza ahora!
              </h3>
            </a>
          </div>
        </div>
      </div>
      <h1 className="flex font-secondary items-center justify-center text-center font-semibold w-full h-[20vh] text-[10vw] md:text-[7vw] lg:text-[4vw] xl:text-[3vw] text-[#3c3a36] mt-20 ">
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
  );
}
