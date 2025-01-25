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
        <Header backColor="rgb(1, 66, 106)" atTopTextColor="white" />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}

export default LayoutEscrow;
