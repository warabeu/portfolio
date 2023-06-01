import React from 'react'


const ProjectItem = ({img, title}) => {
  return (
    <div className='relative flex item-center justify-center h-auto shadow-xl shadow-[#49c3756e] rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#81f2ab]'>
        <img src={img} alt='/' className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-[#000000] tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-[#000000] text-center'>React Js</p>
            <a href='/'>
                <p className='text-center p-3 rounded-lg bg-[#fdfdfd] hover:bg-[#11ed62] text-[#070707] font-bold cursor-pointer text-lg '>More info</p>
            </a>
        </div>
    </div>
   
  )
}

export default ProjectItem