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

## 📁 파일 구조

```
📦 hodu-open-market
├─ public
└── src
    ├── App.jsx
    ├── Axios.jsx
    ├── Cookie.js
    ├── index.js
    ├── assets
    ├── auth
    ├── components
    │   ├── CartBox
    │   │   ├── ItemCard
    │   │   └── TotalPrice
    │   ├── DetailBox
    │   │   ├── ProductDetailBox
    │   │   └── TotalPriceBox
    │   ├── Dropdown
    │   ├── Footer
    │   ├── Header
    │   ├── JoinForm
    │   ├── Loading
    │   ├── Login
    │   ├── Modal
    │   ├── PaymentBox
    │   │   └── PaymentForm
    │   ├── ProductList
    │   ├── QuantityButton
    │   └── Slide
    ├── pages
    │   ├── Cart
    │   ├── Home
    │   ├── Join
    │   ├── NotFound
    │   ├── Payment
    │   ├── ProductDetail
    │   └── SignIn
    ├── redux
    │   ├── action
    │   ├── constants
    │   └── reducer
    └── styles
        ├── app.css
        └── reset.css
```

<br />

<!-- ## 🖥️ 기능
### 1. 계정
- 회원가입
- 로그인
- 로그아웃
### 2. 홈 화면
### 3. 상품 상세
### 4. 장바구니
### 5. 구매 -->
