import React from "react";
import { Box, Typography, List, ListItem, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Import React Router Link for navigation
import {Colors} from "../../../Theme/Theme";
function SideBarLinks() {
  const sideBarLinks = [
    {
      mainHeading: { text: "What Is Escrow?", link: "/what-is-escrow" },
      subHeading: [
        { text: "What Is Escrow?", link: "/what-is-escrow-details" },
        { text: "Allowed goods and services", link: "/allowed-goods-services" },
        { text: "Currency Options", link: "/currency-options" },
        { text: "Payment Options", link: "/payment-options" },
        { text: "Disbursements Methods", link: "/disbursements-methods" },
        { text: "Benefits", link: "/benefits" },
        { text: "Buyer, Seller, & Broker Protection", link: "/protection" },
        { text: "How it Works: Broker", link: "/how-it-works-broker" },
        { text: "Security", link: "/security" },
        { text: "Inspection Period", link: "/inspection-period" },
        { text: "Fraud Prevention", link: "/fraud-prevention" },
        { text: "Disputes", link: "/disputes" },
        { text: "Approved Carriers", link: "/approved-carriers" },
      ],
    },
    { text: "Fee Calculator", link: "/fee-calculator" },
    { text: "Escrow Accounts", link: "/escrow-accounts" },
    { text: "Services", link: "/services" },
    { text: "Help Center", link: "/help-center" },
    { text: "Partners", link: "/partners" },
    { text: "Learn More", link: "/learn-more" },
    { text: "Contact Us", link: "/contact-us" },
  ];

  return (
    <Box sx={{ padding: "2rem 3rem",borderRadius: "8px" }}>
      <List>
        {sideBarLinks.map((link, index) =>
          link.mainHeading ? (
            // Render links with subHeadings
            <Box key={index} sx={{ marginBottom: "1rem" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                <Link component={RouterLink} to={link.mainHeading.link} underline="none">
                  {link.mainHeading.text}
                </Link>
              </Typography>
              <List disablePadding>
                {link.subHeading.map((subLink, subIndex) => (
                  <ListItem
                    key={subIndex}
                    sx={{
                      padding: "0.3rem 1rem",
                      fontSize: "0.9rem",
                      "&:hover": { backgroundColor: "#e0e0e0", cursor: "pointer" },

                    }}
                  >
                    <Link component={RouterLink} to={subLink.link} underline="none" color="black">
                      {subLink.text}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          ) : (
            // Render plain links
            <ListItem key={index} sx={{ padding: "0.5rem 0" }}>
              <Link component={RouterLink} to={link.link} underline="none">
                {link.text}
              </Link>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
}

export default SideBarLinks;
