import React from "react";
import styled from "styled-components";

import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <Container>
      <LoadingBg>
        <BeatLoader
          color="var(--color-green)"
          loading
          margin={3}
          size={18}
          speedMultiplier={1}
        />
      </LoadingBg>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 150;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 1;
`;

const LoadingBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 160;
  transform: translate(-50%, -50%);
`;
