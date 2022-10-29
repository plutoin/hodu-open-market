import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 0 63px;
  background-color: var(--color-bg);
  font-size: 14px;
  white-space: nowrap;
`;

export const InfoContainer = styled.span`
  width: 1280px;
  margin: 0 auto;
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

export const Address = styled.address`
  width: 1280px;
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid var(--color-light-gray);
  line-height: 24px;
  color: var(--color-deep-gray);
  strong {
    font-weight: 700;
  }
`;
