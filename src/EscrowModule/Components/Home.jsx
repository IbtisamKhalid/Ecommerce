import React, { useState } from "react";
import { StartHome } from "./Reused/reusableComponents";
import { Box } from "@mui/material";
function HomeEscrow() {
  return (
    <>
      <Box p={{ xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" }}>
        <StartHome />
      </Box>
    </>
  );
}

export default HomeEscrow;
