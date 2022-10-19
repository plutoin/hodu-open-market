import React from "react";
import { useHistory, Link } from "react-router-dom";

import HeaderForm from "../../components/JoinForm/HeaderForm";

import {
  Container,
  LogoBtn,
  LoginContainer,
  LoginForm,
  LoginButton,
} from "./login.style";

export default function Login() {
  const history = useHistory();

  const home = () => {
    history.push("/");
  };

  return (
    <Container>
      <h1 className="ir">로그인 페이지</h1>
      <LogoBtn onClick={home}></LogoBtn>
      <LoginContainer>
        <HeaderForm buyer="구매회원 로그인" seller="판매회원 로그인" />
        <LoginForm>
          <input type="id" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <LoginButton>로그인</LoginButton>
        </LoginForm>
      </LoginContainer>
      <Link to="/join">회원가입</Link>
      <Link to="#/">비밀번호 찾기</Link>
    </Container>
  );
}
