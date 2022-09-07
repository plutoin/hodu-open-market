import {
  Container,
  ItemContainer,
  ItemImage,
  ItemCompany,
  ItemName,
  ItemPrice,
} from "./productList.style";

export default function ProductList() {
  return (
    <Container>
      <ItemContainer to="/productDetail">
        <ItemImage alt="상품 이미지" />
        <ItemCompany>우당탕탕 라이캣의 실험실</ItemCompany>
        <ItemName>Hack Your Life 개발자 노트북 파우치</ItemName>
        <ItemPrice>
          <strong>29,000</strong>원
        </ItemPrice>
      </ItemContainer>
    </Container>
  );
}
