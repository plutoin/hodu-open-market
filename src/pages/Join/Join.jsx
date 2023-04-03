import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, LogoBtn } from "./join.style";

import JoinForm from "../../components/JoinForm/JoinForm";

export default function Join() {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  return (
    <Container>
      <h1 className="ir">로그인 페이지</h1>
      <LogoBtn onClick={home}></LogoBtn>
      <JoinForm />
    </Container>
  );
}
