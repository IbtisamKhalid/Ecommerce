import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { CreditCard, LocalShipping, CheckCircle } from "@mui/icons-material";
import { Colors,Fonts } from "../../../../../../Theme/Theme";

const PaymentContainer = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const steps = ["Shipping Address", "Credit Card Details", "Confirm Payment"];

  const validateFields = () => {
    const newErrors = {};
    if (activeStep === 0) {
      if (!shippingAddress.name) newErrors.name = "Name is required";
      if (!shippingAddress.address) newErrors.address = "Address is required";
      if (!shippingAddress.city) newErrors.city = "City is required";
      if (!shippingAddress.state) newErrors.state = "State is required";
      if (!shippingAddress.zip) newErrors.zip = "ZIP code is required";
    } else if (activeStep === 1) {
      if (!creditCardDetails.cardNumber) newErrors.cardNumber = "Card number is required";
      if (!creditCardDetails.expiryDate) newErrors.expiryDate = "Expiry date is required";
      if (!creditCardDetails.cvv) newErrors.cvv = "CVV is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateFields()) return;
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    }, 2000);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "6px",
          height:"90vh"
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          bgcolor: "rgb(3, 116, 186)",
          py: 1,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color={"white"}>
          Payment Details
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          py: 4,
          mt: 2,
          // maxHeight: "calc(80vh - 150px)", // Adjust height to fit content
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#1976d2",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {!loading && !success && (
          <Box>
            {activeStep === 0 && (
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                  <LocalShipping sx={{ mr: 1, color: "#1976d2" }} />
                  Shipping Address
                </Typography>
                {Object.keys(shippingAddress).map((field) => (
                  <TextField
                    key={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    fullWidth
                    margin="normal"
                    value={shippingAddress[field]}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, [field]: e.target.value })}
                    error={!!errors[field]}
                    helperText={errors[field]}
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "&.Mui-focused fieldset": {
                          borderColor: "#1976d2",
                          boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.2)",
                        },
                      },
                    }}
                  />
                ))}
              </Box>
            )}

            {activeStep === 1 && (
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                  <CreditCard sx={{ mr: 1, color: "#1976d2" }} />
                  Credit Card Details
                </Typography>
                {Object.keys(creditCardDetails).map((field) => (
                  <TextField
                    key={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    fullWidth
                    margin="normal"
                    value={creditCardDetails[field]}
                    onChange={(e) => setCreditCardDetails({ ...creditCardDetails, [field]: e.target.value })}
                    error={!!errors[field]}
                    helperText={errors[field]}
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "&.Mui-focused fieldset": {
                          borderColor: "#1976d2",
                          boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.2)",
                        },
                      },
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
        )}

        {loading && (
          <Box display="flex" justifyContent="center" alignItems="center" height="100px">
            <CircularProgress />
          </Box>
        )}

        {success && (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100px">
            <CheckCircle sx={{ fontSize: 60, color: "green" }} />
            <Typography variant="h6" sx={{ mt: 2, color: "green" }}>
              Payment Successful!
            </Typography>
          </Box>
        )}
      </DialogContent>
      {!loading && !success && (
        <DialogActions
          sx={{
            px: 3,
            py: 0.5,
            bgcolor: "rgb(3, 116, 186)",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px",
              px: 5,
              // py: 1,
              // bgcolor: "rgb(34, 92, 171)",
              "&:hover": {
                bgcolor: "#e3f2fd",
              },
            }}
          >
            Back
          </Button>
          <Button
            onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
            variant="contained"
            sx={{
              bgcolor: "#1976d2",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              px: 5,
              // py: 1,
              "&:hover": {
                bgcolor: "#1565c0",
              },
            }}
          >
            {activeStep === steps.length - 1 ? "Pay Now" : "Next"}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default PaymentContainer;