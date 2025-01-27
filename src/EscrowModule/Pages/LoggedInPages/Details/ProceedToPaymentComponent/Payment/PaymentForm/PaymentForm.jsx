/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  TextField,
  Button,
  Grid2 as Grid,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CreditCard as CardIcon,
  AccountBalance as BankIcon,
} from "@mui/icons-material";
import { Colors } from "../../../../../../Theme/Theme";

function PaymentForm({ item }) {
  const [form, setForm] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    billingSameAsShipping: true,
  });
  const [errors, setErrors] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!form.cardNumber.match(/^\d{4} {4} {4} {4}$/)) {
      newErrors.cardNumber =
        "Invalid card number format. Use 1234 1234 1234 1234.";
    }
    if (!form.expiry.match(/^\d{2} {2}$/)) {
      newErrors.expiry = "Invalid expiry date format. Use MM/YY.";
    }
    if (!form.cvc.match(/^\d{3}$/)) {
      newErrors.cvc = "Invalid CVC. Must be a 3-digit number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (validateForm()) {
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    navigate(`/LoggedIn/escrowdetails/${item.id}`, { state: { item } });
  };

  return (
    <Box
      sx={{
        flexBasis: "70%",
        borderRight: `1px solid ${Colors.borderColor}`,
        paddingRight: "2rem",
      }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item size={12}>
            <Typography variant="h6">Payment</Typography>
            <Grid container spacing={2}>
              <Grid item size={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<CardIcon />}
                  sx={{ p: "1.5rem", fontSize: "20px" }}
                >
                  Card
                </Button>
              </Grid>
              <Grid item size={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<BankIcon />}
                  sx={{ p: "1.5rem", fontSize: "20px" }}
                >
                  Bank
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Card Number */}
          <Grid item size={12}>
            <TextField
              fullWidth
              label="Card number"
              variant="outlined"
              placeholder="1234 1234 1234 1234"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleInputChange}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
            />
          </Grid>

          {/* Expiry and CVC */}
          <Grid item size={6}>
            <TextField
              fullWidth
              label="Expiry (MM/YY)"
              variant="outlined"
              name="expiry"
              value={form.expiry}
              onChange={handleInputChange}
              error={!!errors.expiry}
              helperText={errors.expiry}
            />
          </Grid>
          <Grid item size={6}>
            <TextField
              fullWidth
              label="CVC"
              variant="outlined"
              name="cvc"
              value={form.cvc}
              onChange={handleInputChange}
              error={!!errors.cvc}
              helperText={errors.cvc}
            />
          </Grid>

          {/* Checkbox */}
          <Grid item size={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.billingSameAsShipping}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      billingSameAsShipping: e.target.checked,
                    })
                  }
                />
              }
              label="Billing is the same as shipping information"
            />
          </Grid>

          {/* Save Button */}

            <Button
              variant="contained"
              sx={{
                bgcolor:Colors.EscrowDetailsColor,
              }}
              onClick={handleSave}
            >
              Save
            </Button>
        </Grid>
      </Box>

      {/* Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="payment-dialog-title"
      >
        <DialogTitle id="payment-dialog-title">Payment Successful</DialogTitle>
        <DialogContent>
          <Typography>Your payment has been successfully processed.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Go Home
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PaymentForm;
