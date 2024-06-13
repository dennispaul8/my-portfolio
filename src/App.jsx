import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'
import { Navbar } from './components/navbar/Navbar.jsx'
import { Hero } from './components/hero/Hero.jsx'
import { About } from './components/about/About.jsx'
import { Projects } from './components/projects/Projects.jsx'
import { Contact } from './components/contact/Contact.jsx'
import { Footer } from './components/footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
