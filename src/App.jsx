import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import LayoutStore from './EcommeraceModule/components/Layout'
import LayoutEscrow from './EscrowModule/Components//Pages/Layout'
import HomeStore from "./EcommeraceModule/pages/Home"
import HomeEscrow from "./EscrowModule/Components/Pages/Home"
import SignIn from "./EscrowModule/Components/Pages/SignIn/SignIn"
import SignUP from "./EscrowModule/Components/Pages/SignUp/SignUP"
import About from "./EcommeraceModule/pages/About"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fontsource/roboto'; 


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/store" element={<LayoutStore />} >
          <Route index element={<HomeStore />} />
          <Route path="About" element={<About />  }/>
      </Route>
      <Route path="/escrow" element={<LayoutEscrow />} >
          <Route index element={<HomeEscrow />} />
          <Route path="about" element={<About />  }/>
      </Route> 
          <Route path="SignIn" element={<SignIn />  }/>
          <Route path="SignUp" element={<SignUP />  }/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
