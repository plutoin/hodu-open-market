import React from "react";
import styled from "styled-components";

export default function ItemHeader({ checkedAllHandler }) {
  return (
    <CartHeader>
      <input
        id="allCheckbox"
        type="checkbox"
        onChange={(e) => checkedAllHandler(e.target.checked)}
      />
      <span>상품정보</span>
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
      ::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border: 2px solid white;
        border-radius: 50%;
        background-color: var(--color-green);
        appearance: none;
        box-sizing: border-box;
      }
    }
  }
`;
