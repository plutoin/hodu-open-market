import { Container, InfoContainer, SocialLinkContainer } from "./footer.style";

import InstagramIcon from "../../assets/icon-insta.svg";
import FacebookIcon from "../../assets/icon-fb.svg";
import YoutubeIcon from "../../assets/icon-yt.svg";

export default function Footer() {
  return (
    <Container>
      <InfoContainer>
        <a href="#/">호두샵 소개</a>
        <a href="#/">이용약관</a>
        <a href="#/">
          <strong>개인정보처리방침</strong>
        </a>
        <a href="#/">전자금융거래약관</a>
        <a href="#/">청소년보호정책</a>
        <a href="#/">제휴문의</a>
        <SocialLinkContainer>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreffer noreferrer"
          >
            <img src={InstagramIcon} alt="인스타그램" />
          </a>
          <a
            href="https://ko-kr.facebook.com/"
            target="_blank"
            rel="noreffer noreferrer"
          >
            <img src={FacebookIcon} alt="페이스북" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreffer noreferrer"
          >
            <img src={YoutubeIcon} alt="유튜브" />
          </a>
        </SocialLinkContainer>
      </InfoContainer>
      <address>
        <strong>(주)HODU SHOP</strong> <br />
        제주특별자치도 제주시 동광고 137 제주코딩베이스캠프 <br />
        사업자 번호 : 000-0000-0000 | 통신판매업 <br />
        대표 : 김호두
      </address>
    </Container>
  );
}
