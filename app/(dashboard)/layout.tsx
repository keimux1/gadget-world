import React, { ReactNode } from 'react'

const DashboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <h2>The dasboard layout</h2>
      {children}
    </div>
  )
}

export default DashboardLayout
