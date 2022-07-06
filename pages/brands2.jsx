import Link from 'next/link'
import React from 'react'

const brands2 = () => {
  return (
    <div className='py-14 flex-wrap md:flex md:max-w-[1440px] m-auto'>
      <div className='md:w-1/2 md:h-72 flex m-auto flex-col border-b-2 md:border-b-0 md:border-r-2 border-b-slate-300 pb-5 px-10'>
        <div className='flex items-center flex-col'>
          <img className='w-[200px]' src="/images/cranberry-logo.png" alt="" />
          <p>EST 1988</p>
        </div>
        <p>At Cranberry, we stress utmost importance on providing products of superior quality. Therefore, we constantly strive to develop products with the highest protection, comfort, and strength. After thriving in this industry for so many years, we truly understand your needs and demands as a professional. Be assured that our dynamic team is always moving forward, researching, and seeking to provide you with only the best.</p>
        <button className='px-6 mt-4 m-auto text-white py-1 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-sm font-normal rounded-3xl'>
          <Link href='/'>
            Cranberry
          </Link>
        </button>
      </div>
      <div className='md:w-1/2 my-4 m-auto md:h-72 pt-6 md:pt-0 flex flex-col px-10'>
        <div className='flex items-center flex-col'>
          <img className='w-[200px]' src="/images/beesure-logo.png" alt="" />
          <p>EST 1988</p>
        </div>
        <p>At Cranberry, we stress utmost importance on providing products of superior quality. Therefore, we constantly strive to develop products with the highest protection, comfort, and strength. After thriving in this industry for so many years, we truly understand your needs and demands as a professional. Be assured that our dynamic team is always moving forward, researching, and seeking to provide you with only the best.</p>
        <button className='px-6 mt-4 m-auto text-white py-1 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-sm font-normal rounded-3xl'>
          <Link href='/'>
            Beesure
          </Link>
        </button>
      </div>
      <div className='md:w-max border-t-2 border-b-slate-300 pt-6 flex flex-col px-10'>
        <div className='flex items-center flex-col'>
          <img className='w-[100px]' src="/images/asap-logo.png" alt="" />
          <p>EST 1988</p>
        </div>
        <p>
          A.S.A.P. stands for Art & Science of Amazing Protection. <br />
          <br />
          At A.S.A.P., our concept is a mix of art and science. Each A.S.A.P. glove is a combination of these two elements which aims to provide superior protection, satisfying the needs of every individual glove user. <br />
          <br />
          Why the combination? <br />
          <br />
          Art - Born from creative ideas, we embrace and appreciate imaginative skills of manufacturing processes aimed to produce cutting-edge products. <br />
          <br />
          Science - Time investment and years of experience in R&D to create technologically advanced products for stronger protection. <br />
          <br />
          Ground-breaking ideas fused with advanced technology positions ASAP at the forefront among its industry peers. This combination has propelled ASAP to another level, providing superior protection, excellent tactile sensitivity, without compromising comfort and strength. ASAP is versatile and can serve many different industries such as industrial, healthcare, and research providing a wide range of gloves which include nitrile, latex, and vinyl.
        </p>
        <button className='px-6 mt-4 m-auto text-white py-1 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-sm font-normal rounded-3xl'>
          <Link href='/'>
            A.S.A.P.
          </Link>
        </button>
      </div>
    </div>
  )
}

export default brands2