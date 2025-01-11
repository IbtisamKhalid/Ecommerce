import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { SideBar } from "../../Components";

function Layout() {
  return (
    <>
      <Box>
        <Header />
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
