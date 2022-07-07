import React from 'react'

const about = () => {
  return (
    <div className='md:max-w-[1440px] m-auto'>
      <div className='md:w-full'>
        <img className='w-screen' src="/images/about-us/about-us.jpg" alt="" />
      </div>
      <div className='flex flex-wrap w-full h-fit'>
        <img className='w-screen p-4 rounded-3xl md:order-1 order-2 md:rounded-none md:p-0 md:w-1/2' src="/images/about-us/face-cover.jpg" alt="" />
        <div  className='bg-[#D3E7FF] order-1 py-9 flex w-screen md:w-1/2'>
          <h1 className='m-auto w-5/6 text-base text-gray-700 md:text-xl xl:text-2xl'>Since 1988, we have been providing a comprehensive selection of reliable hand barrier and procedural face protections that are cost effective to professionals. </h1>
        </div>
      </div>
      <div className='flex flex-wrap w-full'>
        <div className='bg-[#D2F7FF] order-1 py-9 md:order-2 flex w-screen md:w-1/2'>
          <h1 className='m-auto w-5/6 text-gray-700 text-base md:text-xl xl:text-2xl'>Our extensive list of in-house manufacturing and partnerships enables us to access the latest research and technology to meet the challenge of modern barrier protection requirements.</h1>
        </div>
        <img className='w-screen order-2 p-4 rounded-3xl md:rounded-none md:p-0 md:w-1/2' src="/images/about-us/warehouse.jpeg" alt="" />
      </div>
      <div className='flex w-full border-t-2 md:border-none border-gray-400'>
        <p className='pt-10 pb-2 m-auto w-5/6 font-light text-base md:text-xl xl:text-2xl'>Pro2 Solutions is committed to establishing efficient distribution networks through strategically appointed distributors. We have established three regional warehousing and distribution centers in California and Pennsylvania to enhance the efficiency of our distribution channels. We aim to offer customized Protective Solutions based on users' work environment and critical concerns.</p>
      </div>
      <div className='w-4/5 m-auto'>
        <img src="/images/about-us/pro2-map.svg" alt="" />
      </div>
    </div>
  )
}

export default about