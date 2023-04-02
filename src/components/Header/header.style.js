import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoImage from "../../assets/Logo-hodu.png";
import CartIcon from "../../assets/icon-shopping-cart.svg";
import CartIcon2 from "../../assets/icon-shopping-cart-2.svg";
import UserIcon from "../../assets/icon-user.svg";
import UserIcon2 from "../../assets/icon-user-2.svg";
import SearchIcon from "../../assets/icon-search.svg";
import ShoppingBag from "../../assets/icon-shopping-bag.svg";

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
  width: ${(props) =>
    props.width === "50" ? "50px" : props.width === "56" ? "56px" : "46px"};
  text-align: center;
  flex-direction: column;
  margin-left: auto;
  color: ${(props) =>
    props.modal === true ? "var(--color-green)" : "var(--color-deep-gray)"};
  > button {
    width: 32px;
    height: 32px;
    margin: 0 auto;
    margin-bottom: 4px;
    border: none;
    background-color: transparent;
    :active + span {
      color: var(--color-green);
    }
  }
  :last-child {
    margin-left: 26px;
  }
  > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const CartBtn = styled.button`
  background: url(${CartIcon}) no-repeat center / contain;
  :active {
    background: url(${CartIcon2}) no-repeat center / contain;
  }
`;

export const UserBtn = styled.button`
  background: ${(props) =>
    props.modal === true
      ? `url(${UserIcon2}) no-repeat center / contain`
      : `url(${UserIcon}) no-repeat center / contain`};
  :active {
    background: url(${UserIcon2}) no-repeat center / contain;
  }
`;

export const SellerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  padding: 11px 0;
  margin-left: 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  color: white;
  background-color: var(--color-green);
  ::before {
    content: "";
    margin-right: 8px;
    height: 32px;
    width: 32px;
    background: url(${ShoppingBag}) no-repeat center / 32px 32px;
  }
`;
