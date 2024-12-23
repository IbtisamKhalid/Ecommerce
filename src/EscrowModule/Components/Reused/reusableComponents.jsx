import React from "react";
import {
  Typography,
  Box,
  Button,
  Toolbar,
  ListItem,
  ListItemText,
  ListItemButton,
  List,
  Drawer,
  Divider,
  AppBar,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CssBaseline from "@mui/material/CssBaseline";
import "./reusableComponents.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { name: "Consumer" },
  { name: "About Us" },
  { name: "Help" },
];
const Colors = {
  subNavGradient: "linear-gradient(rgb(1, 66, 106), rgb(0, 29, 66))",
  button: "rgb(60, 185, 93)",
};
const subMenuItems = [{}, {}, {}, {}, {}];

export function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hoveredButton, setHoveredButton] = React.useState(null);
  const handleMouseEnter = (name) => {
    setHoveredButton(name);
    console.log("Entered");
  };
  const handleMouseLeave = () => {
    setHoveredButton(null);
    console.log("Left");
  };

  const handleDrawertoggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawertoggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my:2 }}>
        TrustBridge
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link} // Use the Link component here
              to={item.link} // Pass the route from the item
              sx={{ textAlign: "center" }}
            >
              {" "}
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: {
            sm: "none",
          },
        }}
      >
        <Button sx={{ color: "black" }}>Login</Button>
        <Button sx={{ color: "black" }}>SignUp</Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", position: "relative" }}
      >
        <CssBaseline />
        {/* AppBar Section */}
        <AppBar
          component="nav"
          sx={{
            p: { xs: "0 0", sm: "0 3rem", md: "0 6rem", lg: "0 9rem" },
            transition: "padding 0.3s ease",
            textAlign:"center"
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, sm: 2 },
                textAlign:"center"
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawertoggle}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{paddingRight:"2rem"}}>
                TrustBridge
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: { xs: 1, md: 2 },
                }}
              >
                {navItems.map((item) => (
                  <Box
                    key={item.name}
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                    sx={{ position: "relative" }}
                  >
                    <Button
                      sx={{ color: "#fff" }}
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
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                "@media (max-width:599px)": {
                  display: "none",
                },
              }}
            >
              <Button sx={{ color: "white" }}>Login</Button>
              <Button sx={{ color: "white" }}>SignUp</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* StartEscrow Section */}
        {hoveredButton && (
          <Box
            sx={{
              position: "absolute",
              top: "64px", // Adjust based on the height of your AppBar
              width: "100%",
              zIndex: 10,
              backgroundColor: "white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={() => setHoveredButton(hoveredButton)}
            onMouseLeave={handleMouseLeave}
          >
            <StartEscrow />
          </Box>
        )}

        {/* Drawer Section */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawertoggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
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
export function StartEscrow() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: Colors.subNavGradient,
          // mt: {xs:"55px", sm:  "64px"},
          // p: "2.5rem 12rem",
          p: { xs: "0.8rem 0", sm: "1rem 5rem", md: "1.8rem 9rem", lg: "2.5rem 12rem" },
            transition: "padding 0.3s ease",
          borderTop: "1px solid white",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            component={Link}
            to={"/escrow/home"}
            size={4}
            sx={{ border: "1px solid white", p:"11px 16px ", borderRadius:"4px", color:"white", cursor:"pointer" }}
          >
            component one
            <Typography>inner component</Typography>
          </Grid>
          <Grid
            component={Link}
            to={"/escrow/home"}
            size={4}
            sx={{ border: "2px solid black" }}
          >
            component one
            
          </Grid>
          <Grid
            component={Link}
            to={"/escrow/home"}
            size={4}
            sx={{ border: "2px solid black" }}
          >
            component one
          </Grid>
          <Grid
            component={Link}
            to={"/escrow/home"}
            size={4}
            sx={{ border: "2px solid black" }}
          >
            component one
          </Grid>
        </Grid>

        {/* Start Escrow component  */}
        <Box
          className="firstBox"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "1rem",
            border: "1px solid white",
            m: { md: "2rem 0 0" },
            borderRadius: "10px",
          }}
        >
          <Box className="" sx={{ fontSize: "10px" }}>
            <Typography
              variant="h4"
              sx={{ fontSize: "16px", fontWeight: "500" }}
            >
              Start A Transaction With Escrow
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", fontWeight: "400" }}
            >
              Sell, buy or broker anything from domain names to vehicles
            </Typography>
          </Box>
          <Button
            variant="primary"
            sx={{
              p: "0.8rem",
              bgcolor: Colors.button,
              fontSize: "0.8rem",
              fontWeight: "400",
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </Box>
    </>
  );
}

export const subMenu = () => {
  return <></>;
};
export default function reusableComponents() {
  return <></>;
}
