import React from "react";
import QuantityButton from "../../QuantityButton/QuantityButton";

import { ItemContainer, ItemInfo, ItemPrice } from "./cartProduct.style";

export default function CartProduct() {
  return (
    <ItemContainer>
      <input type="checkbox" />
      <img src="" alt="상품이미지" />
      <ItemInfo>
        <span>우당탕탕 라이캣의 실험실</span>
        <strong>Hack Your Life 개발자 노트북 파우치</strong>
        <p>29,000원</p>
        <span>택배배송 / 무료배송</span>
      </ItemInfo>
      <QuantityButton />
      <ItemPrice>
        <p>29,000원</p>
        <button>주문하기</button>
      </ItemPrice>
    </ItemContainer>
  );
}
