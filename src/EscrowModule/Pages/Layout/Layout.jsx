import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

function Layout() {
  return (
    <>
      <Box>
        <Header backColor="white" txtColor="black" atTopColor="white" atTopTextColor="black" hoverTextColor="white" />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
