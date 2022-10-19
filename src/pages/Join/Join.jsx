import React from "react";
import { useHistory } from "react-router-dom";

import { Container, LogoBtn } from "./join.style";

import BuyerJoinForm from "../../components/JoinForm/BuyerJoinForm/BuyerJoinForm";

export default function Join() {
  const history = useHistory();

  const home = () => {
    history.push("/");
  };

  return (
    <Container>
      <h1 className="ir">로그인 페이지</h1>
      <LogoBtn onClick={home}></LogoBtn>
      <BuyerJoinForm />
    </Container>
  );
}
