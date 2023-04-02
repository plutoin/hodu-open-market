import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { getCookie } from "../../Cookie";
import Dropdown from "../Dropdown/Dropdown";

import {
  Container,
  Wrapper,
  Label,
  LogoBtn,
  BtnContainer,
  CartBtn,
  UserBtn,
  SellerBtn,
} from "./header.style";

export default function Header() {
  const modalRef = useRef();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const token = getCookie("token");
  const loginType = getCookie("loginType");

  const handleModal = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <LogoBtn to="/" />
        <Label htmlFor="search">
          <input
            id="search"
            type="text"
            placeholder="상품을 검색해 보세요!"
          ></input>
          <button>
            <span className="ir">검색 버튼</span>
          </button>
        </Label>
        {loginType === "SELLER" ? (
          <>
            <BtnContainer modal={isOpen} width="56">
              <UserBtn onClick={handleModal} ref={modalRef} modal={isOpen} />
              <span>마이페이지</span>
              {isOpen && <Dropdown />}
            </BtnContainer>
            <SellerBtn>판매자 센터</SellerBtn>
          </>
        ) : (
          <>
            <BtnContainer>
              {token ? (
                <CartBtn onClick={() => navigate("/cart")} />
              ) : (
                <CartBtn onClick={() => navigate("/login")} />
              )}
              <span>장바구니</span>
            </BtnContainer>
            {token ? (
              <BtnContainer modal={isOpen} width="56">
                <UserBtn onClick={handleModal} ref={modalRef} modal={isOpen} />
                <span>마이페이지</span>
                {isOpen && <Dropdown />}
              </BtnContainer>
            ) : (
              <BtnContainer width="56">
                <UserBtn onClick={() => navigate("/login")} />
                <span>로그인</span>
              </BtnContainer>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  );
}
