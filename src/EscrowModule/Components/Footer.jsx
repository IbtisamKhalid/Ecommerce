import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Colors = {
  primary: "rgb(0, 43, 73)",
};

const footerData = [
  {
    mainHeading: "TrustBridge",
    subHeading: "We got you secured",
    to: "#",
  },
  {
    mainHeading: "Escrow Services",
    subHeading: [
      { text: "Domain Escrow", to: "#" },
      { text: "Website Escrow", to: "#" },
      { text: "Merchandise Escrow", to: "#" },
      { text: "Vehicle Escrow", to: "#" },
      { text: "Products Escrow", to: "#" },
      { text: "Milestone Escrow", to: "#" },
      { text: "Broker Escrow", to: "#" },
      { text: "IPv4 Escrow", to: "#" },
    ],
  },
  {
    mainHeading: "Support",
    subHeading: [
      { text: "Fee Calculator", to: "#" },
      { text: "Payment Options", to: "#" },
      { text: "Approved Carriers", to: "#" },
      { text: "Security", to: "#" },
      { text: "Fraud Prevention", to: "#" },
      { text: "Common Questions", to: "#" },
      { text: "Report A Bug", to: "#" },
    ],
  },
  {
    mainHeading: "Partners",
    subHeading: [
      { text: "Benefits", to: "#" },
      { text: "Get Started", to: "#" },
      { text: "Our Partners", to: "#" },
      { text: "Partner Enquiry", to: "#" },
      { text: "API Guide", to: "#" },
    ],
  },
  {
    mainHeading: "Company",
    subHeading: [
      { text: "About Us", to: "#" },
      { text: "Awards", to: "#" },
      { text: "In the News", to: "#" },
      { text: "Contact Us", to: "#" },
    ],
  },
];

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: Colors.primary,
        p: {
          xs: "1rem 1.5rem 1rem",
          sm: "1.5rem 3rem 2rem",
          md: "4rem 9rem 3rem",
        },
        color: "white",
      }}
    >
      <Box
        sx={{
          bgcolor: Colors.primary,
          display: { xs: "block", sm: "block", md: "flex" },
          justifyContent:"center",
          gap:4
        }}
      >
        {footerData.map((section, index) => (
          <Box
            key={index}
            sx={{
              paddingRight: { sm: "2rem", md: "3rem" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
                borderBottom: { xs: "1px solid white" },
                pb: "1rem",
              }}
            >
              {section.mainHeading}
            </Typography>
            {Array.isArray(section.subHeading) ? (
              section.subHeading.map((sub, subIndex) => (
                <Typography
                  component={Link}
                  to={sub.to}
                  key={subIndex}
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    margin: "0 0.5rem 0.5rem 0",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "rgb(226, 211, 211)",
                    },
                  }}
                >
                  {sub.text}
                </Typography>
              ))
            ) : (
              <Typography variant="body2">{section.subHeading}</Typography>
            )}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          margin: "5rem 0",
          borderTop: "1px solid white",
          display: "block",
          alignContent: "center",
          textAlign: "center",
          justifyContent:"center"
        }}
      >
        <Typography variant="h3" sx={{ p: "2rem 0 0" }}>
          TrustBridge
        </Typography>
        <Typography sx={{ p: "1rem 1rem " }}>
          <Typography
            component={Link}
            to={"#"}
            variant="span"
            sx={{
              borderRight: "1px solid white",
              p: "0 1rem 0 0",
              textDecoration: "none",
              color: "white",
              "&:hover": {
                borderBottom: "1px solid white",
              },
            }}
          >
            PRIVACY POLICY
          </Typography>
          <Typography
            component={Link}
            to={"#"}
            variant="span"
            sx={{
              borderRight: "1px solid white",
              p: "0 1rem 0",
              textDecoration: "none",
              color: "white",
              "&:hover": {
                borderBottom: "1px solid white",
              },
            }}
          >
            LICENSE AND COMPLAINTS
          </Typography>
          <Typography
            component={Link}
            to={"#"}
            variant="span"
            pl={"1rem"}
            sx={{ textDecoration: "none", color: "white" }}
          >
            LEGAL
          </Typography>
        </Typography>
        <Typography variant="title">
          Copyright © 2024-2026 TrustBridge.com, Inc. All rights reserved 
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
