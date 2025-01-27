/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import { Colors } from "../../../../Theme/Theme";
import EscrowShield from "../../../../EscrowAssets/svgs/EscrowShield";

function ProceedToPayment({ children }) {
  return (
    <>
      <Box
        sx={{
          border: "0.5px solid rgb(34, 92, 171)",
          p: "1.5rem 1rem",
          mt: "1.5rem",
          borderRadius: "10px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flexBasis: "90%", width: "90%" }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              color: "rgb(34, 92, 171)",
              fontWeight: 500,
              fontSize: "18px",
            }}
          >
            Pay for the transaction
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "15px", m: "0.8rem 0", color: Colors.backColor }}
          >
            Please click on the button below and follow the instructions to send
            the payment for the transaction.
          </Typography>
          {children}
        </Box>
        <Box sx={{ position: "relative", right: "-10%", flexBasis: "5%" }}>
          <EscrowShield />
        </Box>
      </Box>
    </>
  );
}

export default ProceedToPayment;
