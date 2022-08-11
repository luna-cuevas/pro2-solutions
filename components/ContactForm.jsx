import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const ContactForm = () => {
  const form = useRef()
  const [ContactFormSKU, setContactFormSKU] = useState('')
  const [ContactFormName, setContactFormName] = useState('');
  const [ContactFormEmail, setContactFormEmail] = useState('');
  const [ContactFormMessage, setContactFormMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  // EmailJS setting id and template id variables
  const submit = (e) => {
    e.preventDefault();
    if (ContactFormName && ContactFormEmail && ContactFormMessage, ContactFormSKU) {
      const serviceId = 'service_17jmphm';
      const templateId = 'template_opecjma';
      const userId = 'C0ajegZGgw9rSLDxd';
      const templateParams = {
        ContactFormName,
        ContactFormEmail,
        ContactFormMessage,
        ContactFormSKU
      };
      // If variable isn't set or input is missing, error will be console logged
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));
      // After email has been sent, all variables are now set to blank again.
      setContactFormSKU('');
      setContactFormName('');
      setContactFormEmail('');
      setContactFormMessage('');
      setEmailSent(true);
    } else {
      // if no data is input, error will alert user
      alert('Please fill in all fields.');
    }
  }
  
  return (
    <div className='h-fit relative overflow-hidden'>
      <svg className='-z-10 absolute w-screen h-full' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
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
      <div className='flex flex-col mt-10'>
        <h1 className='md:text-3xl m-auto mb-2 text-2xl text-white'>Contact Us</h1>
        <div className="w-5/6 pb-4 md:max-w-[700px] mx-auto">
          <div className="rounded-xl sm:rounded-md p-6 bg-gray-800 border border-gray-600">
            <form ref={form} onSubmit={submit}>
              <label className="block mb-6">
                <span className="text-gray-300">Subject</span>
                <input
                  name="sku"
                  type="text"
                  className="focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full p-2 mt-1 text-gray-300 placeholder-gray-600 bg-transparent border-2 border-gray-600 rounded-md shadow-sm"
                  placeholder="Subject"
                  value={ContactFormSKU}
                  onChange={e => setContactFormSKU(e.target.value)}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-300">Your name</span>
                <input
                  name="name"
                  type="text"
                  className="focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full p-2 mt-1 text-gray-300 placeholder-gray-600 bg-transparent border-2 border-gray-600 rounded-md shadow-sm"
                  placeholder="Joe Bloggs"
                  value={ContactFormName}
                  onChange={e => setContactFormName(e.target.value)}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-300">Email address</span>
                <input
                  name="email"
                  type="email"
                  className=" focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full p-2 mt-1 text-gray-300 placeholder-gray-600 bg-transparent border-2 border-gray-600 rounded-md shadow-sm"
                  placeholder="joe.bloggs@example.com"
                  required
                  value={ContactFormEmail}
                  onChange={e => setContactFormEmail(e.target.value)}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-300">Message</span>
                <textarea
                  name="message"
                  className="md:h-[200px] p-2 border-2 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300 "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                  value={ContactFormMessage}
                  onChange={e => setContactFormMessage(e.target.value)}
                ></textarea>
              </label>
              <div className="flex mb-6">
                <button
                  type="submit"
                  value='Send'
                  className=" focus:shadow-outline hover:bg-indigo-800 h-10 px-5 m-auto text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg">
                    Contact Us
                </button>
              </div>
            </form>
            <span className={emailSent ? 'visible text-white' : 'hidden'}>Thank you for your message, we will be in touch in no time!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm