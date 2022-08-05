import React from 'react'

const brands2 = () => {
  return (
    <div className='py-14 flex-wrap min-h-screen md:flex md:max-w-[1440px] m-auto'>
      <div className='md:w-1/2 md:h-72 md:border-b-0 md:border-r-2 border-b-slate-300 flex flex-col px-10 pb-5 m-auto border-b-2'>
        <div className='flex flex-col items-center my-4'>
          <img className='w-[200px]' src="/images/cranberry-logo.png" alt="" />
          <p>EST 1988</p>
        </div>
        <p className='text-xl'>At Cranberry, we stress utmost importance on providing products of superior quality. Therefore, we constantly strive to develop products with the highest protection, comfort, and strength. After thriving in this industry for so many years, we truly understand your needs and demands as a professional. Be assured that our dynamic team is always moving forward, researching, and seeking to provide you with only the best.</p>
        <button className='px-6 mt-4 m-auto text-white py-1 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-sm font-normal rounded-3xl'>
          <a className='text-xl' target='_blank' href='https://www.cranberryusa.com/'>
            Cranberry
          </a>
        </button>
      </div>
      <div className='md:w-1/2 md:h-72 md:pt-0 flex flex-col px-10 pt-6 m-auto my-4'>
        <div className='flex flex-col items-center my-4'>
          <img className='w-[200px]' src="/images/beesure-logo.png" alt="" />
          <p>EST 1988</p>
        </div>
        <p className='text-xl'>At Cranberry, we stress utmost importance on providing products of superior quality. Therefore, we constantly strive to develop products with the highest protection, comfort, and strength. After thriving in this industry for so many years, we truly understand your needs and demands as a professional. Be assured that our dynamic team is always moving forward, researching, and seeking to provide you with only the best.</p>
        <button className='px-6 mt-4 m-auto text-white py-1 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-sm font-normal rounded-3xl'>
          <a className='text-xl' target='_blank' href='https://ecobeeworld.com/'>
            Beesure
          </a>
        </button>
      </div>
      <div className='md:w-max border-b-slate-300 flex flex-col px-10 pt-6 border-t-2'>
        <div className='flex flex-col items-center my-4'>
          <img className='w-[100px]' src="/images/asap-logo.png" alt="" />
          <p>EST 1988</p>
        </div>
        <p className='md:w-3/4 m-auto text-xl'>
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
          <a className='text-xl' target='_blank' href='https://www.linkedin.com/company/pro2s'>
            A.S.A.P.
          </a>
        </button>
      </div>
    </div>
  )
}

export default brands2