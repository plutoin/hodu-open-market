import styled from "styled-components";

import Image_Icon from "../../assets/icon-img.png";

export const Section = styled.section`
  width: 1920px;
  padding: 44px 100px;
  box-sizing: border-box;
  > h1 {
    margin-bottom: 42px;
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 80px;
`;

export const TextBox = styled.div`
  > p {
    color: var(--color-red);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  > div {
    width: 320px;
    margin-top: 10px;
    padding: 20px;
    background: #ffefe8;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    box-sizing: border-box;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 1320px;
  flex-direction: column;
  box-sizing: border-box;
  label,
  p {
    display: block;
    margin-bottom: 10px;
    color: var(--color-deep-gray);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
  input {
    padding: 16px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    box-sizing: border-box;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const TopSection = styled.div`
  display: flex;
  gap: 40px;
`;

export const Input = styled.input`
  width: 220px;
  margin-bottom: 16px;
  border: ${(props) =>
    props.isError
      ? "1px solid var(--color-red)"
      : "1px solid var(--color-light-gray)"};
`;

export const ShippingBtn = styled.button`
  width: 220px;
  margin-bottom: 16px;
  margin-right: 10px;
  padding: 16px 0;
  border: ${(props) =>
    props.isSelected ? "none" : "1px solid var(--color-light-gray)"};
  border-radius: 5px;
  color: ${(props) => (props.isSelected ? "white" : "var(--color-deep-gray)")};
  background-color: ${(props) =>
    props.isSelected ? "var(--color-green)" : "white"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  box-sizing: border-box;
`;

export const ImageWrapper = styled.div`
  > div {
    width: 454px;
    height: 454px;
    > img {
      width: 454px;
      height: 454px;
    }
  }
  input {
    display: none;
  }
`;

export const ImgUploadBtn = styled.button`
  position: relative;
  top: 202px;
  left: 202px;
  width: 50px;
  height: 50px;
  border: none;
  background: url(${Image_Icon}) no-repeat center / contain;
`;

export const InputWrapper = styled.div`
  width: 100%;
  #product_name {
    width: 100%;
  }
`;

export const CharacterSpan = styled.span`
  display: inline-block;
  width: 46px;
  margin-left: -67px;
  color: var(--color-light-gray);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: right;
  box-sizing: border-box;
`;

export const UnitSpan = styled.span`
  display: inline-block;
  width: 54px;
  margin-left: -54px;
  padding: 16px;
  border-radius: 0px 5px 5px 0;
  background-color: var(
    ${(props) => (props.isError ? "--color-red" : "--color-light-gray")}
  );
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  box-sizing: border-box;
`;

export const DetailWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 700px;
  padding: 16px;
  border: ${(props) =>
    props.isError
      ? "1px solid var(--color-red)"
      : "1px solid var(--color-light-gray)"};
  border-radius: 5px;
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
  box-sizing: border-box;
  resize: none;
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  float: right;
  margin-top: 50px;
  margin-bottom: 136px;
  > button {
    width: 200px;
    padding: 19px 0;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }
`;

export const CancelBtn = styled.button`
  border: 1px solid var(--color-light-gray);
  background-color: white;
`;

export const SaveBtn = styled.button`
  border: none;
  color: white;
  background-color: var(--color-green);
  :disabled {
    background-color: var(--color-light-gray);
  }
`;
