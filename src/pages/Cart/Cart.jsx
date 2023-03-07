import React, { useEffect, useState } from "react";
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
import Loading from "../../components/Loading/Loading";

import { CartSection } from "./cart.style";

export default function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = getCookie("token");

  const [loading, setLoading] = useState(null);
  const [productPrice, setProductPrice] = useState([]);

  let cartArr = [];

  // const { carts } = useSelector((state) => ({
  //   carts: state.cartReducer.carts,
  // }));

  const carts = useSelector((state) => state.cartReducer.carts);

  useEffect(() => {
    function getCartDetail() {
      return AxiosInstance.get("/products/").then((res) => {
        setProductPrice(res.data.results);
      });
    }

    const getCartItem = async () => {
      try {
        const res = await AxiosInstance.get("cart/", {
          headers: {
            Authorization: token,
          },
        });
        dispatch(setCarts(res.data.results));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    setLoading(true);
    getCartDetail();
    getCartItem();
  }, []);

  productPrice.map((p) =>
    carts
      .filter((c) => p.product_id === c.product_id)
      .map((c) => {
        p.cart_item_id = c.cart_item_id;
        p.quantity = c.quantity;
        p.is_active = c.is_active;
        return cartArr.push(p);
      })
  );

  const priceArr = productPrice.map((i) =>
    i.is_active ? i.price * i.quantity : 0
  );

  const feeArr = cartArr.map((i) => (i.is_active ? i.shipping_fee : 0));

  const total = (arr) => {
    const res = arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
    return res;
  };

  const totalPrice = total(priceArr).toLocaleString();
  const totalFee = total(feeArr).toLocaleString();

  return (
    <>
      {loading && <Loading />}
      <Header />
      <CartSection>
        <h1>장바구니</h1>
        <ItemHeader />
        {!carts && <EmptyCart />}
        {carts &&
          carts.map((item) => (
            <ItemCard
              key={item.product_id}
              productId={item.product_id}
              cartId={item.cart_item_id}
            />
          ))}
        <TotalPrice totalPrice={totalPrice} totalFee={totalFee} />
        <button onClick={() => history.push("/payment")}>주문하기</button>
      </CartSection>
      <Footer />
    </>
  );
}
