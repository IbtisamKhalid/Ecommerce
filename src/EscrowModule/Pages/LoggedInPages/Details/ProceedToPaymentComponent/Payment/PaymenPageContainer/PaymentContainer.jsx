import PaymentForm from "../PaymentForm/PaymentForm";
import ItemDetails from "../ItemDetails/ItemDetails";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Colors } from "../../../../../../Theme/Theme";

function PaymentContainer() {
  const location = useLocation();
  const { item } = location.state;

  return (
    <Box
      sx={{
        p: "3rem 10rem",
        bgcolor: "rgb(252, 252, 252)",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: Colors.backColor, mb: "2rem", fontWeight: "bold" }}
      >
        Payment
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 5,
          border: `1px solid ${Colors.borderColor}`,
          p: "3rem",
          borderRadius: "12px",
          bgcolor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <PaymentForm item={item} />
        <ItemDetails item={item} />
      </Box>
    </Box>
  );
}

export default PaymentContainer;