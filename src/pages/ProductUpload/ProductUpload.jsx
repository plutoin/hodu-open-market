import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { postProduct, editProduct } from "../../api/sellerApi";
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
  const location = useLocation();
  const imageInput = useRef();
  const token = getCookie("token");
  const itemData = location.state;

  const [isSelected, setIsSelected] = useState(true);
  const [inputText, setInputText] = useState("");
  const [uploadImage, setUploadImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: itemData,
  });

  const checkedMethod = () => {
    setIsSelected(!isSelected);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleImage = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    setUploadImage(file);
  };

  const onSubmit = handleSubmit((data) => {
    data.image = uploadImage;
    !itemData
      ? postProduct(token, data).then(() =>
          navigate(`/productDetail/${itemData.product_id}`)
        )
      : editProduct(token, data).then(() => navigate("/sellerCenter"));
  });

  useEffect(() => {
    if (itemData?.image) {
      setPreviewImage(itemData.image);
      setUploadImage(itemData.image);
    }
  }, [setPreviewImage, itemData?.image]);

  return (
    <>
      <SellerHeader />
      <Section>
        <h1>상품 등록</h1>
        <Container>
          <TextBox>
            <p>* 상품 등록 주의사항</p>
            <div>
              - 상품명은 공백 포함 20자까지 입력 가능합니다.
              <br />
              <br />
              - 상품 이미지 등록 시 이미지 파일 확장자만 업로드 가능합니다.
              <br />
              <br />
              - 판매가와 재고는 0으로 설정할 수 없습니다.
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
                <div
                  style={
                    previewImage
                      ? {
                          background: `url(${previewImage}) no-repeat center / cover`,
                        }
                      : { backgroundColor: "var(--color-light-gray)" }
                  }
                >
                  <input
                    type="file"
                    accept="image/*"
                    id="image"
                    {...register("image")}
                    ref={imageInput}
                    onChange={handleImageChange}
                  />
                  <ImgUploadBtn type="button" onClick={handleImage} />
                </div>
              </ImageWrapper>

              <InputWrapper>
                <label htmlFor="product_name">상품명</label>
                <Input
                  type="text"
                  id="product_name"
                  maxLength="20"
                  isError={errors.product_name}
                  {...register("product_name")}
                  onChange={handleInputChange}
                />
                <CharacterSpan>{inputText.length} / 20</CharacterSpan>

                <label htmlFor="price">판매가</label>
                <Input
                  type="number"
                  id="price"
                  isError={errors.price}
                  {...register("price", {
                    pattern: /^[1-9]\d*$/,
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
                    pattern: /^[0-9]\d*$/,
                  })}
                />
                <UnitSpan isError={errors.shipping_fee}>원</UnitSpan>

                <label htmlFor="stock">재고</label>
                <Input
                  type="number"
                  id="stock"
                  isError={errors.stock}
                  {...register("stock", {
                    pattern: /^[1-9]\d*$/,
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
                {...register("product_info")}
              />
            </DetailWrapper>
          </Form>
        </Container>

        <ButtonContainer>
          <CancelBtn onClick={() => navigate(-1)}>취소</CancelBtn>
          <SaveBtn disabled={!isValid || !uploadImage} onClick={onSubmit}>
            저장
          </SaveBtn>
        </ButtonContainer>
      </Section>
    </>
  );
}
