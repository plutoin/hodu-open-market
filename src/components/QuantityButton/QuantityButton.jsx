import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TotalPriceBox from "../DetailBox/TotalPriceBox/TotalPriceBox";

import { FieldSet, MinusButton, PlusButton } from "./quantityButton.style";

export default function QuantityButton({ quantity, onClickQuantityModal }) {
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
    if (stock > 1 && quantity > 0) {
      setOrderNum(parseInt(orderNum - 1));
    }
  };

  const plusStock = () => {
    if (stock > orderNum) {
      setOrderNum(parseInt(orderNum + 1));
    } else if (stock > quantity) {
      setOrderNum(parseInt(orderNum + 1));
    }
  };

  useEffect(() => {
    if (location.pathname === "/cart") {
      setOrderNum(quantity);
    }
  }, [location.pathname, quantity]);

  return (
    <>
      <FieldSet>
        <legend className="ir">수량 선택</legend>
        <MinusButton
          onClick={() => {
            minusStock();
            onClickQuantityModal();
          }}
        />
        <span>{orderNum}</span>
        <PlusButton
          onClick={() => {
            plusStock();
            onClickQuantityModal();
          }}
        />
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
