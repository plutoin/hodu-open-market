import React from "react";
import styled from "styled-components";

export default function EmptyCart() {
  return (
    <Container>
      <strong>장바구니에 담긴 상품이 없습니다.</strong>
      <p>원하는 상품을 장바구니에 담아보세요!</p>
    </Container>
  );
}

const Container = styled.div`
  margin: 200px 0;
  > strong {
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
  }
  > p {
    margin-top: 17px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;
