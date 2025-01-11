import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "../../Home";
import {
  LayoutStore,
  HomeStore,
  ContactMe,
} from "../../EcommeraceModule/pages";

import {
  Layout,
  HomeEscrow,
  LayoutEscrow,
  UserDashboard,
  SignIn,
  SignUP,
  StartEscrow,

} from "../../EscrowModule/Pages";
import {
  About,
  Careers,
  Team,
  Escrow,
  LearnMore,
  TrustBridge,
  Contact,
  Help,
  SupportCenter,
} from "../../EscrowModule/Modules/Header/index";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<LayoutStore />}>
            <Route index element={<HomeStore />} />
          </Route>
          <Route path="/escrow" element={<LayoutEscrow />}>
            <Route index element={<HomeEscrow />} />
            <Route path="UserDashboard" element={<UserDashboard />} />
          </Route>
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUP />} />
          <Route path="StartEscrow" element={<StartEscrow />} />
          <Route path="/queries" element={<Layout />}>
            <Route path="About" element={<About />} />
            <Route path="Careers" element={<Careers />} />
            <Route path="Team" element={<Team />} />
            <Route path="Escrow" element={<Escrow />} />
            <Route path="LearnMore" element={<LearnMore />} />
            <Route path="TrustBridge" element={<TrustBridge />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Help" element={<Help />} />
            <Route path="SupportCenter" element={<SupportCenter />} />
          </Route>
        </ReactRoutes>
      </BrowserRouter>
    </>
  );
}

export default Routes;
