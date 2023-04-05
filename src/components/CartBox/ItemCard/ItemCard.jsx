import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AxiosInstance } from "../../../Axios";
import { getCookie } from "../../../Cookie";

import Modal from "../../Modal/Modal";
import QuantityButton from "../../QuantityButton/QuantityButton";

import {
  ItemContainer,
  ItemInfo,
  ItemPrice,
  DeleteBtn,
} from "./itemCard.style";

export default function ItemCard({
  product_id,
  cart_item_id,
  quantity,
  is_active,
  checkedItemHandler,
  checkedArr,
}) {
  const navigate = useNavigate();
  const loginType = getCookie('loginType');

  const [orderNum, setOrderNum] = useState(quantity);
  const [delModal, setDelModal] = useState(false);
  const [quantityModal, setQuantityModal] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const soldOut = cartItem.stock === 0;

  const openDelModal = () => {
    setDelModal(true);
  };

  const closeDelModal = () => {
    setDelModal(false);
  };

  const openQuantityModal = () => {
    setQuantityModal(true);
  };

  const closeQuantityModal = () => {
    setQuantityModal(false);
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

  const minusStock = () => {
    if (orderNum === 1) {
      alert('최수 주문 수량은 1개입니다.')
    } else if (cartItem.stock > 1 && orderNum > 0) {
      setOrderNum(parseInt(orderNum - 1));
    } 
  };

  const plusStock = () => {
    if (cartItem.stock > orderNum) {
      setOrderNum(parseInt(orderNum + 1));
    }
  };

  const goToPayment = () => {
    navigate("/payment", {
      state: {
        products: [
          {
            ...cartItem,
            quantity,
            order_kind: "cart_one_order",
          },
        ],
      },
    });
  };

  useEffect(() => {
    async function getCart() {
      const cartDetail = getCartDetail(product_id).then((detail) => {
        setCartItem(detail);
      });
      return cartDetail;
    }

    getCart();
  }, [quantity, product_id]);

  return (
    <>
      <ItemContainer>
        <input
          type="checkbox"
          checked={
            checkedArr.map((el) => el.product_id).includes(cartItem.product_id)
              ? true
              : false
          }
          onChange={(e) =>
            checkedItemHandler(e.target.checked, cartItem, cartItem.product_id)
          }
          disabled={soldOut}
        />
        <img src={cartItem.image} alt="상품이미지" />
        <DeleteBtn onClick={openDelModal} />
        <ItemInfo>
          <span>{cartItem.store_name}</span>
          <strong>{cartItem.product_name}</strong>
          <p>{cartItem.price?.toLocaleString()}원</p>
          <span>
            {shipping(cartItem.shipping_method, cartItem.shipping_fee)}
          </span>
        </ItemInfo>
        <QuantityButton
          orderNum={orderNum}
          minusStock={openQuantityModal}
          plusStock={openQuantityModal}
          loginType={loginType}
          soldOut={soldOut}
        />
        <ItemPrice>
          <p>{(cartItem.price * quantity)?.toLocaleString()}원</p>
          <button onClick={goToPayment} disabled={soldOut}>{soldOut ? '품절' : '주문하기'}</button>
        </ItemPrice>
      </ItemContainer>

      {delModal && (
        <Modal
          option="delete"
          cartId={cart_item_id}
          openModal={openDelModal}
          closeModal={closeDelModal}
        />
      )}
      {quantityModal && (
        <Modal
          option="quantity"
          productId={product_id}
          cartId={cart_item_id}
          active={is_active}
          orderNum={orderNum}
          minusStock={minusStock}
          plusStock={plusStock}
          openModal={openQuantityModal}
          closeModal={closeQuantityModal}
          loginType={loginType}
        />
      )}
    </>
  );
}
