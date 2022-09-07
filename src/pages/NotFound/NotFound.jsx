import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Div, MainButton, PrevButton } from "./NotFound.style";

import Icon from "../../assets/icon-404.png";

export default function NotFound() {
  const history = useHistory();

  return (
    <Container>
      <img src={Icon} alt="404 아이콘" />
      <Div>
        <strong>페이지를 찾을 수 없습니다.</strong>
        <p>
          페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. <br />웹 주소가
          올바른지 확인해 주세요.
        </p>
        <MainButton onClick={() => history.push("/")}>메인으로</MainButton>
        <PrevButton onClick={() => history.goBack()}>이전 페이지</PrevButton>
      </Div>
    </Container>
  );
}
