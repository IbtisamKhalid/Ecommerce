import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  ListItem,
  ListItemText,
  ListItemButton,
  List,
  Drawer,
  Divider,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { SubMenuNavComponent } from "../../Components/Reused/reusableComponents";

import CssBaseline from "@mui/material/CssBaseline";

import { Link } from "react-router-dom";

const drawerWidth = 240;
const Colors = {
  subNavGradient: "linear-gradient(rgb(1, 66, 106), rgb(0, 29, 66))",
  button: "rgb(60, 185, 93)",
  buttonHover: "rgb(76, 170, 99)",
};
const navItems = [
  { index: 0, name: "Comsumer" },
  { index: 1, name: "About" },
  { index: 2, name: "Help" },
];
const submenuData = [
  [
    {
      index: 0,
      mainHeading: "Why TrustBridge?",
      subHeading: "Why trust Us",
      Link: "/queries/TrustBridge",
    },
    {
      index: 1,
      mainHeading: "Escrow",
      subHeading: "What is Escrow",
      Link: "/queries/Escrow",
    },
    {
      index: 2,
      mainHeading: "Learn More",
      subHeading: "How It Works",
      Link: "/queries/LearnMore",
    },
  ],
  [
    {
      index: 0,
      mainHeading: "About",
      subHeading: "Company History",
      Link: "/queries/About",
    },
    {
      index: 1,
      mainHeading: "Team",
      subHeading: "Leadership Team",
      Link: "/queries/Team",
    },
    {
      index: 2,
      mainHeading: "Careers",
      subHeading: "Find Jobs",
      Link: "/queries/Careers",
    },
  ],
  [
    {
      index: 0,
      mainHeading: "Help",
      subHeading: "FAQs",
      Link: "/queries/Help",
    },
    {
      index: 1,
      mainHeading: "Support Center",
      subHeading: "talk with Support Center",
      Link: "/queries/SupportCenter",
    },
    {
      index: 2,
      mainHeading: "Contact",
      subHeading: "How to Contact Us",
      Link: "/queries/Contact",
    },
  ],
];
function Header({
  backColor = "rgb(1, 66, 106)",
  atTopColor = "white",
  txtColor = "white",
  atTopTextColor = "black",
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [name, setName] = useState(null);
  const [itemIndex, setItemIndex] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(backColor);
  const [textColor, setTextColor] = useState(txtColor);
  const [isAtTop, setIsAtTop] = useState(true);
  // Monitor scroll position
  useEffect(() => {
    const checkScrollPosition = () => {
      if (typeof window !== "undefined") {
        const scrolledToTop = window.scrollY === 0;

        setIsAtTop(scrolledToTop);

        if (scrolledToTop) {
          // At the top of the page
          setBackgroundColor(atTopColor);
          setTextColor(atTopTextColor);
        } else {
          // Scrolled down
          setBackgroundColor("white");
          setTextColor("black");
        }
      }
    };

    // Check on initial render
    checkScrollPosition();

    // Listen for scroll events
    window.addEventListener("scroll", checkScrollPosition);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const handleMouseEnter = (index, name) => {
    setHoveredButton(name);
    setName(name);
    setItemIndex(index);
    setBackgroundColor("rgb(1, 66, 106)");
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
    setName(null);
    setBackgroundColor("inherit");
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TrustBridge
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button
          component={Link}
          to={"#"}
          sx={{ textAlign: "center", color: "inherit" }}
        >
          Our Store
        </Button>
      </List>
      <Box sx={{ display: { sm: "none" } }}>
        <Button sx={{ color: "black" }}>Login</Button>
        <Button sx={{ color: "black" }}>SignUp</Button>
      </Box>
    </Box>
  );

  console.log(backColor);
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: backColor,
          zIndex: 10,
          "& :hover":{
            backgroundColor: "rgb(1, 66, 106)",

          }
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" },
            backgroundColor: isAtTop ? "transparent" : backgroundColor,
            color: textColor,
            zIndex: 1100,
            "& :hover": {
              bgcolor: "rgb(1, 66, 106)",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block" },
                "@media (min-width:940px)": { display: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ p: "0.8rem 0 1rem", color: textColor }}
            >
              TrustBridge
            </Typography>
            <Box
              sx={{
                "@media (min-width:940px)": { display: "flex" },
                display: { xs: "none" },
              }}
            >
              {navItems.map((item) => (
                <Box key={item.name} onMouseLeave={handleMouseLeave}>
                  <Button
                    sx={{
                      // transition: "all 0.4s ease",
                      color: textColor,
                      "&:hover": {
                        bgcolor: "rgba(72, 139, 180, 0.1)",
                        color:"white"

                      },
                      p: "1.3rem 1rem 1rem",
                      m: "0.4rem 0",
                      borderBottom: "0.5px solid transparent",
                  
                    }}
                    onMouseEnter={() => handleMouseEnter(item.index, item.name)}
                    endIcon={
                      hoveredButton === item.name ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )
                    }
                  >
                    {item.name}
                  </Button>
                </Box>
              ))}
              <Button
                sx={{
                  textAlign: "center",
                  p: "1.3rem 1rem 1rem",
                  m: "0.4rem 0",
                  color: textColor,
                }}
              >
                Our Store
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              "@media (max-width:560px)": { display: "none" },
            }}
          >
            <Button
              component={Link}
              to="/SignIn"
              sx={{
                p: "1.3rem 1rem 1rem",
                m: "0.4rem 0",
                color: textColor,
                textDecoration: "none",
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/SignUP"
              sx={{
                p: "1.3rem 1rem 1rem",
                m: "0.4rem 0",
                color: textColor,
                textDecoration: "none",
              }}
            >
              SignUp
            </Button>
          </Box>
        </Box>

        {hoveredButton && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "69px",
              left: 0,
              width: "100%",
              backgroundColor: "white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 1s ease",
            }}
            onMouseEnter={() => handleMouseEnter(itemIndex, name)}
            onMouseLeave={handleMouseLeave}
          >
            <SubMenuNavComponent data={submenuData[itemIndex]} />
          </Box>
        )}

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block" },
            "@media (min-width:940px)": { display: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Header;
