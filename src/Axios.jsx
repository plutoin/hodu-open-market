import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://openmarket.weniv.co.kr/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
