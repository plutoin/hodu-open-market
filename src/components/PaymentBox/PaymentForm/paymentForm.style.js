import styled from "styled-components";
import checkIcon from "../../../assets/icon-check.svg";

export const Container = styled.section`
  margin-top: 98px;
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  h2 {
    padding-bottom: 18px;
    border-bottom: 2px solid var(--color-light-gray);
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }
  > h3 {
    margin-top: 40px;
    padding-bottom: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    border-bottom: 2px solid var(--color-light-gray);
  }
`;

export const WrapperDiv = styled.div`
  padding: 8px 0;
  border-bottom: 2px solid var(--color-light-gray);
  box-sizing: border-box;
  > label {
    display: inline-block;
    width: 170px;
  }
  > input {
    height: 40px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
  }
  > span {
    margin: 0 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
  > button {
    width: 154px;
    margin-left: 10px;
    padding: 10px 0;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: var(--color-green);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Input = styled.input`
  width: 334px;
`;

export const FirstPhoneInput = styled.input`
  width: 80px;
`;

export const PhoneInput = styled.input`
  width: 100px;
`;

export const ZipCode = styled.input`
  width: 170px;
`;

export const Address = styled.input`
  display: block;
  width: 800px;
  margin: 8px 0 0 170px;
`;

export const Message = styled.input`
  width: 800px;
`;

export const FinalCheckDiv = styled.div`
  display: flex;
  margin-top: 70px;
  gap: 40px;
  align-items: baseline;
`;

export const PayForm = styled.form`
  width: 760px;
  padding-bottom: 18px;
  border-bottom: 2px solid var(--color-light-gray);
  > h2 {
    margin-bottom: 18px;
  }
  > label {
    display: inline-block;
    margin: 0 20px 0 10px;
  }
  > input[type="radio"] {
    width: 20px;
    height: 20px;
    vertical-align: sub;
    border-radius: 50%;
    border: 2px solid var(--color-light-gray);
    appearance: none;
    background-color: white;
    :checked {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--color-light-gray);
    }
  }
`;

export const CheckInfoDiv = styled.div`
  width: 480px;
  > h2 {
    border: none;
  }
`;

export const CheckBox = styled.div`
  width: 480px;
  padding: 34px 30px 20px 30px;
  border: 2px solid var(--color-green);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  > div {
    margin-bottom: 12px;
    :last-child {
      margin-bottom: 0;
    }
    > span {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const Price = styled.strong`
  float: right;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  ::after {
    content: " 원";
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--color-deep-gray);
  }
`;

export const PayPriceDiv = styled.div`
  padding-top: 29px;
  border-top: 1px solid var(--color-light-gray);
  > strong {
    float: right;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #eb5757;
  }
`;

export const CheckForm = styled.div`
  padding: 30px 30px 34px;
  border: 2px solid var(--color-green);
  border-top: none;
  border-radius: 0 0 10px 10px;
  background: #f2f2f2;
  text-align: center;
  > button {
    width: 220px;
    margin-top: 30px;
    padding: 19px 0;
    border: none;
    background-color: var(--color-light-gray);
    border-radius: 5px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: white;
  }
  > input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-light-gray);
    appearance: none;
    background-color: white;
    vertical-align: text-bottom;
    :checked {
      position: relative;
      width: 20px;
      height: 20px;
      border: 1px solid var(--color-green);
      background: url(${checkIcon}) no-repeat center / contain;
      background-color: white;
    }
  }
  > label {
    margin-left: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;
