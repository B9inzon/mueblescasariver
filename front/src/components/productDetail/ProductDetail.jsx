import React from "react";
import Link from "next/link";
import MostSelling from "../MostSelling";
import { mostSelling } from "@/utils/mostSelling";
import ProductDetailSlider from "./ProductDetailSlider";
import ProductDetailInfo from "./ProductDetailInfo";

export default function ProductDetail({ images, name, price, discount, description, information, categories }) {
  return (
    <div className="flex flex-col items-center lg:pt-38 min-h-screen   ">
      <div className="flex flex-col w-full lg:h-[60vh] lg:flex-row xl:gap-4 justify-center  ">
        <ProductDetailSlider images={images} />
        <ProductDetailInfo
          name={name}
          price={price}
          discount={discount}
          description={description}
          categories={categories}
        />
        
      </div>

      {/* //! INFORMACIÓN DEL PRODUCTO */}
      <div className="flex flex-col  text-[#3c3a36] pl-4 md:px-[14vw]  mt-12 xl:px-[18vw] w-full  ">
        <h2 className="text-2xl lg:text-3xl md:px-0 mb-4 lg:mb-8">
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
