import { AxiosInstance } from "../Axios";

export const getData = async () => {
  try {
    const res = await AxiosInstance.get("products/");
    return res.data.results;
  } catch (error) {
    return error.response;
  }
};

export const getDetail = async (product_id) => {
  try {
    const res = await AxiosInstance.get(`products/${product_id}/`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export const getSearchResult = async (입력값) => {
  try {
    const res = await AxiosInstance.get(`/products/?search=${입력값}`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};
