import { AxiosInstance } from "../Axios";

export const getProduct = async (token) => {
  try {
    const res = await AxiosInstance.get("/seller/", {
      headers: {
        Authorization: token,
      },
    });
    return res.data.results;
  } catch (error) {
    return error.response.data;
  }
};

export const postProduct = async (token, data) => {
  try {
    const res = await AxiosInstance.post(
      "products/",
      {
        product_name: data.product_name,
        image: data.image,
        price: data.price,
        shipping_method: data.shipping_method,
        shipping_fee: data.shipping_fee,
        stock: data.stock,
        product_info: data.product_info,
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("상품이 정상적으로 등록되었습니다.");
    return res;
  } catch (error) {
    return error.response.data;
  }
};

export const editProduct = async (token, data) => {
  try {
    const res = await AxiosInstance.patch(
      `products/${data.product_id}/`,
      {
        product_name: data.product_name,
        price: data.price,
        shipping_method: data.shipping_method,
        shipping_fee: data.shipping_fee,
        stock: data.stock,
        products_info: data.products_info,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    alert("상품이 정상적으로 수정되었습니다.");
    return res;
  } catch (error) {
    return error.response.data;
  }
};
