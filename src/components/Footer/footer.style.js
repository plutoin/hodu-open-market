import styled from "styled-components";

export const Container = styled.footer`
  width: 1980px;
  padding: 60px 320px 63px;
  background-color: var(--color-bg);
  font-size: 14px;
  > span {
    display: inline-block;
    width: 631px;
    margin-right: 531px;
    line-height: 18px;
    > a {
      color: black;
      :not(:first-child)::before {
        content: "|";
        margin: 0 14px;
      }
      strong {
        font-weight: 700;
      }
    }
  }
  > a {
    :last-child {
      margin-right: 320px;
    }
    img {
      width: 32px;
      margin-left: 14px;
    }
  }
  address {
    width: 1280px;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid var(--color-light-gray);
    line-height: 24px;
    color: var(--color-deep-gray);
    strong {
      font-weight: 700;
    }
  }
`;
