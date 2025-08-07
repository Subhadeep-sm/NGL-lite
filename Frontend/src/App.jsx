import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SendMessage from './components/SendMessage'
import './App.css'
 import Aurora from './components/Background/Aurora';
    import Magnet from './components/ui/Magnet';
import AllMessagesPage from './components/AllMessagesPage';

function App() {
  

  return (
    <>
<Router>
  <Routes>


    <Route path="/" element={
      <>
      <Aurora
  colorStops={["#2C225E", "#F15BB5", "#9B5DE5"]}
  blend={0.5}
  amplitude={2}
  speed={0.5}
  className="max-h-screen"
/>

      <SendMessage />
      </>
      } />


      <Route path="/messages" element={
      <>
      <Aurora
  colorStops={["#2C225E", "#F15BB5", "#9B5DE5"]}
  blend={0.5}
  amplitude={2}
  speed={0.5}
  className="max-h-screen"
/>

      <AllMessagesPage />
      </>
      } />

  </Routes>
</Router>

      
    </>
  )
}

export default App
