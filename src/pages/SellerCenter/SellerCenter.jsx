import React, { useEffect, useState } from "react";
import SellerHeader from "../../components/Header/SellerHeader";
import SellerItem from "../../components/SellerItem/SellerItem";

import { getProduct } from "../../api/sellerApi";
import { getCookie } from "../../Cookie";

import {
  Title,
  Container,
  Button,
  ProductBox,
  ItemHeader,
} from "./sellerCenter.style";

export default function SellerCenter() {
  const token = getCookie("token");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProduct(token).then((res) => {
      setProductList(res);
    });
  }, [token]);

  return (
    <>
      <SellerHeader />
      <Title>
        <h1>
          대시보드<strong>백엔드글로벌</strong>
        </h1>
        <button>상품 업로드</button>
      </Title>
      <Container>
        <div>
          <Button>판매중인 상품 ({productList.length})</Button>
          <Button>주문/배송</Button>
          <Button>문의/리뷰</Button>
          <Button>통계</Button>
          <Button>스토어 설정</Button>
        </div>
        <ProductBox>
          <ItemHeader>
            <li>상품정보</li>
            <li>판매가격</li>
            <li>수정</li>
            <li>삭제</li>
          </ItemHeader>

          {productList.length > 0
            ? productList.map((item) => (
                <SellerItem
                  key={item.product_id}
                  image={item.image}
                  price={item.price?.toLocaleString()}
                  product_id={item.product_id}
                  product_name={item.product_name}
                  stock={item.stock}
                />
              ))
            : null}
        </ProductBox>
      </Container>
    </>
  );
}
