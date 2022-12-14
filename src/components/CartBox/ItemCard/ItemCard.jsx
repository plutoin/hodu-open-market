import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { AxiosInstance } from "../../../Axios";
import { getCarts } from "../../../redux/action/Actions";
import QuantityButton from "../../QuantityButton/QuantityButton";

import { ItemContainer, ItemInfo, ItemPrice, CloseBtn } from "./itemCard.style";

export default function ItemCard({ productId }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => ({
    carts: state.cartDetailReducer.carts,
  }));

  const cartItemDetails = async () => {
    try {
      const res = await AxiosInstance.get(`products/${productId}/`);
      dispatch(getCarts(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cartItemDetails(productId);
  }, [productId]);

  return (
    <>
      {carts &&
        carts.map((item) => (
          <ItemContainer key={item.product_id}>
            <input type="checkbox" />
            <img src={item.image} alt="상품이미지" />
            <CloseBtn />
            <ItemInfo>
              <span>{item.store_name}</span>
              <strong>{item.product_name}</strong>
              <p>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </p>
              <span>{item.shipping_method}</span>
            </ItemInfo>
            <QuantityButton />
            <ItemPrice>
              <p>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </p>
              <button onClick={() => history.push("/payment")}>주문하기</button>
            </ItemPrice>
          </ItemContainer>
        ))}
    </>
  );
}
