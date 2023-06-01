import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'

const Sidenav = () => {
const [nav, setNav] = useState(false);
const handleNav = () =>{
    setNav(!nav);
};
const handleResumeDownload = () => {
    const resumeUrl = './public/my-cv.pdf'; 
    window.location.href = resumeUrl;
};
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden text-3xl text-[#def1e5]" />
              {
                nav ?(
                    <div className="fixed w-full h-screen bg-[#213227]/70 flex flex-col justify-center items-center z-20">
                    <a onClick={handleNav} href="#main" className="w-[75%] flex flex-center items-center rounded-full shadow-lg bg-[#def1e5] shadow-[#81c054] m-2 p-4 cursor-pointer hover:scale-110 transform transition  duration-200">
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>
                    <a onClick={handleNav} href="#work" className="w-[75%] flex flex-center items-center rounded-full shadow-lg bg-[#def1e5] shadow-[#81c054] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <GrProjects size={20} />
                        <span className="pl-4">Work</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className="w-[75%] flex flex-center items-center rounded-full shadow-lg bg-[#def1e5] shadow-[#81c054] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineProject size={20} />
                        <span className="pl-4">Projects</span>
                    </a>
                    <a onClick={handleResumeDownload}  className="w-[75%] flex flex-center items-center rounded-full shadow-lg bg-[#def1e5] shadow-[#81c054] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <BsPerson size={20} />
                        <span className="pl-4">Resume</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className="w-[75%] flex flex-center items-center rounded-full shadow-lg bg-[#def1e5] shadow-[#81c054] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineMail size={20} />
                        <span className="pl-4">Contact</span>
                    </a>
                    </div>
                )
               
              :
              (
                <div>

                </div>
              )
              }
              <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">

                    <a href="#main" className="rounded-full shadow-lg shadow-[#7dba97d1] bg-[#b9e8ccd1] shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#6ee915] case-in duration-300">
                        <AiOutlineHome size={20} className="text-black font-semibold" />
                    </a>
                    <a href="#work" className="rounded-full shadow-lg shadow-[#7dba97d1] bg-[#b9e8ccd1] shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#6ee915] case-in duration-300">
                        <GrProjects size={20} className="text-black font-semibold" />
                    </a>
                    <a href="#projects" className="rounded-full shadow-lg shadow-[#7dba97d1] bg-[#b9e8ccd1] shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#6ee915] case-in duration-300">
                        <AiOutlineProject size={20} className="text-black font-semibold" />
                    </a>
                    <a href="./public/CV11.pdf" className="rounded-full shadow-lg shadow-[#7dba97d1] bg-[#b9e8ccd1] shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#6ee915] case-in duration-300">
                        <BsPerson size={20} className="text-black font-semibold" />
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg shadow-[#7dba97d1] bg-[#b9e8ccd1] shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#6ee915] case-in duration-300">
                        <AiOutlineMail size={20} className="text-black font-semibold" />
                    </a>
                </div>
              </div>
        </div>
    )
}

export default Sidenav;