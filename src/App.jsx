import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'
import { Navbar } from './components/navbar/Navbar.jsx'
import { Hero } from './components/hero/Hero.jsx'
import { Projects } from './components/projects/Projects.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { TechStack } from './components/tech-stack/TechStack.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Navbar/>
     <Hero/>
     <TechStack/>
     <Projects/>
     <Footer/>
    </>
  )
}

export default App
