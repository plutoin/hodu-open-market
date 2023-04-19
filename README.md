[![Netlify Status](https://api.netlify.com/api/v1/badges/47f8d063-8272-4718-b149-1fad139e1849/deploy-status)](https://app.netlify.com/sites/hoduopenmarket/deploys)

# 🛒 HODU OPEN MARKET

호두 오픈마켓은 판매자와 구매자가 각각 물건을 사고팔 수 있는 서비스입니다.

- [DEMO](https://hoduopenmarket.netlify.app/)

- 계정
  - 구매자
    - ID: marketbuyer
    - PW: buyer00!
  - 판매자
    - ID: marketseller
    - PW: seller00!

<br/>

## ⚙️ 사용 기술

#### [ Front-end ]

<!-- ![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=flat-square&logo=react&logoColor=black&max-width=100%)
![Redux](https://img.shields.io/badge/Redux-%23764ABC.svg?style=flat-square&logo=redux&logoColor=white&max-width=100%)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E)
![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white&max-width=100%)
![styled-components](https://img.shields.io/badge/styled--components-%23DB7093.svg?style=flat-square&logo=styled-components&logoColor=%23F7DF1E) -->

- React
- Redux
- JavaScript
- HTML
- styled-component

#### [ Back-end ]

- 제공된 API 사용

#### [ Design ]

<!-- ![Figma](https://img.shields.io/badge/Figma-%23F24E1E.svg?style=flat-square&logo=figma&logoColor=white) -->

- Figma

#### [ Version ]

```json
  "react": "^18.2.0",
  "axios": "^1.1.3",
  "react-redux": "^8.0.4",
  "react-router-dom": "^6.9.0",
  "react-hook-form": "^7.39.3",
  "react-cookie": "^4.1.1",
  "react-daum-postcode": "^3.1.1",
  "react-loading-skeleton": "^3.1.1",
  "react-slick": "^0.29.0",
  "react-spinners": "^0.13.8",
  "styled-components": "^5.3.5",
```

<br/>

## 🖥️ 기능
### - [ 페이지별 기능 설명](https://github.com/plutoin/open-market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B3%84-%EA%B8%B0%EB%8A%A5)

|구매자 로그인|구매자 회원가입|
|:--:|:--:|
|![구매자 - 로그인](https://user-images.githubusercontent.com/66389585/232848803-cb94484b-9289-402f-84a3-4b735ab79d47.gif)|![구매자 - 회원가입](https://user-images.githubusercontent.com/66389585/232848807-2c7ad801-8c9d-4620-8620-3e309586eaf3.gif)|
|**판매자 로그인**|**판매자 회원가입**|
|![판매자 - 로그인](https://user-images.githubusercontent.com/66389585/232848861-a0097c4e-71de-4e71-bf67-f0c6cbab0f11.gif)|![판매자 - 회원가입](https://user-images.githubusercontent.com/66389585/232848874-d7bee6ba-592b-400c-abb6-29af86ee0b4d.gif)|
|**로그아웃**|**검색**|
|![로그아웃](https://user-images.githubusercontent.com/66389585/232848809-b1675780-c972-4972-ada1-bf9d3d2357d6.gif)|![검색](https://user-images.githubusercontent.com/66389585/232848789-68d6ce55-4442-46fa-82ec-d3cb6dd001b8.gif)|
|**비로그인 시**|**구매자 로그인 시**|
|![비로그인 - 상품](https://user-images.githubusercontent.com/66389585/232848813-bb41eab2-fccb-44fe-8b0b-8a6fd0ad030e.gif)|![구매자 - 상품 상세](https://user-images.githubusercontent.com/66389585/232848832-3a8f428c-4737-4733-8dc5-6ab383bc4b21.gif)|
|**판매자 로그인 시**|**장바구니 수량 수정**|
|![판매자 - 상품 상세](https://user-images.githubusercontent.com/66389585/232848867-6ad2a01f-6e2d-42d5-bfc1-d5936e6770fa.gif)|![장바구니](https://user-images.githubusercontent.com/66389585/232845972-65067910-018f-4043-9308-efe157899064.gif)|
|**장바구니 수량 누적**|**장바구니 아이템 삭제**|
|![장바구니 - 수량 누적](https://user-images.githubusercontent.com/66389585/232845959-494d654f-25a8-4b6c-9668-fb7a1079550a.gif)|![장바구니 - 상품 삭제](https://user-images.githubusercontent.com/66389585/232845947-1314b7af-7dae-49e4-b4fc-de3bab47ce69.gif)|  
|**전체 주문**|**개별 주문**|
|![장바구니 - 전체 주문](https://user-images.githubusercontent.com/66389585/232845967-ea415954-d7e7-4f1a-a04f-37e77330dad5.gif)|![장바구니 - 하나만 주문](https://user-images.githubusercontent.com/66389585/232845970-0fd58681-b24e-43e7-8f3a-55002867b56d.gif)|
|**구매하기**|**판매 상품 업로드**|
|![주문하기](https://user-images.githubusercontent.com/66389585/232848853-184aa5c7-fdac-4ec7-96e2-cd40136a5b60.gif)|![판매자 - 상품 업로드](https://user-images.githubusercontent.com/66389585/232848871-5847c294-2555-4d3b-9417-e3662405e603.gif)|
|**판매 상품 수정**|**판매 상품 삭제**|
|![판매자 - 상품 수정](https://user-images.githubusercontent.com/66389585/232848870-7e7b4e0a-4830-451a-ab7f-b36f02493999.gif)|![판매자 - 상품 삭제](https://user-images.githubusercontent.com/66389585/232848865-3a3eeede-2644-49dc-b5d9-999b9bfa7e33.gif)|

<br/>

## 📁 파일 구조

```
📦 hodu-open-market
├─ public
└─ src
   ├─ App.jsx
   ├─ Axios.jsx
   ├─ Cookie.js
   ├─ index.js
   ├─ api
   ├─ assets
   ├─ auth
   ├─ components
   │  ├─ CartBox
   │  ├─ DetailBox
   │  ├─ Dropdown
   │  ├─ Footer
   │  ├─ Header
   │  ├─ JoinForm
   │  ├─ Loading
   │  ├─ Login
   │  ├─ Modal
   │  ├─ PaymentBox
   │  ├─ ProductList
   │  ├─ QuantityButton
   │  ├─ SellerItem
   │  └─ Slide
   ├─ pages
   │  ├─ Cart
   │  ├─ Home
   │  ├─ Join
   │  ├─ NotFound
   │  ├─ Payment
   │  ├─ ProductDetail
   │  ├─ ProductUpload
   │  ├─ Search
   │  ├─ SellerCenter
   │  └─ SignIn
   ├─ redux
   │  ├─ action
   │  ├─ constants
   │  └─ reducer
   └─ styles
      ├─ app.css
      └─ reset.css
```

<br />
