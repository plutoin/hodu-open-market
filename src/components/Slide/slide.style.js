import styled from "styled-components";
import leftArrow from "../../assets/icon-swiper-1.svg";
import rightArrow from "../../assets/icon-swiper-2.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 94px;
  height: 500px;
  background-color: var(--color-bg);
  box-sizing: border-box;
`;

export const SwipeButton = styled.button`
  width: 60px;
  height: 124px;
  border: none;
  background-color: transparent;
  :first-child {
    background-image: url(${leftArrow});
    background-size: contain;
    background-repeat: no-repeat;
  }
  :last-child {
    background-image: url(${rightArrow});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
