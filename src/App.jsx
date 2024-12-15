import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './EcommeraceModule/components/Layout'
import Home from "./EcommeraceModule/pages/Home"
import About from "./EcommeraceModule/pages/About"
import ContactMe from './EcommeraceModule/pages/ContactMe'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/store" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />  }/>
          <Route path="About" element={<About />  }/>
          {/* <Route path="/contactme" element={<ContactMe />  }/> */}
      </Route>
      <Route path="/escrow" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />  }/>
          <Route path="about" element={<About />  }/>
      </Route> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
