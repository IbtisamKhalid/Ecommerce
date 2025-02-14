import { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import { Colors } from "../../../../Theme/Theme";

function StepperComponent({ step }) {
  const [steps, setSteps] = useState([]);

  // ✅ Use useEffect to update steps when `step` changes
  useEffect(() => {
    if (step === 3) {
      setSteps(["Agreement", "Payment", "Delivery", "Inspection", "Dispute", "Closed"]);
    } else {
      setSteps(["Agreement", "Payment", "Delivery", "Inspection", "Closed"]);
    }
  }, [step]); // Runs only when `step` changes

  return (
    <Box sx={{ p: "0 2rem" }}>
      <Stepper activeStep={4} alternativeLabel>
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
