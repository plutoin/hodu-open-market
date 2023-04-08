import React from "react";

import { ItemCard, EditBtn, DeleteBtn } from "./sellerItem.style";

export default function SellerItem({
  image,
  price,
  product_id,
  product_name,
  stock,
}) {
  return (
    <ItemCard>
      <img src={image} alt="상품 이미지" />
      <div>
        <strong>{product_name}</strong>
        <p>재고: {stock}개</p>
      </div>
      <span>{price}원</span>
      <EditBtn>수정</EditBtn>
      <DeleteBtn>삭제</DeleteBtn>
    </ItemCard>
  );
}
