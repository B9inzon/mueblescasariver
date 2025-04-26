import React from 'react'
import {products} from "@/utils/products"
import ProductDetail from '@/components/ProductDetail'
import { notFound } from "next/navigation";

export default async function page({params}) {
  const {productId} = await params;

  const product =  products.find((p) => p.id.toString() === productId )

  if (!product) {
    notFound();  }

  return (
    <ProductDetail {...product}  />
  )
}
