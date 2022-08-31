import styled from "styled-components";

import LogoImage from "../../assets/Logo-hodu.png";

export const Container = styled.section`
  text-align: center;
  > a {
    line-height: 20px;
    color: #333;
  }
`;

export const LogoBtn = styled.button`
  width: 238px;
  height: 74px;
  margin: 100px 0 70px;
  border: none;
  background-color: transparent;
  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
`;
