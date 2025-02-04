import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SortDropdown = ({ sortOption, setSortOption }) => (
  <FormControl sx={{ minWidth: "100%", mb: 2 }}>
    <InputLabel>Sort By</InputLabel>
    <Select value={sortOption} onChange={(e) => setSortOption(e.target.value)} label="Sort By">
      <MenuItem value="featured">Featured</MenuItem>
      <MenuItem value="best-selling">Best Selling</MenuItem>
      <MenuItem value="alphabetically-a-z">Alphabetically, A-Z</MenuItem>
      <MenuItem value="alphabetically-z-a">Alphabetically, Z-A</MenuItem>
      <MenuItem value="price-low-high">Price, Low to High</MenuItem>
      <MenuItem value="price-high-low">Price, High to Low</MenuItem>
    </Select>
  </FormControl>
);

export default SortDropdown;
