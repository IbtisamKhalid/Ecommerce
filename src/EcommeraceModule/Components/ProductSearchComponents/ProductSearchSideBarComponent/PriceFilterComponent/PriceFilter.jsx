import React from "react";
import { Box, TextField } from "@mui/material";

const PriceFilter = ({ priceRange, setPriceRange }) => {
  const handlePriceChange = (e) => setPriceRange({ ...priceRange, [e.target.name]: e.target.value });

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField label="Price From" type="number" name="from" value={priceRange.from} onChange={handlePriceChange} sx={{ width: "150px" }} />
      <TextField label="Price To" type="number" name="to" value={priceRange.to} onChange={handlePriceChange} sx={{ width: "150px" }} />
    </Box>
  );
};

export default PriceFilter;
