import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";

import { getCookie } from "../../../Cookie";
import { postOrder } from "../../../api/orderApi";

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
  ErrorMsg,
} from "./paymentForm.style";

export default function PaymentForm({
  products,
  totalPrice,
  totalFee,
  totalPay,
}) {
  const navigate = useNavigate();
  const token = getCookie("token");

  const [addressValue, setAddressValue] = useState("");
  const [popup, setPopup] = useState("");
  const [zipcode, setZipCode] = useState("");

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onBlur",
    defaultValues: { checkBox: false },
  });

  const checkVaild = watch("checkBox");

  const onCompletePost = (data) => {
    setAddressValue(data.address);
    setZipCode(data.zonecode);
  };

  const postCodeStyle = {
    margin: "25px 0 0 170px",
    width: "800px",
    height: "450px",
    border: "1px solid var(--color-deep-gray)",
    zIndex: 100,
  };

  async function payFunc(data) {
    postOrder(token, data);
  }

  const orderData = async (data, receiver_phoneNum, receiver_address) => {
    const product_id = products[0].product_id;
    const quantity = products[0].quantity;
    const order_kind = products[0].order_kind;
    const receiver = data.receiver;
    const receiver_phone_number = receiver_phoneNum;
    const address = receiver_address;
    const address_message = data.address_message;
    const payment_method = data.payMethod;

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
      payment_method,
    };

    try {
      if (order_kind === "direct_order") {
        await payFunc(direct_order_data);
      } else if (order_kind === "cart_order") {
        await payFunc(cart_order_data);
      } else if (order_kind === "cart_one_order") {
        await payFunc(cart_one_order_data);
      }
      alert("주문 완료되었습니다.");
      navigate("/");
    } catch (error) {
      return error.response.data;
    }
  };

  const onSubmit = handleSubmit((data) => {
    const receiver_phoneNum =
      data.receiver_phonenum1 +
      data.receiver_phonenum2 +
      data.receiver_phonenum3;
    const receiver_address = addressValue + " " + data.address;
    orderData(data, receiver_phoneNum, receiver_address);
  });

  return (
    <Container onSubmit={onSubmit}>
      <h2>배송정보</h2>
      <h3>주문자 정보</h3>
      <WrapperDiv>
        <label htmlFor="name">이름</label>
        <Input
          type="text"
          {...register("orderer", { required: "필수 응답 항목입니다." })}
        />
        {errors.orderer && <ErrorMsg>{errors.orderer?.message}</ErrorMsg>}
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="phoneNum">휴대폰</label>
        <FirstPhoneInput
          type="text"
          maxLength="3"
          {...register("orderer_phonenum1", {
            required: "필수 응답 항목입니다.",
            pattern: {
              value: /^[0-9]+$/,
              message: "숫자만 입력해 주세요.",
            },
          })}
        />
        <span>-</span>
        <PhoneInput
          type="text"
          maxLength="4"
          {...register("orderer_phonenum2", {
            required: "필수 응답 항목입니다.",
            pattern: {
              value: /^[0-9]+$/,
              message: "숫자만 입력해 주세요.",
            },
          })}
        />
        <span>-</span>
        <PhoneInput
          type="text"
          maxLength="4"
          {...register("orderer_phonenum3", {
            required: "필수 응답 항목입니다.",
            pattern: {
              value: /^[0-9]+$/,
              message: "숫자만 입력해 주세요.",
            },
          })}
        />
        {(errors.orderer_phonenum1 ||
          errors.orderer_phonenum2 ||
          errors.orderer_phonenum) && (
          <ErrorMsg>{errors.orderer_phonenum1?.message}</ErrorMsg>
        )}
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="Email">이메일</label>
        <Input
          type="email"
          id="Email"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "이메일 형식이 아닙니다.",
            },
          })}
        />
        {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
      </WrapperDiv>

      <h3>배송지 정보</h3>
      <WrapperDiv>
        <label htmlFor="receiver">수령인</label>
        <Input
          type="text"
          id="receiver"
          {...register("receiver", { required: "필수 응답 항목입니다." })}
        />
        {errors.receiver && <ErrorMsg>{errors.receiver?.message}</ErrorMsg>}
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="phoneNum">휴대폰</label>
        <FirstPhoneInput
          type="text"
          maxLength="3"
          {...register("receiver_phonenum1", {
            pattern: {
              value: /^[0-9]+$/,
              message: "숫자만 입력해 주세요.",
            },
          })}
        />
        <span>-</span>
        <PhoneInput
          type="text"
          maxLength="4"
          {...register("receiver_phonenum2", {
            pattern: {
              value: /^[0-9]+$/,
              message: "숫자만 입력해 주세요.",
            },
          })}
        />
        <span>-</span>
        <PhoneInput
          type="text"
          maxLength="4"
          {...register("receiver_phonenum3", {
            pattern: {
              value: /^[0-9]+$/,
              message: "숫자만 입력해 주세요.",
            },
          })}
        />
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="address">배송주소</label>
        <ZipCode type="text" placeholder="우편번호" value={zipcode} disabled />
        <button onClick={() => setPopup(!popup)}>우편번호 조회</button>
        {popup && (
          <span>
            <DaumPostcode
              style={postCodeStyle}
              autoClose
              onComplete={onCompletePost}
            />
          </span>
        )}
        <Address type="text" placeholder="주소" value={addressValue} disabled />
        <Address
          type="text"
          placeholder="상세주소"
          {...register("address", { required: "필수 응답 항목입니다." })}
        />
      </WrapperDiv>

      <WrapperDiv>
        <label htmlFor="address_message">배송메시지</label>
        <Message
          type="text"
          id="address_message"
          {...register("address_message", {
            required: "필수 응답 항목입니다.",
          })}
        />
      </WrapperDiv>

      <FinalCheckDiv>
        <PayForm>
          <h2>결제수단</h2>
          <input
            type="radio"
            value="CARD"
            id="card"
            name="payMethod"
            {...register("payMethod", {
              required: "결제 수단을 선택해 주세요.",
            })}
          />
          <label htmlFor="card">신용/체크카드</label>
          <input
            type="radio"
            value="DEPOSIT"
            id="deposit"
            name="payMethod"
            {...register("payMethod")}
          />
          <label htmlFor="deposit">무통장 입금</label>
          <input
            type="radio"
            value="PHONE_PAYMENT"
            id="phonePay"
            name="payMethod"
            {...register("payMethod")}
          />
          <label htmlFor="phonePay">휴대폰 결제</label>
          <input
            type="radio"
            value="NAVERPAY"
            id="naverPay"
            name="payMethod"
            {...register("payMethod")}
          />
          <label htmlFor="naverPay">네이버페이</label>
          <input
            type="radio"
            value="KAKAOPAY"
            id="kakaoPay"
            name="payMethod"
            {...register("payMethod")}
          />
          <label htmlFor="kakaoPay">카카오페이</label>
          {errors.receiver && (
            <p style={{ color: "red", marginTop: "10px" }}>
              {errors.receiver?.message}
            </p>
          )}
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
            <input
              type="checkbox"
              id="check"
              {...register("checkBox", { required: true })}
            />
            <label htmlFor="check">
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
            </label>
            <button disabled={!isValid || !checkVaild} onClick={onSubmit}>
              결제하기
            </button>
          </CheckForm>
        </CheckInfoDiv>
      </FinalCheckDiv>
    </Container>
  );
}
