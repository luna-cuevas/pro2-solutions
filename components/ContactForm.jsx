import React from 'react'

const ContactForm = () => {
  return (
    <div>
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

export default ContactForm