import React from "react";
import styled from "styled-components";

export default function PaymentItem() {
  return (
    <PayContainer>
      <img src="" alt="상품 이미지" />
      <ItemInfo>
        <p>백엔드글로벌</p>
        <strong>딥러닝 개발자 무릎 담요</strong>
        <p>수량: 1개</p>
      </ItemInfo>
      <ItemSale>-</ItemSale>
      <ItemDelivery>무료배송</ItemDelivery>
      <strong>17,500원</strong>
    </PayContainer>
  );
}

const PayContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding: 8px 78px 18px 8px;
  border-bottom: 1px solid #c4c4c4;
  > img {
    width: 104px;
    height: 104px;
    margin-right: 36px;
    border-radius: 10px;
    background-color: gray;
  }
  > p {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: var(--color-deep-gray);
  }
  > strong {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  }
`;

export const ItemInfo = styled.div`
  width: 442px;
  margin-right: 111px;
  text-align: left;
  > p {
    color: var(--color-deep-gray);
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  > strong {
    display: block;
    margin: 10px 0 6px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

const ItemSale = styled.p`
  margin-right: 193px;
`;

const ItemDelivery = styled.p`
  margin-right: 158px;
`;
