import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export function logout() {
  console.log("로그아웃되었습니다.");
  window.localStorage.setItem("logout", Date.now());
  cookies.remove("refreshToken");
}
