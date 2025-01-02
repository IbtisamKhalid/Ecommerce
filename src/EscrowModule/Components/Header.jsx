import React from "react";
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
import CssBaseline from "@mui/material/CssBaseline";
import { SubMenuNavComponent } from "./Reused/reusableComponents";
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
    { index: 0, mainHeading: "Escrow", subHeading: "What is Escrow" },
    { index: 1, mainHeading: "Learn More", subHeading: "How It Works" },
    // { index:2,mainHeading: "Learn More", subHeading: "Why Choose Us" },
  ],
  [
    { index: 0, mainHeading: "About", subHeading: "Company History" },
    { index: 1, mainHeading: "Team", subHeading: "Leadership Team" },
    { index: 2, mainHeading: "Careers", subHeading: "Find Jobs" },
  ],
  [
    { index: 0, mainHeading: "Help", subHeading: "FAQs" },
    {
      index: 1,
      mainHeading: "Support Center",
      subHeading: "talk with Support Center",
    },
    { index: 2, mainHeading: "Contact", subHeading: "How to Contact Us" },
  ],
];
function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hoveredButton, setHoveredButton] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [itemIndex, setItemIndex] = React.useState(null);
  const [backgroundColor, setBackgroundColor] = React.useState("");

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

  return (
    <>
      <Box sx={{ position: "sticky", top: 0, zIndex: 10 }}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" },
            backgroundColor: backgroundColor,
            color: "white",
            position: "sticky",
            zIndex: 1100,
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
              sx={{ p: "0.8rem 0 1rem" }}
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
                <Box key={item.name} onMouseLeave={handleMouseLeave} sx={{}}>
                  <Button
                    sx={{
                      transition: "all 0.4s ease",
                      color: "white",
                      "&:hover": {
                        bgcolor: "rgba(72, 139, 180, 0.1)",
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
                  color: "white",
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
              sx={{ color: "white", p: "1.3rem 1rem 1rem", m: "0.4rem 0" }}
            >
              Login
            </Button>
            <Button
              sx={{ color: "white", p: "1.3rem 1rem 1rem", m: "0.4rem 0" }}
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
            transition
            onMouseEnter={() => handleMouseEnter(itemIndex, name)}
            onMouseLeave={handleMouseLeave}
          >
            <SubMenuNavComponent data={submenuData[itemIndex]} />
            {console.log(submenuData[itemIndex], itemIndex)}
          </Box>
        )}

        {/* Drawer Section */}
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
