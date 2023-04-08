import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetail } from "../../api/productApi";
import { getProducts } from "../../redux/action/Actions";

import Header from "../../components/Header/Header";
import ProductDetailBox from "../../components/DetailBox/ProductDetailBox/ProductDetailBox";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { product_id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetail(product_id).then((res) => {
      dispatch(getProducts(res));
      setLoading(false);
    });

    setLoading(true);
  }, [product_id, dispatch]);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <ProductDetailBox productId={product_id} loading={loading} />
      <Footer />
    </>
  );
}
