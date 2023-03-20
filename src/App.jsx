import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import "./styles/reset.css";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Join from "./pages/Join/Join";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join/seller" element={<Join />} />
        <Route path="/productDetail/:product_id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
