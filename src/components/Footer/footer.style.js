import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 60px 320px 63px;
  background-color: var(--color-bg);
  font-size: 14px;
  address {
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

export const InfoContainer = styled.span`
  color: black;
  line-height: 18px;
  > a {
    :not(:first-child)::before {
      content: "|";
      margin: 0 14px;
    }
    > strong {
      font-weight: 700;
    }
  }
`;

export const SocialLinkContainer = styled.span`
  float: right;
  > a {
    width: 32px;
    height: 32px;
    margin-left: 14px;
    > img {
      width: 32px;
    }
  }
`;
