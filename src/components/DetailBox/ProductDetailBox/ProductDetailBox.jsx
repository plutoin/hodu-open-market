import React, { useState } from "react";
import { useSelector } from "react-redux";

import { getCookie } from "../../../Cookie";

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
  const [orderNum, setOrderNum] = useState(1);
  const loginType = getCookie("loginType");

  const detail = useSelector((state) => state.productDetailReducer);

  const price = detail.products.price;
  const stock = detail.products.stock;
  const totalPrice = orderNum * price;

  const minusStock = () => {
    if (orderNum === 1) {
      alert("최수 주문 수량은 1개입니다.");
    } else if (stock > 1 && orderNum > 0) {
      setOrderNum(parseInt(orderNum - 1));
    }
  };

  const plusStock = () => {
    if (stock > orderNum) {
      setOrderNum(parseInt(orderNum + 1));
    }
  };

  function shipping(method, fee) {
    if (method === "DELIVERY" && fee !== 0) {
      return `택배배송 / ${fee.toLocaleString()}원`;
    } else if (method === "PARCEL" && fee !== 0) {
      return `소포배송 / ${fee.toLocaleString()}원`;
    } else if (method === "DELIVERY" && fee === 0) {
      return `택배배송 / 무료배송`;
    } else if (method === "PARCEL" && fee === 0) {
      return `소포배송 / 무료배송`;
    }
  }

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
              <strong>{detail.products.price.toLocaleString()}</strong>원
            </ProductPrice>
            <Shipping>
              {shipping(
                detail.products.shipping_method,
                detail.products.shipping_fee.toLocaleString()
              )}
            </Shipping>
            <QuantityButton
              totalPrice={totalPrice}
              orderNum={orderNum}
              minusStock={minusStock}
              plusStock={plusStock}
              detail={detail?.products}
              loginType={loginType}
              soldOut={stock === 0}
            />
          </DetailDiv>
        </Section>
      )}
      <ProductInfoDiv>
        <input type="radio" id="detail" name="tab" defaultChecked />
        <label htmlFor="detail">상품 상세</label>
        <input type="radio" id="review" name="tab" />
        <label htmlFor="review">리뷰</label>
        <input type="radio" id="Q&A" name="tab" />
        <label htmlFor="Q&A">Q&A</label>
        <input type="radio" id="return" name="tab" />
        <label htmlFor="return">반품/교환 정보</label>
        <div id="content">{detail.products.product_info}</div>
      </ProductInfoDiv>
    </>
  );
}
