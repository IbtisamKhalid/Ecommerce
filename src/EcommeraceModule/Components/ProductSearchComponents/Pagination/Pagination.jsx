import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ totalProducts, productsPerPage, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (totalPages <= 1) return null; // Hide pagination if only 1 page

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={(_, page) => {
        console.log("Page changed to:", page); // Debugging
        onPageChange(page);
      }}
      color="primary"
      sx={{ display: "flex", justifyContent: "center", mt: 3 }}
    />
  );
};

export default Pagination;
