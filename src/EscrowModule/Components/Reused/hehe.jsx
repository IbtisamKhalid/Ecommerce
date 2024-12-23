import React from "react";
import { Typography, Box, Button } from "@mui/material";
import "./reusableComponents.css";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TrustBridge
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}


export function StartEscrow() {
  const OnClick = () => {
    console.log("Button clicked");
  };
  const Colors = {
    subNavGradient: "linear-gradient(rgb(1, 66, 106), rgb(0, 29, 66))",
    button: "rgb(60, 185, 93)",
  };

  return (
    <>
      <Box
        className="firstBox"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: "1rem",
          border: "2px solid black",
          m: { xs: "1rem 4rem", L: "2.5px 12.5rem" },
          borderRadius: "10px",
          backgroundImage: Colors.subNavGradient,
          // bgcolor:"rgb(60, 185, 93)"
        }}
      >
        <Box className="" sx={{ fontSize: "10px" }}>
          <Typography variant="h4" sx={{ fontSize: "16px", fontWeight: "500" }}>
            Start A Transaction With Escrow
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "400" }}>
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
          onClick={OnClick}
        >
          Get Started Now
        </Button>
      </Box>

      <Box className="b">
        <Box>hehe</Box>
        <Box>jeje</Box>
      </Box>
    </>
  );
}

export default function reusableComponents() {
  return <></>;
}
