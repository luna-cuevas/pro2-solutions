import React from 'react'

const index = () => {
  return (
    <div className='h-full w-screen'>
      <div className='relative h-4/6'>
        <img className='hidden sm:flex sm:w-full sm:h-auto' src="/images/image-asset.jpeg" alt="" />
        <div className='h-screen absolute sm:hidden'>
          <div className='bg-black opacity-20 absolute w-screen h-4/6' />
          <img className='h-4/6 w-screen' src="/images/hero-image-mobile.jpg" alt="" />
        </div>
        <div className='absolute z-50 text-2xl font-bold left-10 top-96 sm:bottom-1/3 sm:left-[100px] text-white'>
          Your Professional,<br />
          Protective Solutions Partner
          <br />
          <button className='px-6 py-1 transition-all duration-200 ease-in-out hover:bg-[#4e91b5] bg-[#50ABE0] text-sm font-normal rounded-3xl'>About Us</button>
        </div>
      </div>
      {/* Three Logos */}
      <div className='w-screen h-fit flex flex-col  border-2 border-gray-800'>
        <div className='h-[125px] bg-[#F0F0F0] flex'>
          <img className='m-auto w-2/3' src="/images/cranberry-logo.png" alt="" />
        </div>
        <div className='h-[125px] flex'>
          <img className='m-auto w-2/3' src="/images/beesure-logo.png" alt="" />
        </div>
        <div className='h-[125px] bg-[#F0F0F0] flex'>
          <img className='m-auto h-4/6 w-auto' src="/images/asap-logo.png" alt="" />
        </div>
      </div>
      {/* Intro Blurb */}
      <div className='w-screen h-[fit] bg-[#DAF8FF]'>
        <p className='w-5/6 mx-auto py-14 font-normal text-xl'>At Pro2 Solutions, we are committed to providing you with the highest quality protective solutions for infection control products.</p>
      </div>
      {/* About Us Blocks */}
      <div className='h-fit flex flex-col'>
        <div className='flex w-screen flex-col py-6 border-b-2 border-gray-500 m-auto overflow-hidden '>
          <div className='h-[200px] bg-[#ececec] m-auto flex w-[200px] border-2 border-[#236B97] rounded-[50%]'>
            <img className='m-auto' src="/images/clock-image.png" alt="" />
          </div>
          <h2 className='text-gray-600 mt-2 m-auto text-lg'>34 Years in business</h2>
        </div>
        <div className='flex w-screen flex-col py-6 border-b-2 border-gray-500 m-auto overflow-hidden '>
          <div className='h-[200px] m-auto flex w-[200px]'>
            <img className='m-auto' src="/images/timesheet-image.png" alt="" />
          </div>
          <h2 className='text-gray-600 mt-2 m-auto text-lg'>85 Product Series</h2>
        </div>
        <div className='flex w-screen flex-col py-6 border-b-2 border-gray-500 m-auto overflow-hidden '>
          <div className='h-[200px] overflow-hidden bg-[#ececec] m-auto flex w-[200px] border-2 border-[#236B97] rounded-[50%]'>
            <img className='m-auto' src="/images/partnerships.png" alt="" />
          </div>
          <h2 className='text-gray-600 mt-2 m-auto text-lg'>28 Awards</h2>
        </div>
        <div className='flex w-screen flex-col py-6 border-b-2 border-gray-500 m-auto overflow-hidden '>
          <div className='h-[200px] m-auto flex w-[200px]'>
            <img className='m-auto' src="/images/awards.png" alt="" />
          </div>
          <h2 className='text-gray-600 mt-2 m-auto text-lg'>181 Partnerships</h2>
        </div>
      </div>
      {/* CONTACT FORM */}
      <div className='flex mt-10 flex-col'>
        <h1 className='m-auto mb-2 text-xl'>Contact Us</h1>
        <div className="w-5/6 pb-4 md:w-96 md:max-w-full mx-auto">
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
                  className=" p-2 border-2 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300 "
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

export default index