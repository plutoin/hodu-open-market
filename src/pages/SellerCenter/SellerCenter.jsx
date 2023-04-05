import React from "react";
import SellerHeader from "../../components/Header/SellerHeader";

import {
  Title,
  Container,
  List,
  Button,
  ProductBox,
  ItemHeader,
  ItemCard,
  EditBtn,
  DeleteBtn,
} from "./sellerCenter.style";

export default function SellerCenter() {
  return (
    <>
      <SellerHeader />
      <Title>
        <h2>대시보드</h2>
        <span>백엔드글로벌</span>
        <button>상품 업로드</button>
      </Title>
      <Container>
        <div>
          <Button>판매중인 상품(3)</Button>
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
          <ItemCard>
            <img src="" alt="상품 이미지" />
            <div>
              <strong>딥러닝 개발자 담요</strong>
              <p>재고: 370개</p>
            </div>
            <span>17,500원</span>
            <EditBtn>수정</EditBtn>
            <DeleteBtn>삭제</DeleteBtn>
          </ItemCard>
        </ProductBox>
      </Container>
    </>
  );
}
