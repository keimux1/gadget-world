import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const FeaturedProducts = () => {
  const featuredProducts = [
    // Example featured products data
    { id: 1, name: 'Samsung Gear Camera',slug: 'samsung-gear-camera', image: '/products/samsung_gear_360_spherical_camera_1233549.jpg' },
    { id: 2, name: 'Beats Studio Buds',slug: 'beats-studio-buds', image: '/products/Samsungbuds.webp' },
    { id: 3, name: 'Hero Camera',slug: 'hero-camera', image: '/products/camere.webp' },
  ];
  return (
    <div className='container p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
      {featuredProducts.map(product => {
        return (
          <div key={product.id} className='p-3 rounded-2xl flex items-center justify-between border border-gray-200 shadow  max-w-7xl w-auto'>
            <div className='flex flex-col justify-between h-full py-4'>
              <h2 className='text-xl md:text-2xl'>{product.name}</h2>
              <Link href={`/products/${product.slug}`}>Shop Now</Link>
            </div>
            <Image src={product.image} alt={product.name} className='w-36 h-auto' width={500} height={500}/>
          </div>
        )
      }
      )}
    </div>
  )
}

export default FeaturedProducts
