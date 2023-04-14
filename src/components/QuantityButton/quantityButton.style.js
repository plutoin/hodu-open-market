import styled from "styled-components";

import Plus from "../../assets/icon-plus-line.svg";
import Minus from "../../assets/icon-minus-line.svg";

export const FieldSet = styled.fieldset`
  display: flex;
  padding: 30px 0;
  text-align: center;
  > span,
  button {
    width: 50px;
    height: 50px;
    background-color: white;
    box-sizing: border-box;
  }
  > span {
    padding-top: 13px;
    border: 1px solid var(--color-light-gray);
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
  }
`;

export const MinusButton = styled.button`
  border: 1px solid var(--color-light-gray);
  border-right: none;
  border-radius: 5px 0 0 5px;
  background: url(${Minus}) center/ 20px 20px no-repeat;
`;

export const PlusButton = styled.button`
  border: 1px solid var(--color-light-gray);
  border-left: none;
  border-radius: 0 5px 5px 0;
  background: url(${Plus}) center/ 20px 20px no-repeat;
`;
