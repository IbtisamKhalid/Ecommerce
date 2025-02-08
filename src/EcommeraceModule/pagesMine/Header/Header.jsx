import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  InputBase,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Favorite as FavoriteIcon,
  Compare as CompareIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import { NavLink, Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "400px",
  [theme.breakpoints.down("500")]: {
    maxWidth: "90%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#febd69",
  borderRadius: "4px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const isMediumScreen = useMediaQuery("(max-width:1000px)");
  const isSmallScreen = useMediaQuery("(max-width:820px)");
  const isExtraSmallScreen = useMediaQuery("(max-width:475px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setDrawerOpen(open);
  };

  const toggleNavDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setNavDrawerOpen(open);
  };

  return (
    <>
      {/* First AppBar - Navigation Links */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#131921", padding: "5px 0" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            color="white"
            sx={{ textDecoration: "none" }}
          >
            MY Store
          </Typography>
          {!isExtraSmallScreen && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {["Home", "Products", "Blog", "Contact"].map((item) => (
                <Button
                  color="inherit"
                  component={NavLink}
                  to={`/${item.toLowerCase()}`}
                  key={item}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
          {isExtraSmallScreen && (
            <IconButton color="inherit" onClick={toggleNavDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Second AppBar - Search and Icons */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#3b4149", padding: "5px 0" }}
      >
        <Toolbar sx={{ display: "flex",justifyContent: isSmallScreen ? "space-between" : "center", gap:2 }}>
          {isSmallScreen && (
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Box
            sx={{
              // flexGrow: 1,
              display: "flex",
              justifyContent: isSmallScreen ? "right" : "center",
              width:"400px"
            }}
          >
            <Search>
              <StyledInputBase
                placeholder="Search Product Here..."
                aria-label="search"
              />
              <SearchIconWrapper>
                <BsSearch size={30} />
              </SearchIconWrapper>
            </Search>
          </Box>
          {!isSmallScreen && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "left",
              }}
            >
              {[
                { icon: <FavoriteIcon />, text: "Wishlist", link: "/wishlist" },
                { icon: <CompareIcon />, text: "Compare", link: "/compare" },
                {
                  icon: <ShoppingCartIcon />,
                  text: "Cart",
                  link: "/cart",
                  badge: 1,
                },
                {
                  icon: <AccountCircleIcon />,
                  text: "Account",
                  link: "/account",
                },
              ].map(({ icon, text, link, badge }) => (
                <Tooltip title={text} key={text}>
                  <IconButton color="inherit" component={Link} to={link}>
                    {badge ? (
                      <Badge badgeContent={badge} color="error">
                        {icon}
                      </Badge>
                    ) : (
                      icon
                    )}
                    {!isMediumScreen && (
                      <Typography variant="body2" sx={{ marginLeft: 1 }}>
                        {text}
                      </Typography>
                    )}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Icons */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250, backgroundColor: "#131921", height: "100%" }}>
          {[
            { icon: <FavoriteIcon />, text: "Wishlist", link: "/wishlist" },
            { icon: <CompareIcon />, text: "Compare", link: "/compare" },
            {
              icon: <ShoppingCartIcon />,
              text: "Cart",
              link: "/cart",
              badge: 1,
            },
            { icon: <AccountCircleIcon />, text: "Account", link: "/account" },
          ].map(({ icon, text, link, badge }) => (
            <ListItem button component={Link} to={link} key={text}>
              <ListItemIcon>
                {badge ? (
                  <Badge badgeContent={badge} color="error">
                    {icon}
                  </Badge>
                ) : (
                  icon
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Drawer for Navigation Links */}
      <Drawer
        anchor="right"
        open={navDrawerOpen}
        onClose={toggleNavDrawer(false)}
      >
        <List sx={{ width: 250, backgroundColor: "#131921", height: "100%" }}>
          {["Home", "Products", "Blog", "Contact"].map((item) => (
            <ListItem
              button
              component={NavLink}
              to={`/${item.toLowerCase()}`}
              key={item}
            >
              <ListItemText primary={item} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
