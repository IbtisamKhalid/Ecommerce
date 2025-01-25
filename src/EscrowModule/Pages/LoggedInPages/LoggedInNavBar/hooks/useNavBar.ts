import React from "react";

function useNavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const userNavbarLinks = [
    { name: "My Escrow", link: "/LoggedIn/EscrowHistory" },
    { name: "Dispute", link: "/LoggedIn/EscrowDisputes" },
    { name: "Payments", link: "/LoggedIn/escrowpayments" },
    { name: "Help", link: "/SignIn" },
  ];
  const user = {
    name: "Ibtisam",
    email: "ibtisam@gmail.com",
  };
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
    user,
    open,
    handleClick,
    handleClose,
    anchorEl,
    setAnchorEl,
    setMobileOpen,
  };
}

export default useNavBar;
