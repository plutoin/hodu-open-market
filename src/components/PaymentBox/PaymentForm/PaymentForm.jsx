import React from "react";
import { useNavigate } from "react-router-dom";

import { AxiosInstance } from "../../../Axios";
import { getCookie } from "../../../Cookie";

import {
  Container,
  WrapperDiv,
  Input,
  FirstPhoneInput,
  PhoneInput,
  ZipCode,
  Address,
  Message,
  FinalCheckDiv,
  PayForm,
  CheckInfoDiv,
  CheckBox,
  Price,
  PayPriceDiv,
  CheckForm,
} from "./paymentForm.style";

export default function PaymentForm({
  products,
  totalPrice,
  totalFee,
  totalPay,
}) {
  const navigate = useNavigate();
  const token = getCookie("token");

  console.log(products);
  async function payFunc(data) {
    try {
      await AxiosInstance.post("order/", data, {
        headers: {
          Authorization: token,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  const postOrder = async () => {
    const product_id = products[0].product_id;
    const quantity = products[0].quantity;
    const order_kind = products[0].order_kind;
    const receiver = "sdf";
    const receiver_phone_number = "01012341234";
    const address = "sdf";
    const address_message = "sdf";
    const payment_method = "CARD";

    const direct_order_data = {
      product_id,
      quantity,
      order_kind,
      receiver,
      receiver_phone_number,
      address,
      address_message,
      payment_method,
      total_price: totalPay,
    };

    const cart_order_data = {
      total_price: totalPay,
      order_kind,
      receiver,
      receiver_phone_number,
      address,
      address_message,
      payment_method,
    };

    const cart_one_order_data = {
      product_id,
      quantity,
      order_kind,
      total_price: totalPay,
      receiver,
      receiver_phone_number,
      address,
      address_message,
      payment_method, // CARD, DEPOSIT, PHONE_PAYMENT, NAVERPAY, KAKAOPAY 중 하나 선택
    };

    try {
      if (order_kind === "direct_order") {
        await payFunc(direct_order_data);
      } else if (order_kind === "cart_order") {
        await payFunc(cart_order_data);
      } else if (order_kind === "cart_one_order") {
        await payFunc(cart_one_order_data);
      }
      console.log(order_kind);
      alert("주문 완료되었습니다.");
      navigate("/");
    } catch (error) {
      return error.response.data;
    }
  };

  return (
    <Container>
      <h2>배송정보</h2>
      <h3>주문자 정보</h3>
      <WrapperDiv>
        <label htmlFor="name">이름</label>
        <Input type="text" />
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="phoneNum">휴대폰</label>
        <FirstPhoneInput type="text" />
        <span>-</span>
        <PhoneInput type="text" />
        <span>-</span>
        <PhoneInput type="text" />
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="Email">이메일</label>
        <Input type="email" id="Email" />
      </WrapperDiv>

      <h3>배송지 정보</h3>
      <WrapperDiv>
        <label htmlFor="recipient">수령인</label>
        <Input type="text" id="recipient" />
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="phoneNum">휴대폰</label>
        <FirstPhoneInput type="text" />
        <span>-</span>
        <PhoneInput type="text" />
        <span>-</span>
        <PhoneInput type="text" />
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="address">배송주소</label>
        <ZipCode type="text" />
        <button>우편번호 조회</button>
        <Address type="text" />
        <Address type="text" />
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="message">배송메시지</label>
        <Message type="text" id="message" />
      </WrapperDiv>

      <FinalCheckDiv>
        <PayForm>
          <h2>결제수단</h2>
          <input
            type="radio"
            value="신용/체크카드"
            id="card"
            name="payMethod"
          />
          <label htmlFor="card">신용/체크카드</label>
          <input
            type="radio"
            value="무통장 입금"
            id="deposit"
            name="payMethod"
          />
          <label htmlFor="deposit">무통장 입금</label>
          <input
            type="radio"
            value="휴대폰 결제"
            id="phonePay"
            name="payMethod"
          />
          <label htmlFor="phonePay">휴대폰 결제</label>
          <input
            type="radio"
            value="네이버페이"
            id="naverPay"
            name="payMethod"
          />
          <label htmlFor="naverPay">네이버페이</label>
          <input
            type="radio"
            value="카카오페이"
            id="kakaoPay"
            name="payMethod"
          />
          <label htmlFor="kakaoPay">카카오페이</label>
        </PayForm>
        <CheckInfoDiv>
          <h2>최종결제 정보</h2>
          <CheckBox>
            <div>
              <span>- 상품금액</span>
              <Price>{totalPrice.toLocaleString()}</Price>
            </div>
            <div>
              <span>- 할인금액</span>
              <Price>0</Price>
            </div>
            <div>
              <span>- 배송비</span>
              <Price>{totalFee.toLocaleString()}</Price>
            </div>
            <PayPriceDiv>
              <span>- 결제금액</span>
              <strong>{totalPay.toLocaleString()}원</strong>
            </PayPriceDiv>
          </CheckBox>
          <CheckForm>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
            </label>
            <button onClick={postOrder}>결제하기</button>
          </CheckForm>
        </CheckInfoDiv>
      </FinalCheckDiv>
    </Container>
  );
}
