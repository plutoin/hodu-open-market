import React from "react";
import styled from "styled-components";

export default function PaymentHeader() {
  return (
    <PayHeader>
      <span>상품정보</span>
      <span>할인</span>
      <span>베송비</span>
      <span>주문금액</span>
    </PayHeader>
  );
}

const PayHeader = styled.div`
  display: flex;
  padding: 19px 82px 18px 0px;
  border-radius: 10px;
  background-color: #f2f2f2;
  > span {
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    :first-child {
      margin: 0 360px 0 261px;
    }
    :nth-child(2) {
      margin-right: 188px;
    }
    :nth-child(3) {
      margin-right: 171px;
    }
  }
`;
