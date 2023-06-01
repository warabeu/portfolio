import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[600px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='py-4 text-4xl font-bold text-center text-[#00df9a]'>
      Contact
    </h1>
    <form action='https://getform.io/f/42240431-927b-4e98-9ef5-8d29c75137fc' method='POST' encType='multipart/form-data'>
      <div className='grid md:grid-cols gap-4 w-full py-2'>
  
        <div className='flex flex-col py-2'>
          <label className='uppercase after:content-["*"] after:ml-0.5 after:text-red-500 text-sm font-semibold text-[#57e089] py-2'>Name</label>
          <input className='border-2 rounded-lg p-3 focus:outline-none focus:border-[#57e089] focus:text-green-500 flex border-gray-500 ' type="text" name='name' required style={{backgroundColor: "transparent"}} />
          
        </div>
      </div>
  
      <div className='flex flex-col py-2'>
        <label className='uppercase after:content-["*"] after:ml-0.5 after:text-red-500 text-sm font-semibold text-[#57e089] py-2'>Email</label>
        <input className='border-2 rounded-lg p-3 focus:outline-none focus:border-[#57e089] focus:text-green-500  flex border-gray-500' type="email" name='email' required style={{backgroundColor: "transparent"}} />
  
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm font-semibold text-[#57e089] py-2'>Subject</label>
        <input className='border-2 rounded-lg p-3 focus:outline-none focus:border-[#57e089] focus:text-green-500 flex border-gray-500' type="text" name='subject' style={{backgroundColor: "transparent"}} />
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm font-semibold text-[#57e089] py-2'>Message</label>
        <textarea className='border-2 rounded-lg p-3 focus:outline-none focus:border-[#57e089] focus:text-green-500 border-gray-500' rows='10' name='message' style={{backgroundColor: "transparent"}}></textarea>
      </div>
      <div className='flex justify-center'>
        <button className='bg-[#57e089] px-30 text-[#010503] focus:outline-none focus:border-[#57e089] focus:text-green-500 font-semibold mt-4 w-full md:w-auto hover:bg-[#43af6b] hover:text-white p-4 rounded-lg'>
          SEND
        </button>
      </div>
    </form>
  </div>
  
  
  
  )
}

export default Contact