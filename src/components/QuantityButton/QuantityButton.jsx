import React from "react";
import styled from "styled-components";

import Plus from "../../assets/icon-plus-line.svg";
import Minus from "../../assets/icon-minus-line.svg";

const FieldSet = styled.fieldset`
  display: flex;
  padding: 30px 0;
  > input,
  button {
    width: 50px;
    height: 50px;
    background-color: #fff;
    box-sizing: border-box;
  }
  > input {
    border: 1px solid var(--color-light-gray);
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
  }
`;

const MinusButton = styled.button`
  border: 1px solid var(--color-light-gray);
  border-right: none;
  border-radius: 5px 0 0 5px;
  background: url(${Minus}) center/ 20px 20px no-repeat;
`;

const PlusButton = styled.button`
  border: 1px solid var(--color-light-gray);
  border-left: none;
  border-radius: 0 5px 5px 0;
  background: url(${Plus}) center/ 20px 20px no-repeat;
`;

export default function QuantityButton() {
  return (
    <FieldSet>
      <legend className="ir">수량 선택</legend>
      <MinusButton></MinusButton>
      <input type="text" value="1" />
      <PlusButton></PlusButton>
    </FieldSet>
  );
}
