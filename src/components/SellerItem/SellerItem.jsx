import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../Modal/Modal";

import { ItemCard, EditBtn, DeleteBtn } from "./sellerItem.style";

export default function SellerItem({
  image,
  price,
  product_id,
  product_info,
  product_name,
  shipping_fee,
  shipping_method,
  stock,
}) {
  const navigate = useNavigate();
  const [delModal, setDelModal] = useState(false);

  const goToEditProduct = () => {
    navigate("/productUpload", {
      state: {
        product_id,
        product_name,
        image,
        price,
        shipping_method,
        shipping_fee,
        stock,
        product_info,
      },
    });
  };

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
      <span>{price?.toLocaleString()}원</span>
      <EditBtn onClick={goToEditProduct}>수정</EditBtn>
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
