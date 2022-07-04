import React from 'react'

const about = () => {
  return (
    <div>
      <img src="/images/about-us/about-us.jpg" alt="" />
      <div>
        <img className='rounded-lg' src="/images/about-us/face-cover.jpg" alt="" />
        <h1 className='bg-[#D3E7FF] p-6'>Since 1988, we have been providing a comprehensive selection of reliable hand barrier and procedural face protections that are cost effective to professionals. </h1>
      </div>
      <div>
        <img className='rounded-lg' src="/images/about-us/warehouse.jpeg" alt="" />
        <h1 className='bg-[#D3E7FF] p-6'>Our extensive list of in-house manufacturing and partnerships enables us to access the latest research and technology to meet the challenge of modern barrier protection requirements.</h1>
      </div>
      <div>
        <p className='p-6'>Pro2 Solutions is committed to establishing efficient distribution networks through strategically appointed distributors. We have established three regional warehousing and distribution centers in California and Pennsylvania to enhance the efficiency of our distribution channels. We aim to offer customized Protective Solutions based on users' work environment and critical concerns.</p>
      </div>
    </div>
  )
}

export default about