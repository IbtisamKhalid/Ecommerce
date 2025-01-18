import { Link } from "react-router-dom";
import useHeader from "./hooks/useHeader";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { navItems, submenuData } from "../../../constants/HeaderConstants";
import { SubMenuNavComponent } from "../../Components/Reused/reusableComponents";
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
import { useState } from "react";

function Header({
  backColor = "",
  atTopColor = "",
  txtColor = "",
  atTopTextColor = "",
}) {
  const {
    handleDrawerToggle,
    handleMouseEnter,
    handleMouseLeave,
    backgroundColor,
    isAtTop,
    textColor,
    hoveredButton,
    mobileOpen,
    itemIndex,
    zIndex,
    name,
    setBackgroundColor
  } = useHeader({ backColor, atTopTextColor, atTopColor });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TrustBridge
      </Typography>
      <Divider />
      <List>
        {navItems?.map((item) => (
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
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: backgroundColor,
          zIndex: zIndex,
          
        }}
        // onMouseEnter={}
        // onMouseLeave={}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: "0 1.5rem", sm: "0 3rem", md: "0 6rem", lg: "0 8rem" },
            backgroundColor: isAtTop ? backColor : backgroundColor,
            color: textColor,
            zIndex: 1100,
            "& :hover": {
              bgcolor: "rgb(1, 66, 106)",
              zIndex: 1200,
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
                <Box key={item.name}
                 onMouseLeave={handleMouseLeave}>
                  <Button
                    sx={{
                      // transition: "all 0.4s ease",
                      color: textColor,
                      "&:hover": {
                        bgcolor: "rgba(72, 139, 180, 0.1)",
                        color: "white",
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
              width: 240,
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
