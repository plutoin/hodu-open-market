import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://openmarket.weniv.co.kr/",
  headers: {
    "Content-Type": "application/json",
  },
});
