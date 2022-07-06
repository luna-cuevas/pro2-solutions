import React from 'react'
import Link from 'next/link'

const Footer = ({ toBottom }) => {
  return (
    <div className={`h-fit order-1 bg-[#2F3566] ${toBottom ? 'absolute bottom-0' : ''} flex-wrap text-white px-20 flex justify-between md:justify-center w-screen`}>
      <div className='py-4 md:w-1/4'>
        <div className='mb-3 w-[200px] m-auto flex gap-3'>
          <img className='w-6 h-6' src="/images/footer/linkedin.png" alt="" />
          <h2 className='font-light md:text-base text-sm'><Link href='https://www.linkedin.com/company/pro2s'>LinkedIn</Link></h2>
        </div>
        <div className=' mb-3 w-[200px] m-auto flex gap-3'>
          <img className='w-6 h-6' src="/images/footer/gmail.png" alt="" />
          <h2 className='font-light text-sm'><Link href='mailto:info@pro2s.com'>info@pro2s.com</Link></h2>
        </div>
        <div className=' m-auto w-[200px] flex gap-3'>
          <img className='w-6 h-6' src="/images/footer/pin.png" alt="" />
          <h2 className='font-light w-fit text-sm'>
            <Link href='https://goo.gl/maps/TuzRaTdrrFC9tAmL8'>
              <>
              828 San Pablo Ave <br />
              Pinole, CA 94564s
              </>
            </Link>
          </h2>
        </div>
      </div>
      <div className='flex md:order-3 text-center font-normal md:w-1/4 py-4 gap-1 flex-col'>
        <h2><Link href='/'>Home</Link></h2>
        <h2><Link href='/about'>About Us</Link></h2>
        <h2><Link href='/brands'>Brands</Link></h2>
        <h2><Link href='/contact'>Contact Us</Link></h2>
        <h2><Link href='/terms'><>Terms & <br /> Conditions</></Link></h2>
      </div>
      <div className='w-screen order-2 md:w-1/4 flex flex-col'>
        <img className='w-[100px] mb-2 m-auto' src="/images/pro2-logo.png" alt="" />
        <p className='m-auto font-light text-sm'>Copyright © 2022 Pro2 Solutions</p>
      </div>
    </div>
  )
}

export default Footer