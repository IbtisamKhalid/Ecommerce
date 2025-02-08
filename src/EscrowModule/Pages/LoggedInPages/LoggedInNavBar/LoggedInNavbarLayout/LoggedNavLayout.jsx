/* eslint-disable react/prop-types */
import { Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Colors, Fonts } from "../../../../Theme/Theme";

export default function LoggedNavLayout({
  children,
  handleDrawerToggle,
  Title = true,
  navColor = Colors.secondNavColor,
  pad = true,
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Ensures spacing between children
          alignItems: "center", // Ensures alignment of items along the cross axis
          p: pad ? { xs: "1rem 2rem", sm: "1rem 4rem", md: "1rem 7rem" } : "0",
          bgcolor: navColor,
        }}
      >
        {/* Left Section (Icon + Title) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {children && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block" },
                "@media (min-width:910px)": { display: "none" },
                color: "white",
                p: 0,
                mt: -1, // Remove top margin to align with text
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {Title && (
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: "normal", // Adjust line-height for better alignment
                mr: 2,
                display: "flex",
                alignItems: "center", // Vertically centers the text
              }}
            >
              TrustBridge
            </Typography>
          )}
        </Box>

        {/* Right Section (Help & FAQs or children) */}
        {children || (
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                color: "white",
                fontFamily: Fonts.primaryFont,
              }}
            >
              Help & FAQs
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}
