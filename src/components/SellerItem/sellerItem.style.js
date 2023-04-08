import styled from "styled-components";

export const ItemCard = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding: 16px 30px 17px;
  align-items: center;
  border-bottom: 1px solid var(--color-light-gray);
  background-color: white;
  box-sizing: border-box;
  > img {
    height: 70px;
    width: 70px;
    margin-right: 30px;
    border-radius: 100px;
  }
  > div {
    width: 500px;
    margin-right: 267px;
    > strong {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
    > p {
      margin-top: 10px;
      color: var(--color-deep-gray);
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  > span {
    width: 293px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
  }
  > button {
    width: 80px;
    padding: 10px 0;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const EditBtn = styled.button`
  margin-right: 60px;
  border: none;
  color: white;
  background-color: var(--color-green);
`;

export const DeleteBtn = styled.button`
  border: 1px solid var(--color-light-gray);
  background-color: white;
`;
