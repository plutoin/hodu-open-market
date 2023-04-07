import { AxiosInstance } from "../Axios";

export const getProduct = async (token) => {
  try {
    const res = await AxiosInstance.get("/seller/", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const postProduct = async (
  token,
  product_name,
  image,
  price,
  shipping_method,
  shipping_fee,
  stock,
  products_info
) => {
  try {
    const res = await AxiosInstance.post(
      "products/",
      {
        product_name: product_name,
        image: image,
        price: price,
        shipping_method: shipping_method,
        shipping_fee: shipping_fee,
        stock: stock,
        products_info: products_info,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  } catch (error) {
    return error.response.data;
  }
};

export const editProduct = async (
  token,
  product_id,
  product_name,
  price,
  shipping_method,
  shipping_fee,
  stock,
  products_info
) => {
  try {
    const res = await AxiosInstance.patch(
      `products/${product_id}/`,
      {
        product_name: product_name,
        price: price,
        shipping_method: shipping_method,
        shipping_fee: shipping_fee,
        stock: stock,
        products_info: products_info,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  } catch (error) {
    return error.response.data;
  }
};
