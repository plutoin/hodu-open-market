import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  LogoBtn,
  LoginContainer,
  LoginForm,
  LoginButton
} from "./login.style";

import Home from "../Home/Home";

export default function Login() {
  return (
    <Container>
      <h1 className="ir">로그인 페이지</h1>
      <LogoBtn onClick={Home}></LogoBtn>
      <LoginContainer>
        <button>구매회원 로그인</button>
        <button>판매회원 로그인</button>
        <LoginForm>
          <input type="id" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <LoginButton>로그인</LoginButton>
        </LoginForm>
      </LoginContainer>
      <Link>회원가입</Link>
      <Link>비밀번호 찾기</Link>
    </Container>
  );
}
