import React from "react";
import Link from "next/link";
import MostSelling from "../../MostSelling";
import { mostSelling } from "@/utils/mostSelling";
import ProductDetailSlider from "./ProductDetailSlider";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailTable from "./ProductDetailTable";

export default function ProductDetail({
  images,
  name,
  price,
  discount,
  description,
  information,
  categories,
}) {
  return (
    <div className="flex flex-col items-center lg:pt-38 min-h-screen   ">
      <div className="flex flex-col w-full lg:h-[75vh] lg:flex-row xl:gap-4 justify-center  ">
        <ProductDetailSlider images={images} />
        <ProductDetailInfo
          name={name}
          price={price}
          discount={discount}
          description={description}
          categories={categories}
        />
      </div>

      <ProductDetailTable information={information} />

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
