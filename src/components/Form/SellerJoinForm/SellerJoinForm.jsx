export default function BuyerJoinForm() {
  return (
    <>
      <label htmlFor="sellerCode">사업자 등록번호</label>
      <input id="sellerCode" type="text" />
      <button className="check">인증</button>

      <label htmlFor="storeName">스토어 이름</label>
      <input id="storeName" type="text" />
    </>
  );
}
