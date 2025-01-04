import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'
import { useContext,createContext } from 'react'





function Layout() {
  // const 

  return (
    <>
    <Box>
    <Header />
    <Outlet />
    </Box>
    <Footer  />
    </>
  )
}

export default Layout