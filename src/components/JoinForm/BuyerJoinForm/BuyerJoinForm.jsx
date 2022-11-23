import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

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
        "password2",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }

    const phonenum = data.phonenum1 + data.phonenum2 + data.phonenum3;

    onClickJoin(data, phonenum);
  };

  const home = () => {
    history.push("/");
  };

  const onClickJoin = async (data, phonenum) => {
    try {
      const res = await AxiosInstance.post("/accounts/signup/", {
        username: data.id,
        password: data.password,
        password2: data.password2,
        phone_number: phonenum,
        name: data.name,
      });

      console.log(res);
      alert("환영합니다! 로그인해 주세요!");
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
          console.log(data);
        }

        if (error.response.data.username) {
          setError(
            "id",
            {
              message: error.response.data.username[0],
            },
            { shouldFocus: true }
          );
        }

        if (error.response.data.password) {
          setError(
            "password",
            {
              message: error.response.data.password[0],
            },
            { shouldFocus: true }
          );
        }

        if (error.response.data.name) {
          setError(
            "name",
            {
              message: error.response.data.name[0],
            },
            { shouldFocus: true }
          );
        }

        if (error.response.data.phone_number) {
          setError(
            "phonenum2",
            {
              message: error.response.data.phone_number[0],
            },
            { shouldFocus: true }
          );
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
          maxLength="16"
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            minLength: {
              value: 8,
              message: "8글자 이상 입력해 주세요.",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,16}$/,
              message: "8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.",
            },
            maxLength: {
              value: 16,
              message: "16자 이하로 입력해 주세요.",
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
        <select id="phone" className="phone" {...register("phonenum1")}>
          <option>010</option>
          <option>011</option>
          <option>016</option>
          <option>017</option>
          <option>070</option>
        </select>
        <input
          type="text"
          className="phone"
          maxLength="4"
          {...register("phonenum2", {
            pattern: {
              value: /^[0-9]+$/,
              message: "숫자만 입력해 주세요.",
            },
          })}
        />
        <input
          type="text"
          className="phone"
          maxLength="4"
          {...register("phonenum3", {
            pattern: {
              value: /^[0-9]+$/,
              message: "숫자만 입력해 주세요.",
            },
          })}
        />
        {errors.phonenum2 && <ErrorMsg>{errors.phonenum2?.message}</ErrorMsg>}
        {errors.phonenum3 && <ErrorMsg>{errors.phonenum3?.message}</ErrorMsg>}

        <label htmlFor="email_1">이메일</label>
        <input id="email_1" type="text" />
        <span className="at">@</span>
        <label htmlFor="email_2" className="ir">
          이메일
        </label>
        <input id="email_2" type="text" />
        {location.pathname === "/join/seller" ? <SellerJoinForm /> : null}
        <CheckBoxContainer>
          <input id="check" type="checkbox" />
          <label htmlFor="check"></label>
          <span>
            호두샵의 <strong>이용약관</strong> 및{" "}
            <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고
            동의합니다.
          </span>
        </CheckBoxContainer>
        <JoinButton type="submit" onClick={onClickJoin}>
          가입하기
        </JoinButton>
      </JoinForm>
    </JoinContainer>
  );
}
