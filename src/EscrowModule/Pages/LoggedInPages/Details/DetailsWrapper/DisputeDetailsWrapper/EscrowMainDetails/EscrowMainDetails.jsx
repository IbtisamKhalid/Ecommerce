import { useLocation, useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

import { Box, Typography, Button } from "@mui/material";
import StepperComponent from "../../../StepperComponent/StepperComponent";
import ProceedToPayment from "../../../ProceedToPaymentComponent/ProceedToPayment";
import { Colors, Fonts } from "../../../../../../Theme/Theme";
function EscrowMainDetails() {
  const navigate = useNavigate();

  const location = useLocation();
  const { item } = location.state;
  console.log("details", item);
  const handleAddContractTerms = () => {
    navigate("/Contract", { state: { item, addingTerms: true } });
  };
  const handleFileDispute = () => {
    navigate("/FileDispute", { state: { item, addingTerms: true } });
  };
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
          <Box display={"flex"} sx={{ gap: 2, m: "0.5rem 0" }}>
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
                width: "fit-content",
              }}
            >
              <CircleIcon sx={{ fontSize: "10px", marginRight: "0.4rem" }} />
              {item.status.primary}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 450,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
                fontVariationSettings: "wdth 100",
                borderRadius: "12px",
                bgcolor: "#ebebeb",
                color: " #4f4f4f",
                p: "0.3rem 0.7rem 0.3rem 0.5rem",
                width: "fit-content",
              }}
            >
              <CircleIcon sx={{ fontSize: "10px", marginRight: "0.4rem" }} />
              {item.status.secondary}{" "}
            </Typography>
          </Box>
        </Box>
        <Box>
          <StepperComponent step={item.step} />
        </Box>
        {item.role == "Buyer" && item.agreed == true && item.step == 1 && (
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
                // onClick={}
              >
                Proceed To Payment
              </Button>
            </ProceedToPayment>
          </Box>
        )}
        {item.step == 3 && !item.dispute && (
          <Box
            sx={{
              border: "0.5px solid rgb(34, 92, 171)",
              p: "1rem 1rem",
              mt: "1.5rem",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                p: "0.5rem 0",
                color: Colors.EscrowDetailsColor,
                fontSize: "20px",
                fontWeight: 550,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
              }}
            >
              Issue with the Product?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: Colors.fontColor,
                fontSize: "14px",
                fontWeight: 450,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
              }}
            >
              If you have any issue with the product or service you can file for
              dispute. our team will help you resolve it.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                p: "0.5rem",
                bgcolor: Colors.EscrowDetailsColor,
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: Colors.secondNavColor,
                },
                color: "white",
                mt: "0.5rem",
                fontSize: "14px",
                fontWeight: 550,
                fontFamily: "Roboto, serif",
                fontStyle: "normal",
                width: "fit-content",
                justifySelf: "right",
                borderRadius: "9px",
              }}
              onClick={handleFileDispute}
            >
              File Dispute?
            </Typography>
          </Box>
        )}
        {item.step == 3 && item.dispute && (
          <Typography
            sx={{
              borderTop: `1px solid ${Colors.borderColor}`,
              mt: "1.2rem",
              p: "1.5rem 0 0",
              textAlign: "center",
              fontSize: "15px",
              color: Colors.EscrowDetailsColor,
              "&:hover": {
                color: "black",
              },
            }}
          >
            The Transaction is in Dispute at the moment. Our Team is trying hard
            to resolve it. <br /> Your Patience is Greatly Appreciated
          </Typography>
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
            fontSize: "22px",
            fontFamily: Fonts.primaryFont,
            fontWeight: 600,
            color: Colors.EscrowDetailsColor,
          }}
        >
          Contract Details
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            fontFamily: Fonts.primaryFont,
            fontWeight: 600,
            mb: "1rem",
            // color: Colors.backColor,
          }}
        >
          Contract Details that were agreed on by both the buyer and seller
        </Typography>

        {item.contract.map((contract, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "14px",
              color: Colors.backColor,
              lineHeight: 2,
              fontWeight: 600,
            }}
          >
            {index + 1}.{contract}
          </Typography>
        ))}
        <Box
          sx={{
            borderTop: `1px solid ${Colors.borderColor}`,
            pt: "0.5rem",
            mt: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              pt: "0.5rem",
              color: Colors.EscrowDetailsColor,
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
                color: "black",
              },
              fontSize: "14px",
              fontWeight: 450,
              fontFamily: "Roboto, serif",
              fontStyle: "normal",
              fontVariationSettings: "wdth 100",
            }}
            onClick={handleAddContractTerms}
          >
            Click here to Add More Contract Terms.
          </Typography>
        </Box>
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
        ></Box>
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
            {item.currency} {item.amount}
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
            {item.currency} 0
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{
              color: Colors.fontColor,
              fontSize: "15px",
              fontFamily: Fonts.primaryFont,
              fontWeight: "600",
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
              fontWeight: "600",
            }}
          >
           {item.currency} {item.amount}
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

export default EscrowMainDetails;
