import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import QuantityButton from "../../components/QuantityButton/QuantityButton";

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
} from "./productDetailBox.style";

export default function ProductDetailBox() {
  const history = useHistory();
  const detail = useSelector((state) => state.productDetailReducer);

  return (
    <>
      <Section>
        <h1 className="ir">상품 상세 페이지</h1>
        <ProductImg src={detail.products.image} alt="상품 이미지" />
        <DetailDiv>
          <Company>{detail.products.store_name}</Company>
          <ProductName>{detail.products.product_name}</ProductName>
          <ProductPrice>
            <strong>{detail.products.price}</strong>원
          </ProductPrice>
          <Shipping>택배배송 / 무료배송</Shipping>
          <QuantityButton />
          <ConfirmContainer>
            <TotalInfo>총 상품 금액</TotalInfo>
            <TotalPrice>
              <TotalQuantity>
                총 수량 <strong>1</strong>개
              </TotalQuantity>
              {detail.products.price}
              <span>원</span>
            </TotalPrice>
          </ConfirmContainer>
          <BuyButton onClick={() => history.push("/payment")}>
            바로 구매
          </BuyButton>
          <BasketButton onClick={() => history.push("/cart")}>
            장바구니
          </BasketButton>
        </DetailDiv>
      </Section>
      <ProductInfoDiv>
        <button>상품 상세</button>
        <button>리뷰</button>
        <button>Q&A</button>
        <button>반품/교환정보</button>
      </ProductInfoDiv>
    </>
  );
}
