import styled from "styled-components";

import LogoImage from "../../assets/Logo-hodu.png";

export const Container = styled.section`
  text-align: center;
  > a {
    line-height: 20px;
    color: #333;
    :not(:last-child)::after {
      content: "|";
      margin: 0 14px;
    }
  }
`;

export const Tab = styled.li`
  display: inline-block;
  width: 50%;
  padding: 20px 0px;
  border: 1px solid var(--color-light-gray);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.isSelected === true ? "white" : "#f2f2f2"};
  /* border-bottom: ${(props) => (props.select ? 0 : 1)}; */
  cursor: pointer;
`;

export const LogoBtn = styled.button`
  width: 238px;
  height: 74px;
  margin: 100px 0 70px;
  border: none;
  background-color: transparent;
  background-image: url(${LogoImage});
  background-size: 238px 74px;
  background-repeat: no-repeat;
`;

export const LoginContainer = styled.div`
  width: 550px;
  margin: 0 auto;
  margin-bottom: 30px;
  background: white;
  box-sizing: border-box;
`;

export const LoginForm = styled.form`
  position: relative;
  width: 550px;
  padding: 34px 36px 35px;
  box-sizing: border-box;
  border: 1px solid var(--color-light-gray);
  border-top: none;
  border-radius: 0 0 10px 10px;
  background-color: white;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px 0;
  border: none;
  border-bottom: 1px solid var(--color-light-gray);
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  line-height: 20px;
  color: var(--color-deep-gray);
`;

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 36px;
  padding: 19px 0;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: white;
  background-color: var(--color-green);
`;

export const ErrorMsg = styled.p`
  margin-top: 26px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: var(--color-red);
`;
