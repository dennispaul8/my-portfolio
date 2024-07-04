
import './App.css'
import { About } from './components/about/About.jsx'
import { Route, Routes } from 'react-router'
import { LandingPage } from './pages/LandingPage.jsx'

function App() {

  return (
    <>
     <Routes>
          <Route path="/" element= {<LandingPage/>}/>
          <Route path="/about" element= {<About/>}/>
        </Routes> 
    </>
  )
}

export default App
