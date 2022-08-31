import {
  JoinContainer,
  JoinForm,
  JoinButton,
  CheckBoxContainer
} from "./buyerJoinForm.style";

import SellerJoinForm from "../SellerJoinForm/SellerJoinForm";

export default function BuyerJoinForm() {
  return (
    <JoinContainer>
      <button className="joinTab">구매회원가입</button>
      <button className="joinTab">판매회원가입</button>
      <JoinForm>
        <label htmlFor="userId">아이디</label>
        <input id="userId" type="id" />
        <button className="check">중복확인</button>

        <label htmlFor="userPW">비밀번호</label>
        <input id="userPW" type="password" />

        <label htmlFor="userPWCheck">비밀번호 재확인</label>
        <input id="userPWCheck" type="password" />

        <label htmlFor="userName">이름</label>
        <input id="userName" type="text" />

        <label htmlFor="userNumber">휴대폰번호</label>
        <select id="phone" className="phone">
          <option>010</option>
          <option>011</option>
          <option>016</option>
          <option>017</option>
          <option>070</option>
        </select>
        <input type="text" title="전화번호 중간자리" className="phone" />
        <input type="text" title="전화번호 끝자리" className="phone" />

        <label htmlFor="email">이메일</label>
        <input id="email" type="text" />
        <span className="at">@</span>
        <input id="email" type="text" />

        <SellerJoinForm />
      </JoinForm>

      <CheckBoxContainer>
        <input id="check" type="checkbox" />
        <label htmlFor="check"></label>
        <span>
          호두샵의 <strong>이용약관</strong> 및{" "}
          <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고 동의합니다.
        </span>
      </CheckBoxContainer>

      <JoinButton>가입하기</JoinButton>
    </JoinContainer>
  );
}
