import React from 'react'

const ContactForm = () => {
  return (
    <div className='h-fit overflow-hidden'>
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
      <div className='flex mt-10 flex-col'>
        <h1 className='text-white m-auto mb-2 text-2xl md:text-3xl'>Contact Us</h1>
        <div className="w-5/6 pb-4 md:max-w-[700px] mx-auto">
          <div className="p-6 rounded-xl border border-gray-600 sm:rounded-md bg-gray-800">
            <form method="POST" action="https://herotofu.com/start">
              <label className="block mb-6">
                <span className="text-gray-300">Your name</span>
                <input
                  name="name"
                  type="text"
                  className="p-2 block w-full mt-1 border-2 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                  placeholder="Joe Bloggs"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-300">Email address</span>
                <input
                  name="email"
                  type="email"
                  className=" p-2 border-2 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300 "
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-300">Message</span>
                <textarea
                  name="message"
                  className="md:h-[200px] p-2 border-2 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300 "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div className="mb-6 flex">
                <button
                  type="submit"
                  className=" m-auto h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 "
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm