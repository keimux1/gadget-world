import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ProductProps } from '../../types/products'


function HorizontalProductCard({ product }: { product: ProductProps }) {
  return (
    <div className='border border-gray-200 p-3 rounded-2xl flex gap-3 items-center justify-between' key={product.id} >
      <Image src={product.image} alt={product.name} width={500} height={500} className='object-contain w-36' />
      <div>
        <p className='py-2 text-sm text-blue-600'>
          Instock : {product.stock}
        </p>
        <h2 className='text-xl font-semibold'>
          {product.name}
        </h2>
        <p>${product.price}</p>
        <div className='py-2 w-full'>
          <Button className='w-full'>Order Now</Button>
        </div>
      </div>
    </div>
  )
}

export default HorizontalProductCard
