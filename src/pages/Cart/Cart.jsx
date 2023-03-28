import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie("token");

  const [loading, setLoading] = useState(null);
  const [checkedArr, setCheckedArr] = useState([]);

  let cartArr = [];

  const carts = useSelector((state) => state.cartReducer.carts);

  useEffect(() => {
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
        return error.response.data;
      }
    };

    setLoading(true);
    getCartItem();
  }, [dispatch, token]);

  const checkedItemHandler = (checked, item, id) => {
    if (checked) {
      setCheckedArr((prev) => [...prev, item]);
    } else {
      setCheckedArr(checkedArr.filter((i) => i.product_id !== id));
    }
  };

  checkedArr.map((p) =>
    carts
      .filter((c) => p.product_id === c.product_id)
      .map((c) => {
        p.quantity = c.quantity;
        p.is_active = c.is_active;
        return cartArr.push(p);
      })
  );

  const priceArr = cartArr
    .filter((i) => i.is_active)
    .map((i) => i.price * i.quantity);

  const feeArr = cartArr.filter((i) => i.is_active).map((i) => i.shipping_fee);

  const total = (arr) => {
    const res = arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
    return res;
  };

  const totalPrice = total(priceArr);
  const totalFee = total(feeArr);
  const totalPay = totalPrice + totalFee;

  const goToPayment = () => {
    const selectedItems = cartArr.map((selected) => ({
      ...selected,
      order_kind: "cart_order",
    }));
    navigate("/payment", {
      state: { products: selectedItems },
    });
  };

  return (
    <>
      {loading && <Loading />}
      <Header />
      <CartSection>
        <h1>장바구니</h1>
        <ItemHeader />
        {carts.length > 0 ? (
          carts.map((item) => (
            <ItemCard
              key={item.product_id}
              checkedItemHandler={checkedItemHandler}
              checkedArr={checkedArr}
              {...item}
            />
          ))
        ) : (
          <EmptyCart />
        )}
        <TotalPrice
          totalPrice={totalPrice}
          totalFee={totalFee}
          totalPay={totalPay}
        />
        <button onClick={goToPayment}>주문하기</button>
      </CartSection>
      <Footer />
    </>
  );
}
