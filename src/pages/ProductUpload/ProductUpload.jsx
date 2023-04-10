import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SellerHeader from "../../components/Header/SellerHeader";
import {
  Section,
  Container,
  TextBox,
  Form,
  TopSection,
  ImageWrapper,
  ImgUploadBtn,
  InputWrapper,
  ShippingBtn,
  DetailWrapper,
  CharacterSpan,
  UnitSpan,
  ButtonContainer,
  CancelBtn,
  SaveBtn,
} from "./productUpload.style";

export default function ProductUpload() {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(true);

  const checkedMethod = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      <SellerHeader />
      <Section>
        <h1>상품 등록</h1>
        <Container>
          <TextBox>
            <p>* 상품 등록 주의사항</p>
            <div>
              - 상품명은 20자까지 입력 가능합니다.
              <br />
              <br />
              - 상품 이미지 등록 시 jpg, png, gif 형식만 업로드 가능합니다.
              <br />
              <br />
              - 재고는 0개로 설정할 수 없습니다.
              <br />
              <br />
              - 기본 배송비를 0원으로 설정 시 무료배송으로 등록됩니다.
              <br />
              <br />- 각 필드는 필수 입력 정보입니다. 모든 상품 정보가
              입력되어야 정상적으로 등록됩니다.
            </div>
          </TextBox>
          <Form>
            <TopSection>
              <ImageWrapper>
                <label htmlFor="productImage">상품 이미지</label>
                <div>
                  <ImgUploadBtn />
                </div>
              </ImageWrapper>

              <InputWrapper>
                <label htmlFor="productName">상품명</label>
                <input type="text" id="productName" />
                <CharacterSpan>0 / 20</CharacterSpan>

                <label htmlFor="productPrice">판매가</label>
                <input type="number" id="productPrice" />
                <UnitSpan>원</UnitSpan>

                <p>배송 방법</p>
                <ShippingBtn
                  name="shipping_method"
                  id="shipping_method"
                  isSelected={isSelected}
                  onClick={() => checkedMethod()}
                >
                  택배, 소포, 등기
                </ShippingBtn>
                <ShippingBtn
                  name="shipping_method"
                  id="shipping_method"
                  isSelected={!isSelected}
                  onClick={() => checkedMethod()}
                >
                  직접배송(화물배달)
                </ShippingBtn>

                <label htmlFor="shippingFee">기본 배송비</label>
                <input type="number" id="shippingFee" />
                <UnitSpan>원</UnitSpan>

                <label htmlFor="productStock">재고</label>
                <input type="number" id="productStock" />
                <UnitSpan>개</UnitSpan>
              </InputWrapper>
            </TopSection>
            <DetailWrapper>
              <label htmlFor="productDetail">상품 상세 정보</label>
              <textarea type="text" id="productDetail" />
            </DetailWrapper>
          </Form>
        </Container>

        <ButtonContainer>
          <CancelBtn onClick={() => navigate(-1)}>취소</CancelBtn>
          <SaveBtn>저장</SaveBtn>
        </ButtonContainer>
      </Section>
    </>
  );
}
