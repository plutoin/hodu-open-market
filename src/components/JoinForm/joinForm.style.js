import styled from "styled-components";

import CheckBox_empty from "../../assets/check-box.svg";
import CheckBox_fill from "../../assets/check-fill-box.svg";
import Check_off from "../../assets/icon-check-off.svg";
import Check_on from "../../assets/icon-check-on.svg";

export const JoinContainer = styled.div`
  width: 550px;
  margin: 0 auto;
  padding-bottom: 110px;
  background: white;
  box-sizing: border-box;
`;

export const JoinForm = styled.form`
  position: relative;
  width: 550px;
  padding: 40px 35px 36px;
  box-sizing: border-box;
  border: 1px solid var(--color-light-gray);
  border-top: none;
  border-radius: 0 0 10px 10px;
  background-color: white;
  text-align: left;
  box-sizing: border-box;
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  > input,
  select {
    width: 100%;
    margin-bottom: 12px;
    padding: 17px 16px;
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
  #email_1,
  #email_2 {
    width: calc((100% - 39px) / 2);
  }
  #userID,
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

export const PasswordInput = styled.input`
  background: url(${(props) => (props.checked ? Check_on : Check_off)})
    no-repeat right;
  background-size: 28px 28px;
  background-origin: content-box;
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

export const SellerCodeLabel = styled.label`
  margin-top: 50px;
`;

export const JoinButton = styled.button`
  width: 480px;
  padding: 19px 0;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: white;
  background-color: var(--color-green);
  :disabled {
    background-color: var(--color-light-gray);
  }
`;

export const ErrorMsg = styled.p`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--color-red);
`;
