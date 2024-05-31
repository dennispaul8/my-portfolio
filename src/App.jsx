import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'
import { Navbar } from './components/navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatedCursor
     innerSize={10}
     outerSize={35}
     innerScale={2}
     outerScale={1}
     outerAlpha={0}
     hasBlendMode={true}
     innerStyle={{
       backgroundColor: '#000000'
     }}
     outerStyle={{
       border: '3px solid #e79052'
     }}/>

     <Navbar/>
     <h1>My Portfolio</h1>
    </>
  )
}

export default App
