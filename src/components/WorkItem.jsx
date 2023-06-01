import React from 'react'

const WorkItem = ({year, title, company, details}) => {
  return (
    <ol className='flex flex-co md:flex-row relative border-l border-[#05f65d]'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-[#05f65d] rounded-full mt-1.5 -left-1.5 border-white' />
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm '>
                <span className='inline-block px-2 py-1 font-semibold text-[#ffffff] bg-[#19ae50ba] rounded-md'>{year}</span>
                <span className='text-[20px] font-semibold leading-6 text-[#57e089]' >{title}</span>
                <span className='my-1 text-sm font-normal leading-none text-stone-300'>{company}</span>
                
            </p>
            <p className='my-2 text-base text-[15px] font-normal text-[#f4f0e1]'>{details}</p>
            
        </li>
        </ol>
  )
}

export default WorkItem