// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import OurStore from "./pages/OurStore";
// import "./App.css";
// import Blogs from "./pages/Blogs";
// import CompareProduct from "./pages/CompareProduct";
// import Wishlist from "./pages/Wishlist";
// import SingleBlog from "./pages/SingleBlog";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import RefundPolicy from "./pages/RefundPolicy";
// import ShippingPolicy from "./pages/ShippingPolicy";
// import TermAndCondtion from "./pages/TermAndCondtion";
// import SingleProduct from "./pages/SingleProduct";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";

// function Index() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Define the Layout component as the wrapper for nested routes */}
//         <Route path="/storeh" element={<Layout />}>
//           {/* Use index for the default route */}
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="store" element={<OurStore/>} />
//           <Route path="product/product/:id" element={<SingleProduct/>} />
//           <Route path="blogs" element={<Blogs/>} />
//           <Route path="compare-product" element={<CompareProduct/>} />
//           <Route path="wishlist" element={<Wishlist/>} />
//         </Route>
//         <Route path="blog/:id" element={<SingleBlog/>} />
//         <Route path="privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="refund-policy" element={<RefundPolicy />} />
//         <Route path="shipping-policy" element={<ShippingPolicy />} />
//         <Route path="term-and-condition" element={<TermAndCondtion />} />
//         <Route path="cart" element={<Cart/>} />
//         <Route path="checkout" element={<Checkout/>} />
//       </Routes>
    
//     </BrowserRouter>
//   );
// }

// export default Index;