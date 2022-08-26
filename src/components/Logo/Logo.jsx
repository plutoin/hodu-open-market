import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoImage from "../../assets/Logo-hodu.png";

export const LogoBtn = styled(Link)`
  width: ${(props) =>
    props.size === "large" ? "124px" : props.size === "small" ? "124px" : null};
  height: 38px;
  padding-right: 30px;
  border: none;
  background-color: transparent;
  background-image: url(${LogoImage});
  background-size: 124px 38px;
  background-repeat: no-repeat;
`;

export default function Logo({ size }) {
  return <LogoBtn size={size} />;
}
