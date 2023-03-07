import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { AxiosInstance } from "../../../Axios";
import Modal from "../../Modal/Modal";
import QuantityButton from "../../QuantityButton/QuantityButton";
import TotalPrice from "../TotalPrice/TotalPrice";

import {
  ItemContainer,
  ItemInfo,
  ItemPrice,
  DeleteBtn,
} from "./itemCard.style";

export default function ItemCard({ productId, cartId }) {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const onClickModal = () => {
    setModal(!modal);
  };

  function getCartDetail(id) {
    return AxiosInstance.get(`/products/${id}`).then((res) => res.data);
  }

  useEffect(() => {
    async function getCart() {
      const cartDetail = getCartDetail(productId).then((detail) => {
        setCartItem(detail);
      });
      return cartDetail;
    }

    getCart();
  }, [productId]);

  return (
    <>
      <ItemContainer>
        <input type="checkbox" />
        <img src={cartItem.image} alt="상품이미지" />
        <DeleteBtn onClick={onClickModal} />
        <ItemInfo>
          <span>{cartItem.store_name}</span>
          <strong>{cartItem.product_name}</strong>
          <p>{cartItem.price}원</p>
          <span>{cartItem.shipping_method}</span>
        </ItemInfo>
        <QuantityButton onClick={onClickModal} />
        <ItemPrice>
          <p>{cartItem.price}원</p>
          <button onClick={() => history.push("/payment")}>주문하기</button>
        </ItemPrice>
      </ItemContainer>
      {modal && <Modal option="delete" cartId={cartId} />}
    </>
  );
}
