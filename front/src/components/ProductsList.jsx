import React from 'react'
import {products} from '../utils/products.js';
import Link from 'next/link';
import ProductCard from './ProductCard';


export default function ProductsList() {
  return (
    <section className='flex w-full min-h-screen'>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {
        products.map((product) => {
          return (
            <Link
            key={product.id}
            href={`/products/id${product.id}`}
            >
              <ProductCard {...product}/>
            </Link>
          )
        }) }
      </div>
    </section>
  )
}
