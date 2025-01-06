import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { useContext, createContext } from "react";

function LayoutEscrow() {
  // const

  return (
    <>
      <Box>
        <Header  />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}

export default LayoutEscrow;
