/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
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
  SignIn,
  SignUP,
} from "../../EscrowModule/Pages";
import {
  UserDashboard,
  StartEscrow,
  LoggedInLayout,
  EscrowHistory,
  EscrowDisputes,
  EscrowPayments,
  MakeContracts,
} from "../../EscrowModule/Pages/LoggedInPages";

import DisputeDetailsWrapper from "../../EscrowModule/Pages/LoggedInPages/Details/DetailsWrapper/DisputeDetailsWrapper/DisputeDetailsWrapper";
import EscrowDetailsWrapper from "../../EscrowModule/Pages/LoggedInPages/Details/DetailsWrapper/EscrowDetailsWrapper/EscrowDetailsWrapper";
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
import ProfileSetting from "../../EscrowModule/Pages/LoggedInPages/ProfileSetting/ProfileSetting/ProfileSetting";
import { IsUserLoggedIn } from "../../EscrowModule/EscrowContext/Hooks/useEscrowContext";
import FileDispute from "../../EscrowModule/Pages/LoggedInPages/DIsputeModule/FileDisputeComponent/FileDispute";
import PaymentContainer from "../../EscrowModule/Pages/LoggedInPages/Details/ProceedToPaymentComponent/Payment/PaymenPageContainer/PaymentContainer";

function Routes() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(IsUserLoggedIn);

  return (
    <>
      <BrowserRouter>
        <ReactRoutes>
          {isUserLoggedIn && (
            <>
              <Route path="/StartEscrow" element={<StartEscrow />} />
              <Route path="/Contract" element={<MakeContracts />} />
              <Route path="/Payment" element={<PaymentContainer />} />
              <Route path="/FileDispute" element={<FileDispute />} />
              <Route path="/LoggedIn" element={<LoggedInLayout />}>
                <Route path="UserDashboard" element={<UserDashboard />} />
                <Route path="EscrowHistory" element={<EscrowHistory />} />
                <Route path="EscrowDisputes" element={<EscrowDisputes />} />
                <Route path="EscrowPayments" element={<EscrowPayments />} />
                <Route path="ProfileSetting" element={<ProfileSetting />} />
                <Route
                  path="escrowdetails/:id"
                  element={<EscrowDetailsWrapper />}
                />
                <Route
                  path="disputedetails/:id"
                  element={<DisputeDetailsWrapper />}
                />
              </Route>
            </>
          )}

          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<LayoutStore />}>
            <Route index element={<HomeStore />} />
          </Route>
          <Route path="/escrow" element={<LayoutEscrow />}>
            <Route index element={<HomeEscrow />} />
          </Route>
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUP />} />
          {/* <Route path="/Contract" element={<MakeContracts />} /> */}
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
