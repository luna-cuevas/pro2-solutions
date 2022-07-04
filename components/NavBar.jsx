import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <nav id="site-menu" class="flex flex-wrap w-screen h-fit pl-12 justify-between pr-12 border-2 border-gray-700 bg-[#2F3566]">
      <div className='flex w-28 h-16 relative'>
        <Image className='drop-shadow-lg' src="/images/pro2-logo.png" alt="logo" layout='fill' objectFit='contain' />
      </div>
      <div className='flex relative w-fit h-fit'>
        <div class="w-fit sm:w-auto self-start sm:self-center flex flex-col sm:flex-none flex-no-wrap justify-between items-center">
          <button id="menuBtn" class={`${isOpen ? 'hamburger' : 'open'} block sm:hidden focus:outline-none`} type="button" onClick={() => setIsOpen(!isOpen)}>
            <span class="hamburger__top-bun"></span><span class="hamburger__bottom-bun"></span>
          </button>
        </div>
      </div>
      <div id="menu" class={`w-screen text-xl text-white sm:w-auto gap-4 self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 ${isOpen ? 'hidden' : 'flex'}`}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/brands'>Brands</Link>
        <Link href='/contact'>Contact Us</Link>
      </div>
    </nav>
  )
}

export default NavBar