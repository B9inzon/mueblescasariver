import React from 'react'
import {products} from '../utils/products.js';
import Link from 'next/link';
import ProductCard from './ProductCard';
import ContactBanner from './ContactBanner.jsx';


export default function ProductsList() {
  return (
    <section className='flex w-full flex-col min-h-screen  items-center '>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-4 xl:gap-2 '>
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
      <ContactBanner/>
    </section>
  )
}
