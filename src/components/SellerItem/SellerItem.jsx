import React, { useState } from "react";

import Modal from "../Modal/Modal";

import { ItemCard, EditBtn, DeleteBtn } from "./sellerItem.style";

export default function SellerItem({
  image,
  price,
  product_id,
  product_name,
  stock,
  token,
}) {
  const [delModal, setDelModal] = useState(false);

  const openDelModal = () => {
    setDelModal(true);
  };

  const closeDelModal = () => {
    setDelModal(false);
  };

  return (
    <ItemCard>
      <img src={image} alt="상품 이미지" />
      <div>
        <strong>{product_name}</strong>
        <p>재고: {stock}개</p>
      </div>
      <span>{price}원</span>
      <EditBtn>수정</EditBtn>
      <DeleteBtn onClick={openDelModal}>삭제</DeleteBtn>
      {delModal && (
        <Modal
          option="delete"
          productId={product_id}
          openModal={openDelModal}
          closeModal={closeDelModal}
        />
      )}
    </ItemCard>
  );
}
