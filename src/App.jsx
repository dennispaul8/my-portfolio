import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'
import { Navbar } from './components/navbar/Navbar.jsx'
import { Hero } from './components/hero/Hero.jsx'
import { About } from './components/about/About.jsx'
import { Projects } from './components/projects/Projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
    </>
  )
}

export default App
