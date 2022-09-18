import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { CartSection } from "./payment.style";

export default function Payment() {
  const history = useHistory();

  return (
    <>
      <Header />
      <CartSection>
        <h1>장바구니</h1>
      </CartSection>
      <Footer />
    </>
  );
}
