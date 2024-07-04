
import './App.css'
import { About } from './pages/about/About.jsx'
import { Route, Routes } from 'react-router'
import { LandingPage } from './pages/LandingPage.jsx'
import { Technologies } from './pages/technologies/Technologies.jsx'

function App() {

  return (
    <>
     <Routes>
          <Route path="/" element= {<LandingPage/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/technologies" element= {<Technologies/>}/>
        </Routes> 
    </>
  )
}

export default App
