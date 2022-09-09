import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TotalPrice from "../../components/CartBox/TotalPrice/TotalPrice";
import CartProduct from "../../components/CartBox/CartProduct/CartProduct";

import { CartSection, CartHeader } from "./cart.style";

export default function Cart() {
  return (
    <>
      <Header />
      <CartSection>
        <h1>장바구니</h1>
        <CartHeader>
          <input type="checkbox" />
          <span colSpan="2">상품정보</span>
          <span>수량</span>
          <span>상품금액</span>
        </CartHeader>
        <CartProduct />
        <TotalPrice />
        <button>주문하기</button>
      </CartSection>
      <Footer />
    </>
  );
}
