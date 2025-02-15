/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

function LayoutEscrow() {
  // const

  return (
    <>
      <Box>
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}

export default LayoutEscrow;
