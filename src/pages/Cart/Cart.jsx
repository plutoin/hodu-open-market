import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemHeader from "../../components/CartBox/ItemHeader/ItemHeader";
import ItemCard from "../../components/CartBox/ItemCard/ItemCard";
import TotalPrice from "../../components/CartBox/TotalPrice/TotalPrice";

import { CartSection } from "./cart.style";

export default function Cart() {
  return (
    <>
      <Header />
      <CartSection>
        <h1>장바구니</h1>
        <ItemHeader
          check="false"
          first="상품정보"
          second="수량"
          third="상품금액"
          fourth="주문금액"
        />
        <ItemCard />
        <TotalPrice />
        <button>주문하기</button>
      </CartSection>
      <Footer />
    </>
  );
}
