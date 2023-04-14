import styled from "styled-components";

export const ConfirmContainer = styled.div`
  display: flex;
  width: 630px;
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
  color: white;
  background-color: var(--color-green);
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  :disabled {
    background-color: var(--color-light-gray);
  }
`;

export const CartButton = styled.button`
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
  :disabled {
    background-color: var(--color-light-gray);
  }
`;
