import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../../auth/useAuth";

import {
  Container,
  Tab,
  LogoBtn,
  LoginContainer,
  LoginForm,
  Input,
  LoginButton,
  ErrorMsg,
} from "./login.style";

export default function Login() {
  const { onClickLogin } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
    setError,
    reset,
  } = useForm({ mode: "onBlur" });

  const [isSelected, setIsSelected] = useState(true);
  const [loginType, setLoginType] = useState("BUYER");

  const goToHome = () => {
    navigate("/");
  };

  const onSubmit = handleSubmit((data) => {
    onClickLogin(data, loginType, setError, reset, goToHome);
  });

  return (
    <Container>
      <h1 className="ir">로그인 페이지</h1>
      <LogoBtn onClick={goToHome} />
      <LoginContainer>
        <ul>
          <Tab
            isSelected={isSelected}
            onClick={() => {
              setIsSelected(true);
              setLoginType("BUYER");
            }}
          >
            구매회원 로그인
          </Tab>
          <Tab
            isSelected={!isSelected}
            onClick={() => {
              setIsSelected(false);
              setLoginType("SELLER");
            }}
          >
            판매회원 로그인
          </Tab>
        </ul>
        <LoginForm onSubmit={onSubmit}>
          <Input
            type="id"
            placeholder="아이디"
            {...register("id", {
              required: "아이디를 입력해 주세요.",
            })}
          />
          {errors.id && <ErrorMsg>{errors.id?.message}</ErrorMsg>}
          <Input
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
            })}
          />
          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
          <LoginButton disabled={isSubmitting} onClick={onSubmit}>
            로그인
          </LoginButton>
        </LoginForm>
      </LoginContainer>
      <Link to="/join">회원가입</Link>
      <Link to="#/">비밀번호 찾기</Link>
    </Container>
  );
}
