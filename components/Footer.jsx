import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-fit bg-[#2F3566] flex-wrap text-white px-10 flex justify-between w-screen border-2 border-zinc-700'>
      <div className='py-4'>
        <div className=' mb-3 w-fit  flex gap-3'>
          <img className='w-6 h-6' src="/images/footer/linkedin.png" alt="" />
          <Link href=''>
            <h2 className='font-light text-sm'>LinkedIn</h2>
          </Link>
        </div>
        <div className=' mb-3 w-fit  flex gap-3'>
          <img className='w-6 h-6' src="/images/footer/gmail.png" alt="" />
          <Link href=''>
            <h2 className='font-light text-sm'>info@pro2s.com</h2>
          </Link>
        </div>
        <div className=' w-fit  flex gap-3'>
          <img className='w-6 m-auto h-6' src="/images/footer/pin.png" alt="" />
          <Link href=''>
            <h2 className='font-light text-sm'>828 San Pablo Ave <br />
                Pinole, CA 94564
            </h2>
          </Link>
        </div>
      </div>
      <div className='flex w-1/3s py-4 gap-1 flex-col'>
        <Link href='/'>Home</Link>
        <Link href='/'>About Us</Link>
        <Link href='/'>Brands</Link>
        <Link href='/'>Contact Us</Link>
        <Link href='/'><>Terms & <br /> Conditions</></Link>
      </div>
      <div className='w-screen flex flex-col'>
        <img className='w-[100px] mb-2 m-auto' src="/images/footer/pro2-logo.png" alt="" />
        <p className='m-auto font-light text-sm'>Copyright © 2022 Pro2 Solutions</p>
      </div>
    </div>
  )
}

export default Footer