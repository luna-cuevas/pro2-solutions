import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <nav id="site-menu" class="flex flex-wrap w-screen h-fit pl-12 md:justify-around justify-between pr-12 border-2 border-gray-700 bg-[#2F3566]">
      <div className='flex md:w-40 my-2'>
        <img className='w-[80px]' src="/images/pro2-logo-v2.svg" alt="logo" />
      </div>
      <div className='flex relative w-fit h-fit'>
        <div class="w-fit sm:w-auto self-start sm:self-center flex flex-col sm:flex-none flex-no-wrap justify-between items-center">
          <button id="menuBtn" class={`${isOpen ? 'hamburger' : 'open'} block sm:hidden focus:outline-none`} type="button" onClick={() => setIsOpen(!isOpen)}>
            <span class="hamburger__top-bun"></span><span class="hamburger__bottom-bun"></span>
          </button>
        </div>
      </div>
      <div id="menu" class={`w-screen text-xl text-white sm:w-auto gap-4 md:gap-8 self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 ${isOpen ? 'hidden' : 'flex'}`}>
        <h2 className='hover:underline underline-offset-4'><Link className='hover:underline hover:underline-offset-4' href='/'>Home</Link></h2>
        <h2 className='hover:underline underline-offset-4'><Link className='underline' href='/about'>About</Link></h2>
        <h2 className='hover:underline underline-offset-4'><Link href='/brands'>Brands</Link></h2>
        <h2 className='hover:underline underline-offset-4'><Link href='/contact'>Contact Us</Link></h2>
      </div>
    </nav>
  )
}

export default NavBar