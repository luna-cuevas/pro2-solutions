import ContactForm from '../components/ContactForm'

const contact = () => {
  return (
    <div className='h-fit flex flex-wrap w-screen overflow-hidden'>
      <div className='md:w-1/2 md:order-1 flex w-1/2 m-auto'>
        <img className='w-full m-auto' src="/images/contact-us.png" alt="" />
      </div>
      <div className='md:w-1/2 order-1 w-screen h-full'>
        <ContactForm />
      </div>
    </div>
  )
}

export default contact