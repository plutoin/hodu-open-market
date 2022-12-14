import styled from "styled-components";

import deleteIcon from "../../../assets/icon-delete.svg";

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 20px 30px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  box-sizing: border-box;
  > input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
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
  > img {
    width: 160px;
    height: 160px;
    margin: 0 36px 0 40px;
    object-fit: cover;
    border-radius: 10px;
    background-color: #e0e0e0;
  }
`;

export const ItemInfo = styled.div`
  width: 418px;
  margin-right: 48px;
  > span {
    display: block;
    color: var(--color-deep-gray);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }
  > strong {
    display: block;
    margin: 10px 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
  > p {
    margin-bottom: 40px;
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ItemPrice = styled.div`
  margin-left: 142px;
  text-align: center;
  > p {
    margin-bottom: 26px;
    color: #eb5757;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    text-align: center;
  }
  > button {
    width: 130px;
    padding: 10px 0;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: var(--color-green);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
  background-image: url(${deleteIcon});
  cursor: pointer;
`;
