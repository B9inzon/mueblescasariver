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
  categories,
}) {
  const finalPrice = discountedPrice(price, discount);
  const percentageOff = discount * 100;
  const showCategories = categories
    .filter((category) => category !== "-")
    .map((category) => category.trim());

  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex flex-col items-center lg:pt-38 min-h-screen   ">
      <div className="flex flex-col w-full lg:h-[60vh] lg:flex-row md:px-[14vw] gap-4 xl:px-[20vw]   ">
        <div className="flex flex-col w-full gap-4 items-center justify-center pt-20 lg:pt-0  ">
          <div className=" w-full md:w-[80%] lg:w-full md:rounded-md overflow-hidden ">
            <img src={images.at()} alt={name} className="max-h-full w-full " />
          </div>
          <div className="hidden w-full md:flex justify-center gap-4 ">
            <img
              src={images.at()}
              alt={name}
              className="w-[22%]  rounded-md "
            />
            <img
              src={images.at()}
              alt={name}
              className="w-[22%]  rounded-md"
            />
            <img
              src={images.at()}
              alt={name}
              className="w-[22%]  rounded-md"
            />
            <img
              src={images.at()}
              alt={name}
              className="w-[22%]  rounded-md"
            />
          </div>
        </div>

        {/* //!SECCION DATOS PRODUCTO */}
        <div className="flex  flex-col w-full lg:w text-[#3c3a36] justify-center xxs:h-[60vh] xs:h-[45vh] md:h-full  gap-2 px-4 ">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-4">
            {name}
          </h2>
          <p className=" mb-6">{description}</p>
          <h2 className="font-semibold">Precio de venta:</h2>
          <h3 className=" font-bold ">
            <span className="text-xl lg:text-3xl mr-2">
              {formatter.format(finalPrice)}
            </span>
            <span
              className={`line-through text-[#3c3a36]/50 mr-5 ${
                percentageOff <= 0 ? "hidden" : ""
              } `}
            >
              {formatter.format(price)}
            </span>
            <span
              className={` h-14 w-14 text-green-500 text-xl font-bold ${
                percentageOff <= 0 ? "hidden" : ""
              } `}
            >
              ({percentageOff}%)
            </span>
          </h3>
          <h4 className="mb-6">
            Ahórrate{" "}
            <span className="font-semibold text-red-500">
              {formatter.format(price - finalPrice)}
            </span>
          </h4>
          <div className="flex flex-wrap items-center mb-6 gap-2 ">
            {showCategories.map((category, index) => (
              <span
                key={index}
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
              className="group flex items-center justify-center	bg-[#25d366] p-1 md:p-2 w-full md:w-[280px] lg:w-[300px]  rounded lg:rounded-lg gap-4  hover:scale-105 transition-all duration-600 ease-in-out "
              style={{ filter: "drop-shadow(5px 5px 4px #282624)" }}
            >
              <WhatsappIcon />
              <h3 className="text-[#3c3a36] font-semibold text-xl md:text-xl lg:text-2xl ">
                ¡Cotiza ahora!
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* //! INFORMACIÓN DEL PRODUCTO */}
      <div className="flex flex-col  text-[#3c3a36] md:px-[14vw]  mt-12 xl:px-[20vw] w-full  ">
        <h2 className="text-2xl lg:text-3xl px-1 md:px-0 mb-4 lg:mb-8">
          Información del producto
        </h2>
        <table className="flex w-full h-full  px-1 md:px-0 ">
          <tbody className="flex flex-col justify-center w-full lg:w-[80%]  ">
            {Object.entries(information).map(([key, value]) => (
              <tr
                className="flex flex-row h-fit items-center justify-between py-3 border-b border-[#3c3a36]/20 "
                key={key}
              >
                <td className="w-[30vw] font-semibold capitalize">{key}</td>
                <td className="w-[60vw]">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="flex font-secondary items-center justify-center text-center font-semibold w-full h-[20vh] text-[10vw] md:text-[7vw] lg:text-[4vw] xl:text-[3vw] text-[#3c3a36] mt-20 ">
        Lo más vendido
      </h1>
      <div className="grid grid-cols-2  lg:grid-cols-4  w-full items-center px-2 md:px-[10vw] lg:px-[15vw] py-5 justify-center gap-4 ">
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
