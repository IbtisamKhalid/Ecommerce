import React from "react";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";
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
} from "@mui/material";
import { Link } from "react-router-dom";
import { Colors, Fonts } from "../../Theme/Theme";
import {
  UserContext,
  IsUserLoggedIn,
} from "../../EscrowContext/Hooks/useEscrowContext";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
function AccountAvatar() {
  const { setIsUserLoggedIn } = React.useContext(IsUserLoggedIn);
  const { user } = React.useContext(UserContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    navigate("/SignIn");
    setIsUserLoggedIn(false);
  };

  return (
    <>
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
                bgcolor: user.profilePicture ? "transparent" : "primary.main",
                color: user.profilePicture ? "transparent" : "white",
              }}
            >
              {!user.profilePicture && user.name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography sx={{fontWeight:600, fontSize:"15px", color:"white"}}>
              {!user.profilePicture && user.name.toUpperCase()}
            </Typography>

            {/* <AccountCircleIcon /> */}
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
          <MenuItem onClick={handleClose} sx={{ p: "0 0.8rem !important" }}>
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
                  {!user.profilePicture && user.name.charAt(0).toUpperCase()}
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
              to="/escrowdashboard/profilesetting" // Define the route
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
    </>
  );
}

export default AccountAvatar;
