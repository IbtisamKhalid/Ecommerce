/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "../../Home";
import {
  LayoutStore,
  HomeStore,
  ProductPage,
} from "../../EcommeraceModule/pagesMine";
import ProductSearchContainer from "../../EcommeraceModule/Containers/ProductSearchContainer/ProductSearchContainer";
import {
  Layout,
  HomeEscrow,
  LayoutEscrow,
  SignIn,
  SignUP,
} from "../../EscrowModule/Pages";
import {
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
import ProductComparisonContainer from "../../EcommeraceModule/Containers/ProductComparisonContainer/ProductComparisonContainer";
import CartContainer from "../../EcommeraceModule/Containers/CartContainer/CartContainer";
import WishlistContainer from "../../EcommeraceModule/Containers/WishlistContainer/WishlistContainer";
import {
  Orders,
  Addproduct,
  Dashboard,
  MianLayout,
  Productlist,
} from "../../Dashboard/SellerDashboard/SellerDashboardComponents/ExportSellerDashboardComponents";

function Routes() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(IsUserLoggedIn);

  return (
    <>
      <BrowserRouter>
        <ReactRoutes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<LayoutStore />}>
            <Route index element={<HomeStore />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="cart" element={<CartContainer />} />
            <Route path="wishlist" element={<WishlistContainer />} />
            <Route path="search" element={<ProductSearchContainer />} />
            <Route path="compare" element={<ProductComparisonContainer />} />
          </Route>
          <Route path="/escrow" element={<LayoutEscrow />}>
            <Route index element={<HomeEscrow />} />
          </Route>
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUP />} />
          {isUserLoggedIn && (
            <>
              <Route path="/StartEscrow" element={<StartEscrow />} />
              <Route path="/Contract" element={<MakeContracts />} />
              <Route path="/Payment" element={<PaymentContainer />} />
              <Route path="/FileDispute" element={<FileDispute />} />
              <Route path="/LoggedIn" element={<LoggedInLayout />}>
                <Route path="EscrowHistory" element={<EscrowHistory />} />
                <Route path="EscrowDisputes" element={<EscrowDisputes />} />
                <Route path="EscrowPayments" element={<EscrowPayments />} />
                <Route path="ProfileSetting" element={<ProfileSetting />} />
                <Route
                  path="escrowdetails"
                  element={<EscrowDetailsWrapper />}
                />
                <Route
                  path="disputedetails"
                  element={<DisputeDetailsWrapper />}
                />
              </Route>
            </>
          )}
          {isUserLoggedIn && (
            <>
              <Route path="/dashboard" element={<MianLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="product-list" element={<Productlist />} />
                <Route path="product" element={<Addproduct />} />
                <Route path="SellerEscrowHistory" element={<SellerEscrowHistory />} />
                <Route path="SellerEscrowDisputes" element={<SellerEscrowDisputes />} />
                <Route path="SellerEscrowPayments" element={<SellerEscrowPayments />} />
                <Route path="ProfileSetting" element={<ProfileSetting />} />
                <Route
                  path="escrowdetails"
                  element={<EscrowDetailsWrapper />}
                />
                <Route
                  path="disputedetails"
                  element={<DisputeDetailsWrapper />}
                />
              </Route>
            </>
          )}
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

          {/* <Route path="/Contract" element={<MakeContracts />} /> */}
        </ReactRoutes>
      </BrowserRouter>
    </>
  );
}

export default Routes;
