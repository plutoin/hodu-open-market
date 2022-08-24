import React from "react";
import {
  Container,
  LogoBtn,
  Label,
  BtnContainer,
  CartBtn,
  UserBtn
} from "./header.style";

export default function Header() {
  return (
    <Container>
      <LogoBtn href="/"></LogoBtn>
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
      <BtnContainer>
        <CartBtn to="/"></CartBtn>
        <span>장바구니</span>
      </BtnContainer>
      <BtnContainer>
        <UserBtn to="/"></UserBtn>
        <span>로그인</span>
      </BtnContainer>
    </Container>
  );
}
