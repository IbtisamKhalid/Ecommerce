import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from "./pages/Home"
import About from "./pages/About"
import ContactMe from './pages/ContactMe'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />  }/>
          {/* <Route path="/contactme" element={<ContactMe />  }/> */}
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
