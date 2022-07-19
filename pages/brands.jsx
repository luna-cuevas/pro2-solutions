import Link from 'next/link'
import React from 'react'

const brands = () => {
  return (
    <div className='py-10 md:py-0 md:flex md:h-[600px] md:max-w-[1440px] m-auto'>
      <div className='md:h-72 md:border-b-0 md:border-r-2 border-b-slate-300 flex flex-col w-screen px-10 pb-5 m-auto border-b-2'>
        <div className='flex flex-col items-center'>
          <img className='w-[200px]' src="/images/cranberry-logo.png" alt="" />
          <p>EST 1988</p>
        </div>
        <p>At Cranberry, we stress utmost importance on providing products of superior quality. Therefore, we constantly strive to develop products with the highest protection, comfort, and strength. After thriving in this industry for so many years, we truly understand your needs and demands as a professional. Be assured that our dynamic team is always moving forward, researching, and seeking to provide you with only the best.</p>
        <button className='px-6 mt-4 m-auto text-white py-1 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-sm font-normal rounded-3xl'>
          <a target='_blank' href='https://www.cranberryusa.com/'>
            Cranberry
          </a>
        </button>
      </div>
      <div className='md:h-72 md:pt-0 flex flex-col w-screen px-10 pt-6 m-auto'>
        <div className='flex flex-col items-center'>
          <img className='w-[200px]' src="/images/beesure-logo.png" alt="" />
          <p>EST 1988</p>
        </div>
        <p>At Beesure, we design products with both the environment and the bottom line in mind. We develop innovative quality products by maximizing the conservation of resources and the use of recycled materials. We believe being green should not come at a higher cost and those who wish to preserve the environment should be rewarded for their conservation efforts. With Beesure, you will receive a quality, guilt-free product without the premium price tag.</p>
        <button className='px-6 mt-4 m-auto text-white py-1 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-sm font-normal rounded-3xl'>
          <a passHref={true} href='https://ecobeeworld.com/'>
            Beesure
          </a>
        </button>
      </div>
    </div>
  )
}

export default brands