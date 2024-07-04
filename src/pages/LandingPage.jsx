
import { Navbar } from '../components/navbar/Navbar.jsx'
import { Hero } from '../components/hero/Hero.jsx'
import { Projects } from '../components/projects/Projects.jsx'
import { Footer } from '../components/footer/Footer.jsx'
import { TechStack } from '../components/tech-stack/TechStack.jsx'

export const LandingPage = ()=>{

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
