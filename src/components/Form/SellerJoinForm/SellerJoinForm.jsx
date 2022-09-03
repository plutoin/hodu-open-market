import styled from "styled-components";

const SellerCodeLabel = styled.label`
  margin-top: 50px;
`;

export default function BuyerJoinForm() {
  return (
    <>
      <SellerCodeLabel htmlFor="sellerCode">사업자 등록번호</SellerCodeLabel>
      <input id="sellerCode" type="text" />
      <button className="check">인증</button>

      <label htmlFor="storeName">스토어 이름</label>
      <input id="storeName" type="text" />
    </>
  );
}
