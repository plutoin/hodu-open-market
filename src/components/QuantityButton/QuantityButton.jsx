import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TotalPriceBox from "../DetailBox/TotalPriceBox";

import { FieldSet, MinusButton, PlusButton } from "./quantityButton.style";

export default function QuantityButton() {
  const location = useLocation();
  const detail = useSelector((state) => state.productDetailReducer);
  const stock = detail.products.stock;
  const price = detail.products.price;

  const [orderNum, setOrderNum] = useState(1);
  const totalPrice = orderNum * price;

  const minusStock = () => {
    if (stock > 1 && orderNum > 0) {
      setOrderNum(parseInt(orderNum - 1));
    }
  };

  const plusStock = () => {
    if (stock > orderNum) {
      setOrderNum(parseInt(orderNum + 1));
    }
  };

  return (
    <>
      <FieldSet>
        <legend className="ir">수량 선택</legend>
        <MinusButton onClick={minusStock} />
        <span>{orderNum}</span>
        <PlusButton onClick={plusStock} />
      </FieldSet>
      {location.pathname === "/cart" ? null : (
        <TotalPriceBox
          stock={stock}
          orderNum={orderNum}
          totalPrice={totalPrice}
        />
      )}
    </>
  );
}
