import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='font-["Myriad_Pro"]'>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout