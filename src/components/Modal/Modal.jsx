import React from "react";
import { useNavigate } from "react-router";

import { getCookie } from "../../Cookie";
import { editQuantity, deleteItem } from "../../api/cartApi";
import { deleteProduct } from "../../api/productApi";

import QuantityButton from "../QuantityButton/QuantityButton";

import { Container, Text, FirstBtn, SecBtn } from "./modal.style";
import { DeleteBtn } from "../CartBox/ItemCard/itemCard.style";

export default function Modal({
  option,
  productId,
  cartId,
  orderNum,
  active,
  minusStock,
  plusStock,
  openModal,
  closeModal,
  loginType,
}) {
  const navigate = useNavigate();
  const token = getCookie("token");

  const editBtn = async () => {
    editQuantity(token, cartId, productId, orderNum, active);
  };

  const deleteBtn = async () => {
    if (cartId) {
      deleteItem(token, cartId);
    } else if (productId) {
      deleteProduct(token, productId);
    }
  };

  return (
    <>
      {openModal && (
        <Container>
          {option === "quantity" ? (
            <QuantityButton
              orderNum={orderNum}
              minusStock={minusStock}
              plusStock={plusStock}
              loginType={loginType}
            />
          ) : null}
          {option === "delete" ? (
            <Text>상품을 삭제하시겠습니까?</Text>
          ) : option === "login" ? (
            <Text>
              로그인이 필요한 서비스입니다.
              <br />
              로그인 하시겠습니까?
            </Text>
          ) : option === "cart" ? (
            <Text>
              이미 장바구니에 있는 상품입니다.
              <br />
              장바구니로 이동하시겠습니까?
            </Text>
          ) : null}
          <div>
            {option === "delete" || option === "quantity" ? (
              <FirstBtn onClick={closeModal}>취소</FirstBtn>
            ) : option === "login" ? (
              <FirstBtn onClick={closeModal}>아니오</FirstBtn>
            ) : option === "cart" ? (
              <FirstBtn onClick={closeModal}>아니오</FirstBtn>
            ) : null}
            {option === "delete" ? (
              <SecBtn onClick={deleteBtn}>확인</SecBtn>
            ) : option === "quantity" ? (
              <SecBtn onClick={editBtn}>수정</SecBtn>
            ) : option === "login" ? (
              <SecBtn onClick={() => navigate("/login")}>예</SecBtn>
            ) : option === "cart" ? (
              <SecBtn onClick={() => navigate("/cart")}>예</SecBtn>
            ) : null}
          </div>
          <DeleteBtn onClick={closeModal} />
        </Container>
      )}
    </>
  );
}
