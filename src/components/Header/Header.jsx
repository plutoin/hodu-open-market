import React, { useState, useRef, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import {
  Container,
  Label,
  LogoBtn,
  BtnContainer,
  CartBtn,
  UserBtn,
  MyPageBtn,
} from "./header.style";

export default function Header() {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const clickOutside = (e) => {
      if (isOpen && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isOpen]);

  return (
    <Container>
      <LogoBtn to="/"></LogoBtn>
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
        <CartBtn to="/cart"></CartBtn>
        <span>장바구니</span>
      </BtnContainer>
      <BtnContainer>
        <UserBtn to="/login"></UserBtn>
        <span>로그인</span>
      </BtnContainer>
      <BtnContainer>
        <MyPageBtn onClick={handleModal} ref={modalRef}></MyPageBtn>
        <span>마이페이지</span>
        {isOpen && <Dropdown />}
      </BtnContainer>
    </Container>
  );
}
