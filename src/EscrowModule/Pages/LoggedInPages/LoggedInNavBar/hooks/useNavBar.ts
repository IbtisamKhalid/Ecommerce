import React from "react";
import {
  UserContext,
} from "../../../../EscrowContext/Hooks/useEscrowContext";

function useNavBar({isAdmin}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const { user } = React.useContext(UserContext);
console.log(user.role)
  const userNavbarLinks = [
    ...(!isAdmin || user.role == "Buyer"
      ? [
          { name: "My Escrow", link: "/escrowdashboard" },
          { name: "Dispute", link: "/escrowdashboard/EscrowDisputes" },
          { name: "Payments", link: "/escrowdashboard/escrowpayments" },
          { name: "Help", link: "/SignIn" },
        ]
      : [
        { name: "Dashboard", link: "/admindashboard" },
        { name: "Dispute", link: "/admindashboard/dispute" },
        { name: "FAQ's", link: "/admindashboard/Adminguidance" },

      ]),
  ];
  console.log(userNavbarLinks)
  return {
    mobileOpen,
    handleDrawerToggle,
    userNavbarLinks,
    user
  };
}

export default useNavBar;
