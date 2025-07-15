import { useState } from 'react'
import SendMessage from './components/SendMessage'
import './App.css'
 import Aurora from './components/Background/Aurora';

function App() {
  

  return (
    <>
   
  
<Aurora
  colorStops={["#2C225E", "#F15BB5", "#9B5DE5"]}
  blend={0.5}
  amplitude={1.5}
  speed={0.5}
  className="max-h-screen"
/>
      <SendMessage />
    </>
  )
}

export default App
