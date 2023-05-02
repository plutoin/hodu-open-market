import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCookie } from "../../Cookie";
import { getCarts } from "../../api/cartApi";
import { getDetail } from "../../api/productApi";
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
    getCarts(token).then((res) => {
      dispatch(setCarts(res.results));
      setLoading(false);
    });
    setLoading(true);
  }, [dispatch, token]);

  const getData = () => {
    const result = Promise.all(
      carts.map((el) => {
        return getDetail(el.product_id);
      })
    );
    return result;
  };

  const checkedItemHandler = (checked, item, id) => {
    if (item.stock !== 0 && checked) {
      setCheckedArr((prev) => [...prev, item]);
    } else {
      setCheckedArr(checkedArr.filter((i) => i.product_id !== id));
    }

    const allCheckbox = document.getElementById("allCheckbox");
    if (allCheckbox.checked && !checked) {
      allCheckbox.checked = false;
    } else {
      allCheckbox.checked = true;
    }
  };

  const checkedAllHandler = (checked) => {
    if (checked) {
      getData().then((arr) => {
        setCheckedArr(arr.filter((i) => i.stock !== 0));
      });

      console.log(checkedArr);
    } else {
      setCheckedArr([]);
    }
  };

  console.log(checkedArr);

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
        <ItemHeader checkedAllHandler={checkedAllHandler} />
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
        <button onClick={goToPayment} disabled={checkedArr.length === 0}>
          주문하기
        </button>
      </CartSection>
      <Footer />
    </>
  );
}
