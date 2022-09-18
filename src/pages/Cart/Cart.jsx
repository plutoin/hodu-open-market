import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemHeader from "../../components/CartBox/ItemHeader/ItemHeader";
import ItemCard from "../../components/CartBox/ItemCard/ItemCard";
import TotalPrice from "../../components/CartBox/TotalPrice/TotalPrice";

import { CartSection } from "./cart.style";

export default function Cart() {
  const history = useHistory();

  return (
    <>
      <Header />
      <CartSection>
        <h1>장바구니</h1>
        <ItemHeader />
        <ItemCard />
        <TotalPrice />
        <button onClick={() => history.push("/payment")}>주문하기</button>
      </CartSection>
      <Footer />
    </>
  );
}
