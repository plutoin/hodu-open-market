import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { AxiosInstance } from "../../Axios";
import { removeCookie } from "../../Cookie";

export default function Dropdown(props) {
  const navigate = useNavigate();
  function handleModal(e) {
    e.stopPropagation();
    props.setModal(false);
  }

  const handleLogout = async () => {
    try {
      await AxiosInstance.post("accounts/logout/");
      removeCookie("token");
      navigate("/");
    } catch (error) {
      return error.response.data;
    }
  };

  return (
    <Container>
      <li onClick={handleModal}>마이페이지</li>
      <li onClick={handleLogout}>로그아웃</li>
    </Container>
  );
}

const Container = styled.ul`
  position: absolute;
  top: 70px;
  left: -90%;
  width: 130px;
  padding: 10px;
  border: 1px solid var(--color-light-gray);
  border-radius: 10px;
  background-color: white;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.3));
  > li {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-deep-gray);
    background-color: white;
    box-sizing: border-box;
    cursor: pointer;
    :last-child {
      margin-bottom: 0;
    }
    :hover {
      border: 1px solid var(--color-deep-gray);
      color: black;
      box-sizing: border-box;
    }
  }
  :before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    left: 65px;
    top: -5px;
    background-color: white;
    transform: rotate(45deg);
    border-radius: 4px;
    z-index: -10;
  }
`;
