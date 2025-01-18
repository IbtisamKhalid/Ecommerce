import React from "react";
import { Box, Typography } from "@mui/material";
import EscrowDetails from "../EscrowDetails/EscrowDetails";
import { Colors } from "../../../../Theme/Theme";
import FAQAccordion from "../FAQAccordion/FAQAccordion";
function DetailsWrapper() {
  return (
    <>
      <Box sx={{ p: "2rem 8rem", display: "flex", bgcolor: Colors.tertiary }}>
        <Box>
          <EscrowDetails />
        </Box>
        <Box sx={{ flexBasis: "40%" }}>
          <Box
            sx={{
              p: "1rem",
              bgcolor: "#EEF7FE",
              borderRadius: "8px",
              border: `1px solid ${Colors.borderColor}`,
            }}
          >
            <Typography
              variant="h6"
              sx={{ m: "0 0 1rem 0", color: Colors.EscrowDetailsColor }}
            >
              History
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", color: Colors.fontColor }}
            >
              January 17, 2025, 1:09 AM GMT+5 Buyer initiates the transaction
            </Typography>
          </Box>
          <Box>
            <FAQAccordion />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DetailsWrapper;
