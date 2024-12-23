import React from "react";
import { Link } from "react-router-dom";
import { StartEscrow, DrawerAppBar, subMenu }  from "./Reused/reusableComponents";
import './Layout.css'



function Header() {
  return (
    <div className="content-container">
        <DrawerAppBar />
        {/* <StartEscrow /> */}
        {/* <subMenu /> */}
        </div>
  );
}

export default Header;
