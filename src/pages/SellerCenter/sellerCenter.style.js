import styled from "styled-components";
import Plus from "../../assets/icon-plus.svg";

export const Title = styled.div`
  display: flex;
  width: 1920px;
  justify-content: space-between;
  align-items: center;
  padding: 44px 100px 42px;
  box-sizing: border-box;
  > h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    > strong {
    margin-left: 16px;
    font-size: 36px;
    font-weight: 500;
    line-height: 44px;
    color: var(--color-green);
  }
  }
  
  > button {
    display: flex;
    width: 168px;
    padding: 11px 0;
    /* margin-left: auto; */
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: var(--color-green);
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    ::before {
      content: "";
      margin-right: 8px;
      height: 32px;
      width: 32px;
      background: url(${Plus}) no-repeat center / 32px 32px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  width: 1920px;
  padding: 0 100px;
  gap: 30px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 250px;
  padding: 15px 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  :hover {
    background-color: #effff3;
    cursor: pointer;
  }
  :first-child {
    color: white;
    background-color: var(--color-green);
  }
`;

export const ProductBox = styled.div`
  width: 1440px;
  height: 884px;
  background: #f2f2f2;
  border: 1px solid var(--color-light-gray);
  border-radius: 5px;
`;

export const ItemHeader = styled.ul`
  display: flex;
  border-bottom: 1px solid var(--color-light-gray);
  padding: 18px 53px 18px 366px;
  border-radius: 5px 5px 0 0;
  background-color: white;
  > li {
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    :first-child {
      margin-right: 473px;
    }
    :nth-child(2) {
      margin-right: 240px;
    }
    :last-child {
      margin-left: 106px;
    }
  }
`;

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
