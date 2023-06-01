import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../assets/chat.jpg'
import cryptoImg from '../assets/crypto.jpg'
import mapImg from '../assets/map.jpg'
import pythonImg from '../assets/python.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
       <h1 className='text-4xl font-bold text-center text-[#00df9a]'>Projects</h1>
       <p className='text-center py-8 text-[#f7f3d7]'>Some of my projects...
       <img className='w-10 h-10 inline-block mr-2 ml-2' src='./public/project.png' />
       </p>
       <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={cryptoImg} title='Crypto app' />
        <ProjectItem img={propertyImg} title='Chat app' />
        <ProjectItem img={mapImg} title='Map app' />
        <ProjectItem img={pythonImg} title='Python app' />
       </div>
    </div>
  )
}

export default Projects