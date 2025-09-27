import ShopHeader from '@/components/shop/ShopHeader'
import React, { ReactNode } from 'react'

const ShopLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <ShopHeader/>
      <h2>Shoplayout</h2>
      {children}
    </div>
  )
}

export default ShopLayout
