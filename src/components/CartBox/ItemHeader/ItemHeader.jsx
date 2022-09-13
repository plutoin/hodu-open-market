import React from "react";
import styled from "styled-components";

export default function ItemHeader() {
  return (
    <CartHeader>
      <input type="checkbox" />
      <span colSpan="2">상품정보</span>
      <span>수량</span>
      <span>상품금액</span>
    </CartHeader>
  );
}

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  padding: 18px 130px 19px 30px;
  border-radius: 10px;
  background-color: #f2f2f2;
  > span {
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    :nth-child(3) {
      margin: 0 238px 0 378px;
    }
  }
  > input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 314px;
    border: 2px solid var(--color-green);
    appearance: none;
    background-color: white;
    :checked {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--color-green);
      appearance: none;
    }
  }
`;
