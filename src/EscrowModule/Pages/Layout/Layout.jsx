/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { SideBar } from "../../Components";
import { Colors } from "../../Theme/Theme";

function Layout() {
  return (
    <>
      <Box>
        <Header
          atTopTextColor="black"
          backColor="white"
          atTopColor="white"
        />
        <Box sx={{ display: "flex", p: "5rem 0", backgroundColor: "#f9f9f9" }}>
          <Outlet />
          <SideBar />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
