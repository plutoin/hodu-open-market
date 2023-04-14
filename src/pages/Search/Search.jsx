import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Slide from "../../components/Slide/Slide";

import {
  Container,
  ItemContainer,
  ItemImage,
  ItemStore,
  ItemName,
  ItemPrice,
} from "../../components/ProductList/productList.style";

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();

  const results = location.state;

  return (
    <>
      <Header />
      <Slide />
      <Container>
        {results &&
          results.map((item) => (
            <ItemContainer
              onClick={() => navigate(`/productDetail/${item.product_id}`)}
              key={item.product_id}
            >
              <ItemImage src={item.image} alt="상품 이미지" />
              <ItemStore>{item.store_name}</ItemStore>
              <ItemName>{item.product_name}</ItemName>
              <ItemPrice>
                <strong>{item.price.toLocaleString()}</strong>원
              </ItemPrice>
            </ItemContainer>
          ))}
      </Container>
    </>
  );
}
