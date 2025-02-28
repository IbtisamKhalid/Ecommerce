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
  Escrow,
  Benefits,
  TrustBridge,
  Contact,
  FAQ,
  SupportCenter,
} from "../../EscrowModule/Modules/Header/index";
import ProfileSetting from "../../EscrowModule/Pages/LoggedInPages/ProfileSetting/ProfileSetting/ProfileSetting";
import {
  IsUserLoggedIn,
  UserContext,
} from "../../EscrowModule/EscrowContext/Hooks/useEscrowContext";
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
import {
  AdminDashboard,
  AdminLayout,
} from "../../Dashboard/AdminDashboard/SellerDashboardComponents/ExportAdminDashboardComponents";
import UpdateDispute from "../../Dashboard/AdminDashboard/UpdateDispute/UpdateDispute";
import {
  AllowedGoodsServices,
  CurrencyOptions,
  Disputes,
  PaymentOptions,
  Security,
} from "../../EscrowModule/Pages/SideBarLinksPages/Index";

function Routes() {
  const { isUserLoggedIn } = useContext(IsUserLoggedIn);
  const { user } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <ReactRoutes>
          {/* <Route path="*" element={<Home />} /> */}
          <Route path="/store" element={<LayoutStore />}>
            <Route index element={<HomeStore />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="cart" element={<CartContainer />} />
            <Route path="wishlist" element={<WishlistContainer />} />
            <Route path="search" element={<ProductSearchContainer />} />
            <Route path="compare" element={<ProductComparisonContainer />} />
          </Route>
          <Route path="*" element={<LayoutEscrow />}>
            <Route index element={<HomeEscrow />} />
          </Route>
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUP />} />
          {isUserLoggedIn && user.role == "Seller" && (
            <>
              <Route path="/dashboard" element={<MianLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="product-list" element={<Productlist />} />
                <Route path="product" element={<Addproduct />} />
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
              {console.log("in first if and the user is", user)}
              <Route path="/StartEscrow" element={<StartEscrow />} />
              <Route path="/Contract" element={<MakeContracts />} />
              <Route path="/Payment" element={<PaymentContainer />} />
              <Route path="/FileDispute" element={<FileDispute />} />
              <Route path="/escrowdashboard" element={<LoggedInLayout />}>
                <Route index element={<EscrowHistory />} />
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

          {console.log("in between and the user is", user)}
          {isUserLoggedIn && user.role == "Buyer" && (
            <>
              {console.log("in second if")}
              <Route path="/StartEscrow" element={<StartEscrow />} />
              <Route path="/Contract" element={<MakeContracts />} />
              <Route path="/Payment" element={<PaymentContainer />} />
              <Route path="/FileDispute" element={<FileDispute />} />
              <Route path="/escrowdashboard" element={<LoggedInLayout />}>
                <Route index element={<EscrowHistory />} />
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
          {isUserLoggedIn && user.role == "Admin" && (
            <>
              <Route path="/Admindashboard" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="product-list" element={<Productlist />} />
                <Route path="product" element={<Addproduct />} />
                <Route path="ProfileSetting" element={<ProfileSetting />} />
                <Route
                  path="disputedetails"
                  element={<DisputeDetailsWrapper />}
                />
                <Route path="disputes" element={<EscrowDisputes />} />
                <Route path="updatedisputes" element={<UpdateDispute />} />
              </Route>
            </>
          )}

          <Route path="/queries" element={<Layout />}>
            <Route path="Escrow" element={<Escrow />} />
            <Route path="Benefits" element={<Benefits />} />
            <Route path="TrustBridge" element={<TrustBridge />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Help" element={<FAQ />} />
            <Route path="SupportCenter" element={<SupportCenter />} />
            <Route
              path="AllowedGoodsServices"
              element={<AllowedGoodsServices />}
            />
            <Route path="CurrencyOptions" element={<CurrencyOptions />} />
            <Route path="Disputes" element={<Disputes />} />
            <Route path="PaymentOptions" element={<PaymentOptions />} />
            <Route path="PaymentOptions" element={<PaymentOptions />} />
            <Route path="Security" element={<Security />} />
          </Route>
            <Route path="/PaymentOptions" element={<PaymentOptions />} />

          {/* <Route path="/Contract" element={<MakeContracts />} /> */}
        </ReactRoutes>
      </BrowserRouter>
    </>
  );
}

export default Routes;
