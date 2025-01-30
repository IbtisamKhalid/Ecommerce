/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import {
  RecomendedCamera,
  RecomendedLaptop,
  RecomendedHeadphones,
  RecomendedMobile,
  RecomendedSpeakers,
} from "./Index";
import Watch from "../../../StoreAssets/img/sp4.png";
import Speaker from "../../../StoreAssets/img/sp1.png";
import Mobile from "../../../StoreAssets/img/sp3.png";
import Laptop from "../../../StoreAssets/img/sp2.png";

import CustomTabsPanel from "./CustomTabsPanel/CustomTabsPanel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import SecurityIcon from "@mui/icons-material/Security";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Colors, Fonts } from "../../../../EscrowModule/Theme/Theme";

function TabsPanel({ tabsName = [], tableName, status }) {
  const [value, setValaue] = useState(0);
  const [loading, setLoading] = useState(false);

  // Use media query to detect screen size
  const at800 = useMediaQuery("(max-width: 800px)");
  const at900 = useMediaQuery("(max-width: 900px)");

  const handleTabChange = (event, newValue) => {
    setValaue(newValue);
    setLoading(true);
  };

  const handleDataGridRendered = () => {
    setLoading(false);
  };

  const tabComponent = [
    <RecomendedLaptop />,
    <RecomendedCamera />,
    <RecomendedMobile />,
    <RecomendedHeadphones />,
    <RecomendedSpeakers />,
  ];

  const tabImg = [Watch, Speaker, Mobile, Laptop];

  return (
    <>
      <Box
        sx={{
          p: "2rem 2.5rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: 550,
            fontFamily: "Roboto, serif",
            fontStyle: "normal",
            fontVariationSettings: "wdth 100",
            fontSize: "30px",
            m: "0 0 1rem",
          }}
        >
          Recomended Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: at800 ? "column" : "row",
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            minHeight: "400px",
            // pt:""
          }}
        >
          {/* Tabs */}
          <Tabs
            value={value}
            onChange={handleTabChange}
            orientation={at800 ? "horizontal" : "vertical"}
            variant={at800 ? "fullWidth" : "standard"}
            sx={{
              borderRadius: "20px",
              bgcolor: "white",
              alignItems: "flex-start", // Ensure tabs are left-aligned
              boxShadow: "0 0 1px rgba(0, 0, 0, 0.3)",
            }}
            TabIndicatorProps={{
              sx: {
                display: "none",
              },
            }}
          >
            {tabsName.map((tab, index) => (
              <Tab
                key={index}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                      width: "100%",
                      textAlign: "left",
                      p: "0.5rem 1rem 0.5rem 0.5rem", // Reduce extra padding
                      whiteSpace: "nowrap", // Prevents text from breaking into two lines
                      overflow: "hidden",
                      textOverflow: "ellipsis", // Add ellipsis if text overflows
                    }}
                  >
                    <img
                      src={tabImg[index]}
                      alt={tab}
                      style={{
                        width: "30px", // Reduce image size slightly
                        height: "30px",
                        objectFit: "cover",
                      }}
                    />
                    {!at900 && (
                      <Typography
                        variant="h6"
                        fontSize={14}
                        textAlign="left"
                        sx={{ whiteSpace: "nowrap", pr: "5rem" }} // Prevents wrapping
                      >
                        {tab}
                      </Typography>
                    )}
                  </Box>
                }
                sx={{
                  padding: "10px 12px",
                  color: "#555",
                  backgroundColor: value === index ? "#f0f0f0" : "transparent",
                  minWidth: "120px", // Ensures enough space for text
                  "&.Mui-selected": {
                    color: "inherit",
                  },
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              />
            ))}
          </Tabs>

          {/* Tab Content */}
          <Box
            sx={{
              flexGrow: 1,
              // padding: "0.6rem", // Add padding to the content
            }}
          >
            {status[value] && (
              <CustomTabsPanel value={value} index={value}>
                {tabComponent[value]}
              </CustomTabsPanel>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TabsPanel;
