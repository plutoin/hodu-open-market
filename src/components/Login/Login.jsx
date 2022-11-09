import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { setCookie } from "../../Cookie";
import AxiosInstance from "../../Axios";
import HeaderForm from "../JoinForm/HeaderForm";

import {
  Container,
  LogoBtn,
  LoginContainer,
  LoginForm,
  LoginButton,
} from "./login.style";

export default function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [userPW, setUserPW] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (userName === "" || userPW === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [userName, userPW]);

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeUserPW = (e) => {
    setUserPW(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      if (isEmpty === true) {
        alert("아이디와 비밀번호를 입력해 주세요!");
      } else {
        onClickLogin();
      }
    }
  };

  const onClickLogin = async (e) => {
    try {
      const res = await AxiosInstance.post("accounts/login/", {
        username: userName,
        password: userPW,
        login_type: "BUYER",
      });

      if (res.data.token) {
        setCookie("token", `JWT ${res.data.token}`, {
          path: "/",
          sameSite: "strict",
        });
      }

      home();
    } catch {
      console.log("ERROR!");
      if (isEmpty === true) {
        alert("아이디와 비밀번호를 입력해 주세요!");
      } else {
        alert("아이디와 비밀번호가 일치하지 않습니다.");
      }
    }
  };

  const home = () => {
    history.push("/");
  };

  return (
    <Container>
      <h1 className="ir">로그인 페이지</h1>
      <LogoBtn onClick={home}></LogoBtn>
      <LoginContainer>
        <HeaderForm buyer="구매회원 로그인" seller="판매회원 로그인" />
        <LoginForm isEmpty={isEmpty}>
          <input
            type="id"
            placeholder="아이디"
            onChange={onChangeUserName}
            onKeyPress={handleOnKeyPress}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={onChangeUserPW}
            onKeyPress={handleOnKeyPress}
          />
          <LoginButton
            onClick={onClickLogin}
            style={
              isEmpty
                ? { backgroundColor: "var(--color-light-gray)" }
                : { backgroundColor: "var(--color-green)" }
            }
          >
            로그인
          </LoginButton>
        </LoginForm>
      </LoginContainer>
      <Link to="/join">회원가입</Link>
      <Link to="#/">비밀번호 찾기</Link>
    </Container>
  );
}
