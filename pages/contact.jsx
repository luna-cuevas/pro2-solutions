import React from 'react'
import ContactForm from '../components/ContactForm'

const contact = () => {
  return (
    <div className='w-screen flex flex-wrap'>
      <svg className='w-screen h-full absolute -z-10' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
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
      <div className='md:w-1/2 order-2 md:order-1 w-screen flex'>
        <img className='w-full m-auto' src="/images/contact-us.png" alt="" />
      </div>
      <div className='md:w-1/2 order-1 w-screen h-full'>
        <ContactForm />
      </div>
    </div>
  )
}

export default contact