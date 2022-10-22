import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AxiosInstance from "../../Axios";
import { setProduct } from "../../modules/ProductReducer";

import {
  Container,
  ItemContainer,
  ItemImage,
  ItemCompany,
  ItemName,
  ItemPrice,
} from "./productList.style";

export default function ProductList() {
  const { products } = useSelector((state) => ({
    products: state.productReducer.productList,
  }));
  const dispatch = useDispatch();
  const onProduct = () => dispatch(setProduct());

  console.log(products);
  console.log(onProduct);

  const productList = async () => {
    try {
      const res = await AxiosInstance.get("products/");
      console.log(res);
      console.log(res.data.results[3]);
    } catch {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    productList();
  }, []);

  return (
    <Container>
      <ItemContainer to="/productDetail">
        <ItemImage src="" alt="상품 이미지" />
        <ItemCompany>dd</ItemCompany>
        <ItemName>Hack Your Life 개발자 노트북 파우치</ItemName>
        <ItemPrice>
          <strong>29,000</strong>원
        </ItemPrice>
      </ItemContainer>
    </Container>
  );
}
