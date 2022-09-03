import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Tab = styled.div`
  a {
    display: inline-block;
    width: 50%;
    padding: 20px 0px;
    border: 1px solid var(--color-light-gray);
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    box-sizing: border-box;
  }
`;

export default function HeaderForm({ buyer, seller }) {
  const location = useLocation();

  return (
    <Tab>
      <Link
        to={location.pathname.includes("/join") ? "/join" : "/login"}
        style={
          location.pathname === "/join"
            ? { backgroundColor: "white" }
            : location.pathname !== "/login"
            ? { backgroundColor: "#f2f2f2" }
            : null
        }
      >
        {buyer}
      </Link>
      <Link
        to={location.pathname.includes("/join") ? "/join/seller" : "/login"}
        style={
          location.pathname !== "/join/seller"
            ? { backgroundColor: "#f2f2f2" }
            : null
        }
      >
        {seller}
      </Link>
    </Tab>
  );
}
