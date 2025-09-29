"use client"

import React, { use, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import VerticalProductCard from './VerticalProductCard'

function TrendingProducts() {

  const categories = [
    {
      id: "1",
      name: "Mobile",
      slug: "mobile",
      products: [
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

      ]
    },
    {
      id: "2",
      name: "Watches",
      slug: "watches",
      products: [
        {
          id: "1",
          name: "Rolex",
          slug: "rolex",
          image: "/products/rolex.avif",
          stock: 30,
          price: 6000
        },
        {
          id: "2",
          name: "Patek Philippe",
          slug: "patekphilippe",
          image: "/products/patekphilippe.avif",
          stock: 70,
          price: 100
        },

      ]
    }
  ]

  const [activeCategory,setActiveCategory] = useState(categories[0])

  const products = activeCategory.products || []

  return (
    <div className='bg-gray-50 py-8'>
      <div className="conatiner max-w-7xl mx-auto">
        <h2 className='text-2xl md:text-3xl lg:text-4xl py-4'>Trending Products</h2>
        <div className="py-4 border border-b border-gray-200">
          <nav className='flex items-center gap-4 flex-wrap'>
            {
              categories.map(category => {
                return (
                  <button  onClick={() => setActiveCategory(category)} key={category.id} className={
                    cn("text-gray-500", category.id === activeCategory.id ? "font-semibold underline text-blue-600" : "",)
                  }
                  >
                    {category.name}
                  </button>
                )
              })
            }
          </nav>
          <div className="py-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product =>{
              return(
                <VerticalProductCard product={product} key={product.id}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingProducts
