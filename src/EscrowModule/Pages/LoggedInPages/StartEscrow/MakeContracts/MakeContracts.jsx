import React from "react";
import LoggedInNavbarLayout from "../../LoggedInNavBar/LoggedInNavbarLayout/LoggedInNavbarLayout";
import { Box, Typography, Button, TextField } from "@mui/material";
import { Colors } from "../../../../Theme/Theme";
import useMakeContract from "./hooks/useMakeContract";
function MakeContracts() {
  const { terms, addTerm, setInputValue, inputValue, containerRef } =
    useMakeContract();
  return (
    <>
      <LoggedInNavbarLayout />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            margin: "2rem 0 2rem 7rem",
            bgcolor: Colors.tertiary,
            p: "2rem",
            width: " 30% ",
          }}
        >
          <Typography variant="h5">Terms and Conditions</Typography>
          <Box sx={{ bgcolor: "white" }}>
            <Box sx={{ height: "350px",overflow:"scroll", scrollbarWidth:"none" }} ref={containerRef}>
              {terms.map((terms, index) => {
                return <li key={index}>{terms}</li>;
              })}
            </Box>
            <TextField
              variant="outlined"
              label="Terms"
              fullWidth
              helperText=" "
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </Box>
          <Button onClick={addTerm}>Add Terms</Button>
          <Button>Make Contract</Button>
        </Box>
        <Box>this is the second box</Box>
      </Box>
    </>
  );
}

export default MakeContracts;
