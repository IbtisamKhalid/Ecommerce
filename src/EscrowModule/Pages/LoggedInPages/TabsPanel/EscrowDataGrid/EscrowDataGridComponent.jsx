import React, { useState, useEffect } from "react";
import { Box,  Typography, CircularProgress } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Colors } from "../../../../Theme/Theme";
import { useNavigate } from "react-router-dom";

function EscrowDataGridComponent({ tableName, status, onRendered }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      if (onRendered) onRendered();
    }, 500);

    return () => clearTimeout(timer);
  }, [status]);

  const columns = [
    { headerName: "ID", width: 100, textAlign: "left" },
    { headerName: "TRANSACTION TITLE", width: 400, textAlign: "left" },
    { headerName: "CREATED", width: 150, textAlign: "left" },
    { headerName: "AMOUNT", width: 150, textAlign: "left" },
    { headerName: "ROLE", width: 120, textAlign: "left" },
    { headerName: "STATUS", width: 200, textAlign: "right" },
  ];

  const rows = [
    {
      id: "13075658",
      title: "My Transaction",
      subtitle: "Domain Name",
      created: "Jan 12, 2025",
      amount: "$91.00 USD",
      role: "Buyer",
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
    },
    {
      id: "13075658",
      title: "My Transaction",
      subtitle: "Domain Name",
      created: "Jan 12, 2025",
      amount: "$91.00 USD",
      role: "Buyer",
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
    },
    {
      id: "13075658",
      title: "My Transaction",
      subtitle: "Domain Name",
      created: "Jan 12, 2025",
      amount: "$91.00 USD",
      role: "Buyer",
      status: {
        primary: "Awaiting Agreement",
        secondary: "Requires Seller's Action",
      },
    },
  ];
  const navigate = useNavigate();

  const handleBoxClick = (item) => {
    navigate(`/LoggedIn/escrowdetails/${item.id}`, { state: { item } });
  };
  return (
    <>
      <Box sx={{ pY: 3, bgcolor: "white", boxShadow: 1, borderRadius: "4px" }}>
        <Typography
          variant="subtitle2"
          sx={{
            p: "1.2rem 1rem",
            color: "#666",
            borderBottom: "1px solid rgb(216, 214, 214)",
          }}
        >
          Showing <strong>{status}</strong> transactions.
        </Typography>
        <Box
          sx={{
            display: "flex",
            p: "0.8rem 1rem",
            bgcolor: "#f9f9f9",
            borderBottom: "1px solid rgb(216, 214, 214)",
          }}
        >
          {columns.map((item, index) => {
            return (
              <Typography
                variant="p"
                key={index}
                sx={{
                  width: item.width,
                  textAlign: item.textAlign,
                  fontFamily: "Roboto, serif",
                  fontOpticalSizing: "auto",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontVariationSettings: "wdth 100",
                  color: "#666",
                  fontSize: "15px",
                  padding: "",
                }}
              >
                {item.headerName}
              </Typography>
            );
          })}
        </Box>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            {rows.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  p: "1.3rem 1rem",
                  bgcolor: "inherit",
                  textAlign: "left",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleBoxClick(item)}
                key={index}
              >
                <Typography
                  sx={{
                    width: 100,
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    fontVariationSettings: "wdth 100",
                  }}
                >
                  {" "}
                  {item.id}{" "}
                </Typography>
                <Box sx={{ display: "block", width: 400 }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 450,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      fontVariationSettings: "wdth 100",
                    }}
                  >
                    {" "}
                    {item.title}{" "}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "13px", color: Colors.backColor }}
                  >
                    {" "}
                    {item.subtitle}{" "}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    width: 150,
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    fontVariationSettings: "wdth 100",
                  }}
                >
                  {" "}
                  {item.created}{" "}
                </Typography>
                <Typography
                  sx={{
                    width: 150,
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    fontVariationSettings: "wdth 100",
                  }}
                >
                  {" "}
                  {item.amount}{" "}
                </Typography>
                <Typography
                  sx={{
                    width: 120,
                    fontSize: "14px",
                    fontWeight: 450,
                    fontFamily: "Roboto, serif",
                    fontStyle: "normal",
                    fontVariationSettings: "wdth 100",
                  }}
                >
                  {" "}
                  {item.role}{" "}
                </Typography>
                <Box
                  sx={{ display: "block", width: 200, justifyItems: "right" }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 450,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      fontVariationSettings: "wdth 100",
                      bgcolor: "#fff1a8",
                      color: "#677702",
                      p: "0.3rem 0.7rem 0.3rem 0.5rem",
                      borderRadius: "12px",
                      mb: "0.2rem",
                      width: "fit-content",
                    }}
                  >
                    <CircleIcon
                      sx={{ fontSize: "10px", marginRight: "0.4rem" }}
                    />
                    {item.status.primary}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 450,
                      fontFamily: "Roboto, serif",
                      fontStyle: "normal",
                      fontVariationSettings: "wdth 100",
                      borderRadius: "12px",
                      bgcolor: "#ebebeb",
                      color: " #4f4f4f",
                      p: "0.3rem 0.7rem 0.3rem 0.5rem",
                    }}
                  >
                    <CircleIcon
                      sx={{ fontSize: "10px", marginRight: "0.4rem" }}
                    />
                    {item.status.secondary}{" "}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

export default EscrowDataGridComponent;

// rgb(37, 33, 59)
