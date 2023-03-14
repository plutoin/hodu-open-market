import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { AxiosInstance } from "../../../Axios";

import Modal from "../../Modal/Modal";
import QuantityButton from "../../QuantityButton/QuantityButton";

import {
  ItemContainer,
  ItemInfo,
  ItemPrice,
  DeleteBtn,
} from "./itemCard.style";

export default function ItemCard({ productId, cartId, quantity, active }) {
  const history = useHistory();
  const [delModal, setDelModal] = useState(false);
  const [quantityModal, setQuantityModal] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const onClickDelModal = () => {
    setDelModal(!delModal);
  };

  const onClickQuantityModal = () => {
    setQuantityModal(!quantityModal);
  };

  function getCartDetail(id) {
    return AxiosInstance.get(`/products/${id}`).then((res) => res.data);
  }

  function shipping(method, fee) {
    if (method === "DELIVERY" && fee !== 0) {
      return `택배배송 / ${fee.toLocaleString()}원`;
    } else if (method === "PARCEL" && fee !== 0) {
      return `소포배송 / ${fee.toLocaleString()}원`;
    } else if (method === "DELIVERY" && fee === 0) {
      return `택배배송 / 무료배송`;
    } else if (method === "PARCEL" && fee === 0) {
      return `소포배송 / 무료배송`;
    }
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
        <DeleteBtn onClick={onClickDelModal} />
        <ItemInfo>
          <span>{cartItem.store_name}</span>
          <strong>{cartItem.product_name}</strong>
          <p>{cartItem.price?.toLocaleString()}원</p>
          <span>
            {shipping(cartItem.shipping_method, cartItem.shipping_fee)}
          </span>
        </ItemInfo>
        <QuantityButton
          quantity={quantity}
          onClickQuantityModal={onClickQuantityModal}
        />
        <ItemPrice>
          <p>{(cartItem.price * quantity)?.toLocaleString()}원</p>
          <button onClick={() => history.push("/payment")}>주문하기</button>
        </ItemPrice>
      </ItemContainer>

      {delModal && <Modal option="delete" cartId={cartId} />}
      {quantityModal && (
        <Modal
          option="quantity"
          cartId={cartId}
          productId={productId}
          quantity={quantity}
          active={active}
        />
      )}
    </>
  );
}
