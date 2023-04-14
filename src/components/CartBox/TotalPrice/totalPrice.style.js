import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  padding: 46px 75px 42px;
  border-radius: 10px;
  background-color: #f2f2f2;
  p {
    margin-bottom: 0ex;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
  strong {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    > span {
      margin-left: 2px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  img {
    width: 34px;
    height: 34px;
    margin: 0 96px;
    padding: 8px;
    border-radius: 100%;
    background-color: white;
    box-sizing: border-box;
  }
`;

export const TotalContainer = styled.div`
  margin-left: 229px;
  > strong {
    color: var(--color-red);
  }
`;
