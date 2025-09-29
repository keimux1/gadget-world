import BestDeals from '@/components/shop/BestDeals'
import FeaturedProducts from '@/components/shop/FeaturedProducts'
import HeroSection from '@/components/shop/HeroSection'
import TrendingProducts from '@/components/shop/TrendingProducts'
import React from 'react'

function page() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <TrendingProducts />
      <BestDeals />
    </div>
  )
}

export default page
