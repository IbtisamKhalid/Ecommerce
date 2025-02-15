import React from "react";
import {
  UserContext,
} from "../../../../EscrowContext/Hooks/useEscrowContext";

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
  return {
    mobileOpen,
    handleDrawerToggle,
    userNavbarLinks,
  };
}

export default useNavBar;
