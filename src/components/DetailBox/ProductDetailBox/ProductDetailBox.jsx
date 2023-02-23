import React from "react";
import { useSelector } from "react-redux";

import QuantityButton from "../../QuantityButton/QuantityButton";
import SkeletonDetail from "./SkeletonDetail";

import {
  Section,
  ProductImg,
  DetailDiv,
  Company,
  ProductName,
  ProductPrice,
  Shipping,
  ProductInfoDiv,
} from "./productDetailBox.style";

export default function ProductDetailBox({ loading }) {
  const detail = useSelector((state) => state.productDetailReducer);

  return (
    <>
      {loading ? (
        <SkeletonDetail />
      ) : (
        <Section>
          <h1 className="ir">상품 상세 페이지</h1>
          <ProductImg src={detail.products.image} alt="상품 이미지" />
          <DetailDiv>
            <Company>{detail.products.store_name}</Company>
            <ProductName>{detail.products.product_name}</ProductName>
            <ProductPrice>
              <strong>{detail.products.price}</strong>원
            </ProductPrice>
            <Shipping>
              {detail.products.shipping_method} / 배송비{" "}
              {detail.products.shipping_fee}
            </Shipping>
            <QuantityButton />
          </DetailDiv>
        </Section>
      )}
      <ProductInfoDiv>
        <button>상품 상세</button>
        <button>리뷰</button>
        <button>Q&A</button>
        <button>반품/교환정보</button>
      </ProductInfoDiv>
    </>
  );
}
