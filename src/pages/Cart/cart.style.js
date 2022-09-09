import styled from "styled-components";

export const CartSection = styled.section`
  width: 1280px;
  margin: 0 auto;
  padding-bottom: 160px;
  text-align: center;
  h1 {
    padding: 54px 0 52px;
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    text-align: center;
  }
  > button {
    width: 220px;
    margin-top: 40px;
    padding: 19px 0;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: var(--color-green);
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  }
`;

export const CartHeader = styled.div`
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
