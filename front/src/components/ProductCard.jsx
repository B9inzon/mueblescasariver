import React from "react";

export default function ProductCard({images, name, price, description, information}) {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-center w-[450px] h-[600px] border-1 border-[#3c3a36] text-[#3c3a36] ">
        <img src={images} alt={name} className="h-[400px] w-[420px] " />
        <h4>{name}</h4>
        <h3>{`$ ${price}`}</h3>
    </div>
  );
}
