import React from "react";
import { useLocation } from "react-router-dom";
import TotalPriceBox from "../DetailBox/TotalPriceBox/TotalPriceBox";

import { FieldSet, MinusButton, PlusButton } from "./quantityButton.style";

export default function QuantityButton({
  stock,
  orderNum,
  minusStock,
  plusStock,
  totalPrice,
}) {
  const { pathname } = useLocation();

  return (
    <>
      <FieldSet>
        <legend className="ir">수량 선택</legend>
        <MinusButton onClick={minusStock} />
        <span>{orderNum}</span>
        <PlusButton onClick={plusStock} />
      </FieldSet>
      {pathname === "/cart" ? null : (
        <TotalPriceBox
          stock={stock}
          orderNum={orderNum}
          totalPrice={totalPrice}
        />
      )}
    </>
  );
}
