import React from "react";
import styled from "styled-components";

export default function PaymentItem({
  product_id,
  image,
  store_name,
  product_name,
  quantity,
  price,
  shipping_fee,
}) {
  return (
    <>
      <PayContainer key={product_id}>
        <img src={image} alt="상품 이미지" />
        <ItemInfo>
          <p>{store_name}</p>
          <strong>{product_name}</strong>
          <p>수량: {quantity}개</p>
        </ItemInfo>
        <ItemSale>-</ItemSale>
        <ItemDelivery>{shipping_fee?.toLocaleString()}원</ItemDelivery>
        <strong>{price?.toLocaleString()}원</strong>
      </PayContainer>
    </>
  );
}

const PayContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  padding: 8px 0px 18px 8px;
  border-bottom: 1px solid #c4c4c4;
  > img {
    width: 104px;
    height: 104px;
    margin-right: 36px;
    object-fit: cover;
    border-radius: 10px;
    background-color: gray;
  }
  > p {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: var(--color-deep-gray);
  }
  > strong {
    width: 120px;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  }
`;

const ItemInfo = styled.div`
  width: 442px;
  margin-right: 111px;
  text-align: left;
  > p {
    color: var(--color-deep-gray);
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  > strong {
    display: block;
    margin: 10px 0 6px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

const ItemSale = styled.p`
  margin-right: 193px;
`;

const ItemDelivery = styled.p`
  width: 200px;
  text-align: left;
`;
