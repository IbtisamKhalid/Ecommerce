/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";



function DisputeDetails() {
  const location = useLocation();
  const { item } = location.state; // Access passed data

  return (
    <>
      <Box>
        <Typography></Typography>
      </Box>
    </>
  );
}

export default DisputeDetails;
