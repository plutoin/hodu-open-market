import React from "react";
import { Container, TotalContainer } from "./totalPrice.style";

import PlusIcon from "../../../assets/icon-plus-line.svg";
import MinusIcon from "../../../assets/icon-minus-line.svg";

export default function TotalPrice({ totalPrice, totalFee }) {
  return (
    <Container>
      <div>
        <p>총 상품 금액</p>
        <strong>
          {totalPrice}
          <span>원</span>
        </strong>
      </div>
      <img src={MinusIcon} alt="빼기 아이콘" />
      <div>
        <p>상품 할인</p>
        <strong>
          0<span>원</span>
        </strong>
      </div>
      <img src={PlusIcon} alt="더하기 아이콘" />
      <div>
        <p>배송비</p>
        <strong>
          {totalFee}
          <span>원</span>
        </strong>
      </div>
      <TotalContainer>
        <p>결제 예정 금액</p>
        <strong>
          {totalPrice}
          <span>원</span>
        </strong>
      </TotalContainer>
    </Container>
  );
}
