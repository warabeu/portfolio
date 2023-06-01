import { useState } from 'react'
import Sidenav from './components/Sidenav'
import './App.css'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Skill from './components/Skill'
import Footer from './components/Footer'


function App() {
 

  return (
    
      <div>
      <Sidenav />
      <Main />
      <About />
      <Skill />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
