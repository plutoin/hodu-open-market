import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoImage from "../../assets/Logo-hodu.png";
import CartIcon from "../../assets/icon-shopping-cart.svg";
import UserIcon from "../../assets/icon-user.svg";
import SearchIcon from "../../assets/icon-search.svg";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  padding: 22px 0;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  white-space: nowrap;
  background-color: white;
  z-index: 10;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
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

export const LogoBtn = styled(Link)`
  width: 124px;
  height: 38px;
  margin-right: 30px;
  border: none;
  background-color: transparent;
  background-image: url(${LogoImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BtnContainer = styled.div`
  position: relative;
  display: flex;
  width: 50px;
  text-align: center;
  flex-direction: column;
  margin-left: auto;
  > a,
  > button {
    width: 32px;
    height: 32px;
    margin: 0 auto;
    margin-bottom: 4px;
  }
  > button {
    border: none;
    background-color: transparent;
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
  background: url(${CartIcon}) no-repeat center / contain;
`;

export const UserBtn = styled(Link)`
  background: url(${UserIcon}) no-repeat center / contain;
`;
