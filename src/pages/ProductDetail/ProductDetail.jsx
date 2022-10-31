import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import AxiosInstance from "../../Axios";
import { getProducts } from "../../redux/action/Actions";

import Header from "../../components/Header/Header";
import ProductDetailBox from "../../components/ProductDetailBox/ProductDetailBox";
import Footer from "../../components/Footer/Footer";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { product_id } = useParams();

  const productDetails = async () => {
    try {
      const res = await AxiosInstance.get(`products/${product_id}`);
      dispatch(getProducts(res.data));
    } catch {
      console.log("ERROR!");
    }
  };

  useEffect(() => {
    productDetails(product_id);
  }, [product_id]);

  return (
    <>
      <Header />
      <ProductDetailBox />
      <Footer />
    </>
  );
}
