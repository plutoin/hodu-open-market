import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { AxiosInstance } from "../../Axios";
import { getProducts } from "../../redux/action/Actions";

import Header from "../../components/Header/Header";
import ProductDetailBox from "../../components/DetailBox/ProductDetailBox/ProductDetailBox";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import SkeletonDetail from "../../components/DetailBox/ProductDetailBox/SkeletonDetail";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { product_id } = useParams();

  const [loading, setLoading] = useState(true);

  const productDetails = async () => {
    try {
      const res = await AxiosInstance.get(`products/${product_id}`);
      const data = res.data;
      dispatch(getProducts(data));
      setLoading(false);
    } catch {
      console.log("ERROR!");
    }
  };

  useEffect(() => {
    productDetails(product_id);
    setLoading(true);
  }, [product_id]);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <ProductDetailBox productId={product_id} loading={loading} />
      <Footer />
    </>
  );
}
