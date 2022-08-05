import ContactForm from '../components/ContactForm'
import { useCountUp } from 'react-countup';
import Link from 'next/link';

const index = () => {
  const counters = [
    { ref: 'counter', end: 34, enableScrollSpy: true, duration: 0.7 },
    { ref: 'counter2', end: 85, enableScrollSpy: true, duration: 0.7 },
    { ref: 'counter3', end: 28, enableScrollSpy: true, duration: 0.7 },
    { ref: 'counter4', end: 181, enableScrollSpy: true, duration: 0.7 }
  ];

  counters.map((item) => { useCountUp(item) })

  return (
    <div className='w-screen h-full'>
      <div className='h-4/6 sm:h-fit relative'>
        <div className='md:block hidden w-screen h-full'>
          <div className='opacity-50 absolute z-[2] w-screen h-full bg-black' />
          <img priority width={1000} height={500} layout='responsive' className='flex w-screen h-auto' src="/images/homepage/pro2-warehouse.jpg" alt="" />
        </div>
        <div className='h-fit md:hidden'>
          <div className='opacity-50 absolute z-[2] w-screen h-full bg-black' />
          <img priority width={499} height={500} layout='responsive' className='h-4/6 flex w-screen' src="/images/homepage/pro2-warehouse-mobile.jpg" alt="" />
        </div>
        <div className='absolute z-50 text-2xl lg:text-4xl xl:text-5xl font-bold top-1/2 left-10 sm:left-[100px] text-white'>
          Your Professional,<br />
          Protective Solutions Partner
          <br />
          <Link href="/about">
            <button className='px-6 py-1 sm:mt-3 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-lg sm:text-lg font-normal rounded-3xl'>About Us</button>
          </Link>
        </div>
      </div>
      {/* Three Logos */}
      <div className='h-fit md:flex-row flex flex-col w-screen'>
        <div className='h-[125px] md:h-[300px] hover:shadow-xl transition-all duration-200 hover:shadow-gray-900/30 md:w-1/2 bg-[#F0F0F0] flex'>
          <div className='block w-1/2 m-auto'>
            <img className='w-full m-auto' src="/images/cranberry-logo.png" alt="" />
          </div>
        </div>
        <div className='h-[125px] hover:shadow-xl transition-all duration-200 hover:shadow-gray-900/30 md:h-[300px] md:w-1/2 flex'>
          <div className='block w-1/2 m-auto'>
            <img className='w-full m-auto' src="/images/beesure-logo.png" alt="" />
          </div>
        </div>
        {/* ASAP LOGO */}
        {/* <div className='h-[125px] hover:shadow-xl transition-all duration-200 hover:shadow-gray-900/30 md:h-[300px] md:w-1/3 bg-[#F0F0F0] flex'>
          <div className='h-fit max-w-1/5 block m-auto'>
            <img className='max-h-[125px] h-full w-full m-auto' src="/images/asap-logo.png" alt="" />
          </div>
        </div> */}
      </div>
      {/* Intro Blurb */}
      <div className='w-screen h-fit justify-center relative bg-[#DAF8FF]'>
        <svg className='-z-10 max-h-64 w-screen' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
          <g mask="url(&quot;#SvgjsMask1055&quot;)" fill="none">
            <rect width="1440" height="560" x="0" y="0" fill="rgba(218, 248, 255, 1)"></rect>
            <path d="M 0,271 C 96,298.2 288,407.8 480,407 C 672,406.2 768,248.2 960,267 C 1152,285.8 1344,454.2 1440,501L1440 560L0 560z" fill="rgba(149, 188, 245, 1)"></path>
          </g>
          <defs>
            <mask id="SvgjsMask1055">
              <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
        <p className='lg:w-1/2 top-14 md:top-10 md:py-14 lg:text-3xl absolute bottom-0 left-0 right-0 w-5/6 mx-auto text-2xl font-normal text-center'>At Pro2 Solutions, we are committed to providing you with the highest quality protective solutions for infection control products.</p>
      </div>
      {/* About Us Blocks */}
      <div className='h-fit md:flex-row flex flex-col flex-wrap m-auto'>
        <div className='md:w-1/2 md:border-r-2 flex flex-col w-screen py-6 m-auto overflow-hidden border-b-2 border-gray-500'>
          <div className='h-[200px] md:w-[300px] flex md:h-[300px] bg-[#ececec] m-auto w-[200px] border-2 border-[#236B97] rounded-[50%]'>
            <div className='block w-full m-auto'>
              <img className='m-auto' src="/images/homepage/clock-image.png" alt="" />
            </div>
          </div>
          <h2 className='md:text-2xl m-auto mt-2 text-xl font-bold text-gray-600'><span id='counter'>34</span> Years in business</h2>
        </div>
        <div className='md:w-1/2 flex flex-col w-screen py-6 m-auto overflow-hidden border-b-2 border-gray-500'>
          <div className='h-[200px] md:w-[300px] md:h-[300px]md:w-[300px] md:h-[300px] m-auto flex w-[200px]'>
            <div className='block w-full m-auto'>
              <img className='m-auto' src="/images/homepage/timesheet-image.png" alt="" />
            </div>
          </div>
          <h2 className='md:text-2xl m-auto mt-2 text-xl font-bold text-gray-600'><span id='counter2'>85</span> Product Series</h2>
        </div>
        <div className='md:w-1/2 md:border-r-2 md:order-1 flex flex-col order-2 w-screen py-6 m-auto overflow-hidden border-b-2 border-gray-500'>
          <div className='h-[200px] md:w-[300px] md:h-[300px] m-auto flex w-[200px]'>
            <div className='block w-full m-auto'>
              <img className='m-auto' src="/images/homepage/awards.png" alt="" />
            </div>
          </div>
          <h2 className='md:text-2xl m-auto mt-2 text-xl font-bold text-gray-600'><span id='counter3'>28</span> Awards</h2>
        </div>
        <div className='md:w-1/2 flex flex-col order-1 w-screen py-6 m-auto overflow-hidden border-b-2 border-gray-500'>
          <div className='h-[200px] flex md:w-[300px] md:h-[300px] overflow-hidden bg-[#ececec] m-auto w-[200px] border-2 border-[#236B97] rounded-[50%]'>
            <div className='block w-full m-auto'>
              <img className='m-auto' src="/images/homepage/partnerships.png" alt="" />
            </div>
          </div>
          <h2 className='md:text-2xl m-auto mt-2 text-xl font-bold text-gray-600'><span id='counter4'>181</span> Partnerships</h2>
        </div>
      </div>
      {/* CONTACT FORM */}
      <ContactForm />
    </div>
  )
}

export default index