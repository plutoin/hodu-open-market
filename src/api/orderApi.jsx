import { AxiosInstance } from "../Axios";

export const getOrder = async (token) => {
  try {
    const res = await AxiosInstance.post("order/", {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const postOrder = async (token, data) => {
  try {
    const res = await AxiosInstance.post("order/", data, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
