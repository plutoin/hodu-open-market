import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 80px 0 140px;
`;

export const DetailDiv = styled.div`
  width: 630px;
  > button {
    border-radius: 5px;
  }
`;

export const ProductImg = styled.img`
  width: 600px;
  height: 600px;
  border: 1px solid lightgray;
  margin-right: 50px;
`;

export const Company = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  color: var(--color-deep-gray);
`;

export const ProductName = styled.strong`
  display: block;
  margin: 16px 0 20px;
  font-size: 36px;
  font-weight: 400;
  line-height: 45px;
`;

export const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  > strong {
    margin-right: 2px;
    font-size: 36px;
    font-weight: 700;
    line-height: 45px;
  }
`;

export const Shipping = styled.p`
  margin-top: 143px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--color-light-gray);
  color: var(--color-deep-gray);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

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

export const ProductInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 500px;
  white-space: nowrap;
  > button {
    width: 320px;
    padding: 19px 0 18px;
    border: none;
    background-color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    box-sizing: border-box;
    border-bottom: 6px solid #e0e0e0;
    color: var(--color-deep-gray);
    :focus {
      border-bottom: 6px solid var(--color-green);
      color: var(--color-green);
    }
  }
`;
