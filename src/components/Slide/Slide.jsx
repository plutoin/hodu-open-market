import React, { useRef } from "react";
import { SliderBox, PreDiv, NextDiv } from "./slide.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as Prev } from "../../assets/icon-swiper-1.svg";
import { ReactComponent as Next } from "../../assets/icon-swiper-2.svg";

import slide_hodu from "../../assets/image/001.png";
import slide_spring from "../../assets/image/002.png";
import slide_pet from "../../assets/image/003.png";
import slide_coupon from "../../assets/image/004.png";
import slide_card from "../../assets/image/005.png";

export default function Slide() {
  const images = useRef([
    { src: slide_hodu, alt: "호두 마켓" },
    { src: slide_spring, alt: "봄 세일" },
    { src: slide_pet, alt: "반려동물 용품 세일" },
    { src: slide_coupon, alt: "쿠폰 증정" },
    { src: slide_card, alt: "카드 이벤트" },
  ]);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <PreDiv>
        <Prev />
      </PreDiv>
    ),
    nextArrow: (
      <NextDiv>
        <Next />
      </NextDiv>
    ),
  };

  return (
    <SliderBox {...settings}>
      {images.current.map((img, i) => (
        <img key={i} src={img.src} alt={img.alt} />
      ))}
    </SliderBox>
  );
}
