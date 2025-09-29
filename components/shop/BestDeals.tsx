"use client"

import React, { use, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import HorizontalProductCard from './HorizontalProductCard'

function BestDeals() {
  const products =[
        {
          id: "1",
          name: "Samsung Galaxy S23",
          slug: "samsung-galaxy-s23",
          image: "/products/samsung-galaxy-s23-5g.jpg",
          stock: 30,
          price: 1000
        },
        {
          id: "2",
          name: "Iphone 16",
          slug: "iphone16",
          image: "/products/apple-iphone-16.jpg",
          stock: 70,
          price: 1199
        },
        {
          id: "3",
          name: "Rolex",
          slug: "rolex",
          image: "/products/rolex.avif",
          stock: 30,
          price: 6000
        },
        {
          id: "4",
          name: "Patek Philippe",
          slug: "patekphilippe",
          image: "/products/patekphilippe.avif",
          stock: 70,
          price: 100
        },

      ]

  return (
    <div className='bg-gray-50 py-8'>
      <div className="conatiner max-w-7xl mx-auto">
        <h2 className='text-2xl md:text-3xl lg:text-4xl py-4'>Best Deals</h2>
        <div className="py-4 border border-b border-gray-200">
          <div className="py-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product =>{
              return(
                <HorizontalProductCard product={product} key={product.id}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestDeals
