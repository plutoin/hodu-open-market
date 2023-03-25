import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AxiosInstance } from "../../../Axios";
import { getCookie } from "../../../Cookie";

import Modal from "../../Modal/Modal";

import {
  ConfirmContainer,
  TotalInfo,
  TotalPrice,
  TotalQuantity,
  BuyButton,
  CartButton,
} from "./totalPriceBox.style";

export default function TotalPriceBox({ detail, quantity, totalPrice }) {
  const { product_id } = useParams();
  const navigate = useNavigate();
  const token = getCookie("token");

  const [loginModal, setLoginModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [cart, setCart] = useState([]);

  const addCart = async () => {
    try {
      await AxiosInstance.post(
        "cart/",
        {
          product_id: parseInt(product_id),
          quantity: quantity,
          check: true,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      navigate("/cart");
    } catch (error) {
      return error.response.data;
    }
  };

  const goToPayment = () => {
    navigate("/payment", {
      state: {
        products: [
          {
            ...detail,
            quantity,
            order_kind: "direct_order",
          },
        ],
      },
    });
  };

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  const openCartModal = () => {
    setCartModal(true);
  };

  const closeCartModal = () => {
    setCartModal(false);
  };

  useEffect(() => {
    async function getCart() {
      try {
        const res = await AxiosInstance.get("cart", {
          headers: {
            Authorization: token,
          },
        });
        setCart(res.data.results);
      } catch (error) {
        return error.response.data;
      }
    }
    getCart();
  }, [token]);

  const isCart = cart?.map((i) => i.product_id === product_id);

  return (
    <>
      <ConfirmContainer>
        <TotalInfo>총 상품 금액</TotalInfo>
        <TotalPrice>
          <TotalQuantity>
            총 수량 <strong>{quantity}</strong>개
          </TotalQuantity>
          {totalPrice?.toLocaleString()}
          <span>원</span>
        </TotalPrice>
      </ConfirmContainer>
      {detail?.stock === 0 ? (
        <BuyButton disabled>품절</BuyButton>
      ) : (
        <>
          <BuyButton
            onClick={
              !token ? openLoginModal : isCart ? openCartModal : goToPayment
            }
          >
            바로 구매
          </BuyButton>
          <CartButton
            onClick={!token ? openLoginModal : isCart ? openCartModal : addCart}
          >
            장바구니
          </CartButton>
        </>
      )}
      {loginModal && (
        <Modal
          option="login"
          openModal={openLoginModal}
          closeModal={closeLoginModal}
        />
      )}
      {cartModal && (
        <Modal
          option="cart"
          openModal={openCartModal}
          closeModal={closeCartModal}
        />
      )}
    </>
  );
}
