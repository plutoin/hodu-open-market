import { Link } from "react-router-dom";
import styled from "styled-components";

import CartIcon from "../../assets/icon-shopping-cart.svg";
import UserIcon from "../../assets/icon-user.svg";
import SearchIcon from "../../assets/icon-search.svg";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  padding: 22px 320px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const Label = styled.label`
  position: relative;
  input {
    width: 400px;
    border-radius: 50px;
    border: 2px solid var(--color-green);
    padding: 13px 22px;
    box-sizing: border-box;
    ::placeholder {
      color: var(--color-deep-gray);
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
    }
  }
  button {
    position: absolute;
    top: 9px;
    right: 22px;
    width: 28px;
    height: 28px;
    border: none;
    background-color: transparent;
    background-image: url(${SearchIcon});
    background-size: contain;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 46px;
  text-align: center;
  flex-direction: column;
  margin-left: auto;
  a {
    width: 32px;
    height: 32px;
    margin: 0 auto;
    margin-bottom: 4px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  :last-child {
    margin-left: 26px;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: var(--color-deep-gray);
  }
`;

export const CartBtn = styled(Link)`
  background-image: url(${CartIcon});
`;

export const UserBtn = styled(Link)`
  background-image: url(${UserIcon});
`;
