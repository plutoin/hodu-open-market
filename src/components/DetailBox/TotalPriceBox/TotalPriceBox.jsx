import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AxiosInstance } from "../../../Axios";
import { getCookie } from "../../../Cookie";

import {
  ConfirmContainer,
  TotalInfo,
  TotalPrice,
  TotalQuantity,
  BuyButton,
  CartButton,
} from "./totalPriceBox.style";

export default function TotalPriceBox({ stock, orderNum, totalPrice }) {
  const { product_id } = useParams();
  const navigate = useNavigate();
  const token = getCookie("token");

  const addCart = async () => {
    try {
      await AxiosInstance.post(
        "cart/",
        {
          product_id: parseInt(product_id),
          quantity: orderNum,
          check: true,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ConfirmContainer>
        <TotalInfo>총 상품 금액</TotalInfo>
        <TotalPrice>
          <TotalQuantity>
            총 수량 <strong>{orderNum}</strong>개
          </TotalQuantity>
          {totalPrice?.toLocaleString()}
          <span>원</span>
        </TotalPrice>
      </ConfirmContainer>
      <BuyButton onClick={() => navigate("/payment")}>바로 구매</BuyButton>
      <CartButton onClick={addCart}>장바구니</CartButton>
    </>
  );
}
