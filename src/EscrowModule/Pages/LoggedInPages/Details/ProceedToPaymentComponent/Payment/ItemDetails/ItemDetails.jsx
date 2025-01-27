/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "../../../../../../Theme/Theme";

function ItemDetails({ item }) {
  console.log("The item in payment form is", item);

  return (
    <Box flexBasis="30%">
      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={1}
        sx={{
          borderBottom: `1px solid ${Colors.borderColor}`,
          p: "0 0 1rem 0",
        }}
      >
        {" "}
        {item.name}
        Transaction Details
      </Typography>
      {/* Title */}
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Title: {item.title}
      </Typography>

      {/* Subtitle */}
      <Typography variant="subtitle1" color="text.secondary" mb={2}>
        Category: {item.subtitle}
      </Typography>

      {/* Amount and Currency */}

      {/* ID */}
      <Typography variant="body2" color="text.secondary" mb={1}>
        Transaction ID: {item.id}
      </Typography>

      {/* Contract */}
      {/* {item.contract && item.contract.length > 0 && (
        <Box mb={1}>
          <Typography variant="body2" fontWeight="bold">
            Contract Details:
          </Typography>
          <ul style={{ display: "flex" }}>
            {item.contract.map((contractItem, index) => (
              <li key={index} style={{ marginRight: "2rem" }}>
                <Typography variant="body2">{contractItem}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      )} */}

      {/* Agreed */}
      <Typography variant="body1" color={item.agreed ? "green" : "red"}>
        Agreement Status: {item.agreed ? "Agreed" : "Not Agreed"}
      </Typography>
      <Typography variant="body1" mb={1}>
        Amount: <strong>{item.amount}</strong> {item.currency}
      </Typography>
    </Box>
  );
}

export default ItemDetails;
