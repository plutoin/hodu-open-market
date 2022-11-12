import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { setCookie } from "../../Cookie";
import AxiosInstance from "../../Axios";
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
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm({ mode: "onBlur" });

  const onValid = (data) => {
    onClickLogin(data);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  const onClickLogin = async (data) => {
    try {
      const res = await AxiosInstance.post("accounts/login/", {
        username: data.id,
        password: data.password,
        login_type: "BUYER",
      });

      if (res.data.token) {
        setCookie("token", `JWT ${res.data.token}`, {
          path: "/",
          sameSite: "strict",
        });
      }

      home();
    } catch (error) {
      if (error) {
        if (error.response.status === 401) {
          reset();
          setError("password", {
            type: "loginError",
            message: "아이디 또는 비밀번호가 일치하지 않습니다.",
          });
        } else {
          console.error(error);
        }
      }
    }
  };

  const home = () => {
    history.push("/");
  };

  return (
    <Container>
      <h1 className="ir">로그인 페이지</h1>
      <LogoBtn onClick={home} />
      <LoginContainer>
        <HeaderForm buyer="구매회원 로그인" seller="판매회원 로그인" />
        <LoginForm onSubmit={handleSubmit(onValid)}>
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
          <LoginButton onClick={onClickLogin}>로그인</LoginButton>
        </LoginForm>
      </LoginContainer>
      <Link to="/join">회원가입</Link>
      <Link to="#/">비밀번호 찾기</Link>
    </Container>
  );
}
