import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { AxiosInstance } from "../../../Axios";

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
}) {
  const detail = useSelector((state) => state.productDetailReducer);

  const stock = detail.products.stock;

  const navigate = useNavigate();
  const [orderNum, setOrderNum] = useState(quantity);
  const [delModal, setDelModal] = useState(false);
  const [quantityModal, setQuantityModal] = useState(false);
  const [cartItem, setCartItem] = useState([]);

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
    if (cartItem.stock > 1 && orderNum > 0) {
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
        <input type="checkbox" />
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
          stock={stock}
          quantity={quantity}
          orderNum={orderNum}
          minusStock={openQuantityModal}
          plusStock={openQuantityModal}
        />
        <ItemPrice>
          <p>{(cartItem.price * quantity)?.toLocaleString()}원</p>
          <button onClick={goToPayment}>주문하기</button>
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
          cartId={cart_item_id}
          productId={product_id}
          quantity={quantity}
          active={is_active}
          orderNum={orderNum}
          minusStock={minusStock}
          plusStock={plusStock}
          openModal={openQuantityModal}
          closeModal={closeQuantityModal}
        />
      )}
    </>
  );
}
