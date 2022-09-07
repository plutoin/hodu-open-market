import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > img {
    width: 270px;
  }
  button {
    display: inline-block;
    width: calc((100% - 14px) / 2);
    padding: 19px 0;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    box-sizing: border-box;
  }
`;

export const Div = styled.div`
  width: 414px;
  > strong {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
  }
  > p {
    margin: 20px 0 40px;
    color: var(--color-deep-gray);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const MainButton = styled.button`
  color: #fff;
  background-color: var(--color-green);
  border: none;
`;

export const PrevButton = styled.button`
  margin-left: 14px;
  color: black;
  background-color: #fff;
  border: 1px solid #c4c4c4;
`;
