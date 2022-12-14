import React from "react";

import Header from "../../components/Header/Header";
import PaymentHeader from "../../components/PaymentBox/PaymentHeader";
import PaymentItem from "../../components/PaymentBox/PaymentItem";
import PaymentForm from "../../components/PaymentBox/PaymentForm/PaymentForm";
import Footer from "../../components/Footer/Footer";

import { CartSection } from "./payment.style";

export default function Payment() {
  return (
    <>
      <Header />
      <CartSection>
        <h1>주문/결제하기</h1>
        <PaymentHeader />
        <PaymentItem />
        <PaymentForm />
      </CartSection>
      <Footer />
    </>
  );
}
