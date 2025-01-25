import React from "react";
import SideBarEscrow from "../SideBarEscrowComponent/SideBarEscrow";
import SideBarLinks from "../SideBarLinksComponent/SideBarLinks";
import { Typography, Box } from "@mui/material";
function SideBar() {
  return (
    <>
      <Box sx={{ width: "30%", display: "block", }}>
        <SideBarEscrow />
        <SideBarLinks />
      </Box>
    </>
  );
}

export default SideBar;
