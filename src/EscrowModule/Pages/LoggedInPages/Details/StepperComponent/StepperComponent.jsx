/* eslint-disable no-unused-vars */
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import { Colors } from "../../../../Theme/Theme";
import { StepperStepContext } from "../../../../EscrowContext/Hooks/useEscrowContext";
import { useContext } from "react";
function StepperComponent({step}) {
  const steps = ["Agreement", "Payment", "Delivery", "Inspection", "Closed"];
  return (
    <Box sx={{ p: "0 2rem" }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepIcon-root": {
                fontSize: "50px",
                borderRadius: "30px",
                border: `1px solid ${Colors.borderColor}`,
                p: "0.3rem",
              },
              "& .MuiStepConnector-line": {
                color: Colors.borderColor,
                m: "0.8rem 0.35rem 0",
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default StepperComponent;
