import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../../auth/useAuth";
import HeaderForm from "../JoinForm/HeaderForm";

import {
  Container,
  LogoBtn,
  LoginContainer,
  LoginForm,
  Input,
  LoginButton,
  ErrorMsg,
} from "./login.style";

export default function Login() {
  const { onClickLogin } = useAuth();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm({ mode: "onBlur" });

  const goToHome = () => {
    history.push("/");
  };

  const onSubmit = handleSubmit((data) => {
    onClickLogin(data, setError, reset, goToHome);
  });

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <Container>
      <h1 className="ir">로그인 페이지</h1>
      <LogoBtn onClick={goToHome} />
      <LoginContainer>
        <HeaderForm buyer="구매회원 로그인" seller="판매회원 로그인" />
        <LoginForm onSubmit={onSubmit}>
          <Input
            type="id"
            placeholder="아이디"
            onKeyPress={handleOnKeyPress}
            {...register("id", {
              required: "아이디를 입력해 주세요.",
            })}
          />
          {errors.id && <ErrorMsg>{errors.id?.message}</ErrorMsg>}
          <Input
            type="password"
            placeholder="비밀번호"
            onKeyPress={handleOnKeyPress}
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
            })}
          />
          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
          <LoginButton onClick={onSubmit}>로그인</LoginButton>
        </LoginForm>
      </LoginContainer>
      <Link to="/join">회원가입</Link>
      <Link to="#/">비밀번호 찾기</Link>
    </Container>
  );
}
