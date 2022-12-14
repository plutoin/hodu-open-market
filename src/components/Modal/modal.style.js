import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  padding: 60px 0px 40px;
  align-items: center;
  text-align: center;
  background: white;
  border: 1px solid var(--color-light-gray);
  box-sizing: border-box;
  > div > button {
    width: 100px;
    padding: 10px 0;
    gap: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    box-sizing: border-box;
  }
`;

export const ModifyBtn = styled.button`
  margin-right: 10px;
  border: none;
  color: white;
  background-color: var(--color-green);
`;

export const CancelBtn = styled.button`
  border: 1px solid var(--color-light-gray);
  color: var(--color-deep-gray);
  background-color: white;
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
