import React, { useState } from "react";

import QuantityButton from "../QuantityButton/QuantityButton";

import { Container, Text, ModifyBtn, CancelBtn } from "./modal.style";
import { DeleteBtn } from "../CartBox/ItemCard/itemCard.style";

export default function Modal({ option, text, button1, button2 }) {
  const [modal, setModal] = useState(true);

  return (
    <>
      {modal && (
        <Container>
          {option === "quantity" ? <QuantityButton /> : null}
          {option === "delete" ? (
            <Text>상품을 삭제하시겠습니까?</Text>
          ) : option === "login" ? (
            <Text>
              로그인이 필요한 서비스입니다.
              <br />
              로그인 하시겠습니까?
            </Text>
          ) : null}
          <div>
            {option === "delete" || option === "quantity" ? (
              <CancelBtn onClick={() => setModal(false)}>취소</CancelBtn>
            ) : option === "login" ? (
              <CancelBtn onClick={() => setModal(false)}>아니오</CancelBtn>
            ) : null}
            {option === "delete" ? (
              <ModifyBtn>확인</ModifyBtn>
            ) : option === "quantity" ? (
              <ModifyBtn>수정</ModifyBtn>
            ) : option === "login" ? (
              <ModifyBtn>예</ModifyBtn>
            ) : null}
          </div>
          <DeleteBtn onClick={() => setModal(false)} />
        </Container>
      )}
    </>
  );
}
