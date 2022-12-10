import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCookie } from "../../Cookie";
import { AxiosInstance } from "../../Axios";
import { setCarts } from "../../redux/action/Actions";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemHeader from "../../components/CartBox/ItemHeader";
import ItemCard from "../../components/CartBox/ItemCard/ItemCard";
import TotalPrice from "../../components/CartBox/TotalPrice/TotalPrice";
import EmptyCart from "../../components/CartBox/EmptyCart";

import { CartSection } from "./cart.style";

export default function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = getCookie("token");

  const { carts } = useSelector((state) => ({
    carts: state.cartReducer.carts,
  }));

  const getCartItem = async () => {
    try {
      const res = await AxiosInstance.get("cart/", {
        headers: {
          Authorization: token,
        },
      });

      dispatch(setCarts(res.data.results));

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <>
      <Header />
      <CartSection>
        <h1>장바구니</h1>
        <ItemHeader />
        {carts && carts.map((item) => <ItemCard key={carts.my_cart} />)}
        <TotalPrice />
        {carts && <EmptyCart />}
        <button onClick={() => history.push("/payment")}>주문하기</button>
      </CartSection>
      <Footer />
    </>
  );
}
