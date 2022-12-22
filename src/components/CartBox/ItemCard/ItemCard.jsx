import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { AxiosInstance } from "../../../Axios";
import { getCarts } from "../../../redux/action/Actions";
import Modal from "../../Modal/Modal";

import QuantityButton from "../../QuantityButton/QuantityButton";

import {
  ItemContainer,
  ItemInfo,
  ItemPrice,
  DeleteBtn,
} from "./itemCard.style";

export default function ItemCard({ productId, cartId }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const onClickModal = () => {
    setModal(!modal);
  };

  const { image, store_name, product_name, shipping_method, price } =
    useSelector((state) => state.cartDetailReducer);

  const cartItemDetails = async (
    image,
    store_name,
    product_name,
    shipping_method,
    price
  ) => {
    try {
      const res = await AxiosInstance.get(`products/${productId}/`);

      image = res.data.image;
      store_name = res.data.store_name;
      product_name = res.data.product_name;
      shipping_method = res.data.shipping_method;
      price = res.data.price;

      dispatch({
        type: "GET_CARTS",
        image,
        store_name,
        product_name,
        shipping_method,
        price,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cartItemDetails();
  }, [productId]);

  return (
    <>
      <ItemContainer>
        <input type="checkbox" />
        <img src={image} alt="상품이미지" />
        <DeleteBtn onClick={onClickModal} />
        <ItemInfo>
          <span>{store_name}</span>
          <strong>{product_name}</strong>
          <p>{price}원</p>
          <span>{shipping_method}</span>
        </ItemInfo>
        <QuantityButton onClick={onClickModal} />
        <ItemPrice>
          <p>{price}원</p>
          <button onClick={() => history.push("/payment")}>주문하기</button>
        </ItemPrice>
      </ItemContainer>
      {modal && <Modal option="delete" cartId={cartId} />}
    </>
  );
}
