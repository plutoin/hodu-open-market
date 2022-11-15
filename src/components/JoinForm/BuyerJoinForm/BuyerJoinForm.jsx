import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { setCookie } from "../../../Cookie";
import AxiosInstance from "../../../Axios";
import SellerJoinForm from "../SellerJoinForm";
import HeaderForm from "../HeaderForm";

import {
  JoinContainer,
  JoinForm,
  JoinButton,
  CheckBoxContainer,
  ErrorMsg,
} from "./buyerJoinForm.style";

export default function BuyerJoinForm() {
  const location = useLocation();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm({ mode: "onChange" });

  const onValid = (data) => {
    if (data.password !== data.password2) {
      setError(
        "password",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }
    onClickJoin(data);
  };

  const home = () => {
    history.push("/");
  };

  const onClickJoin = async (data) => {
    try {
      const res = await AxiosInstance.post("accounts/signup/", {
        username: data.id,
        password: data.password,
        password2: data.password2,
        phone_number: data.phonenum,
        name: data.name,
      });

      if (res.data.token) {
        setCookie("token", `JWT ${res.data.token}`, {
          path: "/",
          sameSite: "strict",
        });
      }

      // home();
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

  return (
    <JoinContainer>
      <HeaderForm seller="판매회원가입" buyer="구매회원가입" />
      <JoinForm onSubmit={handleSubmit(onValid)}>
        <label htmlFor="userId">아이디</label>
        <input
          id="userId"
          type="id"
          {...register("id", {
            required: "아이디를 입력해 주세요.",
          })}
        />
        <button className="check">중복확인</button>
        {errors.id && <ErrorMsg>{errors.id?.message}</ErrorMsg>}

        <label htmlFor="userPW">비밀번호</label>
        <input
          id="userPW"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            minLength: {
              value: 8,
              message: "8글자 이상 입력해 주세요.",
            },
            pattern: {
              value: /^[A-za-z0-9가-힣]{8,10}$/,
              message: "비밀번호는 8자 이상, 영소문자를 포함해야 합니다.",
            },
          })}
        />
        {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}

        <label htmlFor="userPWCheck">비밀번호 재확인</label>
        <input
          id="userPWCheck"
          type="password"
          {...register("password2", {
            required: "비밀번호가 일치하지 않습니다.",
          })}
        />
        {errors.password2 && <ErrorMsg>{errors.password2?.message}</ErrorMsg>}

        <label htmlFor="userName">이름</label>
        <input
          id="userName"
          type="text"
          {...register("name", {
            required: "이름을 입력해 주세요.",
          })}
        />
        {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}

        <label htmlFor="userNumber">휴대폰번호</label>
        <select id="phone" className="phone">
          <option>010</option>
          <option>011</option>
          <option>016</option>
          <option>017</option>
          <option>070</option>
        </select>
        <input
          type="text"
          title="전화번호 중간자리"
          className="phone"
          maxLength="4"
        />
        <input
          type="text"
          title="전화번호 끝자리"
          className="phone"
          maxLength="4"
        />

        <label htmlFor="email_1">이메일</label>
        <input id="email_1" type="text" />
        <span className="at">@</span>
        <label htmlFor="email_2" className="ir">
          이메일
        </label>
        <input id="email_2" type="text" />
        {location.pathname === "/join/seller" ? <SellerJoinForm /> : null}
      </JoinForm>

      <CheckBoxContainer>
        <input id="check" type="checkbox" />
        <label htmlFor="check"></label>
        <span>
          호두샵의 <strong>이용약관</strong> 및{" "}
          <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고 동의합니다.
        </span>
      </CheckBoxContainer>

      <JoinButton type="submit" onClick={onClickJoin}>
        가입하기
      </JoinButton>
    </JoinContainer>
  );
}
