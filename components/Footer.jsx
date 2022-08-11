import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={`h-fit order-1 bg-[#2F3566] px-6 flex-wrap text-white md:px-20 flex justify-between md:justify-center w-screen`}>
      <div className='md:w-1/4 flex flex-col w-1/2 py-4'>
        <div className='mb-3 w-[200px] justify-center m-auto flex gap-3'>
          <img className='w-6 h-6' src="/images/footer/linkedin.png" alt="" />
          <h2 className='md:text-base w-32 text-sm font-light'><Link href='https://www.linkedin.com/company/pro2s'>LinkedIn</Link></h2>
        </div>
        <div className=' mb-3 w-[200px] justify-center m-auto flex gap-3'>
          <img className='w-6 h-6' src="/images/footer/gmail.png" alt="" />
          <h2 className='w-32 text-sm font-light'><Link href='mailto:info@pro2s.com'>info@pro2s.com</Link></h2>
        </div>
        <div className=' m-auto w-[200px] justify-center flex gap-3'>
          <img className='w-6 h-6' src="/images/footer/pin.png" alt="" />
          <h2 className='w-32 text-sm font-light'>
            <Link href='https://goo.gl/maps/TuzRaTdrrFC9tAmL8'>
              828 San Pablo Ave
              Pinole, CA 94564
            </Link>
          </h2>
        </div>
      </div>
      <div className='md:order-3 md:w-1/4 flex flex-col justify-center w-1/2 gap-1 py-4 font-normal'>
        <div className='w-fit m-auto text-left'>
          <h2><Link href='/'>Home</Link></h2>
          <h2><Link href='/about'>About Us</Link></h2>
          <h2><Link href='/brands'>Brands</Link></h2>
          <h2><Link href='/contact'>Contact Us</Link></h2>
          <h2><Link href='/terms'>Terms & Conditions</Link></h2>
          <h2 className='text-[#ffffff0d]'><Link href='/index2'>Home2</Link> | <Link href='/brands2'>Brands2</Link></h2>
        </div>
      </div>
      <div className='md:w-1/4 flex flex-col order-2 w-screen'>
        <Link href="/">
          <div className='md:w-1/3 block w-1/4 m-auto'>
            <img width={1800} height={750} layout='responsive' className='w-[80px] mx-auto' src="/images/pro2-logo-v2.svg" alt="logo" />
          </div>
        </Link>
        <p className='m-auto text-sm font-light'>Copyright © 2022 Pro2 Solutions</p>
      </div>
    </div>
  )
}

export default Footer