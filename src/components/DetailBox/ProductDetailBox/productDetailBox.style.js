import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 174px 0 140px;
  gap: 50px;
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
  object-fit: cover;
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
