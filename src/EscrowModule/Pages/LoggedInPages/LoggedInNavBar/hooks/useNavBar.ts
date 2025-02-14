import React from "react";
import { UserContext } from "../../../../EscrowContext/Hooks/useEscrowContext";

function useNavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const { user } = React.useContext(UserContext);
  const userNavbarLinks = [
    ...(user.role != "Admin"
      ? [
          { name: "My Escrow", link: "/escrowdashboard" },
          { name: "Dispute", link: "/escrowdashboard/EscrowDisputes" },
          { name: "Payments", link: "/escrowdashboard/escrowpayments" },
          { name: "Help", link: "/SignIn" },
        ]
      : [{ name: "Dispute", link: "/escrowdashboard/EscrowDisputes" }]),
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return {
    mobileOpen,
    handleDrawerToggle,
    userNavbarLinks,
    open,
    user,
    handleClick,
    handleClose,
    anchorEl,
    setAnchorEl,
    setMobileOpen,
  };
}

export default useNavBar;
