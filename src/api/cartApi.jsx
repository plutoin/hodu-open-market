import { AxiosInstance } from "../Axios";

export const getCarts = async (token) => {
  try {
    const res = await AxiosInstance.get("cart/", {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const postCarts = async (token, product_id, quantity) => {
  try {
    const res = await AxiosInstance.post(
      "cart/",
      {
        product_id: parseInt(product_id),
        quantity: quantity,
        check: true,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const editQuantity = async (
  token,
  cart_id,
  product_id,
  orderNum,
  active
) => {
  try {
    await AxiosInstance.put(
      `/cart/${cart_id}/`,
      {
        product_id: product_id,
        quantity: orderNum,
        is_active: active,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    window.location.reload();
  } catch (error) {
    return error.response.data;
  }
};

export const deleteItem = async (token, cart_id) => {
  try {
    await AxiosInstance.delete(`/cart/${cart_id}/`, {
      headers: {
        Authorization: token,
      },
    });
    alert("삭제되었습니다.");
    window.location.reload();
  } catch (error) {
    return error.response.data;
  }
};
