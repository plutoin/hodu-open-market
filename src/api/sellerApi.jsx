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
        products_info: data.products_info,
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
