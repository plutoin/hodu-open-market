import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";
import PaymentHeader from "../../components/PaymentBox/PaymentHeader";
import PaymentItem from "../../components/PaymentBox/PaymentItem";
import PaymentForm from "../../components/PaymentBox/PaymentForm/PaymentForm";
import Footer from "../../components/Footer/Footer";

import { CartSection, TotalPrice } from "./payment.style";

export default function Payment() {
  const location = useLocation();
  const products = location.state.products;

  const priceArr = products.map((i) => i.price * i.quantity);
  const feeArr = products.map((i) => i.shipping_fee);

  const total = (arr) => {
    const res = arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
    return res;
  };

  const totalPrice = total(priceArr);
  const totalFee = total(feeArr);
  const totalPay = totalPrice + totalFee;

  return (
    <>
      <Header />
      <CartSection>
        <h1>주문/결제하기</h1>
        <PaymentHeader />
        {products?.map((item) => (
          <PaymentItem key={item.product_id} {...item} />
        ))}
        <TotalPrice>
          총 주문금액
          <strong>{totalPay?.toLocaleString()}원</strong>
        </TotalPrice>
        <PaymentForm
          products={products}
          totalPrice={totalPrice}
          totalFee={totalFee}
          totalPay={totalPay}
        />
      </CartSection>
      <Footer />
    </>
  );
}
