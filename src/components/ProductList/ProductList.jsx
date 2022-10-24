import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AxiosInstance from "../../Axios";
import { setProducts } from "../../redux/action/Actions";

import {
  Container,
  ItemContainer,
  ItemImage,
  ItemCompany,
  ItemName,
  ItemPrice,
} from "./productList.style";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => ({
    products: state.productReducer.products,
  }));

  const productList = async (products) => {
    try {
      const res = await AxiosInstance.get("products/");

      products = res.data.results;

      dispatch(setProducts(products));
    } catch {
      console.log("ERROR!");
    }
  };

  useEffect(() => {
    productList();
  }, []);

  return (
    <>
      {products &&
        products.map((item) => (
          <Container key={item.product_id}>
            <ItemContainer to="/productDetail">
              <ItemImage src={item.image} alt="상품 이미지" />
              <ItemCompany>{item.store_name}</ItemCompany>
              <ItemName>{item.product_name}</ItemName>
              <ItemPrice>
                <strong>{item.price}</strong> 원
              </ItemPrice>
            </ItemContainer>
          </Container>
        ))}
    </>
  );
}
