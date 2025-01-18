import React from "react";
import { Outlet } from "react-router-dom";
import LoggedInNavbar  from "../LoggedInNavbar/LoggedInNavBar";
import Footer from "../../Footer/Footer"
import { Box } from "@mui/material";
function LoggedInLayout() {
  return (
    <>
      <Box>
        <LoggedInNavbar />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}

export default LoggedInLayout;
