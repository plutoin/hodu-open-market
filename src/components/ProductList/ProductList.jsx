import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../../api/productApi";
import { setProducts } from "../../redux/action/Actions";

import Loading from "../Loading/Loading";
import SkeletonList from "./SkeletonList";

import {
  Container,
  ItemContainer,
  ItemImage,
  ItemStore,
  ItemName,
  ItemPrice,
} from "./productList.style";

export default function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(null);

  const { products } = useSelector((state) => ({
    products: state.productReducer.products,
  }));

  useEffect(() => {
    getData().then((res) => {
      dispatch(setProducts(res));
      setLoading(false);
    });
    setLoading(true);
  }, [dispatch]);

  return (
    <Container>
      {loading && <Loading />}
      {loading &&
        new Array(10).fill(1).map((_, i) => {
          return <SkeletonList key={i} />;
        })}
      {products &&
        products.map((item) => (
          <ItemContainer
            onClick={() => navigate(`productDetail/${item.product_id}`)}
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
  );
}
