import { useLocation } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import { Colors, Fonts } from "../../../../Theme/Theme";
import { Box, Typography, Button } from "@mui/material";
import StepperComponent from "../StepperComponent/StepperComponent";
import ProceedToPayment from "../ProceedToPaymentComponent/ProceedToPayment";

function EscrowDetails() {
  const location = useLocation();
  const { item } = location.state; // Access passed data
  // const stepp = 0;
  return (
    <>
      <Box
        sx={{
          borderRadius: "8px",
          border: `1px solid ${Colors.borderColor}`,
          p: "2rem",
          marginRight: "1rem",
          flexBasis: "80%",
          bgcolor: "white",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 550,
              fontFamily: "Roboto, serif",
              fontStyle: "normal",
              fontVariationSettings: "wdth 100",
              fontSize: "30px",
              color: Colors.secondary,
            }}
          >
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ m: "0.6rem 0 1rem 0" }}>
            Transaction #{item.id}
          </Typography>
          <Typography variant="body1" sx={{ m: "0 0 1rem 0" }}>
            <span style={{ color: "blue" }}>UserId1</span> is buying/selling
            general merchandise from{" "}
            <span style={{ color: "blue" }}>UserId2</span>. The inspection
            period for this transaction is 1 calendar day.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 450,
              fontFamily: "Roboto, serif",
              fontStyle: "normal",
              fontVariationSettings: "wdth 100",
              bgcolor: "#fff1a8",
              color: "#677702",
              p: "0.3rem 0.7rem 0.3rem 0.5rem",
              borderRadius: "12px",
              mb: "1rem",
              width: "fit-content",
            }}
          >
            <CircleIcon sx={{ fontSize: "10px", marginRight: "0.4rem" }} />
            {item.status.primary}
          </Typography>
        </Box>
        <Box>
          <StepperComponent />
        </Box>
        {item.role === "Buyer" && item.agreed == true && (
          <Box>
            <ProceedToPayment>
              {" "}
              <Button
                sx={{
                  p: "0.4rem 0.5rem",
                  fontFamily: Fonts.primaryFont,
                  bgcolor: "rgb(34, 92, 171)",
                  fontWeight: 500,
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgb(1, 66, 106)",
                  },
                  fontSize: "12px",
                }}
              >
                Proceed To Payment
              </Button>{" "}
            </ProceedToPayment>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          p: "2rem",
          borderRadius: "8px",
          m: "2rem 0",
          border: `1px solid ${Colors.borderColor}`,
          marginRight: "1rem",
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontFamily: Fonts.primaryFont,
            fontWeight: 600,
            mb: "1rem",
            color: Colors.EscrowDetailsColor,
          }}
        >
          Item Details{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // p: "0.5rem 0 1.5rem 0",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            Iphone
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            $100
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: Colors.fontColor,
            fontSize: "15px",
            fontFamily: Fonts.primaryFont,
            m: "0 0 1rem",
          }}
        >
          {item.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "0 0 0.5rem 0",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            Subtotal:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            $100
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // mt: "1rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
              mb: "0.5rem",
            }}
          >
            Fee:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
            }}
          >
            $0
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
              fontWeight:"600"
            }}
          >
            Total:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
              fontWeight:"600"
            }}
          >
            $100
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          p: "1rem 2rem",
          borderRadius: "8px",
          m: "2rem 0",
          border: `1px solid ${Colors.borderColor}`,
          marginRight: "1rem",
          bgcolor:"white"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontFamily: Fonts.primaryFont,
            fontWeight: 600,
            mb: "1rem",
            color: Colors.EscrowDetailsColor,
          }}
        >
          Payment processing fees
        </Typography>
        <Typography variant="body1">
          Depending on the payment method you will use, there may be additional
          processing fees as outlined below. International wire transfer{" "}
        </Typography>
      </Box>
    </>
  );
}

export default EscrowDetails;
