import ContactForm from '../components/ContactForm'
import { useCountUp } from 'react-countup';

const index = () => {
  const counters = [
    { ref: 'counter', end: 34, enableScrollSpy: true },
    { ref: 'counter2', end: 85, enableScrollSpy: true },
    { ref: 'counter3', end: 28, enableScrollSpy: true },
    { ref: 'counter4', end: 181, enableScrollSpy: true }
  ];

  counters.map((item) => { useCountUp(item) })

  return (
    <div className='h-full w-screen'>
      <div className='relative h-4/6 sm:h-fit'>
        <div className='hidden md:flex'>
          <div className='bg-black opacity-40 absolute w-screen h-full' />
          <img className='flex w-screen h-auto' src="/images/homepage/hero-image-desktop.jpeg" alt="" />
        </div>
        <div className='h-fit md:hidden'>
          <div className='bg-black opacity-40 absolute w-screen h-full' />
          <img className='h-4/6 w-screen flex' src="/images/homepage/hero-image-mobile.jpg" alt="" />
        </div>
        <div className='absolute z-50 text-2xl sm:text-3xl font-bold left-10 top-96 sm:top-2/3 sm:left-[100px] text-white'>
          Your Professional,<br />
          Protective Solutions Partner
          <br />
          <button className='px-6 py-1 sm:mt-3 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-sm sm:text-lg font-normal rounded-3xl'>About Us</button>
        </div>
      </div>
      {/* Three Logos */}
      <div className='w-screen h-fit flex flex-col md:flex-row'>
        <div className='h-[125px] md:h-[300px] hover:shadow-xl transition-all duration-200 hover:shadow-gray-900/30 md:w-1/3 bg-[#F0F0F0] flex'>
          <img className='m-auto w-2/3 md:w-1/2' src="/images/cranberry-logo.png" alt="" />
        </div>
        <div className='h-[125px] hover:shadow-xl transition-all duration-200 hover:shadow-gray-900/30 md:h-[300px] md:w-1/3 flex'>
          <img className='m-auto w-2/3  md:w-1/2' src="/images/beesure-logo.png" alt="" />
        </div>
        <div className='h-[125px] hover:shadow-xl transition-all duration-200 hover:shadow-gray-900/30 md:h-[300px] md:w-1/3 bg-[#F0F0F0] flex'>
          <img className='m-auto h-4/6 w-auto md:h-1/3' src="/images/asap-logo.png" alt="" />
        </div>
      </div>
      {/* Intro Blurb */}
      <div className='w-screen h-fit relative bg-[#DAF8FF]'>
        <svg className='w-screen h-64 -z-10' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
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
        <p className='w-5/6 lg:w-1/2 absolute left-0 right-0 top-10 bottom-0 text-center mx-auto py-14 font-normal text-xl lg:text-2xl'>At Pro2 Solutions, we are committed to providing you with the highest quality protective solutions for infection control products.</p>
      </div>
      {/* About Us Blocks */}
      <div className='h-fit flex flex-wrap m-auto flex-col md:flex-row'>
        <div className='flex w-screen md:w-1/2 flex-col py-6 md:border-r-2 border-b-2 border-gray-500 m-auto overflow-hidden '>
          <div className='h-[200px] md:w-[300px] md:h-[300px] bg-[#ececec] m-auto flex w-[200px] border-2 border-[#236B97] rounded-[50%]'>
            <img className='m-auto' src="/images/homepage/clock-image.png" alt="" />
          </div>
          <h2 className='text-gray-600 mt-2 m-auto text-xl md:text-2xl'><span id='counter'>34</span> Years in business</h2>
        </div>
        <div className='flex w-screen md:w-1/2 flex-col py-6 border-b-2 border-gray-500 m-auto overflow-hidden '>
          <div className='h-[200px] md:w-[300px] md:h-[300px]md:w-[300px] md:h-[300px] m-auto flex w-[200px]'>
            <img className='m-auto' src="/images/homepage/timesheet-image.png" alt="" />
          </div>
          <h2 className='text-gray-600 mt-2 m-auto text-xl md:text-2xl'><span id='counter2'>85</span> Product Series</h2>
        </div>
        <div className='flex w-screen flex-col md:w-1/2 py-6 md:border-r-2 border-b-2 border-gray-500 m-auto overflow-hidden '>
          <div className='h-[200px] md:w-[300px] md:h-[300px] overflow-hidden bg-[#ececec] m-auto flex w-[200px] border-2 border-[#236B97] rounded-[50%]'>
            <img className='m-auto' src="/images/homepage/partnerships.png" alt="" />
          </div>
          <h2 className='text-gray-600 mt-2 m-auto text-xl md:text-2xl'><span id='counter3'>28</span> Awards</h2>
        </div>
        <div className='flex w-screen md:w-1/2 flex-col py-6 border-b-2 border-gray-500 m-auto overflow-hidden '>
          <div className='h-[200px] md:w-[300px] md:h-[300px] m-auto flex w-[200px]'>
            <img className='m-auto' src="/images/homepage/awards.png" alt="" />
          </div>
          <h2 className='text-gray-600 mt-2 m-auto text-xl md:text-2xl'><span id='counter4'>181</span> Partnerships</h2>
        </div>
      </div>
      {/* CONTACT FORM */}
      <svg className='w-screen h-4/5 absolute -z-10' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
        <g mask="url(&quot;#SvgjsMask1044&quot;)" fill="none">
            <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
            <path d="M 0,182 C 96,154.2 288,32 480,43 C 672,54 768,222.6 960,237 C 1152,251.4 1344,139.4 1440,115L1440 560L0 560z" fill="#184a7e"></path>
            <path d="M 0,309 C 144,353.8 432,516.4 720,533 C 1008,549.6 1296,420.2 1440,392L1440 560L0 560z" fill="#2264ab"></path>
        </g>
        <defs>
            <mask id="SvgjsMask1044">
                <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
        </defs>
      </svg>
      <ContactForm />
    </div>
  )
}

export default index