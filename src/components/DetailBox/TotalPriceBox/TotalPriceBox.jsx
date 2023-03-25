import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AxiosInstance } from "../../../Axios";
import { getCookie } from "../../../Cookie";

import Modal from "../../Modal/Modal";

import {
  ConfirmContainer,
  TotalInfo,
  TotalPrice,
  TotalQuantity,
  BuyButton,
  CartButton,
} from "./totalPriceBox.style";

export default function TotalPriceBox({ detail, quantity, totalPrice }) {
  const { product_id } = useParams();
  const navigate = useNavigate();
  const token = getCookie("token");

  const [modal, setModal] = useState(false);

  const addCart = async () => {
    try {
      await AxiosInstance.post(
        "cart/",
        {
          product_id: parseInt(product_id),
          quantity: quantity,
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
      return error.response.data;
    }
  };

  const goToPayment = () => {
    navigate("/payment", {
      state: {
        products: [
          {
            ...detail,
            quantity,
            order_kind: "direct_order",
          },
        ],
      },
    });
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <ConfirmContainer>
        <TotalInfo>총 상품 금액</TotalInfo>
        <TotalPrice>
          <TotalQuantity>
            총 수량 <strong>{quantity}</strong>개
          </TotalQuantity>
          {totalPrice?.toLocaleString()}
          <span>원</span>
        </TotalPrice>
      </ConfirmContainer>
      {detail?.stock === 0 ? (
        <BuyButton disabled>품절</BuyButton>
      ) : (
        <>
          <BuyButton onClick={token ? goToPayment : openModal}>
            바로 구매
          </BuyButton>
          <CartButton onClick={token ? addCart : openModal}>
            장바구니
          </CartButton>
        </>
      )}
      {modal && (
        <Modal option="login" openModal={openModal} closeModal={closeModal} />
      )}
    </>
  );
}
