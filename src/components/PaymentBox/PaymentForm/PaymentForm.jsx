import React from "react";

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

export default function PaymentForm() {
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
              <Price>46,500</Price>
            </div>
            <div>
              <span>- 할인금액</span>
              <Price>0</Price>
            </div>
            <div>
              <span>- 배송비</span>
              <Price>0</Price>
            </div>
            <PayPriceDiv>
              <span>- 결제금액</span>
              <strong>46,500원</strong>
            </PayPriceDiv>
          </CheckBox>
          <CheckForm>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
            </label>
            <button>결제하기</button>
          </CheckForm>
        </CheckInfoDiv>
      </FinalCheckDiv>
    </Container>
  );
}
