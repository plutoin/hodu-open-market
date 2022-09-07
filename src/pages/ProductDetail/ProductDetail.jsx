import React from "react";
import Header from "../../components/Header/Header";
import QuantityButton from "../../components/QuantityButton/QuantityButton";
import Footer from "../../components/Footer/Footer";

import {
  Section,
  ProductImg,
  DetailDiv,
  Company,
  ProductName,
  ProductPrice,
  Shipping,
  ConfirmContainer,
  TotalInfo,
  TotalQuantity,
  TotalPrice,
  BuyButton,
  BasketButton,
  ProductInfoDiv,
} from "./productDetail.style";

export default function ProductDetail() {
  return (
    <>
      <Header />
      <Section>
        <h1 className="ir">상품 상세 페이지</h1>
        <ProductImg src="" alt="" />
        <DetailDiv>
          <Company>우당탕탕 라이캣의 실험실</Company>
          <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
          <ProductPrice>
            <strong>29,000</strong>원
          </ProductPrice>
          <Shipping>택배배송 / 무료배송</Shipping>
          <QuantityButton />
          <ConfirmContainer>
            <TotalInfo>총 상품 금액</TotalInfo>
            <TotalPrice>
              <TotalQuantity>
                총 수량 <strong>1</strong>개
              </TotalQuantity>
              29,000
              <span>원</span>
            </TotalPrice>
          </ConfirmContainer>
          <BuyButton>바로 구매</BuyButton>
          <BasketButton>장바구니</BasketButton>
        </DetailDiv>
      </Section>
      <ProductInfoDiv>
        <button>상품 상세</button>
        <button>리뷰</button>
        <button>Q&A</button>
        <button>반품/교환정보</button>
      </ProductInfoDiv>
      <Footer />
    </>
  );
}
