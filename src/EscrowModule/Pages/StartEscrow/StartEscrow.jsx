import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  TextField,
  Select,
  MenuItem,
  Grid2 as Grid,
  Typography,
  Button
} from "@mui/material";
import {useForm,Controller} from 'react-hook-form'
import Theme, { Colors, Fonts } from "../../Theme/Theme";
import { useState } from "react";

export const SelectComponent = ({
  inputLabel,
  selectLabel,
  value,
  setValue,
  options = [],
  register,
}) => {
  return (
    <>
      <FormControl fullWidth variant="outlined" sx={{ paddingBottom: "1rem" }}>
        <InputLabel id="role-label">{inputLabel}</InputLabel>
        <Select
          labelId="role-label"
          value={value}
          onChange={(e) => setValue(e.target.value)} // Handle state
          label={selectLabel}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

function StartEscrow() {
  const selecCurrencyOption = ["PK", "USD", "CAD"];
  const selectRoleOption = ["Buyer", "Seller", "Both"];
  const [roleValue, setRoleValue] = useState("Buyer");
  const [currencyValue, setCurrencyValue] = useState("PK");
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("button is submited")
  }

  return (

    <>
      <Box sx={{ margin: "3rem 25rem" }}>
        <TextField
          variant="outlined"
          label="Transaction Title"
          fullWidth
          autoFocus
        />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4} sx={{ paddingTop: "1rem" }}>
            <Grid size={4}>
              <SelectComponent
                inputLabel="My Role"
                selectLabel="My Role"
                value={roleValue}
                setValue={setRoleValue}
                options={selectRoleOption}
              />
            </Grid>
            <Grid size={4}>
              <SelectComponent
                inputLabel="Currency"
                selectLabel="Currency"
                value={currencyValue}
                setValue={setCurrencyValue}
                options={selecCurrencyOption}
              />
            </Grid>
            <Grid size={4}>
              <TextField
                variant="outlined"
                label="Inpection period(Days)"
                defaultValue={1}
                //   error={true}
              />
            </Grid>
          </Grid>
          <Typography
            sx={{
              p: "2rem 0 1rem",
              fontWeight: "600",
              fontSize: "14px",
              color: Colors.fontColor,
              fontFamily: Fonts.primaryFont,
            }}
          >
            Transaction Details
          </Typography>
          <Grid container spacing={4}>
            <Grid size={6}>
              <TextField variant="outlined" label="Item Name" fullWidth />
            </Grid>
            <Grid size={6}>
              <TextField
                variant="outlined"
                label="Price"
                fullWidth
                defaultValue="0"
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            label="Item Category"
            fullWidth
            sx={{ margin: "0.7rem 0" }}
          />
          <TextField variant="outlined" label="Item Description" fullWidth />

          {/* <FormControl>
          <InputLabel htmlFor="my-input-email">Email address</InputLabel>
          <Input id="my-input-email" aria-describedby="my-helper-text-email" />
          <FormHelperText id="my-helper-text-email"></FormHelperText>
        </FormControl> */}
      <input type="submit" />
      </form>
      </Box>
    </>
  );
}

export default StartEscrow;
