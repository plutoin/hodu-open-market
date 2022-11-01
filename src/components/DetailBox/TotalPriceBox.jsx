import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function TotalPriceBox({ stock, orderNum, totalPrice }) {
  const history = useHistory();
  return (
    <>
      <ConfirmContainer>
        <TotalInfo>총 상품 금액</TotalInfo>
        <TotalPrice>
          <TotalQuantity>
            총 수량 <strong>{orderNum}</strong>개
          </TotalQuantity>
          {totalPrice}
          <span>원</span>
        </TotalPrice>
      </ConfirmContainer>
      <BuyButton onClick={() => history.push("/payment")}>바로 구매</BuyButton>
      <BasketButton onClick={() => history.push("/cart")}>
        장바구니
      </BasketButton>
    </>
  );
}

export const ConfirmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 32px 0 22px;
  border-top: 2px solid var(--color-light-gray);
  white-space: nowrap;
`;

export const TotalInfo = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
`;

export const TotalQuantity = styled.span`
  color: var(--color-deep-gray);
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  > strong {
    color: var(--color-green);
  }
  ::after {
    content: "|";
    position: relative;
    margin: 0 12px;
    color: var(--color-light-gray);
    font-weight: 400;
  }
`;

export const TotalPrice = styled.strong`
  color: var(--color-green);
  font-size: 36px;
  font-weight: 700;
  line-height: 45px;
  > span {
    margin-left: 2px;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
  }
`;

export const BuyButton = styled.button`
  width: calc((100% - 14px) / 1.5);
  margin-right: 14px;
  padding: 19px 0;
  border: none;
  color: #fff;
  background-color: var(--color-green);
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
`;

export const BasketButton = styled.button`
  width: calc((100% - 14px) / 3);
  padding: 19px 0;
  border: none;
  color: #fff;
  background-color: var(--color-deep-gray);
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
`;
