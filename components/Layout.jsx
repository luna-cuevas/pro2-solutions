import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className='font-["Myriad_Pro"]'>
      <Head>
        <title>Pro2 Solutions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout