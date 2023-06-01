import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'

function Main() {
  return (
    <div id='main'>
     <img className='w-full h-screen object-cover object-left scale-x-[-1]' 
     src='./public/typing.jpg' alt='/' />
     <div className='w-full h-screen absolute top-0 left-0  bg-[#33415c]/50 '>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <div className='flex items-center justify-between'>
        <h1 className='sm:text-5xl text-4xl font-bold text-[#57e089]'>
            I'm Tudor Mugureanu
         </h1>
        {/* <img className='w-[100px] scale-12 rounded-full' src='./public/me.jpg' />*/}
         </div>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-[#57e089] '>
            I'am a
            <TypeAnimation
      sequence={[
        'Developer', 
        2000,  
        'Tech Enthusiast',
         2000,
         'Wayfarer',
         2000,
        
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.2em', paddingLeft: '5px',color: '#ffd23f'  }}
    />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
        <a href="https://www.facebook.com/tudor.mugureanu"><FaFacebookF className='cursor-pointer text-[#57e089] hover:scale-110' size={25} /></a>
        <a href="https://www.instagram.com/t_mugure/"><FaInstagram className='cursor-pointer text-[#57e089] hover:scale-110' size={25} /></a>
        <a href="https://www.linkedin.com/in/tudor-mugureanu-61b25020b/"><FaLinkedinIn className='cursor-pointer text-[#57e089] hover:scale-110' size={25} /></a>
        <a href="https://github.com/warabeu"><FaGithub className='cursor-pointer text-[#57e089] hover:scale-110' size={25} /></a>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Main