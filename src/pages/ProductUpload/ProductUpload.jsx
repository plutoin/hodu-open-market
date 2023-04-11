import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { postProduct } from "../../api/sellerApi";
import { getCookie } from "../../Cookie";

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
  Input,
  Textarea,
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
  const token = getCookie("token");

  const [isSelected, setIsSelected] = useState(true);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const checkedMethod = () => {
    setIsSelected(!isSelected);
  };

  const onSubmit = handleSubmit((data) => {
    postProduct(token, data);
  });

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
          <Form onSubmit={onSubmit}>
            <TopSection>
              <ImageWrapper>
                <label htmlFor="image">상품 이미지</label>
                <div>
                  <ImgUploadBtn />
                </div>
              </ImageWrapper>

              <InputWrapper>
                <label htmlFor="product_name">상품명</label>
                <Input
                  type="text"
                  id="product_name"
                  isError={errors.product_name}
                  {...register("product_name", {
                    required: "필수 응답 항목입니다.",
                    maxLength: "20",
                  })}
                />
                <CharacterSpan>0 / 20</CharacterSpan>

                <label htmlFor="price">판매가</label>
                <Input
                  type="number"
                  id="price"
                  isError={errors.price}
                  {...register("price", {
                    required: "필수 입력 항목입니다.",
                  })}
                />
                <UnitSpan isError={errors.price}>원</UnitSpan>

                <p>배송 방법</p>
                <ShippingBtn
                  type="button"
                  name="shipping_method"
                  id="shipping_method"
                  value="PARCEL"
                  isSelected={isSelected}
                  onClick={() => checkedMethod()}
                  {...register("shipping_method")}
                >
                  택배, 소포, 등기
                </ShippingBtn>
                <ShippingBtn
                  type="button"
                  name="shipping_method"
                  id="shipping_method"
                  value="DELIVERY"
                  isSelected={!isSelected}
                  onClick={() => checkedMethod()}
                  {...register("shipping_method")}
                >
                  직접배송(화물배달)
                </ShippingBtn>

                <label htmlFor="shipping_fee">기본 배송비</label>
                <Input
                  type="number"
                  id="shipping_fee"
                  isError={errors.shipping_fee}
                  {...register("shipping_fee", {
                    required: "필수 입력 항목입니다.",
                  })}
                />
                <UnitSpan isError={errors.shipping_fee}>원</UnitSpan>

                <label htmlFor="stock">재고</label>
                <Input
                  type="number"
                  id="stock"
                  isError={errors.stock}
                  {...register("stock", {
                    required: "필수 입력 항목입니다.",
                  })}
                />
                <UnitSpan isError={errors.stock}>개</UnitSpan>
              </InputWrapper>
            </TopSection>
            <DetailWrapper>
              <label htmlFor="product_info">상품 상세 정보</label>
              <Textarea
                type="text"
                id="product_info"
                isError={errors.product_info}
                {...register("product_info", {
                  required: "필수 입력 항목입니다.",
                })}
              />
            </DetailWrapper>
          </Form>
        </Container>

        <ButtonContainer>
          <CancelBtn onClick={() => navigate(-1)}>취소</CancelBtn>
          <SaveBtn disabled={!isValid} onClick={onSubmit}>
            저장
          </SaveBtn>
        </ButtonContainer>
      </Section>
    </>
  );
}
