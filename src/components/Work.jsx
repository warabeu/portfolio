import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2022,
        title: 'JAVASCRIPT, HTML, CSS',
        company: 'Learn Javascript',
        details: "Learn concepts of web development, functions, objects, DOM, events, fetch and made a food tracker app from scratch and stored it on Firebase. In this app, you choose food and show how much carbs, protein, and fat it has after showing this in a graphic of how healthy it is."
    },
    {
        year: 2023,
        title: 'The Complete 2023 Software Testing Bootcamp',
        company: 'Udemy',
        details: "In this course, I learned Basic Concepts of Software Testing, manual testing, agile testing, different techniques of testing, API & web services. It gave me the whole picture of testing and then went down for every concept, tool, a skill I need to start testing and understand the testing market"
    },
    {
        year: 2023,
        title: 'Next.js & React -The Complete Guide',
        company: 'Udemy',
        details: "This course teaches me how to build a full-stack app using Next.js. Learn all key NextJS features like pre-rendering, SSR, data fetching, file-based routing, and authentication, and build a Blog from scratch after learning how to deploy it on Vercel."
    },
    {
        year: 2023,
        title: '100 Days of Code: The Complete Python Pro Bootcamp for 2023',
        company: 'Udemy',
        details: "This course teaches me Python and build 100 projects in 100 days.Learning data science, automation, and building websites, games, and apps!I will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib."
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
       <h1 className='text-4xl font-bold text-center text-[#00df9a] py-8'>Experience</h1>
       {data.map((item, idx) =>(
        <WorkItem 
        key={idx}
        year={item.year}
        title={item.title}
        company={item.company}
        details={item.details}
        />
       ))}
     </div>
  )
}

export default Work