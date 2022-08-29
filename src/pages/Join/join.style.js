import styled from "styled-components";

import LogoImage from "../../assets/Logo-hodu.png";
import CheckBox_empty from "../../assets/check-box.svg";
import CheckBox_fill from "../../assets/check-fill-box.svg";

export const Container = styled.section`
  text-align: center;
  > a {
    line-height: 20px;
    color: #333;
  }
`;

export const LogoBtn = styled.button`
  width: 238px;
  height: 74px;
  margin: 100px 0 70px;
  border: none;
  background-color: transparent;
  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const JoinContainer = styled.div`
  width: 550px;
  margin: 0 auto;
  margin-bottom: 30px;
  background: white;
  box-sizing: border-box;
  .joinTab {
    width: 50%;
    padding: 20px 0 38px;
    background-color: white;
    border: 1px solid var(--color-light-gray);
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    background-color: white;
    :nth-child(2) {
      background-color: var(--color-bg);
    }
  }
`;

export const JoinForm = styled.form`
  position: relative;
  width: 550px;
  margin-top: -20px;
  padding: 40px 35px 36px;
  box-sizing: border-box;
  border: 1px solid var(--color-light-gray);
  border-radius: 10px;
  background-color: white;
  text-align: left;
  box-sizing: border-box;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: -1px;
    width: 50%;
    height: 10px;
    background-color: white;
  }
  > input,
  select {
    width: 100%;
    margin-bottom: 12px;
    padding: 17px 0;
    border: 1px solid var(--color-light-gray);
    border-radius: 5px;
    font-weight: 400;
    line-height: 20px;
    box-sizing: border-box;
    :focus {
      border: 1px solid var(--color-green);
    }
  }
  > label {
    display: block;
    margin-bottom: 10px;
    line-height: 20px;
    color: var(--color-deep-gray);
  }
  #userPWCheck,
  #email {
    margin-bottom: 50px;
  }
  #email {
    width: calc((100% - 39px) / 2);
  }
  #userId,
  #sellerCode {
    width: 346px;
    margin-right: 10px;
  }
  .at {
    margin: 0 11px;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: var(--color-deep-gray);
  }
  .phone {
    width: calc((100% - 24px) / 3);
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    + .phone {
      margin-left: 12px;
    }
  }
  .check {
    width: 122px;
    padding: 17px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: var(--color-green);
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 34px 35px;
  text-align: left;
  > input {
    display: none;
    + label {
      content: "";
      width: 16px;
      height: 16px;
      margin-top: 1px;
      background: url(${CheckBox_empty}) center/ contain no-repeat;
      cursor: pointer;
    }
    :checked + label {
      background: url(${CheckBox_fill}) center/ contain no-repeat;
      cursor: pointer;
    }
  }
  > span {
    vertical-align: top;
    color: var(--color-deep-gray);
    > strong {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      text-decoration: underline;
    }
  }
`;

export const JoinButton = styled.button`
  width: 100%;
  margin-top: 36px;
  padding: 19px 0;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: white;
  background-color: var(--color-light-gray);
`;
