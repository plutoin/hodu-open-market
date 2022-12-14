import React, { useState, useRef, useEffect } from "react";

import QuantityButton from "../QuantityButton/QuantityButton";

import { Container, Text, ModifyBtn, CancelBtn } from "./modal.style";
import { CloseBtn } from "../CartBox/ItemCard/itemCard.style";

export default function Modal() {
  const [modal, setModal] = useState(true);
  const modalRef = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (modal && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [modal]);

  return (
    <>
      {modal && (
        <Container>
          <QuantityButton />
          <Text>상품을 삭제하시겠습니까?</Text>
          <div>
            <ModifyBtn>수정</ModifyBtn>
            <CancelBtn onClick={() => setModal(false)}>취소</CancelBtn>
          </div>
          <CloseBtn onClick={() => setModal(false)} ref={modalRef} />
        </Container>
      )}
    </>
  );
}
