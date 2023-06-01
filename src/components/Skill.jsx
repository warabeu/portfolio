import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiPython, SiUnity, SiTailwindcss, SiReact } from "react-icons/si";
import ReactStars from "react-rating-stars-component";

const Skill = () => {
  return (
    
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-10'>
        <div className='text-4xl font-bold text-center text-[#00df9a] py-8'>
            Skills
        </div>
        <p className='text-[#57e089] flex justify-between w-full pt-6 text-4xl'>
            <SiJavascript />
            <SiHtml5 />
            <SiCss3 />
            <SiReact />
            <SiPython />
            <SiUnity />
            <SiTailwindcss />

        </p>
        <div className='text-[#d5f0df] flex justify-between w-full pt-6 text-3xl sm:text-sm'>
        
            <span id='js'> <ReactStars value={2.5} edit={false} /> </span>
            <span id='html'> <ReactStars value={3} edit={false}  /> </span>
            <span id='css'> <ReactStars value={2.5} edit={false} /> </span>
            <span id='react'> <ReactStars value={2.5} edit={false} /> </span>
            <span id='python'> <ReactStars value={2} edit={false} /> </span>
            <span id='unity'> <ReactStars value={1} edit={false} /> </span>
            <span id='tailwingcsss'> <ReactStars value={2.5} edit={false} /> </span>
        
        </div>
        </div>
  )
}

export default Skill