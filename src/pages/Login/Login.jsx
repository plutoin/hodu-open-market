import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  Container,
  LogoBtn,
  LoginContainer,
  LoginForm,
  LoginButton
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
        <button>구매회원 로그인</button>
        <button>판매회원 로그인</button>
        <LoginForm>
          <input type="id" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <LoginButton>로그인</LoginButton>
        </LoginForm>
      </LoginContainer>
      <Link to="/join">회원가입</Link>
      <Link>비밀번호 찾기</Link>
    </Container>
  );
}
