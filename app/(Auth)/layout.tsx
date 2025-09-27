import React, { ReactNode } from 'react'

const AuthLayout = ({children}:{children : ReactNode}) => {
  return (
    <div>
      <h2>This is the auth layout</h2>
      {children}
    </div>
  )
}

export default AuthLayout
