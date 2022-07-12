import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <nav id="site-menu" className="flex flex-wrap w-screen h-fit pl-12 md:justify-around justify-between pr-12 bg-[#2F3566]">
      <div className='flex w-32 my-2'>
        <Link href="/">
          <button className='cursor-grab block w-full'>
            <Image width={1800} height={750} layout='responsive' className='w-[80px]' src="/images/pro2-logo-v2.svg" alt="logo" />
          </button>
        </Link>
      </div>
      <div className='w-fit h-fit relative flex'>
        <div className="w-fit sm:w-auto sm:self-center sm:flex-none flex flex-col flex-no-wrap items-center self-start justify-between">
          <button id="menuBtn" className={`${isOpen ? 'hamburger' : 'open'} block sm:hidden focus:outline-none`} type="button" onClick={() => setIsOpen(!isOpen)}>
            <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span>
          </button>
        </div>
      </div>
      <div id="menu" className={`w-screen font-normal text-xl text-white sm:w-auto gap-4 md:gap-8 self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 ${isOpen ? 'hidden' : 'flex'}`}>
        <h2 className='hover:underline underline-offset-4'><Link className='hover:underline hover:underline-offset-4' href='/'>Home</Link></h2>
        <h2 className='hover:underline underline-offset-4'><Link className='underline' href='/about'>About</Link></h2>
        <h2 className='hover:underline underline-offset-4'><Link href='/brands'>Brands</Link></h2>
        <h2 className='hover:underline underline-offset-4'><Link href='/contact'>Contact Us</Link></h2>
      </div>
    </nav>
  )
}

export default NavBar