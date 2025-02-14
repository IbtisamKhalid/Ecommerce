import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import useNavBar from "./hooks/useNavBar";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import { Colors, Fonts } from "../../../Theme/Theme";
import PersonAdd from "@mui/icons-material/PersonAdd";
import LoggedInNavBarLayout from "./LoggedInNavbarLayout/LoggedNavLayout";
import { GetStartedButton } from "../../../Components/Reused/reusableComponents";
import MenuIcon from "@mui/icons-material/Menu";

export default function LoggedInNavBar({
  title,
  navColor,
  children,
  padd,
  isAdmin = false,
}) {
  const {
    mobileOpen,
    handleDrawerToggle,
    userNavbarLinks,
    open,
    handleClick,
    handleClose,
    anchorEl,
    user,
    handleLogout,
  } = useNavBar();
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", justifyItems: "center" }}
    >
      <Typography variant="h4" sx={{ my: 2 }}>
        TrustBridge
      </Typography>
      <Divider />
      <List>
        {userNavbarLinks?.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to="/SignIn"
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
      <GetStartedButton
        additionalStyles={{
          color: "white",
          fontWeight: "500",
          p: "0.5rem",

          "@media (max-width:560px)": {
            display: "block",
          },
          "@media (min-width:560px)": {
            display: "none",
          },
        }}
        Text="Start A Transaction"
      />
    </Box>
  );

  return (
    <>
      <LoggedInNavBarLayout
        // handleDrawerToggle={handleDrawerToggle}
        Title={title}
        navColor={navColor}
        pad={padd}
      >
        {!isAdmin && children}
        {!isAdmin && (
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "@media (max-width:910px)": { justifyContent: isAdmin ? "space-between" : "flex-end" },
          }}
        >
          {isAdmin && children}

          {!isAdmin && (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                "@media (max-width:910px)": { display: "none" },
                justifyContent: "space-between",
              }}
            >
              {userNavbarLinks.map((item, index) => (
                <Typography
                  component={Link}
                  to={item.link}
                  key={index}
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { color: "green" },
                    paddingRight: "0.5rem",
                    fontFamily: Fonts.primaryFont,
                    // fontWeight:550,
                    fontSize: "16px",
                  }}
                >
                  {" "}
                  {item.name}
                </Typography>
              ))}
            </Box>
          )}
          <Box display={"flex"}>
            {!isAdmin && (
              <GetStartedButton
                additionalStyles={{
                  color: "white",
                  fontWeight: "500",
                  p: "0.5rem",
                  "@media (max-width:560px)": {
                    display: "none",
                  },
                }}
                Text="Start A Transaction"
              />
            )}
            <Box
              display={"flex"}
              sx={{
                "@media (max-width:240px)": {
                  display: "none",
                },
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    alt={user.name}
                    src={user.profilePicture || ""}
                    sx={{
                      width: 35,
                      height: 35,
                      bgcolor: user.profilePicture
                        ? "transparent"
                        : "primary.main",
                      color: user.profilePicture ? "transparent" : "white",
                    }}
                  >
                    {!user.profilePicture && user.name.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    width: "290px",
                    "& .MuiAvatar-root:not(.custom-avatar)": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ p: "0 0.8rem !important" }}
                >
                  <Tooltip title="User" sx={{ p: "0 0 ", display: "flex" }}>
                    <Box
                      sx={{
                        p: "1rem 0",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        className="custom-avatar"
                        alt={user.name}
                        src={user.profilePicture || ""}
                        sx={{
                          bgcolor: user.profilePicture
                            ? "transparent"
                            : "primary.main",
                          color: user.profilePicture ? "transparent" : "white",
                          width: "65px",
                          height: "65px",
                          p: "0 0 !important",
                          mr: "0.8rem",
                        }}
                      >
                        {!user.profilePicture &&
                          user.name.charAt(0).toUpperCase()}
                      </Avatar>
                      <Typography
                        sx={{
                          font: Fonts.primaryFont,
                          fontWeight: "600",
                          color: Colors.fontColor,
                        }}
                      >
                        {user.email}
                      </Typography>
                    </Box>
                  </Tooltip>
                </MenuItem>
                <Divider />
                <Tooltip title="Open Profile">
                  <MenuItem
                    onClick={handleClose}
                    component={Link} // Add Link as the component
                    to="/loggedin/profilesetting" // Define the route
                    sx={{
                      p: "0.5rem 1.8rem",
                      color: "#0088FF",
                      fontWeight: "600",
                      fontFamily: Fonts.primaryFont,
                      textDecoration: "none", // Prevent underlining the text
                    }}
                  >
                    <Avatar />
                    My Profile
                  </MenuItem>
                </Tooltip>
                <Tooltip title="Add Account">
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      p: "0.5rem 1.75rem",
                      color: "#0088FF",
                      fontWeight: "600",
                      fontFamily: Fonts.primaryFont,
                    }}
                  >
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                </Tooltip>
                <Tooltip title="Open Setting">
                  <MenuItem
                    onClick={handleClose}
                    component={Link} // Add Link as the component
                    to="/loggedin/profilesetting" // Define the route
                    sx={{
                      p: "0.5rem 1.8rem",
                      color: "#0088FF",
                      fontWeight: "600",
                      fontFamily: Fonts.primaryFont,
                      textDecoration: "none", // Prevent underlining the text
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        "& .MuiListItemIcon-root": {
                          p: "0 !important",
                          m: "0 !important",
                        },
                        p: "0 !important",
                        m: "0 !important",
                        minWidth: "unset",
                      }}
                    >
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                </Tooltip>
                <Tooltip title="Logout" onClick={handleLogout}>
                  <MenuItem
                    component={Link}
                    to="/SignIn"
                    sx={{
                      p: "0.5rem 2.05rem",
                      color: "#0088FF",
                      fontWeight: "600",
                      fontFamily: Fonts.primaryFont,
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Tooltip>
              </Menu>
            </Box>
          </Box>
        </Box>
      </LoggedInNavBarLayout>
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
            width: 440,
          },
        }}
        onClick={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </>
  );
}
